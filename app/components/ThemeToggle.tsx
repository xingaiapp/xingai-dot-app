"use client";

import { useTheme } from "./ThemeContext";

export default function ThemeToggle() {
  const { theme, toggle, mounted } = useTheme();

  if (!mounted) return null;

  return (
    <button
      className="theme-toggle"
      onClick={toggle}
      aria-label={`Switch to ${theme === "light" ? "dark" : "light"} mode`}
      title={`Switch to ${theme === "light" ? "dark" : "light"} mode`}
      type="button"
    >
      <span className="icon-sun" aria-hidden="true">☀️</span>
      <span className="icon-moon" aria-hidden="true">🌙</span>
    </button>
  );
}
