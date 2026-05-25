"use client";

import Image from "next/image";
import Link from "next/link";
import { useTranslation } from "../i18n/LanguageContext";
import { useTheme } from "./ThemeContext";
type ResourceIconName = "github" | "linkedin" | "x";
type FooterIconName =
  | ResourceIconName
  | "systems"
  | "demo"
  | "custom"
  | "about"
  | "contact"
  | "legal";

function FooterLinkIcon({ name }: { name: FooterIconName }) {
  if (name === "github") {
    return (
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <path d="M12 2.7a9.5 9.5 0 0 0-3 18.5c.48.09.65-.2.65-.46v-1.62c-2.65.57-3.2-1.13-3.2-1.13-.43-1.1-1.05-1.39-1.05-1.39-.86-.58.06-.57.06-.57.95.07 1.45.98 1.45.98.85 1.44 2.23 1.03 2.77.79.09-.61.33-1.03.6-1.27-2.11-.24-4.33-1.06-4.33-4.7 0-1.04.37-1.89.98-2.55-.1-.24-.43-1.21.09-2.52 0 0 .8-.26 2.62.98a9.02 9.02 0 0 1 4.76 0c1.82-1.24 2.62-.98 2.62-.98.52 1.31.19 2.28.09 2.52.61.66.98 1.51.98 2.55 0 3.65-2.23 4.46-4.35 4.7.34.29.64.87.64 1.76v2.61c0 .26.17.55.66.46A9.5 9.5 0 0 0 12 2.7Z" />
      </svg>
    );
  }

  if (name === "linkedin") {
    return (
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <path d="M5.25 8.85h3.1v9.9h-3.1v-9.9Zm1.55-4.9a1.8 1.8 0 1 1 0 3.6 1.8 1.8 0 0 1 0-3.6Zm3.55 4.9h2.95v1.35h.04c.41-.78 1.42-1.6 2.92-1.6 3.12 0 3.69 2.05 3.69 4.72v5.43h-3.08v-4.82c0-1.15-.02-2.63-1.6-2.63-1.6 0-1.85 1.25-1.85 2.55v4.9h-3.07v-9.9Z" />
      </svg>
    );
  }

  if (name === "x") {
    return (
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <path d="M14.2 10.45 20.95 2.6h-1.6l-5.86 6.82L8.8 2.6H3.4l7.08 10.3-7.08 8.24H5l6.19-7.2 4.94 7.2h5.4l-7.33-10.69Zm-2.19 2.54-.72-1.03L5.58 3.8h2.45l4.61 6.59.72 1.03 5.99 8.56H16.9l-4.89-6.99Z" />
      </svg>
    );
  }

  const common = {
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: 1.9,
    strokeLinecap: "round" as const,
    strokeLinejoin: "round" as const,
    "aria-hidden": true,
  };

  if (name === "systems") {
    return (
      <svg {...common}>
        <rect x="4" y="4" width="6.5" height="6.5" rx="1.5" />
        <rect x="13.5" y="4" width="6.5" height="6.5" rx="1.5" />
        <rect x="4" y="13.5" width="6.5" height="6.5" rx="1.5" />
        <rect x="13.5" y="13.5" width="6.5" height="6.5" rx="1.5" />
      </svg>
    );
  }

  if (name === "demo") {
    return (
      <svg {...common}>
        <path d="m10 8 5 4-5 4V8Z" />
        <circle cx="12" cy="12" r="8.5" />
      </svg>
    );
  }

  if (name === "custom") {
    return (
      <svg {...common}>
        <path d="M12 3v3" />
        <path d="M12 18v3" />
        <path d="M3 12h3" />
        <path d="M18 12h3" />
        <path d="m5.6 5.6 2.1 2.1" />
        <path d="m16.3 16.3 2.1 2.1" />
        <path d="m18.4 5.6-2.1 2.1" />
        <path d="m7.7 16.3-2.1 2.1" />
        <circle cx="12" cy="12" r="3" />
      </svg>
    );
  }

  if (name === "about") {
    return (
      <svg {...common}>
        <circle cx="12" cy="12" r="8.5" />
        <path d="M12 11.5v4.5" />
        <path d="M12 8h.01" />
      </svg>
    );
  }

  if (name === "legal") {
    return (
      <svg {...common}>
        <path d="M9 4h6v16H9z" />
        <path d="M11 8h4" />
        <path d="M11 11.5h4" />
        <path d="M11 15h2.5" />
      </svg>
    );
  }

  return (
    <svg {...common}>
      <rect x="4" y="6" width="16" height="12" rx="2" />
      <path d="m5 7 7 5.25L19 7" />
    </svg>
  );
}

