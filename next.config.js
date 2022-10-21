/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  // add images keys here
  images: {
    // supply an array of trusted image domains )no http:// of https://)
    domains: ['placekitten.com']
  }
}

module.exports = nextConfig
