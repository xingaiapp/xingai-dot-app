import type { Metadata } from "next";
import Image from "next/image";
import { notFound } from "next/navigation";
import AppIcon from "../../components/AppIcon";

/**
 * Business-card landing page (/card) — Xing's printed card carries one QR
 * code that lands here (decision 2026-10-19, ADR-0070). English only,
 * unlisted: no nav, footer, or sitemap links, noindex — same treatment as
 * /adr. It lists the four XingAI products (site + YouTube), the brand
 * channel, Xing's LinkedIn, and the public contact email.
 *
 * COMPANY NAME — PLACEHOLDER: "XingAI LLC" is the expected name from the
 * LLC filing scheduled for 2026-10-23. If the filed name differs, change
 * COMPANY_NAME below — it is the only place the company name appears.
 */
const COMPANY_NAME = "XingAI LLC";

const LINKEDIN_URL = "https://www.linkedin.com/in/xingaiapp";
const CONTACT_EMAIL = "contact@xingai.app";

type Product = {
  id: string;
  name: string;
  line: string;
  icon: string;
  iconDark: string;
  site: string;
  siteHost: string;
  channels: { handle: string; url: string }[];
};

/** Product rows mirror the homepage product cards (HomeProducts) — same
 * names, one-liners, and icon assets — plus each product's YouTube. */
const PRODUCTS: Product[] = [
  {
    id: "invest",
    name: "XingAI Invest",
    line: "AI stock research: daily briefings, watchlists and earnings context. Research, not advice.",
    icon: "/investment-ai-icon.png",
    iconDark: "/investment-ai-icon-dark.png",
    site: "https://invest.xingai.app",
    siteHost: "invest.xingai.app",
    channels: [
      { handle: "@axingstocks", url: "https://www.youtube.com/@axingstocks" },
      { handle: "@xingaiinvest", url: "https://www.youtube.com/@xingaiinvest" },
    ],
  },
  {
    id: "travel",
    name: "XingAI Travel",
    line: "Trips planned around places we have actually been — with a short prayer to open and close the day.",
    icon: "/travel-ai-icon.png",
    iconDark: "/travel-ai-icon-dark.png",
    site: "https://travel.xingai.app",
    siteHost: "travel.xingai.app",
    channels: [
      { handle: "@xingaitravel", url: "https://www.youtube.com/@xingaitravel" },
    ],
  },
  {
    id: "cook",
    name: "XingAI Cook",
    line: "Tell it what is in your fridge. It decides tonight's dinner and walks you through cooking it.",
    icon: "/cook-ai-icon.png",
    iconDark: "/cook-ai-icon-dark.png",
    site: "https://cook.xingai.app",
    siteHost: "cook.xingai.app",
    channels: [
      { handle: "@xingaicook", url: "https://www.youtube.com/@xingaicook" },
    ],
  },
  {
    id: "wear",
    name: "XingAI Wear",
    line: "Upload one photo and get outfits matched to your day, the weather and your style.",
    icon: "/outfit-ai-icon.png",
    iconDark: "/outfit-ai-icon-dark.png",
    site: "https://wear.xingai.app",
    siteHost: "wear.xingai.app",
    channels: [],
  },
];

export function generateStaticParams() {
  return [{ locale: "en" }];
}

export const dynamicParams = false;

const TITLE = `Xing Wang · Founder, ${COMPANY_NAME} · XingAI`;
const DESCRIPTION =
  "The XingAI product family in one place: Invest, Travel, Cook and Wear — each product's website and YouTube channel, plus how to reach Xing Wang, founder of XingAI LLC.";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  if (locale !== "en") notFound();
  return {
    title: TITLE,
    description: DESCRIPTION,
    alternates: { canonical: "/card" },
    robots: { index: false, follow: false, googleBot: { index: false, follow: false } },
  };
}

export default async function CardPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  if (locale !== "en") notFound();

  return (
    <main className="wrap bizcard">
      <section className="bizcard-hero">
        <Image
          src="/xingai-logo-dark.png"
          alt="XingAI"
          width={1373}
          height={368}
          className="bizcard-logo"
          priority
        />
        <h1 className="bizcard-name">Xing Wang</h1>
        <p className="bizcard-role">Founder, {COMPANY_NAME}</p>
        <a
          className="bizcard-linkedin"
          href={LINKEDIN_URL}
          target="_blank"
          rel="noopener noreferrer"
        >
          Connect on LinkedIn <span aria-hidden="true">→</span>
        </a>
      </section>

      <ul className="bizcard-products">
        {PRODUCTS.map((p) => (
          <li key={p.id} className="bizcard-product">
            <div className="bizcard-product-head">
              <AppIcon light={p.icon} dark={p.iconDark} alt="" size={52} />
              <div>
                <h2 className="bizcard-product-name">{p.name}</h2>
                <p className="bizcard-product-line">{p.line}</p>
              </div>
            </div>
            <div className="bizcard-actions">
              <a
                className="bizcard-btn bizcard-btn--site"
                href={p.site}
                target="_blank"
                rel="noopener noreferrer"
              >
                Visit {p.siteHost} <span aria-hidden="true">→</span>
              </a>
              {p.channels.map((c) => (
                <a
                  key={c.handle}
                  className="bizcard-btn bizcard-btn--yt"
                  href={c.url}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  YouTube · {c.handle} <span aria-hidden="true">→</span>
                </a>
              ))}
            </div>
          </li>
        ))}
      </ul>

      <section className="bizcard-brand">
        <Image
          src="/xingai-mark.png"
          alt=""
          width={512}
          height={512}
          className="bizcard-brandmark"
        />
        <div className="bizcard-brand-text">
          <h2 className="bizcard-product-name">XingAI on YouTube</h2>
          <p className="bizcard-product-line">
            The brand channel — watch our AI tools make real decisions.
          </p>
        </div>
        <a
          className="bizcard-btn bizcard-btn--yt bizcard-brand-btn"
          href="https://www.youtube.com/@xingaiapp"
          target="_blank"
          rel="noopener noreferrer"
        >
          YouTube · @xingaiapp <span aria-hidden="true">→</span>
        </a>
      </section>

      <section className="bizcard-contact">
        <h2 className="bizcard-product-name">Contact</h2>
        <a className="bizcard-btn bizcard-btn--site" href={`mailto:${CONTACT_EMAIL}`}>
          {CONTACT_EMAIL}
        </a>
      </section>
    </main>
  );
}
