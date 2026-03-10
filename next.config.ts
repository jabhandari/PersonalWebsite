import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  basePath: "/PersonalWebsite",
  assetPrefix: "/PersonalWebsite/",
  images: {
    unoptimized: true,
  },
};

export default nextConfig;