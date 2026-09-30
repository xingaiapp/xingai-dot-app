import type { Metadata } from "next";
import { teamDescription, teamTitle } from "../../data/team";
import { parseRoutingLocale, publicUrl } from "../../lib/locale-routing";
import { localizedOpenGraph, pageAlternates } from "../../lib/localized-seo";
import { formatPageTitle, ogImageMeta, siteUrl } from "../../lib/site-seo";

const path = "/team";

type Props = { children: React.ReactNode; params: Promise<{ locale: string }> };

function teamOg(locale: ReturnType<typeof parseRoutingLocale>) {
  const alt =
    locale === "zh"
      ? "XingAI 团队：二当家、至尊宝、牛夫人、小甜甜"
      : locale === "ko"
        ? "XingAI 팀: Second Master, Joker, Lady Bull, Sweetie"
        : "The XingAI team: Second Master, Joker, Lady Bull and Sweetie";
  return ogImageMeta("/team-og.jpg", alt);
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale: raw } = await params;
  const locale = parseRoutingLocale(raw);
  const title = teamTitle(locale);
  const description = teamDescription(locale);
  const og = teamOg(locale);

  return {
    title: formatPageTitle(title),
    description,
    alternates: pageAlternates(locale, path),
    openGraph: localizedOpenGraph(locale, path, title, description, og),
    twitter: {
      card: "summary_large_image",
      title: formatPageTitle(title),
      description,
      images: [og.url],
    },
  };
}

export default async function TeamLayout({ children, params }: Props) {
  const { locale: raw } = await params;
  const locale = parseRoutingLocale(raw);
  const pageUrl = publicUrl(locale, path);

  // Only the co-founders are marked up as Person. The agent roles are characters,
  // so they stay out of structured data.
  const teamJsonLd = {
    "@context": "https://schema.org",
    "@type": "AboutPage",
    "@id": `${pageUrl}#webpage`,
    url: pageUrl,
    name: teamTitle(locale),
    description: teamDescription(locale),
    primaryImageOfPage: teamOg(locale).url,
    isPartOf: { "@id": `${siteUrl}/#website` },
    about: {
      "@type": "Organization",
      name: "XingAI",
      url: siteUrl,
      founder: [
        { "@type": "Person", name: "Xing", sameAs: "https://www.linkedin.com/in/xingaiapp/" },
        { "@type": "Person", name: "Allen", sameAs: "https://www.linkedin.com/in/uwspstar/" },
      ],
    },
    inLanguage: locale === "zh" ? "zh-CN" : locale === "ko" ? "ko" : "en",
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(teamJsonLd) }}
      />
      {children}
    </>
  );
}
