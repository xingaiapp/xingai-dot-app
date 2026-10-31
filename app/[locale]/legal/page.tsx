import type { Metadata } from "next";
import LocaleLink from "../../components/LocaleLink";
import { parseRoutingLocale } from "../../lib/locale-routing";
import { pageAlternates, localizedOpenGraph } from "../../lib/localized-seo";
import { defaultOgImage, ogImageMeta } from "../../lib/site-seo";

type Props = { params: Promise<{ locale: string }> };

const TITLE: Record<string, string> = {
  en: "Legal · XingAI",
  zh: "法律與合規 · XingAI",
  ko: "법률 고지 · XingAI",
};
const DESCRIPTION: Record<string, string> = {
  en: "Privacy Policy, Terms of Service, and Disclaimer for XingAI products.",
  zh: "XingAI 產品相關的隱私、條款與免責宣告。輸出僅供參考，請自行核實後行動。",
  ko: "XingAI 제품의 개인정보, 약관, 면책 고지입니다. 출력은 참고용이며 직접 확인 후 행동하세요.",
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale: raw } = await params;
  const locale = parseRoutingLocale(raw);
  const path = "/legal";
  const og = ogImageMeta(defaultOgImage, "XingAI legal pages");
  const title = TITLE[locale] ?? TITLE.en;
  const description = DESCRIPTION[locale] ?? DESCRIPTION.en;
  return {
    title,
    description,
    alternates: pageAlternates(locale, path),
    openGraph: localizedOpenGraph(locale, path, title, description, og),
  };
}

const LINKS = [
  { href: "/legal/privacy", en: "Privacy Policy", zh: "隱私政策", ko: "개인정보 처리방침" },
  { href: "/legal/terms", en: "Terms of Service", zh: "服務條款", ko: "이용약관" },
  { href: "/legal/disclaimer", en: "Disclaimer", zh: "免責宣告", ko: "면책 고지" },
] as const;

export default async function LegalIndexPage({ params }: Props) {
  const { locale: raw } = await params;
  const locale = parseRoutingLocale(raw);
  const label = (row: (typeof LINKS)[number]) =>
    locale === "zh" ? row.zh : locale === "ko" ? row.ko : row.en;
  const lead =
    locale === "zh"
      ? "XingAI 產品相關的隱私、條款與免責宣告。輸出僅供參考，請自行核實後行動。"
      : locale === "ko"
        ? "XingAI 제품의 개인정보, 약관, 면책 고지입니다. 출력은 참고용이며 직접 확인 후 행동하세요."
        : "Privacy, terms, and disclaimer for XingAI products. Outputs are informational — verify before you act.";
  const sep = locale === "zh" ? "、" : ", ";
  const faqJsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    inLanguage: locale === "zh" ? "zh-TW" : locale,
    mainEntity: [
      {
        "@type": "Question",
        name:
          locale === "zh" ? "這一頁有什麼？" : locale === "ko" ? "이 페이지에는 무엇이 있나요?" : "What is on this page?",
        acceptedAnswer: { "@type": "Answer", text: lead },
      },
      {
        "@type": "Question",
        name:
          locale === "zh"
            ? "列出了哪些法律檔案？"
            : locale === "ko"
              ? "어떤 법률 문서가 있나요?"
              : "Which legal documents are listed?",
        acceptedAnswer: { "@type": "Answer", text: LINKS.map((row) => label(row)).join(sep) },
      },
    ],
  };

  return (
    <main className="wrap">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />
      <section className="page-header">
        <h1 className="page-heading">
          {locale === "zh" ? "法律與合規" : locale === "ko" ? "법률 고지" : "Legal"}
        </h1>
        <p className="page-lead">
          {lead}
        </p>
      </section>
      <section className="detail-section">
        <ul className="pricing-features" style={{ maxWidth: "28rem" }}>
          {LINKS.map((row) => (
            <li key={row.href} className="pricing-feature">
              <LocaleLink href={row.href}>{label(row)}</LocaleLink>
            </li>
          ))}
        </ul>
      </section>
    </main>
  );
}
