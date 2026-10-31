import type { Locale } from "../i18n/translations";

/**
 * FAQPage builders for the main site's static pages (about, story, team,
 * contact, services, engineering, pricing, apps catalog).
 *
 * AEO rule, same as travel city / cook recipe pages: every answer comes
 * from the page's own copy or data — the layout's meta description, the
 * page's app list, or the team founders already marked up on the page.
 * No new facts are invented. Questions are localized per locale; the
 * site's zh is Simplified (matching the layout copy).
 */

type QA = { q: string; a: string };

function faqLanguageTag(locale: Locale): string {
  if (locale === "zh") return "zh-TW";
  if (locale === "ko") return "ko";
  return "en";
}

function listSep(locale: Locale): string {
  return locale === "zh" ? "、" : ", ";
}

function buildFaqPage(locale: Locale, pageUrl: string, items: QA[]) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "@id": `${pageUrl}#faq`,
    url: pageUrl,
    inLanguage: faqLanguageTag(locale),
    mainEntity: items.map(({ q, a }) => ({
      "@type": "Question",
      name: q,
      acceptedAnswer: { "@type": "Answer", text: a },
    })),
  };
}

const FOUNDERS: Record<Locale, string> = {
  en: "Xing and Allen, XingAI's co-founders and AI architects.",
  zh: "Xing 和 Allen，XingAI 的聯合創始人、AI 架構師。",
  ko: "Xing과 Allen, XingAI 공동 창업자이자 AI 아키텍트.",
};

export function buildAboutFaq(locale: Locale, pageUrl: string, description: string) {
  const q: Record<Locale, [string, string]> = {
    en: ["What is XingAI?", "Who founded XingAI?"],
    zh: ["XingAI 是什麼？", "XingAI 由誰創立？"],
    ko: ["XingAI는 무엇인가요?", "XingAI는 누가 설립했나요?"],
  };
  const [q1, q2] = q[locale];
  return buildFaqPage(locale, pageUrl, [
    { q: q1, a: description },
    { q: q2, a: FOUNDERS[locale] },
  ]);
}

export function buildStoryFaq(locale: Locale, pageUrl: string, description: string, appNames: string[]) {
  const q: Record<Locale, [string, string]> = {
    en: ["How does XingAI work?", "Which apps has XingAI built?"],
    zh: ["XingAI 是如何運轉的？", "XingAI 已經做了哪些應用？"],
    ko: ["XingAI는 어떻게 작동하나요?", "XingAI가 만든 앱은 무엇인가요?"],
  };
  const [q1, q2] = q[locale];
  return buildFaqPage(locale, pageUrl, [
    { q: q1, a: description },
    { q: q2, a: appNames.join(listSep(locale)) },
  ]);
}

export function buildTeamFaq(locale: Locale, pageUrl: string, description: string) {
  const q: Record<Locale, [string, string]> = {
    en: ["Who leads the XingAI team?", "What is the XingAI team?"],
    zh: ["XingAI 團隊由誰領銜？", "XingAI 團隊是什麼？"],
    ko: ["XingAI 팀은 누가 이끌나요?", "XingAI 팀은 무엇인가요?"],
  };
  const [q1, q2] = q[locale];
  return buildFaqPage(locale, pageUrl, [
    { q: q1, a: FOUNDERS[locale] },
    { q: q2, a: description },
  ]);
}

export function buildContactFaq(locale: Locale, pageUrl: string, description: string) {
  const q: Record<Locale, [string, string]> = {
    en: ["How do I contact XingAI?", "What is XingAI's contact email?"],
    zh: ["怎麼聯絡 XingAI？", "XingAI 的聯絡郵箱是什麼？"],
    ko: ["XingAI에 어떻게 문의하나요?", "XingAI 문의 이메일은 무엇인가요?"],
  };
  const [q1, q2] = q[locale];
  return buildFaqPage(locale, pageUrl, [
    { q: q1, a: description },
    { q: q2, a: "contact@xingai.app" },
  ]);
}

