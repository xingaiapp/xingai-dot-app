import type { Metadata } from "next";
import { getIndexableApps } from "../../data/apps";
import { parseRoutingLocale, publicUrl } from "../../lib/locale-routing";
import {
  localizedOpenGraph,
  pageAlternates,
  storyOg,
} from "../../lib/localized-seo";
import { formatPageTitle, siteUrl } from "../../lib/site-seo";

const path = "/story";

type Props = { children: React.ReactNode; params: Promise<{ locale: string }> };

function storyTitle(locale: ReturnType<typeof parseRoutingLocale>) {
  if (locale === "zh") return "XingAI 如何运转";
  if (locale === "ko") return "XingAI의 작동 방식";
  return "How XingAI works";
}

function storyDescription(locale: ReturnType<typeof parseRoutingLocale>) {
  if (locale === "zh") {
    return "XingAI 是把想法变成持续运转的 AI 产品的系统：点子库保存记忆，编排器与智能体（规划中）推进工作，日常、学习、投资和调研应用是产出，证据、增长和运维工具负责信任与反馈。";
  }
  if (locale === "ko") {
    return "XingAI는 아이디어를 계속 운영되는 AI 제품으로 바꾸는 시스템입니다. 아이디어 볼트가 기억을, 오케스트레이터와 에이전트(계획됨)가 실행을 맡고, 일상·학습·투자·리서치 앱이 결과물이며, 근거·성장·운영 도구가 신뢰와 피드백을 담당합니다.";
  }
  return "XingAI is a system that turns ideas into continuously operating AI products: an Idea Vault for memory, a planned Orchestrator and agents for execution, apps for everyday life, learning, investing and research, and evidence, growth and ops tools for trust and feedback.";
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale: raw } = await params;
  const locale = parseRoutingLocale(raw);
  const title = storyTitle(locale);
  const description = storyDescription(locale);
  const og = storyOg(locale);

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

export default async function StoryLayout({ children, params }: Props) {
  const { locale: raw } = await params;
  const locale = parseRoutingLocale(raw);
  const pageUrl = publicUrl(locale, path);
  const localizedApps = getIndexableApps(locale);
  const description = storyDescription(locale);
  const og = storyOg(locale);

  const storyJsonLd = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "@id": `${pageUrl}#webpage`,
    url: pageUrl,
    name: storyTitle(locale),
    description,
    primaryImageOfPage: og.url,
    isPartOf: { "@id": `${siteUrl}/#website` },
    about: {
      "@type": "ItemList",
      numberOfItems: localizedApps.length,
      itemListElement: localizedApps.map((app, index) => ({
        "@type": "ListItem",
        position: index + 1,
        name: app.name,
        url: publicUrl(locale, `/apps/${app.slug}`),
      })),
    },
    inLanguage: locale === "zh" ? "zh-CN" : locale === "ko" ? "ko" : "en",
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(storyJsonLd) }}
      />
      {children}
    </>
  );
}
