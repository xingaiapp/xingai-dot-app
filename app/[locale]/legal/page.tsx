import type { Metadata } from "next";
import LocaleLink from "../../components/LocaleLink";
import { parseRoutingLocale } from "../../lib/locale-routing";
import { pageAlternates, localizedOpenGraph } from "../../lib/localized-seo";
import { defaultOgImage, ogImageMeta } from "../../lib/site-seo";

type Props = { params: Promise<{ locale: string }> };

const TITLE = "Legal · XingAI";
const DESCRIPTION =
  "Privacy Policy, Terms of Service, and Disclaimer for XingAI products.";

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale: raw } = await params;
  const locale = parseRoutingLocale(raw);
  const path = "/legal";
  const og = ogImageMeta(defaultOgImage, "XingAI legal pages");
  return {
    title: TITLE,
    description: DESCRIPTION,
    alternates: pageAlternates(locale, path),
    openGraph: localizedOpenGraph(locale, path, TITLE, DESCRIPTION, og),
  };
}

const LINKS = [
  { href: "/legal/privacy", en: "Privacy Policy", zh: "隐私政策", ko: "개인정보 처리방침" },
  { href: "/legal/terms", en: "Terms of Service", zh: "服务条款", ko: "이용약관" },
  { href: "/legal/disclaimer", en: "Disclaimer", zh: "免责声明", ko: "면책 고지" },
] as const;

export default async function LegalIndexPage({ params }: Props) {
  const { locale: raw } = await params;
  const locale = parseRoutingLocale(raw);
  const label = (row: (typeof LINKS)[number]) =>
    locale === "zh" ? row.zh : locale === "ko" ? row.ko : row.en;

  return (
    <main className="wrap">
      <section className="page-header">
        <h1 className="page-heading">
          {locale === "zh" ? "法律与合规" : locale === "ko" ? "법률 고지" : "Legal"}
        </h1>
        <p className="page-lead">
          {locale === "zh"
            ? "XingAI 产品相关的隐私、条款与免责声明。输出仅供参考，请自行核实后行动。"
            : locale === "ko"
              ? "XingAI 제품의 개인정보, 약관, 면책 고지입니다. 출력은 참고용이며 직접 확인 후 행동하세요."
              : "Privacy, terms, and disclaimer for XingAI products. Outputs are informational — verify before you act."}
        </p>
      </section>
      <section className="detail-section">
        <ul className="pricing-features" style={{ maxWidth: "28rem" }}>
          {LINKS.map((row) => (
            <li key={row.href} className="pricing-feature">
              <LocaleLink href={row.href}>{label(row)}</LocaleLink>
            </li>
          ))}
        </ul>
      </section>
    </main>
  );
}
