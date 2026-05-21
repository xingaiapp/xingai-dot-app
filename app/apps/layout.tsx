import type { Metadata } from "next";

const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL?.replace(/\/$/, "") || "https://xingai.app";

export const metadata: Metadata = {
  title: "AI Products",
  description:
    "Explore XingAI's AI decision systems — Meal Coach, Cook AI, Outfit AI, Routine AI, Parent AI, Travel AI, and Investment Assistant.",
  alternates: { canonical: `${siteUrl}/apps` },
  openGraph: {
    title: "XingAI Products — AI Decision Systems",
    description:
      "7 focused AI products for everyday decisions: eating, cooking, style, habits, parenting, travel, and investing.",
    url: `${siteUrl}/apps`,
  },
};

export default function AppsLayout({ children }: { children: React.ReactNode }) {
  return children;
}
