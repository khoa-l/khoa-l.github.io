import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  basePath: "/www",
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
