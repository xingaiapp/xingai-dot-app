import type { Metadata } from "next";
import { apps, getLocalizedAppBySlug, isIndexableApp, type AppData } from "../../../data/apps";
import { buildSoftwareApplicationNode, absoluteAsset } from "../../../lib/seo-json-ld";
import { openGraphLocale, parseRoutingLocale, publicUrl } from "../../../lib/locale-routing";
import { pageAlternates } from "../../../lib/localized-seo";
import { siteUrl } from "../../../lib/site-seo";

type Props = { params: Promise<{ locale: string; slug: string }> };

function ogImageForApp(app: AppData): { url: string; alt: string } {
  const shot = app.screenshots[0];
  const path = shot?.srcDark ?? shot?.src;
  return {
    url: path ? absoluteAsset(path) : absoluteAsset("/xingai-logo.png"),
    alt: shot?.alt ?? app.name,
  };
}

type FaqItem = { q: string; a: string };

// Single source of truth for app FAQ: the same items feed the FAQPage
// schema and the visible FAQ section below, so the schema never asks
// questions the body never prints (same fix as story/legal, e822af9).
// Every branch is fully localized: a visible English answer on a zh/ko
// page would break the Traditional-Chinese / Korean page promise.
function buildAppFaqItems(
  app: AppData,
  locale: "en" | "zh" | "ko",
): FaqItem[] {
  if (app.comingSoon) {
    const copy: Record<
      "en" | "zh" | "ko",
      { available: string; how: string; notYet: string; contact: string }
    > = {
      en: {
        available: `Is ${app.name} available now?`,
        how: "How do I get early access?",
        notYet:
          "Not yet. It is on the public roadmap as Coming soon. Request early access via the contact form on xingai.app.",
        contact:
          "Use https://xingai.app/contact with the Early access request topic. We share direction early for collaboration.",
      },
      zh: {
        available: `${app.name}現在可以用了嗎？`,
        how: "如何取得搶先體驗？",
        notYet:
          "還沒有。它已列在公開路線圖上，標示為即將推出。請透過 xingai.app 的聯絡表單申請搶先體驗。",
        contact:
          "請到 https://xingai.app/contact，選擇搶先體驗申請主題。我們會提早分享方向，歡迎合作。",
      },
      ko: {
        available: `${app.name}을(를) 지금 사용할 수 있나요?`,
        how: "사전 체험은 어떻게 신청하나요?",
        notYet:
          "아직 아닙니다. 공개 로드맵에 출시 예정으로 올라 있습니다. xingai.app의 문의 양식을 통해 사전 체험을 신청해 주세요.",
        contact:
          "https://xingai.app/contact에서 사전 체험 신청 주제로 문의해 주세요. 협업을 위해 방향을 일찍 공유합니다.",
      },
    };
    const c = copy[locale];
    const what: Record<"en" | "zh" | "ko", string> = {
      en: `What is ${app.name}?`,
      zh: `${app.name}是什麼？`,
      ko: `${app.name}은(는) 무엇인가요?`,
    };
    return [
      { q: what[locale], a: app.description },
      { q: c.available, a: c.notYet },
      { q: c.how, a: c.contact },
    ];
  }

  if (app.slug === "travel-ai") {
    const travelFaq: Record<"en" | "zh" | "ko", FaqItem[]> = {
      en: [
        {
          q: "How is XingAI Travel AI different from booking sites?",
          a: "Booking sites help you buy travel inventory. XingAI Travel AI helps you decide where to go first by comparing destinations against your constraints, then opens partner search links.",
        },
        {
          q: "Do affiliate links affect recommendations?",
          a: "No. Destination winners, rankings, confidence, and trade-off explanations are based on trip fit. Affiliate links may appear after the decision.",
        },
        {
          q: "Should I verify the plan before booking?",
          a: "Yes. Always verify live prices, entry rules, safety conditions, cancellation policies, and availability before booking.",
        },
      ],
      zh: [
        {
          q: "XingAI Travel AI 和訂票網站有什麼不同？",
          a: "訂票網站幫你買行程。XingAI Travel AI 先幫你決定去哪：先比較目的地，給出一個最適合的選擇與誠實取捨，再開啟合作方搜尋連結去訂關鍵項。",
        },
        {
          q: "合作連結會影響推薦嗎？",
          a: "不會。最適合的選擇、排名、信心度與取捨說明都只看行程是否合適。合作連結只在決定之後出現。",
        },
        {
          q: "預訂前需要自己再核對嗎？",
          a: "需要。預訂前請務必再核對即時價格、入境規則、安全狀況、取消政策與是否還有名額。",
        },
      ],
      ko: [
        {
          q: "XingAI Travel AI는 예약 사이트와 어떻게 다른가요?",
          a: "예약 사이트는 여행 상품을 사게 돕습니다. XingAI Travel AI는 먼저 어디로 갈지 결정합니다. 목적지를 비교해 가장 잘 맞는 선택과 솔직한 트레이드오프를 제시한 뒤, 핵심 항목은 파트너 검색 링크로 이어 줍니다.",
        },
        {
          q: "제휴 링크가 추천에 영향을 주나요?",
          a: "아니요. 가장 잘 맞는 선택, 순위, 신뢰도, 트레이드오프 설명은 모두 여행 적합성에 따라 정해집니다. 제휴 링크는 결정 이후에 나타날 수 있습니다.",
        },
        {
          q: "예약 전에 직접 확인해야 하나요?",
          a: "네. 예약 전에 실시간 가격, 입국 규정, 안전 상황, 취소 정책, 예약 가능 여부를 항상 확인하세요.",
        },
      ],
    };
    return travelFaq[locale];
  }

  // Generic branch only: questions localized, because the answers
  // (description / bestFor / canDo) are localized app data.
  const genericQuestions: Record<"en" | "zh" | "ko", [string, string, string]> = {
    en: [`What is ${app.name}?`, `Who is ${app.name} best for?`, `What can ${app.name} do?`],
    zh: [`${app.name}是什麼？`, `${app.name}最適合誰？`, `${app.name}能做什麼？`],
    ko: [`${app.name}은(는) 무엇인가요?`, `${app.name}은(는) 누구에게 가장 적합한가요?`, `${app.name}은(는) 무엇을 할 수 있나요?`],
  };
  const [qWhat, qWho, qDo] = genericQuestions[locale];
  return [
    { q: qWhat, a: app.description },
    { q: qWho, a: app.bestFor },
    { q: qDo, a: app.canDo },
  ];
}

