import type { Metadata } from "next";
import Image from "next/image";

export const metadata: Metadata = {
  title: { absolute: "XingAI — When in doubt, ask XingAI." },
  description:
    "All of XingAI in one link: Cook — never wonder what's for dinner. Travel — where dreams begin. Invest — research, not advice.",
  robots: { index: false, follow: true },
};

const destinations = [
  {
    emoji: "🍳",
    name: "XingAI Cook",
    tagline: "Never wonder what's for dinner",
    href: "https://cook.xingai.app",
  },
  {
    emoji: "✈️",
    name: "XingAI Travel",
    tagline: "Where dreams begin",
    href: "https://travel.xingai.app",
  },
  {
    emoji: "📈",
    name: "XingAI Invest",
    tagline: "Research, not advice",
    href: "https://invest.xingai.app",
  },
] as const;

export default function GoPage() {
  return (
    <main className="go-main">
      <Image
        src="/xingai-logo.png"
        alt="XingAI"
        width={1373}
        height={368}
        priority
        className="go-logo go-logo--light"
      />
      <Image
        src="/xingai-logo-dark.png"
        alt="XingAI"
        width={1373}
        height={368}
        priority
        className="go-logo go-logo--dark"
        aria-hidden="true"
      />
      <p className="go-slogan">When in doubt, ask XingAI.</p>

      <nav className="go-cards" aria-label="XingAI sites">
        {destinations.map((d) => (
          <a
            key={d.href}
            className="go-card"
            href={d.href}
            aria-label={`${d.name} — ${d.tagline}`}
          >
            <span className="go-card-emoji" aria-hidden="true">
              {d.emoji}
            </span>
            <span className="go-card-text">
              <span className="go-card-name">{d.name}</span>
              <span className="go-card-tag">{d.tagline}</span>
            </span>
            <span className="go-card-arrow" aria-hidden="true">
              &rarr;
            </span>
          </a>
        ))}
      </nav>
    </main>
  );
}
