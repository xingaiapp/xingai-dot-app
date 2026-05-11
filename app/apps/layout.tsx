import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "AI Products",
  description:
    "Explore XingAI's AI decision systems — Meal Coach, Cook AI, Outfit AI, Routine AI, Parent AI, Travel AI, and Investment Assistant.",
  openGraph: {
    title: "XingAI Products — AI Decision Systems",
    description:
      "7 focused AI products for everyday decisions: eating, cooking, style, habits, parenting, travel, and investing.",
  },
};

export default function AppsLayout({ children }: { children: React.ReactNode }) {
  return children;
}
