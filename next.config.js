/** @type {import('next').NextConfig} */
const nextConfig = {
  // 多语言支持
  async redirects() {
    return [
      {
        source: '/',
        destination: '/en',
        permanent: true,
      },
    ]
  },
}

module.exports = nextConfig
