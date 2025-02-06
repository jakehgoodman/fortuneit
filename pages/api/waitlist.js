import { google } from 'googleapis';

export default async function handler(req, res) {
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

    // Verify environment variables
    if (!process.env.GOOGLE_SHEET_ID || !process.env.GOOGLE_CLIENT_EMAIL || !process.env.GOOGLE_PRIVATE_KEY) {
      throw new Error('Missing required environment variables');
    }

    const auth = new google.auth.GoogleAuth({
      credentials: {
        client_email: process.env.GOOGLE_CLIENT_EMAIL,
        private_key: process.env.GOOGLE_PRIVATE_KEY.replace(/\\n/g, '\n'),
      },
      scopes: ['https://www.googleapis.com/auth/spreadsheets'],
    });

    const sheets = google.sheets({ version: 'v4', auth });

    await sheets.spreadsheets.values.append({
      spreadsheetId: process.env.GOOGLE_SHEET_ID,
      range: 'A:B',
      valueInputOption: 'USER_ENTERED',
      requestBody: {
        values: [[email, new Date().toISOString()]],
      },
    });

    res.status(200).json({ message: 'Successfully added to waitlist' });
  } catch (error) {
    console.error('Server error:', error);
    res.status(500).json({ 
      error: 'Failed to add to waitlist',
      details: process.env.NODE_ENV === 'development' ? error.message : undefined
    });
  }
} 