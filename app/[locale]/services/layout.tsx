import type { Metadata } from "next";

const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL?.replace(/\/$/, "") || "https://xingai.app";

export const metadata: Metadata = {
  title: "Services | XingAI",
  description:
    "Work with XingAI: build a custom AI decision system around one recurring decision, get an Agent Security Assessment for MCP servers and tool permissions, or book an engineering practice workshop on ADRs, LLM evaluation and MCP in production.",
  alternates: { canonical: `${siteUrl}/services` },
  openGraph: {
    title: "Services | XingAI",
    description:
      "Custom AI decision systems, Agent Security Assessment and engineering practice workshops. No retainer.",
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
