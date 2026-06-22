import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    formats: ["image/avif", "image/webp"],
  },
  async redirects() {
    return [
      {
        source: "/conserto-samsung-sorocaba",
        destination: "/conserto-iphone-sorocaba",
        permanent: true,
      },
      {
        source: "/conserto-motorola-sorocaba",
        destination: "/conserto-iphone-sorocaba",
        permanent: true,
      },
      {
        source: "/conserto-xiaomi-sorocaba",
        destination: "/conserto-iphone-sorocaba",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
