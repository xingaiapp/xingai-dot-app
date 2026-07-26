import type { Metadata } from "next";

const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL?.replace(/\/$/, "") || "https://xingai.app";

export const metadata: Metadata = {
  title: "Agent Security Assessment | XingAI",
  description:
    "Fixed-scope security assessment for AI agents, MCP servers, and tool permissions — prompt injection exposure, permission manifests, and audit readiness for .NET and Azure teams.",
  alternates: { canonical: `${siteUrl}/services/agent-security-assessment` },
  openGraph: {
    title: "Agent Security Assessment | XingAI",
    description:
      "Know what your AI agents can actually reach. Fixed-scope review of MCP servers, tool permissions, prompt injection exposure, and audit readiness.",
    url: `${siteUrl}/services/agent-security-assessment`,
    siteName: "XingAI",
    type: "website",
  },
};

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

export default function AgentSecurityAssessmentLayout({
  children,
}: {
  children: React.ReactNode;
}) {
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
