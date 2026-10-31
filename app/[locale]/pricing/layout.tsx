import type { Metadata } from "next";
import { parseRoutingLocale, publicUrl } from "../../lib/locale-routing";
import { localizedPageMetadata, type LocalizedPageCopy } from "../../lib/localized-seo";
import { buildPricingFaq } from "../../lib/static-faq-schema";

const path = "/pricing";

const copy: LocalizedPageCopy = {
  en: {
    title: "Pricing",
    description:
      "XingAI Free tier for live decision tools today. Pro and Unlimited are next — request early access for higher limits.",
  },
  zh: {
    title: "定價",
    description: "XingAI 已上線決策工具目前在 Free 檔。Pro 與 Unlimited 即將推出——可申請更高限額的搶先體驗。",
  },
  ko: {
    title: "요금",
    description:
      "XingAI 라이브 결정 도구는 지금 Free 티어. Pro와 Unlimited가 다음 — 더 높은 한도의 얼리 액세스를 요청하세요.",
  },
};

type Props = { children: React.ReactNode; params: Promise<{ locale: string }> };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;
  return localizedPageMetadata(parseRoutingLocale(locale), path, copy);
}

export default async function PricingLayout({ children, params }: Props) {
  const { locale: raw } = await params;
  const locale = parseRoutingLocale(raw);
  const pageUrl = publicUrl(locale, path);
  const faqJsonLd = buildPricingFaq(locale, pageUrl, copy[locale].description);
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />
      {children}
    </>
  );
}
