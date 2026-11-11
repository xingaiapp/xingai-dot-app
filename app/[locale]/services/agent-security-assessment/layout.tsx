import type { Metadata } from "next";
import { parseRoutingLocale } from "../../../lib/locale-routing";
import { localizedPageMetadata, type LocalizedPageCopy } from "../../../lib/localized-seo";

const path = "/services/agent-security-assessment";

const copy: LocalizedPageCopy = {
  en: {
    title: "Agent Security Assessment",
    description:
      "Fixed-scope security assessment for AI agents, MCP servers, and tool permissions — prompt injection exposure, permission manifests, and audit readiness.",
  },
  zh: {
    title: "Agent 安全評估",
    description:
      "面向 AI Agent、MCP 伺服器和工具許可權的固定範圍安全評估——提示注入暴露面、許可權清單與審計就緒度，適合 .NET 和 Azure 團隊。",
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

type FaqItem = { q: string; a: string };

// Single source of truth for this page's FAQ: the same items feed the
// FAQPage schema and the visible FAQ section below, so the schema never
// asks questions the body never prints (same fix as the app pages, 44bbed3).
// Every branch is fully localized: a visible English answer on a zh/ko
// page would break the Traditional-Chinese / Korean page promise.
// Answers are faithful translations of the English originals only —
// nothing is invented beyond what the page already states.
function buildFaqItems(locale: "en" | "zh" | "ko"): FaqItem[] {
  const faq: Record<"en" | "zh" | "ko", FaqItem[]> = {
    en: [
      {
        q: "What is an AI agent security assessment?",
        a: "A fixed-scope review of the AI agents, MCP servers, and tools running in your environment: what each agent is permitted to call, where prompt injection can reach it, how credentials are handled, and whether actions are auditable and stoppable.",
      },
      {
        q: "Why do MCP servers need a security review?",
        a: "Each MCP server grants an agent new tools and data access, often installed without a permission review. An assessment inventories every server, maps its effective permissions, and flags tools that can write, spend, or exfiltrate data.",
      },
      {
        q: "What does the assessment deliver?",
        a: "A findings report ranked by risk, a permission manifest for every agent and MCP server, and a 90-minute remediation walkthrough. Access is read-only throughout the 1–2 week engagement.",
      },
      {
        q: "Is this for .NET and Azure environments only?",
        a: "The methodology is stack-neutral, but the practice specializes in .NET and Azure environments adopting MCP, where most agent tooling guidance today assumes Python or TypeScript stacks.",
      },
      {
        q: "Does XingAI sell a security platform?",
        a: "No. The assessment is fixed scope and fixed fee, with independent advice only — there is no platform subscription or retainer attached.",
      },
    ],
    zh: [
      {
        q: "什麼是 AI Agent 安全評估？",
        a: "對您環境中運行的 AI Agent、MCP 伺服器與工具進行固定範圍的審查：每個 Agent 被允許呼叫什麼、提示注入能觸及哪裡、憑證如何處理，以及操作是否可審計、可停止。",
      },
      {
        q: "為什麼 MCP 伺服器需要安全審查？",
        a: "每台 MCP 伺服器都會給 Agent 新的工具與數據存取權限，而且常常在未經許可權審查的情況下就裝上了。評估會盤點每一台伺服器、對照其實際許可權，並標出能夠寫入、花錢或外洩數據的工具。",
      },
      {
        q: "這次評估會交付什麼？",
        a: "一份按風險排序的發現報告、每個 Agent 與每台 MCP 伺服器的許可權清單，以及一場 90 分鐘的修復說明會。在 1 至 2 週的合作期間，全程都是唯讀存取。",
      },
      {
        q: "只適用於 .NET 和 Azure 環境嗎？",
        a: "方法學與技術棧無關，但本團隊專精於導入 MCP 的 .NET 與 Azure 環境——如今多數 Agent 工具指引都預設 Python 或 TypeScript 技術棧。",
      },
      {
        q: "XingAI 有販售安全平台嗎？",
        a: "沒有。這次評估是固定範圍、固定費用，只提供獨立建議——不附帶任何平台訂閱或顧問合約。",
      },
    ],
    ko: [
      {
        q: "AI 에이전트 보안 평가란 무엇인가요?",
        a: "귀하의 환경에서 실행 중인 AI 에이전트, MCP 서버, 도구에 대한 고정 범위 검토입니다. 각 에이전트가 호출할 수 있는 것, 프롬프트 인젝션이 도달할 수 있는 범위, 자격 증명 처리 방식, 그리고 조치가 감사 가능하고 중단 가능한지를 확인합니다.",
      },
      {
        q: "MCP 서버에 보안 검토가 필요한 이유는 무엇인가요?",
        a: "각 MCP 서버는 에이전트에게 새로운 도구와 데이터 접근 권한을 부여하는데, 권한 검토 없이 설치되는 경우가 많습니다. 평가는 모든 서버를 목록화하고, 실제 권한을 매핑하며, 쓰기, 지출, 데이터 유출이 가능한 도구를 표시합니다.",
      },
      {
        q: "평가는 무엇을 제공하나요?",
        a: "위험도 순으로 정리된 발견 사항 보고서, 모든 에이전트와 MCP 서버의 권한 목록, 그리고 90분간의 개선 방안 설명회를 제공합니다. 1~2주간의 평가 기간 동안 접근은 전부 읽기 전용입니다.",
      },
      {
        q: ".NET 및 Azure 환경 전용인가요?",
        a: "방법론은 기술 스택과 무관하지만, 저희 팀은 MCP를 도입하는 .NET 및 Azure 환경에 특화되어 있습니다. 오늘날 대부분의 에이전트 도구 가이드는 Python이나 TypeScript 스택을 전제로 하기 때문입니다.",
      },
      {
        q: "XingAI는 보안 플랫폼을 판매하나요?",
        a: "아닙니다. 평가는 고정 범위, 고정 비용이며 독립적인 조언만 제공합니다. 플랫폼 구독이나 유지 계약은 없습니다.",
      },
    ],
  };
  return faq[locale];
}

function buildFaqJsonLd(items: FaqItem[]) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: items.map((item) => ({
      "@type": "Question",
      name: item.q,
      acceptedAnswer: { "@type": "Answer", text: item.a },
    })),
  };
}

export default async function AgentSecurityAssessmentLayout({ children, params }: Props) {
  const { locale } = await params;
  const routingLocale = parseRoutingLocale(locale);
  const faqItems = buildFaqItems(routingLocale);

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(buildFaqJsonLd(faqItems)) }}
      />
      {children}
      <section className="wrap apps-faq" aria-labelledby="service-faq-heading">
        <h2 id="service-faq-heading" className="section-title">
          {routingLocale === "zh" ? "常見問題" : routingLocale === "ko" ? "자주 묻는 질문" : "FAQ"}
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
