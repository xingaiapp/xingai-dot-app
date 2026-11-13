import type { Metadata } from "next";
import { parseRoutingLocale } from "../../lib/locale-routing";
import {
  homeOg,
  localizedOpenGraph,
  pageAlternates,
} from "../../lib/localized-seo";
import { formatPageTitle } from "../../lib/site-seo";

function seriesPageTitle(locale: ReturnType<typeof parseRoutingLocale>) {
  if (locale === "zh") return "全部系列";
  if (locale === "ko") return "모든 시리즈";
  return "All Series";
}

function seriesDescription(locale: ReturnType<typeof parseRoutingLocale>) {
  if (locale === "zh") {
    return "XingAI 五個頻道的全部連載系列一頁看完：每早的晨禱、每天的炸雞與烤肉、週一至五的拉麵大戰，還有中英雙版的美股長片。";
  }
  if (locale === "ko") {
    return "XingAI 다섯 채널의 모든 시리즈를 한 페이지에 — 매일 아침의 기도, 매일의 치킨과 바비큐, 평일 저녁의 라면 대전, 중국어와 영어로 나가는 미국 주식 장편까지.";
  }
  return "Every series running on XingAI's five channels, on one page: morning prayer, daily chicken and barbecue, the weekday ramen battle, and US-stock long videos in Chinese and English.";
}

const path = "/series";

type Props = { children: React.ReactNode; params: Promise<{ locale: string }> };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale: raw } = await params;
  const locale = parseRoutingLocale(raw);
  const description = seriesDescription(locale);
  const pageTitle = seriesPageTitle(locale);
  const title = formatPageTitle(pageTitle);
  const og = homeOg(locale);

  return {
    title,
    description,
    alternates: pageAlternates(locale, path),
    openGraph: localizedOpenGraph(locale, path, pageTitle, description, og),
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [og.url],
    },
  };
}

export default function SeriesLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
