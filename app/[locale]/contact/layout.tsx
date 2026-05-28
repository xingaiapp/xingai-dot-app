import type { Metadata } from "next";

const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL?.replace(/\/$/, "") || "https://xingai.app";

export const metadata: Metadata = {
  title: "Contact Us",
  description:
    "Get in touch with XingAI — inquiries, custom AI projects, partnerships, and early access requests. Email contact@xingai.app.",
  alternates: { canonical: `${siteUrl}/contact` },
  openGraph: {
    title: "Contact XingAI",
    description:
      "Reach out for custom AI projects, partnerships, or product inquiries. We build AI decision systems for teams and founders.",
    url: `${siteUrl}/contact`,
  },
};

export default function ContactLayout({ children }: { children: React.ReactNode }) {
  return children;
}
