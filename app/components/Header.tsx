"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useTranslation } from "../i18n/LanguageContext";
import { isNavActive, primaryNavLinks } from "../lib/nav-links";
import { useTheme } from "./ThemeContext";
import ThemeToggle from "./ThemeToggle";
import LanguageSelector from "./LanguageSelector";
import MobileNavDrawer, { useMobileNavDrawer } from "./MobileNavDrawer";

export default function Header() {
  const { t } = useTranslation();
  const { theme, mounted } = useTheme();
  const pathname = usePathname();
  const { open, setOpen, toggle } = useMobileNavDrawer();
  const logoSrc =
    mounted && theme === "dark" ? "/xingai-logo-dark.png" : "/xingai-logo.png";

  return (
    <>
      <header className="site-header">
        <div className="header-inner">
          <button
            type="button"
            className="header-menu-btn"
            onClick={toggle}
            aria-expanded={open}
            aria-controls="mobile-nav-drawer"
            aria-label={open ? t("menuClose") : t("menuOpen")}
          >
            <span className="header-menu-btn__bar" aria-hidden />
            <span className="header-menu-btn__bar" aria-hidden />
            <span className="header-menu-btn__bar" aria-hidden />
          </button>

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

          <nav
            className="header-nav header-nav--desktop"
            aria-label="Main navigation"
          >
            {primaryNavLinks.map(({ href, key }) => (
              <Link
                key={href}
                href={href}
                className={`header-nav-link${isNavActive(pathname, href) ? " header-nav-link--active" : ""}`}
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
      <MobileNavDrawer open={open} onOpenChange={setOpen} />
    </>
  );
}
