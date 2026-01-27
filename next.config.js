/** @type {import('next').NextConfig} */
const nextConfig = {
  async redirects() {
    return [
      {
        source: "/",
        destination: "/home",
        permanent: true,
      },
    ];
  },
  env: {
    API: process.env.NEXT_PUBLIC_API,
  },
};

module.exports = nextConfig;
