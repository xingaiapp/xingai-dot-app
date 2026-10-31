import type { Metadata } from "next";
import { agentTeamDescription, agentTeamTitle } from "../../data/agent-team";
import { parseRoutingLocale, publicUrl } from "../../lib/locale-routing";
import { localizedOpenGraph, pageAlternates } from "../../lib/localized-seo";
import { formatPageTitle, ogImageMeta, siteUrl } from "../../lib/site-seo";

const path = "/agent-team";

type Props = { children: React.ReactNode; params: Promise<{ locale: string }> };

function agentTeamOg(locale: ReturnType<typeof parseRoutingLocale>) {
  const alt =
    locale === "zh"
      ? "XingAI 工程 agent 團隊結構圖：一個調度員、五個組、十五個 agent"
      : locale === "ko"
        ? "XingAI 엔지니어링 에이전트 팀 구조도: 디스패처 1명, 그룹 5개, 에이전트 15명"
        : "XingAI engineering agent team chart: one dispatcher, five groups, fifteen agents";
  return ogImageMeta("/agent-team-og.png", alt);
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale: raw } = await params;
  const locale = parseRoutingLocale(raw);
  const title = agentTeamTitle(locale);
  const description = agentTeamDescription(locale);
  const og = agentTeamOg(locale);

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

export default async function AgentTeamLayout({ children, params }: Props) {
  const { locale: raw } = await params;
  const locale = parseRoutingLocale(raw);
  const pageUrl = publicUrl(locale, path);

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "AboutPage",
    "@id": `${pageUrl}#webpage`,
    url: pageUrl,
    name: agentTeamTitle(locale),
    description: agentTeamDescription(locale),
    primaryImageOfPage: agentTeamOg(locale).url,
    isPartOf: { "@id": `${siteUrl}/#website` },
    about: { "@type": "Organization", name: "XingAI", url: siteUrl },
    inLanguage: locale === "zh" ? "zh-TW" : locale === "ko" ? "ko" : "en",
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      {children}
    </>
  );
}
