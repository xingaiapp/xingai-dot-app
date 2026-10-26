import type { Metadata } from "next";
import { parseRoutingLocale, publicUrl } from "../../lib/locale-routing";
import { localizedPageMetadata, type LocalizedPageCopy } from "../../lib/localized-seo";
import { buildServicesFaq } from "../../lib/static-faq-schema";

const path = "/services";

const copy: LocalizedPageCopy = {
  en: {
    title: "Services",
    description:
      "Work with XingAI: build a custom AI decision system around one decision, get an Agent Security Assessment, or book a workshop on ADRs, LLM evaluation and MCP.",
  },
  zh: {
    title: "服务",
    description:
      "与 XingAI 合作：围绕一个反复出现的决定定制 AI 决策系统；为 MCP 服务器和工具权限做 Agent 安全评估；或预约关于 ADR、大模型评测和 MCP 生产实践的工程工作坊。",
  },
  ko: {
    title: "서비스",
    description:
      "XingAI와 함께하기: 반복되는 결정 하나를 중심으로 맞춤 AI 의사결정 시스템을 만들고, MCP 서버와 도구 권한에 대한 에이전트 보안 평가를 받거나, ADR·LLM 평가·프로덕션 MCP 엔지니어링 워크숍을 예약하세요.",
  },
};

type Props = { children: React.ReactNode; params: Promise<{ locale: string }> };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;
  return localizedPageMetadata(parseRoutingLocale(locale), path, copy);
}

export default async function ServicesLayout({ children, params }: Props) {
  const { locale: raw } = await params;
  const locale = parseRoutingLocale(raw);
  const pageUrl = publicUrl(locale, path);
  const faqJsonLd = buildServicesFaq(locale, pageUrl, copy[locale].description);
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
