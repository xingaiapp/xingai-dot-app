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

const STORAGE_KEY = "theme";
const LEGACY_STORAGE_KEY = "xingai-theme";

const THEME_COLORS: Record<Theme, string> = {
  light: "#ffffff",
  dark: "#0c0e14",
};

function readStoredTheme(): Theme | null {
  if (typeof window === "undefined") return null;
  const stored =
    localStorage.getItem(STORAGE_KEY) ?? localStorage.getItem(LEGACY_STORAGE_KEY);
  return stored === "light" || stored === "dark" ? stored : null;
}

function readTheme(): Theme {
  const stored = readStoredTheme();
  if (stored) return stored;
  const attr = document.documentElement.getAttribute("data-theme");
  if (attr === "dark") return "dark";
  return "light";
}

function syncThemeToDocument(next: Theme) {
  document.documentElement.setAttribute("data-theme", next);
  localStorage.setItem(STORAGE_KEY, next);
  localStorage.removeItem(LEGACY_STORAGE_KEY);
  const meta = document.querySelector('meta[name="theme-color"]');
  if (meta) meta.setAttribute("content", THEME_COLORS[next]);
}

type ThemeContextValue = {
  theme: Theme;
  toggle: () => void;
  setTheme: (theme: Theme) => void;
  mounted: boolean;
};

const ThemeContext = createContext<ThemeContextValue | null>(null);

export function ThemeProvider({ children }: { children: ReactNode }) {
  const [theme, setThemeState] = useState<Theme>(() =>
    typeof window === "undefined" ? "light" : readTheme()
  );
  const [mounted, setMounted] = useState(false);

  useLayoutEffect(() => {
    const initial = readTheme();
    syncThemeToDocument(initial);
    setThemeState(initial);
    setMounted(true);
  }, []);

  useEffect(() => {
    const onStorage = (event: StorageEvent) => {
      if (event.key !== STORAGE_KEY && event.key !== LEGACY_STORAGE_KEY) return;
      if (event.newValue !== "light" && event.newValue !== "dark") return;
      syncThemeToDocument(event.newValue);
      setThemeState(event.newValue);
    };
    window.addEventListener("storage", onStorage);
    return () => window.removeEventListener("storage", onStorage);
  }, []);

  const applyTheme = useCallback((next: Theme) => {
    syncThemeToDocument(next);
    setThemeState(next);
  }, []);

  const toggle = useCallback(() => {
    setThemeState((prev) => {
      const next: Theme = prev === "light" ? "dark" : "light";
      syncThemeToDocument(next);
      return next;
    });
  }, []);

  return (
    <ThemeContext.Provider value={{ theme, toggle, setTheme: applyTheme, mounted }}>
      {children}
    </ThemeContext.Provider>
  );
}

export function useTheme() {
  const ctx = useContext(ThemeContext);
  if (!ctx) throw new Error("useTheme must be used within ThemeProvider");
  return ctx;
}
