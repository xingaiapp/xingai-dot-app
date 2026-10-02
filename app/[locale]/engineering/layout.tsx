import type { Metadata } from "next";
import { parseRoutingLocale } from "../../lib/locale-routing";
import { localizedPageMetadata, type LocalizedPageCopy } from "../../lib/localized-seo";

const path = "/engineering";

const copy: LocalizedPageCopy = {
  en: {
    title: "Engineering practice",
    description:
      "337 bilingual architecture decision records across 25 repositories. Three verbatim excerpts showing how decisions get made — and what they state they do not cover.",
  },
  zh: {
    title: "工程实践",
    description:
      "25 个代码仓库中的 337 份双语架构决策记录（ADR）。三段原文摘录，展示决策是怎么做出的——以及每份记录写明不覆盖的范围。",
  },
  ko: {
    title: "엔지니어링 실무",
    description:
      "25개 저장소에 걸친 337개의 이중 언어 아키텍처 결정 기록(ADR). 결정이 어떻게 내려지는지, 그리고 각 기록이 다루지 않는다고 밝힌 범위를 보여 주는 원문 발췌 세 편.",
  },
};

type Props = { children: React.ReactNode; params: Promise<{ locale: string }> };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;
  return localizedPageMetadata(parseRoutingLocale(locale), path, copy);
}

export default function EngineeringLayout({ children }: Props) {
  return <>{children}</>;
}
