/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: ['avatars.githubusercontent.com'], // Add any other image domains you need
  },
  // Enable static optimization for pages that can be statically generated
  experimental: {
    optimizeCss: true,
  },
}

module.exports = nextConfig 