import type { Metadata } from "next";
import { parseRoutingLocale, publicUrl } from "../../lib/locale-routing";
import { localizedPageMetadata, type LocalizedPageCopy } from "../../lib/localized-seo";
import { buildContactFaq } from "../../lib/static-faq-schema";

const path = "/contact";

const copy: LocalizedPageCopy = {
  en: {
    title: "Contact Us",
    description:
      "Get in touch with XingAI — inquiries, custom AI projects, partnerships, and early access requests. Email contact@xingai.app.",
  },
  zh: {
    title: "聯絡我們",
    description:
      "聯絡 XingAI：諮詢、定製 AI 專案、合作與搶先體驗申請。郵箱 contact@xingai.app。",
  },
  ko: {
    title: "문의하기",
    description:
      "XingAI에 문의하세요: 일반 문의, 맞춤 AI 프로젝트, 파트너십, 얼리 액세스 신청. 이메일 contact@xingai.app.",
  },
};

type Props = { children: React.ReactNode; params: Promise<{ locale: string }> };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;
  return localizedPageMetadata(parseRoutingLocale(locale), path, copy);
}

export default async function ContactLayout({ children, params }: Props) {
  const { locale: raw } = await params;
  const locale = parseRoutingLocale(raw);
  const pageUrl = publicUrl(locale, path);
  const faqJsonLd = buildContactFaq(locale, pageUrl, copy[locale].description);
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
