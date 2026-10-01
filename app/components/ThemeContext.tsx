"use client";

import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useLayoutEffect,
  useState,
  type ReactNode,
} from "react";

type Theme = "light" | "dark";
export type ThemePreference = Theme | "system";

/*
 * Only an explicit choice is stored. No stored value = follow the OS.
 * The old "theme" key was written as "light" for every visitor (not just
 * people who chose it), so only a legacy "dark" is migrated as a choice.
 * Keep in sync with the init script in app/layout.tsx.
 */
const STORAGE_KEY = "xingai.theme";
const LEGACY_STORAGE_KEYS = ["theme", "xingai-theme"];
const DARK_QUERY = "(prefers-color-scheme: dark)";

const THEME_COLORS: Record<Theme, string> = {
  light: "#ffffff",
  dark: "#0c0e14",
};

function readPreference(): ThemePreference {
  if (typeof window === "undefined") return "system";
  const stored = localStorage.getItem(STORAGE_KEY);
  if (stored === "light" || stored === "dark") return stored;
  const legacyDark = LEGACY_STORAGE_KEYS.some((key) => localStorage.getItem(key) === "dark");
  LEGACY_STORAGE_KEYS.forEach((key) => localStorage.removeItem(key));
  if (legacyDark) {
    localStorage.setItem(STORAGE_KEY, "dark");
    return "dark";
  }
  return "system";
}

function systemTheme(): Theme {
  return window.matchMedia(DARK_QUERY).matches ? "dark" : "light";
}

function resolve(preference: ThemePreference): Theme {
  return preference === "system" ? systemTheme() : preference;
}

function syncThemeToDocument(next: Theme) {
  const root = document.documentElement;
  root.setAttribute("data-theme", next);
  root.style.colorScheme = next;
  document
    .querySelectorAll('meta[name="theme-color"]')
    .forEach((meta) => meta.setAttribute("content", THEME_COLORS[next]));
}

function storePreference(preference: ThemePreference) {
  if (preference === "system") localStorage.removeItem(STORAGE_KEY);
  else localStorage.setItem(STORAGE_KEY, preference);
}

type ThemeContextValue = {
  /** The theme actually applied to the page. */
  theme: Theme;
  /** What the visitor chose; "system" follows the OS setting. */
  preference: ThemePreference;
  setPreference: (preference: ThemePreference) => void;
  mounted: boolean;
};

const ThemeContext = createContext<ThemeContextValue | null>(null);

export function ThemeProvider({ children }: { children: ReactNode }) {
  /* Match SSR default; sync from localStorage in useLayoutEffect */
  const [preference, setPreferenceState] = useState<ThemePreference>("system");
  const [theme, setThemeState] = useState<Theme>("light");
  const [mounted, setMounted] = useState(false);

  useLayoutEffect(() => {
    const initialPreference = readPreference();
    const initialTheme = resolve(initialPreference);
    syncThemeToDocument(initialTheme);
    setPreferenceState(initialPreference);
    setThemeState(initialTheme);
    setMounted(true);
  }, []);

  /* Follow OS changes while on "system" */
  useEffect(() => {
    if (preference !== "system") return;
    const media = window.matchMedia(DARK_QUERY);
    const onChange = () => {
      const next = systemTheme();
      syncThemeToDocument(next);
      setThemeState(next);
    };
    media.addEventListener("change", onChange);
    return () => media.removeEventListener("change", onChange);
  }, [preference]);

  /* Keep other tabs in step */
  useEffect(() => {
    const onStorage = (event: StorageEvent) => {
      if (event.key !== STORAGE_KEY) return;
      const next: ThemePreference =
        event.newValue === "light" || event.newValue === "dark" ? event.newValue : "system";
      const resolved = resolve(next);
      syncThemeToDocument(resolved);
      setPreferenceState(next);
      setThemeState(resolved);
    };
    window.addEventListener("storage", onStorage);
    return () => window.removeEventListener("storage", onStorage);
  }, []);

  const setPreference = useCallback((next: ThemePreference) => {
    const resolved = resolve(next);
    storePreference(next);
    syncThemeToDocument(resolved);
    setPreferenceState(next);
    setThemeState(resolved);
  }, []);

  return (
    <ThemeContext.Provider value={{ theme, preference, setPreference, mounted }}>
      {children}
    </ThemeContext.Provider>
  );
}

export function useTheme() {
  const ctx = useContext(ThemeContext);
  if (!ctx) throw new Error("useTheme must be used within ThemeProvider");
  return ctx;
}
