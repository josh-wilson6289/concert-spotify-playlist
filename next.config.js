// /** @type {import('next').NextConfig} */
// const nextConfig = {
//   reactStrictMode: true,
// }

const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  async rewrites() {
    return [
      {
      source: "/api/spotify",
      destination: "http://localhost:3001/api/spotify"
      },
    ]
  }
}
module.exports = nextConfig
