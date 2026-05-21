"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useCallback, useEffect, useState } from "react";
import { useTranslation } from "../i18n/LanguageContext";
import { isNavActive, primaryNavLinks } from "../lib/nav-links";

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
          <span className="mobile-drawer__title">{t("navMenu")}</span>
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
          <ul className="mobile-drawer__list">
            {primaryNavLinks.map(({ href, key }) => {
              const active = isNavActive(pathname, href);
              return (
                <li key={href}>
                  <Link
                    href={href}
                    className={`mobile-drawer__link${active ? " mobile-drawer__link--active" : ""}`}
                    aria-current={active ? "page" : undefined}
                    onClick={close}
                  >
                    {t(key)}
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
