import type { Metadata } from "next";
import { parseRoutingLocale } from "../../lib/locale-routing";
import { localizedPageMetadata, type LocalizedPageCopy } from "../../lib/localized-seo";

const path = "/about";

const copy: LocalizedPageCopy = {
  en: {
    title: "About Us",
    description:
      "Meet Xing and Allen — co-founders and AI architects building focused AI decision systems for everyday life at XingAI.",
  },
  zh: {
    title: "关于我们",
    description:
      "认识 Xing 和 Allen——XingAI 的联合创始人、AI 架构师，专注打造面向日常生活的 AI 决策系统。",
  },
  ko: {
    title: "회사 소개",
    description:
      "XingAI 공동 창업자이자 AI 아키텍트인 Xing과 Allen을 소개합니다. 일상을 위한 집중된 AI 의사결정 시스템을 만듭니다.",
  },
};

type Props = { children: React.ReactNode; params: Promise<{ locale: string }> };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;
  return localizedPageMetadata(parseRoutingLocale(locale), path, copy);
}

export default function AboutLayout({ children }: Props) {
  return <>{children}</>;
}
