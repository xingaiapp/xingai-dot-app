import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async redirects() {
    // Auditors and old links often drop the hyphen (shopradar vs shop-radar).
    return [
      { source: "/apps/shopradar", destination: "/apps/shop-radar", permanent: true },
      { source: "/zh/apps/shopradar", destination: "/zh/apps/shop-radar", permanent: true },
      { source: "/ko/apps/shopradar", destination: "/ko/apps/shop-radar", permanent: true },
    ];
  },
};

export default nextConfig;
