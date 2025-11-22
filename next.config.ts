import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "randomuser.me",
        pathname: "/api/portraits/**",
      },
      {
        protocol: "https",
        hostname: "abdsmartstore.com", // ✅ your own domain
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "images.unsplash.com", // ✅ added Unsplash
        pathname: "/**",
      },
    ],
  },
};

export default nextConfig;
