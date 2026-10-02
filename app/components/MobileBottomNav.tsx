"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useTranslation } from "../i18n/LanguageContext";
import { isNavActive, mobileNavLinks } from "../lib/nav-links";
import { ctaForNavKey, trackCta } from "../lib/track-cta";
import { useMobileNavDrawer } from "./MobileNavDrawer";
import NavIcon from "./NavIcon";

export default function MobileBottomNav() {
  const pathname = usePathname();
  const { locale, t } = useTranslation();
  const navLinks = mobileNavLinks(locale);
  const { open, toggle } = useMobileNavDrawer();

  return (
    <nav
      className="mobile-bottom-nav"
      aria-label={t("footerNav")}
    >
      <ul className="mobile-bottom-nav__list">
        {navLinks.map(({ href, key }) => {
          const active = isNavActive(pathname, href);
          const cta = ctaForNavKey(key);
          return (
            <li key={href} className="mobile-bottom-nav__item">
              <Link
                href={href}
                className={`mobile-bottom-nav__link${active ? " mobile-bottom-nav__link--active" : ""}`}
                aria-current={active ? "page" : undefined}
                onClick={cta ? () => trackCta(cta, "tabbar") : undefined}
              >
                <span className="mobile-bottom-nav__icon">
                  <NavIcon name={key} />
                </span>
                <span className="mobile-bottom-nav__label">{t(key)}</span>
              </Link>
            </li>
          );
        })}
        <li className="mobile-bottom-nav__item">
          <button
            type="button"
            className={`mobile-bottom-nav__link mobile-bottom-nav__link--button${open ? " mobile-bottom-nav__link--active" : ""}`}
            onClick={toggle}
            aria-expanded={open}
            aria-controls="mobile-nav-drawer"
          >
            <span className="mobile-bottom-nav__icon">
              <NavIcon name="navMore" />
            </span>
            <span className="mobile-bottom-nav__label">{t("navMore")}</span>
          </button>
        </li>
      </ul>
    </nav>
  );
}
