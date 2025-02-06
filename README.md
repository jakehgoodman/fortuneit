# Fortune It 🥠

A trendy landing page for Fortune It - a modern fortune cookie brand.

## Setup & Running

### Local Development

1. Clone this repository
2. Navigate to the `fortuneit` directory
3. Create a `.env.local` file with the following variables:
   ```
   GOOGLE_SHEET_ID=your_sheet_id_here
   GOOGLE_CLIENT_EMAIL=your_service_account_email
   GOOGLE_PRIVATE_KEY="your_private_key_here"
   ```
4. Serve the directory using any static file server. For example:

   - Using Python 3: `python -m http.server 3000`
   - Using Node.js: Install `http-server` globally with `npm install -g http-server` then run `http-server`
   - Using PHP: `php -S localhost:3000`

5. Open your browser and visit `http://localhost:3000`

### Google Sheets Setup

1. Create a new Google Sheet
2. Create a Google Cloud Project
3. Enable Google Sheets API
4. Create a Service Account
5. Download the service account key
6. Share your Google Sheet with the service account email
7. Copy the Sheet ID from the URL (the long string between /d/ and /edit)

### Deployment with Vercel

1. Fork this repository
2. Create a new project on [Vercel](https://vercel.com)
3. Import your forked repository
4. Add Environment Variables in Vercel:
   - `GOOGLE_SHEET_ID`
   - `GOOGLE_CLIENT_EMAIL`
   - `GOOGLE_PRIVATE_KEY`
5. Configure the following settings:
   - Framework Preset: Other
   - Root Directory: fortuneit
   - Build Command: (leave empty)
   - Output Directory: .
6. Click Deploy

## Features

- Responsive landing page
- Email waitlist signup with Google Sheets integration
- Interactive animations
- Modern UI with retro elements

## Tech Stack

- React (loaded via CDN)
- TailwindCSS
- Font Awesome
- Custom CSS animations
- Google Sheets API
