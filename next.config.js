/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  async headers() {
    return [
      {
        // Allow CORS for API routes
        source: '/api/:path*',
        headers: [
          { key: 'Content-Type', value: 'application/json' },
          { key: 'Access-Control-Allow-Credentials', value: 'true' },
          { key: 'Access-Control-Allow-Origin', value: '*' },
          { key: 'Access-Control-Allow-Methods', value: 'GET,OPTIONS,PATCH,DELETE,POST,PUT' },
          { key: 'Access-Control-Allow-Headers', value: 'X-CSRF-Token, X-Requested-With, Accept, Accept-Version, Content-Length, Content-MD5, Content-Type, Date, X-Api-Version' },
        ],
      },
    ];
  },
  // Handle static files and API routes
  async rewrites() {
    return [
      // Serve index.html for root path
      {
        source: '/',
        destination: '/index.html',
      },
      // Serve all other static files from public
      {
        source: '/:path*',
        destination: '/:path*',
        has: [
          {
            type: 'header',
            key: 'accept',
            value: '(?!application/json).*'
          }
        ]
      }
    ];
  },
  // Disable Next.js's default handling of / route
  pageExtensions: ['js', 'jsx', 'ts', 'tsx'],
  // Configure webpack for browser compatibility
  webpack: (config, { isServer }) => {
    if (!isServer) {
      config.resolve.fallback = {
        fs: false,
        net: false,
        tls: false,
      }
    }
    return config
  },
  // Enable API routes
  api: {
    bodyParser: true,
    externalResolver: true,
  }
}

module.exports = nextConfig 