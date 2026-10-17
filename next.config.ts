import type { NextConfig } from "next";

// Safe, enforcing baseline. A full script-src CSP needs nonces for the inline
// theme/JSON-LD scripts, so it is a separate change.
const securityHeaders = [
  { key: "X-Content-Type-Options", value: "nosniff" },
  { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
  { key: "Permissions-Policy", value: "camera=(), microphone=(), geolocation=(), payment=()" },
  {
    key: "Content-Security-Policy",
    value: "frame-ancestors 'self'; base-uri 'self'; form-action 'self'; object-src 'none'",
  },
];

const nextConfig: NextConfig = {
  async headers() {
    return [{ source: "/:path*", headers: securityHeaders }];
  },
  async redirects() {
    // Auditors and old links often drop the hyphen (shopradar vs shop-radar).
    const legal = ["privacy", "terms", "disclaimer"].flatMap((page) =>
      ["", "/zh", "/ko"].map((prefix) => ({
        source: `${prefix}/${page}`,
        destination: `${prefix}/legal/${page}`,
        permanent: true,
      })),
    );
    return [
      ...legal,
      { source: "/apps/shopradar", destination: "/apps/shop-radar", permanent: true },
      { source: "/zh/apps/shopradar", destination: "/zh/apps/shop-radar", permanent: true },
      { source: "/ko/apps/shopradar", destination: "/ko/apps/shop-radar", permanent: true },
    ];
  },
};

export default nextConfig;
