import type { Metadata } from "next";
import { parseRoutingLocale } from "../../../lib/locale-routing";
import { localizedPageMetadata, type LocalizedPageCopy } from "../../../lib/localized-seo";

const path = "/services/agent-security-assessment";

const copy: LocalizedPageCopy = {
  en: {
    title: "Agent Security Assessment",
    description:
      "Fixed-scope security assessment for AI agents, MCP servers, and tool permissions — prompt injection exposure, permission manifests, and audit readiness for .NET and Azure teams.",
  },
  zh: {
    title: "Agent 安全评估",
    description:
      "面向 AI Agent、MCP 服务器和工具权限的固定范围安全评估——提示注入暴露面、权限清单与审计就绪度，适合 .NET 和 Azure 团队。",
  },
  ko: {
    title: "에이전트 보안 평가",
    description:
      "AI 에이전트, MCP 서버, 도구 권한에 대한 고정 범위 보안 평가 — 프롬프트 인젝션 노출, 권한 목록, 감사 대비 상태를 점검합니다. .NET·Azure 팀을 위한 서비스입니다.",
  },
};

type Props = { children: React.ReactNode; params: Promise<{ locale: string }> };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;
  return localizedPageMetadata(parseRoutingLocale(locale), path, copy);
}

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "What is an AI agent security assessment?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "A fixed-scope review of the AI agents, MCP servers, and tools running in your environment: what each agent is permitted to call, where prompt injection can reach it, how credentials are handled, and whether actions are auditable and stoppable.",
      },
    },
    {
      "@type": "Question",
      name: "Why do MCP servers need a security review?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Each MCP server grants an agent new tools and data access, often installed without a permission review. An assessment inventories every server, maps its effective permissions, and flags tools that can write, spend, or exfiltrate data.",
      },
    },
    {
      "@type": "Question",
      name: "What does the assessment deliver?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "A findings report ranked by risk, a permission manifest for every agent and MCP server, and a 90-minute remediation walkthrough. Access is read-only throughout the 1–2 week engagement.",
      },
    },
    {
      "@type": "Question",
      name: "Is this for .NET and Azure environments only?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "The methodology is stack-neutral, but the practice specializes in .NET and Azure environments adopting MCP, where most agent tooling guidance today assumes Python or TypeScript stacks.",
      },
    },
    {
      "@type": "Question",
      name: "Does XingAI sell a security platform?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "No. The assessment is fixed scope and fixed fee, with independent advice only — there is no platform subscription or retainer attached.",
      },
    },
  ],
};

export default function AgentSecurityAssessmentLayout({ children }: Props) {
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
