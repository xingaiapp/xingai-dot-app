import type { Metadata } from "next";

const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL?.replace(/\/$/, "") || "https://xingai.app";

export const metadata: Metadata = {
  title: "Services | XingAI",
  description:
    "Fixed-scope help for teams shipping AI agents and LLM features: an Agent Security Assessment for MCP servers and tool permissions, and an engineering practice workshop on ADRs, LLM evaluation and MCP in production.",
  alternates: { canonical: `${siteUrl}/services` },
  openGraph: {
    title: "Services | XingAI",
    description:
      "Agent Security Assessment and engineering practice workshops. Fixed scope, fixed fee, no retainer.",
    url: `${siteUrl}/services`,
    siteName: "XingAI",
    type: "website",
  },
};

export default function ServicesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
