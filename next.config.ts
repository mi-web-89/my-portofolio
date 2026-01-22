import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [new URL('https://tailwindcss.com/plus-assets/img/')],
  },
};

export default nextConfig;
