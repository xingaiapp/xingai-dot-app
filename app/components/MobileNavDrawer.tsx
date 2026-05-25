"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useCallback, useEffect, useState } from "react";
import { useTranslation } from "../i18n/LanguageContext";
import { isNavActive, type NavKey } from "../lib/nav-links";
import { useTheme } from "./ThemeContext";
import NavIcon from "./NavIcon";

type MobileNavDrawerProps = {
  open: boolean;
  onOpenChange: (open: boolean) => void;
};

export default function MobileNavDrawer({
  open,
  onOpenChange,
}: MobileNavDrawerProps) {
  const pathname = usePathname();
  const { t } = useTranslation();
  const { theme, mounted } = useTheme();
  const logoSrc =
    mounted && theme === "dark" ? "/xingai-logo-dark.png" : "/xingai-logo.png";
  const mainLinks: { href: string; label: string; icon: NavKey }[] = [
    { href: "/", label: t("navHome"), icon: "navHome" },
    { href: "/apps", label: t("drawerAiSystems"), icon: "navApps" },
    { href: "/apps", label: t("drawerFreeDemo"), icon: "navApps" },
    { href: "/about", label: t("navAbout"), icon: "navAbout" },
    { href: "/contact", label: t("navContact"), icon: "navContact" },
  ];

  const close = useCallback(() => onOpenChange(false), [onOpenChange]);

  useEffect(() => {
    close();
  }, [pathname, close]);

  useEffect(() => {
    if (!open) return;
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") close();
    };
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = prev;
      window.removeEventListener("keydown", onKey);
    };
  }, [open, close]);

  return (
    <>
      <div
        className={`mobile-drawer-backdrop${open ? " mobile-drawer-backdrop--open" : ""}`}
        aria-hidden={!open}
        onClick={close}
      />
      <aside
        id="mobile-nav-drawer"
        className={`mobile-drawer${open ? " mobile-drawer--open" : ""}`}
        aria-hidden={!open}
        aria-label={t("navMenu")}
        inert={!open ? true : undefined}
      >
        <div className="mobile-drawer__head">
          <Link
            href="/"
            className="mobile-drawer__logo-link"
            aria-label="xingai.app home"
            onClick={close}
          >
            <Image
              src={logoSrc}
              alt="xingai.app"
              width={1373}
              height={368}
              className="mobile-drawer__logo"
            />
          </Link>
          <button
            type="button"
            className="mobile-drawer__close"
            onClick={close}
            aria-label={t("menuClose")}
          >
            <span aria-hidden>×</span>
          </button>
        </div>
        <nav className="mobile-drawer__nav" aria-label={t("footerNav")}>
          <span className="mobile-drawer__section-label">{t("drawerMain")}</span>
          <ul className="mobile-drawer__list">
            {mainLinks.map(({ href, label, icon }) => {
              const active =
                label === t("drawerFreeDemo") ? false : isNavActive(pathname, href);
              return (
                <li key={`${href}-${label}`}>
                  <Link
                    href={href}
                    className={`mobile-drawer__link${active ? " mobile-drawer__link--active" : ""}`}
                    aria-current={active ? "page" : undefined}
                    onClick={close}
                  >
                    <span className="mobile-drawer__link-icon">
                      <NavIcon name={icon} />
                    </span>
                    <span>{label}</span>
                  </Link>
                </li>
              );
            })}
          </ul>
        </nav>
      </aside>
    </>
  );
}

export function useMobileNavDrawer() {
  const [open, setOpen] = useState(false);
  return { open, setOpen, toggle: () => setOpen((v) => !v) };
}
