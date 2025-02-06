/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  // Serve static files from public directory
  async rewrites() {
    return [
      {
        source: '/',
        destination: '/index.html',
      },
      {
        source: '/:path*',
        destination: '/:path*',
      }
    ];
  },
  // Disable Next.js's default handling of / route
  pageExtensions: ['js', 'jsx', 'ts', 'tsx'],
  // Enable serving static files from public
  webpack: (config, { isServer }) => {
    // Fixes npm packages that depend on `fs` module
    if (!isServer) {
      config.resolve.fallback = {
        fs: false,
        net: false,
        tls: false,
      }
    }
    return config
  }
}

module.exports = nextConfig 