export default function Footer() {
  const { t } = useTranslation();
  const { theme, mounted } = useTheme();
  const logoSrc =
    mounted && theme === "dark" ? "/xingai-logo-dark.png" : "/xingai-logo.png";

  return (
    <footer className="site-footer" role="contentinfo">
      <section className="footer-cta" aria-labelledby="footer-cta-heading">
        <div>
          <h2 id="footer-cta-heading">{t("footerCtaHeading")}</h2>
          <p>{t("footerCtaLead")}</p>
        </div>
        <div className="footer-cta__actions">
          <Link href="/apps" className="cta">
            {t("footerTryDemo")} <span aria-hidden="true">→</span>
          </Link>
          <Link href="/apps" className="cta cta--outline">
            {t("footerSeeSystems")} <span aria-hidden="true">→</span>
          </Link>
        </div>
      </section>

      <div className="footer-content">
        <div className="footer-brand">
          <Image
            className="footer-logo"
            src={logoSrc}
            alt=""
            width={1373}
            height={368}
          />
          <p className="footer-build">{t("footerBuild")}</p>
        </div>

        <nav className="footer-column" aria-label={t("footerProduct")}>
          <span className="footer-column__label">{t("footerProduct")}</span>
          <div className="footer-column__links">
            <Link href="/apps" className="footer-icon-link">
              <FooterLinkIcon name="systems" />
              <span>{t("drawerAiSystems")}</span>
            </Link>
            <Link href="/apps" className="footer-icon-link">
              <FooterLinkIcon name="demo" />
              <span>{t("drawerFreeDemo")}</span>
            </Link>
            <Link href="/contact" className="footer-icon-link">
              <FooterLinkIcon name="custom" />
              <span>{t("footerCustomAi")}</span>
            </Link>
          </div>
        </nav>

        <nav className="footer-column" aria-label={t("footerCompany")}>
          <span className="footer-column__label">{t("footerCompany")}</span>
          <div className="footer-column__links">
            <Link href="/about" className="footer-icon-link">
              <FooterLinkIcon name="about" />
              <span>{t("navAbout")}</span>
            </Link>
            <Link href="/contact" className="footer-icon-link">
              <FooterLinkIcon name="contact" />
              <span>{t("navContact")}</span>
            </Link>
          </div>
        </nav>

        <nav className="footer-column" aria-label={t("footerLegal")}>
          <span className="footer-column__label">{t("footerLegal")}</span>
          <div className="footer-column__links">
            <Link href="/legal/privacy" className="footer-icon-link">
              <FooterLinkIcon name="legal" />
              <span>{t("footerPrivacy")}</span>
            </Link>
            <Link href="/legal/terms" className="footer-icon-link">
              <FooterLinkIcon name="legal" />
              <span>{t("footerTerms")}</span>
            </Link>
            <Link href="/legal/disclaimer" className="footer-icon-link">
              <FooterLinkIcon name="legal" />
              <span>{t("footerDisclaimer")}</span>
            </Link>
          </div>
        </nav>

        <nav className="footer-column" aria-label={t("footerResources")}>
          <span className="footer-column__label">{t("footerResources")}</span>
          <div className="footer-column__links">
            <a
              href="https://github.com/xingaiapp"
              className="footer-resource-link"
              rel="noopener noreferrer"
              target="_blank"
            >
              <FooterLinkIcon name="github" />
              <span>GitHub</span>
            </a>
            <a
              href="https://www.linkedin.com/in/xingaiapp/"
              className="footer-resource-link"
              rel="noopener noreferrer"
              target="_blank"
            >
              <FooterLinkIcon name="linkedin" />
              <span>LinkedIn</span>
            </a>
            <a
              href="https://x.com/XingAIApp"
              className="footer-resource-link"
              rel="noopener noreferrer"
              target="_blank"
            >
              <FooterLinkIcon name="x" />
              <span>X</span>
            </a>
          </div>
        </nav>
      </div>

      <div className="footer-bottom">
        <div className="footer-bottom__meta">
          <span>&copy; {new Date().getFullYear()} xingai.app</span>
          <nav className="footer-legal-inline" aria-label={t("footerLegal")}>
            <Link href="/legal/privacy">{t("footerPrivacy")}</Link>
            <Link href="/legal/terms">{t("footerTerms")}</Link>
            <Link href="/legal/disclaimer">{t("footerDisclaimer")}</Link>
          </nav>
        </div>
      </div>
    </footer>
  );
}
