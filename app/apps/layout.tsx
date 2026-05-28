import type { Metadata } from "next";
import { defaultDescription, productCount, siteUrl } from "../lib/site-seo";

export const metadata: Metadata = {
  title: "AI Products",
  description: `Explore ${productCount} XingAI decision systems — meal, cook, outfit, routine, SAT, travel, invest, Performance Sim (lab.xingai.app), and T Today (t.xingai.app). Mobile-first · EN/中文/한국어 · light/dark.`,
  alternates: { canonical: `${siteUrl}/apps` },
  openGraph: {
    title: "XingAI Products — AI Decision Systems",
    description: defaultDescription,
    url: `${siteUrl}/apps`,
  },
};

export default function AppsLayout({ children }: { children: React.ReactNode }) {
  return children;
}
