/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: ['avatars.githubusercontent.com'], // Add any other image domains you need
    unoptimized: false
  },
  // Vercel-specific optimizations
  poweredByHeader: false,
  compress: true
}

module.exports = nextConfig 