/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: [
      'www.petz.com.br',
      'avatars.githubusercontent.com'
    ]
  }
}

module.exports = nextConfig