function buildAppFaq(app: AppData, appUrl: string, locale: "en" | "zh" | "ko") {
  return {
    "@type": "FAQPage",
    "@id": `${appUrl}#faq`,
    mainEntity: buildAppFaqItems(app, locale).map((item) => ({
      "@type": "Question",
      name: item.q,
      acceptedAnswer: { "@type": "Answer", text: item.a },
    })),
  };
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale: raw, slug } = await params;
  const locale = parseRoutingLocale(raw);
  const app = getLocalizedAppBySlug(slug, locale);
  if (!app) return { title: "App not found" };

  const appPath = `/apps/${app.slug}`;
  const appUrl = publicUrl(locale, appPath);
  const image = ogImageForApp(app);

  // Keep the rendered <title> within the ~60-char SERP budget: drop the brand
  // suffix when name + tagline already fill it (tagline stays on the page).
  const fullTitle = `${app.name} — ${app.tagline} | XingAI`;
  const title = fullTitle.length > 60 ? `${app.name} — ${app.tagline}` : fullTitle;
  return {
    title,
    description: app.description,
    keywords: [app.name, app.category, app.tagline, "XingAI", "AI decision systems"],
    robots: isIndexableApp(app) ? undefined : { index: false, follow: false },
    alternates: pageAlternates(locale, appPath),
    openGraph: {
      title: `${app.name} — ${app.tagline} | XingAI`,
      description: app.description,
      url: appUrl,
      type: "website",
      siteName: "XingAI",
      locale: openGraphLocale(locale),
      images: [{ url: image.url, alt: image.alt }],
    },
    twitter: {
      card: "summary_large_image",
      title: `${app.name} — ${app.tagline} | XingAI`,
      description: app.description,
      images: [{ url: image.url, alt: image.alt }],
    },
  };
}

export async function generateStaticParams() {
  const locales = ["en", "zh", "ko"] as const;
  return locales.flatMap((locale) => apps.map((app) => ({ locale, slug: app.slug })));
}

export default async function AppSlugLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ locale: string; slug: string }>;
}) {
  const { locale: raw, slug } = await params;
  const locale = parseRoutingLocale(raw);
  const app = getLocalizedAppBySlug(slug, locale);

  if (!app) return children;

  const appUrl = publicUrl(locale, `/apps/${app.slug}`);
  const image = ogImageForApp(app);
  const graph: Record<string, unknown>[] = [
    { "@id": `${siteUrl}/#org` },
    { "@id": `${siteUrl}/#website` },
    {
      "@type": "WebPage",
      "@id": `${appUrl}#webpage`,
      url: appUrl,
      name: `${app.name} — ${app.tagline}`,
      description: app.description,
      isPartOf: { "@id": `${siteUrl}/#website` },
      about: { "@id": `${appUrl}#software` },
      primaryImageOfPage: image.url,
      inLanguage: locale === "zh" ? "zh-TW" : locale === "ko" ? "ko" : "en",
    },
    buildSoftwareApplicationNode(app, locale),
    {
      "@type": "BreadcrumbList",
      "@id": `${appUrl}#breadcrumb`,
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "XingAI", item: publicUrl(locale, "/") },
        { "@type": "ListItem", position: 2, name: "Apps", item: publicUrl(locale, "/apps") },
        { "@type": "ListItem", position: 3, name: app.name, item: appUrl },
      ],
    },
    buildAppFaq(app, appUrl, locale),
  ];

  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": graph,
  };

  const faqItems = buildAppFaqItems(app, locale);

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      {children}
      <section className="wrap apps-faq" aria-labelledby="app-faq-heading">
        <h2 id="app-faq-heading" className="section-title">
          {locale === "zh" ? "常見問題" : locale === "ko" ? "자주 묻는 질문" : "FAQ"}
        </h2>
        <dl className="apps-faq__list">
          {faqItems.map((item) => (
            <div key={item.q}>
              <dt>{item.q}</dt>
              <dd>{item.a}</dd>
            </div>
          ))}
        </dl>
      </section>
    </>
  );
}
