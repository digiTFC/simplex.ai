import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    domains: ['res.cloudinary.com'],
  },

  async redirects() {
    return [
      {
        source: '/',
        destination: '/pages/home',
        permanent: false
      },
    ];
  },
  /* config options here */
};

export default nextConfig;
