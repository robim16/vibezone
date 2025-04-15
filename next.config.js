/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'img.clerk.com',
      }
    ]
  },
  outputFileTracing: true
}

module.exports = nextConfig
