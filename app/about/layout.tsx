import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Us",
  description:
    "Meet Xing and Allen — co-founders and AI architects building focused AI decision systems for everyday life at XingAI.",
  openGraph: {
    title: "About XingAI",
    description:
      "Co-founded by Xing and Allen, AI architects. We build AI decision systems for food, health, lifestyle, investing, and more.",
  },
};

export default function AboutLayout({ children }: { children: React.ReactNode }) {
  return children;
}
