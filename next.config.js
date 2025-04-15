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
  output: 'standalone'
}

module.exports = nextConfig
