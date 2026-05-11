import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact Us",
  description:
    "Get in touch with XingAI — inquiries, custom AI projects, partnerships, and early access requests. Email xing@xingai.app.",
  openGraph: {
    title: "Contact XingAI",
    description:
      "Reach out for custom AI projects, partnerships, or product inquiries. We build AI decision systems for teams and founders.",
  },
};

export default function ContactLayout({ children }: { children: React.ReactNode }) {
  return children;
}
