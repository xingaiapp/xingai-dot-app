import type { Metadata } from "next";

const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL?.replace(/\/$/, "") || "https://xingai.app";

export const metadata: Metadata = {
  title: "About Us | XingAI",
  description:
    "Meet Xing and Allen — co-founders and AI architects building focused AI decision systems for everyday life at XingAI.",
  alternates: { canonical: `${siteUrl}/about` },
  openGraph: {
    title: "About XingAI",
    description:
      "Co-founded by Xing and Allen, AI architects. We build AI decision systems for food, health, lifestyle, investing, and more.",
    url: `${siteUrl}/about`,
  },
};

export default function AboutLayout({ children }: { children: React.ReactNode }) {
  return children;
}
