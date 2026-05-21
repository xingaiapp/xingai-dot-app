"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useTranslation } from "../i18n/LanguageContext";
import {
  isNavActive,
  primaryNavLinks,
  type NavKey,
} from "../lib/nav-links";

function NavIcon({ name }: { name: NavKey }) {
  const common = {
    width: 22,
    height: 22,
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: 1.75,
    strokeLinecap: "round" as const,
    strokeLinejoin: "round" as const,
    "aria-hidden": true,
  };

  switch (name) {
    case "navHome":
      return (
        <svg {...common}>
          <path d="M4 10.5 12 4l8 6.5V20a1 1 0 0 1-1 1h-5v-6H10v6H5a1 1 0 0 1-1-1z" />
        </svg>
      );
    case "navApps":
      return (
        <svg {...common}>
          <rect x="4" y="4" width="7" height="7" rx="1.5" />
          <rect x="13" y="4" width="7" height="7" rx="1.5" />
          <rect x="4" y="13" width="7" height="7" rx="1.5" />
          <rect x="13" y="13" width="7" height="7" rx="1.5" />
        </svg>
      );
    case "navAbout":
      return (
        <svg {...common}>
          <circle cx="12" cy="8" r="3.5" />
          <path d="M6 20c0-3.3 2.7-6 6-6s6 2.7 6 6" />
        </svg>
      );
    case "navContact":
      return (
        <svg {...common}>
          <path d="M4 6h16v12H4z" />
          <path d="m4 7 8 6 8-6" />
        </svg>
      );
    default:
      return null;
  }
}

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
