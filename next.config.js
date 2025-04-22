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
  experimental: {
    outputFileTracingIncludes: {
      '/**': ['./public/uploads/**/*'],
    },
  }
}

module.exports = nextConfig