export function buildServicesFaq(locale: Locale, pageUrl: string, description: string) {
  const q: Record<Locale, [string, string]> = {
    en: ["What services does XingAI offer?", "Does XingAI build custom AI products?"],
    zh: ["XingAI 提供哪些服務？", "XingAI 做定製 AI 產品嗎？"],
    ko: ["XingAI는 어떤 서비스를 제공하나요?", "XingAI는 맞춤 AI 제품을 만드나요?"],
  };
  const custom: Record<Locale, string> = {
    en: "Yes — XingAI builds a custom AI decision system around one decision that keeps recurring.",
    zh: "做。XingAI 圍繞一個反覆出現的決定，為你定製 AI 決策系統。",
    ko: "네, XingAI는 반복되는 결정 하나를 중심으로 맞춤 AI 의사결정 시스템을 만듭니다.",
  };
  const [q1, q2] = q[locale];
  return buildFaqPage(locale, pageUrl, [
    { q: q1, a: description },
    { q: q2, a: custom[locale] },
  ]);
}

export function buildEngineeringFaq(locale: Locale, pageUrl: string, description: string) {
  const q: Record<Locale, [string, string]> = {
    en: ["What is XingAI's engineering practice?", "How many architecture decision records does XingAI publish?"],
    zh: ["XingAI 的工程實踐是什麼？", "XingAI 公開了多少份架構決策記錄？"],
    ko: ["XingAI의 엔지니어링 실무는 무엇인가요?", "XingAI는 아키텍처 결정 기록을 몇 편 공개했나요?"],
  };
  const count: Record<Locale, string> = {
    en: "337 bilingual architecture decision records across 25 repositories.",
    zh: "25 個程式碼倉庫中的 337 份雙語架構決策記錄（ADR）。",
    ko: "25개 저장소에 걸친 337개의 이중 언어 아키텍처 결정 기록(ADR).",
  };
  const [q1, q2] = q[locale];
  return buildFaqPage(locale, pageUrl, [
    { q: q1, a: description },
    { q: q2, a: count[locale] },
  ]);
}

export function buildPricingFaq(locale: Locale, pageUrl: string, description: string) {
  const q: Record<Locale, [string, string]> = {
    en: ["How much does XingAI cost?", "What about XingAI Pro and Unlimited?"],
    zh: ["XingAI 收費嗎？", "XingAI Pro 和 Unlimited 呢？"],
    ko: ["XingAI 요금은 어떻게 되나요?", "XingAI Pro와 Unlimited는요?"],
  };
  const next: Record<Locale, string> = {
    en: "Pro and Unlimited are next — request early access for higher limits.",
    zh: "Pro 與 Unlimited 即將推出——可申請更高限額的搶先體驗。",
    ko: "Pro와 Unlimited가 다음 — 더 높은 한도의 얼리 액세스를 요청하세요.",
  };
  const [q1, q2] = q[locale];
  return buildFaqPage(locale, pageUrl, [
    { q: q1, a: description },
    { q: q2, a: next[locale] },
  ]);
}

export function buildAppsCatalogFaq(locale: Locale, pageUrl: string, appNames: string[], liveNames: string[]) {
  const q: Record<Locale, [string, string]> = {
    en: ["What apps does XingAI offer?", "Which XingAI apps are live now?"],
    zh: ["XingAI 提供哪些應用？", "XingAI 現在有哪些已上線應用？"],
    ko: ["XingAI는 어떤 앱을 제공하나요?", "지금 라이브 상태인 XingAI 앱은 무엇인가요?"],
  };
  const [q1, q2] = q[locale];
  return buildFaqPage(locale, pageUrl, [
    { q: q1, a: appNames.join(listSep(locale)) },
    { q: q2, a: liveNames.join(listSep(locale)) },
  ]);
}
