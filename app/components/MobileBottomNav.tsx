"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useTranslation } from "../i18n/LanguageContext";
import { isNavActive, primaryNavLinks } from "../lib/nav-links";
import NavIcon from "./NavIcon";

export default function MobileBottomNav() {
  const pathname = usePathname();
  const { t } = useTranslation();

  return (
    <nav
      className="mobile-bottom-nav"
      aria-label={t("footerNav")}
    >
      <ul className="mobile-bottom-nav__list">
        {primaryNavLinks.map(({ href, key }) => {
          const active = isNavActive(pathname, href);
          return (
            <li key={href} className="mobile-bottom-nav__item">
              <Link
                href={href}
                className={`mobile-bottom-nav__link${active ? " mobile-bottom-nav__link--active" : ""}`}
                aria-current={active ? "page" : undefined}
              >
                <span className="mobile-bottom-nav__icon">
                  <NavIcon name={key} />
                </span>
                <span className="mobile-bottom-nav__label">{t(key)}</span>
              </Link>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}
