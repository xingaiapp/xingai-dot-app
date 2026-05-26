"use client";

import { useEffect, useRef, useState } from "react";
import { useTranslation } from "../i18n/LanguageContext";
import { useTheme } from "./ThemeContext";

const themes = ["light", "dark"] as const;
type ThemeValue = (typeof themes)[number];

const themeIcons: Record<ThemeValue, string> = {
  light: "☀",
  dark: "☾",
};

export default function ThemeToggle() {
  const { theme, setTheme, mounted } = useTheme();
  const { t } = useTranslation();
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  const themeLabelKeys: Record<ThemeValue, "themeLight" | "themeDark"> = {
    light: "themeLight",
    dark: "themeDark",
  };

  useEffect(() => {
    const handleClick = (e: MouseEvent) => {
      if (ref.current && !ref.current.contains(e.target as Node)) {
        setOpen(false);
      }
    };
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    document.addEventListener("mousedown", handleClick);
    document.addEventListener("keydown", handleKey);
    return () => {
      document.removeEventListener("mousedown", handleClick);
      document.removeEventListener("keydown", handleKey);
    };
  }, []);

  const handleSelect = (value: ThemeValue) => {
    setTheme(value);
    setOpen(false);
  };

  return (
    <div className="lang-dropdown theme-dropdown" ref={ref}>
      <button
        type="button"
        className="lang-trigger"
        onClick={() => setOpen(!open)}
        aria-expanded={open}
        aria-haspopup="listbox"
        aria-label={
          mounted
            ? `${t("themeLabel")}: ${t(themeLabelKeys[theme])}`
            : t("themeLabel")
        }
        suppressHydrationWarning
      >
        <span className="theme-dropdown__icon" aria-hidden="true">
          {mounted ? themeIcons[theme] : "◐"}
        </span>
        <span className="theme-dropdown__label" suppressHydrationWarning>
          {mounted ? t(themeLabelKeys[theme]) : t("themeLabel")}
        </span>
        <span className="lang-chevron theme-dropdown__chevron" aria-hidden="true">
          ▾
        </span>
      </button>
      {open ? (
        <ul className="lang-menu" role="listbox" aria-label={t("themeLabel")}>
          {themes.map((value) => (
            <li key={value} role="option" aria-selected={theme === value}>
              <button
                type="button"
                className={`lang-option${theme === value ? " lang-option--active" : ""}`}
                onClick={() => handleSelect(value)}
              >
                <span className="theme-dropdown__icon" aria-hidden="true">
                  {themeIcons[value]}
                </span>
                {t(themeLabelKeys[value])}
              </button>
            </li>
          ))}
        </ul>
      ) : null}
    </div>
  );
}
