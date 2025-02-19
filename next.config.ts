import type { NextConfig } from "next";
import path from "path";
import { defaultLocale } from "yup";

const nextConfig: NextConfig = {
  i18n: {
    locales: ["en", "fr"],
    defaultLocale: "en",
  },
  output: "standalone",
  reactStrictMode: true,
  images: {
    domains: ["res.cloudinary.com"],
  },

  async redirects() {
    return [
      {
        source: "/",
        destination: "/pages/home",
        permanent: false,
      },
    ];
  },

  webpack: (config) => {
    config.resolve.alias["@"] = path.resolve(__dirname, "src");
    return config;
  },
  /* config options here */
};
export default nextConfig;
