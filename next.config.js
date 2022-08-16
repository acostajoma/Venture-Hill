/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains : ['project-images-19.s3.amazonaws.com']
  },
  swcMinify: true,
}

module.exports = nextConfig
