import type { Metadata } from "next";
import { parseRoutingLocale } from "../../lib/locale-routing";
import { localizedPageMetadata, type LocalizedPageCopy } from "../../lib/localized-seo";

const path = "/channels";

const copy: LocalizedPageCopy = {
  en: {
    title: "Our YouTube Channels",
    description:
      "Watch the XingAI family on YouTube — the latest videos from @xingaiapp, @axingstocks, @xingaiinvest, @xingaitravel and @xingaicook, updated automatically.",
  },
  zh: {
    title: "我們的 YouTube 頻道",
    description:
      "在 YouTube 看 XingAI 全家桶——@xingaiapp、@axingstocks、@xingaiinvest、@xingaitravel 與 @xingaicook 的最新影片，自動更新。",
  },
  ko: {
    title: "YouTube 채널",
    description:
      "YouTube에서 XingAI 가족을 만나세요 — @xingaiapp, @axingstocks, @xingaiinvest, @xingaitravel, @xingaicook의 최신 영상이 자동으로 업데이트됩니다.",
  },
};

type Props = { children: React.ReactNode; params: Promise<{ locale: string }> };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;
  return localizedPageMetadata(parseRoutingLocale(locale), path, copy);
}

export default function ChannelsLayout({ children }: Props) {
  return <>{children}</>;
}
