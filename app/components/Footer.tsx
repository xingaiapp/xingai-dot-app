"use client";

import Image from "next/image";
import { useTranslation } from "../i18n/LanguageContext";
import { useTheme } from "./ThemeContext";

export default function Footer() {
  const { t } = useTranslation();
  const { theme, mounted } = useTheme();
  const logoSrc =
    mounted && theme === "dark" ? "/xingai-logo-dark.png" : "/xingai-logo.png";

  return (
    <footer className="site-footer">
      <nav className="socials" aria-label="Social and code">
        <span className="socials-label">{t("elsewhere")}</span>
        <a href="https://github.com/xingaiapp" rel="noopener noreferrer" target="_blank">GitHub</a>
        <span className="socials-sep" aria-hidden="true">&middot;</span>
        <a href="https://www.linkedin.com/in/xingaiapp/" rel="noopener noreferrer" target="_blank">LinkedIn</a>
        <span className="socials-sep" aria-hidden="true">&middot;</span>
        <a href="https://x.com/XingAIApp" rel="noopener noreferrer" target="_blank">X</a>
      </nav>

      <div className="footer-main">
        <Image
          className="footer-logo"
          src={logoSrc}
          alt=""
          width={1373}
          height={368}
        />
        <span>&copy; xingai.app</span>
      </div>
      <p className="footer-build">{t("footerBuild")}</p>
    </footer>
  );
}
