import { google } from 'googleapis';

export default async function handler(req, res) {
  // Set CORS headers
  res.setHeader('Content-Type', 'application/json');
  
  // Handle preflight requests
  if (req.method === 'OPTIONS') {
    res.status(200).end();
    return;
  }

  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  try {
    const { email } = req.body;

    if (!email) {
      return res.status(400).json({ error: 'Email is required' });
    }

    // Debug environment variables (only in development)
    if (process.env.NODE_ENV === 'development') {
      console.log('Environment variables check:', {
        hasSheetId: !!process.env.GOOGLE_SHEET_ID,
        hasClientEmail: !!process.env.GOOGLE_CLIENT_EMAIL,
        hasPrivateKey: !!process.env.GOOGLE_PRIVATE_KEY,
      });
    }

    // Verify environment variables
    if (!process.env.GOOGLE_SHEET_ID) {
      throw new Error('Missing GOOGLE_SHEET_ID');
    }
    if (!process.env.GOOGLE_CLIENT_EMAIL) {
      throw new Error('Missing GOOGLE_CLIENT_EMAIL');
    }
    if (!process.env.GOOGLE_PRIVATE_KEY) {
      throw new Error('Missing GOOGLE_PRIVATE_KEY');
    }

    // Handle private key formatting
    let privateKey = process.env.GOOGLE_PRIVATE_KEY;
    if (privateKey.startsWith('"') && privateKey.endsWith('"')) {
      privateKey = privateKey.slice(1, -1);
    }
    privateKey = privateKey.replace(/\\n/g, '\n');

    const auth = new google.auth.GoogleAuth({
      credentials: {
        client_email: process.env.GOOGLE_CLIENT_EMAIL,
        private_key: privateKey,
      },
      scopes: ['https://www.googleapis.com/auth/spreadsheets'],
    });

    const sheets = google.sheets({ version: 'v4', auth });

    try {
      await sheets.spreadsheets.values.append({
        spreadsheetId: process.env.GOOGLE_SHEET_ID,
        range: 'A:B',
        valueInputOption: 'USER_ENTERED',
        requestBody: {
          values: [[email, new Date().toISOString()]],
        },
      });
    } catch (sheetsError) {
      console.error('Google Sheets API error:', sheetsError);
      return res.status(500).json({
        error: 'Google Sheets API error',
        message: sheetsError.message
      });
    }

    return res.status(200).json({ message: 'Successfully added to waitlist' });
  } catch (error) {
    console.error('Server error:', error);
    return res.status(500).json({ 
      error: 'Failed to add to waitlist',
      message: error.message,
      details: process.env.NODE_ENV === 'development' ? error.stack : undefined
    });
  }
} 