import type { Metadata } from "next";
import { parseRoutingLocale } from "../../lib/locale-routing";
import { localizedPageMetadata, type LocalizedPageCopy } from "../../lib/localized-seo";

const path = "/contact";

const copy: LocalizedPageCopy = {
  en: {
    title: "Contact Us",
    description:
      "Get in touch with XingAI — inquiries, custom AI projects, partnerships, and early access requests. Email contact@xingai.app.",
  },
  zh: {
    title: "联系我们",
    description:
      "联系 XingAI：咨询、定制 AI 项目、合作与抢先体验申请。邮箱 contact@xingai.app。",
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

export default function ContactLayout({ children }: Props) {
  return <>{children}</>;
}
