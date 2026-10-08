import type { Metadata } from "next";
import { parseRoutingLocale } from "../../lib/locale-routing";
import { localizedPageMetadata, type LocalizedPageCopy } from "../../lib/localized-seo";

const path = "/pricing";

const copy: LocalizedPageCopy = {
  en: {
    title: "Pricing",
    description:
      "XingAI Free tier for live decision tools today. Pro and Unlimited are next — request early access for higher limits.",
  },
  zh: {
    title: "定价",
    description: "XingAI 已上线决策工具目前在 Free 档。Pro 与 Unlimited 即将推出——可申请更高限额的抢先体验。",
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

export default function PricingLayout({ children }: Props) {
  return <>{children}</>;
}
