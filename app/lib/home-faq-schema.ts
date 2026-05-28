import translations, { type Locale } from "../i18n/translations";

const FAQ_KEYS: { q: keyof (typeof translations)["en"]; a: keyof (typeof translations)["en"] }[] =
  [
    { q: "answerQ1", a: "answerA1" },
    { q: "answerQ2", a: "answerA2" },
    { q: "answerQ3", a: "answerA3" },
    { q: "answerQ4", a: "answerA4" },
    { q: "answerQ5", a: "answerA5" },
  ];

function faqLanguageTag(locale: Locale): string {
  if (locale === "zh") return "zh-CN";
  if (locale === "ko") return "ko";
  return "en";
}

export function buildHomeFaqJsonLd(locale: Locale, pageUrl: string) {
  const copy = translations[locale];
  return {
    "@type": "FAQPage",
    "@id": `${pageUrl}#faq`,
    url: pageUrl,
    inLanguage: faqLanguageTag(locale),
    mainEntity: FAQ_KEYS.map(({ q, a }) => ({
      "@type": "Question",
      name: copy[q],
      acceptedAnswer: {
        "@type": "Answer",
        text: copy[a],
      },
    })),
  };
}
