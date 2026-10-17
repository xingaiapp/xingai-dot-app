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

// Report-only until the console is clean on every page type: next/font, Vercel Analytics and
// the inline theme/JSON-LD scripts need 'unsafe-inline' on a statically rendered site, so this
// policy blocks third-party scripts and framing, not inline injection.
const contentSecurityPolicyReportOnly = [
  "default-src 'self'",
  "script-src 'self' 'unsafe-inline' https://va.vercel-scripts.com",
  "style-src 'self' 'unsafe-inline'",
  "img-src 'self' data: blob: https:",
  "font-src 'self' data:",
  "connect-src 'self' https://vitals.vercel-insights.com https://va.vercel-scripts.com",
  "frame-src 'self' https://www.youtube-nocookie.com https://www.youtube.com",
  "media-src 'self'",
  "frame-ancestors 'self'",
  "base-uri 'self'",
  "form-action 'self'",
  "object-src 'none'",
].join("; ");

const nextConfig: NextConfig = {
  async headers() {
    return [
      {
        source: "/:path*",
        headers: [
          ...securityHeaders,
          { key: "Content-Security-Policy-Report-Only", value: contentSecurityPolicyReportOnly },
        ],
      },
    ];
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
