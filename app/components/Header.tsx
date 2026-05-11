"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useTranslation } from "../i18n/LanguageContext";
import { useTheme } from "./ThemeContext";
import ThemeToggle from "./ThemeToggle";
import LanguageSelector from "./LanguageSelector";

const navLinks = [
  { href: "/apps", key: "navApps" as const },
  { href: "/about", key: "navAbout" as const },
  { href: "/contact", key: "navContact" as const },
];

export default function Header() {
  const { t } = useTranslation();
  const { theme, mounted } = useTheme();
  const pathname = usePathname();
  const logoSrc =
    mounted && theme === "dark" ? "/xingai-logo-dark.png" : "/xingai-logo.png";

  return (
    <header className="site-header">
      <div className="header-inner">
        <Link href="/" className="header-logo-link" aria-label="xingai.app home">
          <Image
            src={logoSrc}
            alt="xingai.app"
            width={1373}
            height={368}
            priority
            className="header-logo-img"
          />
        </Link>

        <nav className="header-nav" aria-label="Main navigation">
          {navLinks.map(({ href, key }) => (
            <Link
              key={href}
              href={href}
              className={`header-nav-link${pathname === href || pathname.startsWith(href + "/") ? " header-nav-link--active" : ""}`}
            >
              {t(key)}
            </Link>
          ))}
        </nav>

        <div className="header-controls">
          <LanguageSelector />
          <ThemeToggle />
        </div>
      </div>
    </header>
  );
}
