"use client";

import { useTheme } from "./ThemeContext";

export default function ThemeToggle() {
  const { theme, setTheme, mounted } = useTheme();

  if (!mounted) return null;

  return (
    <div className="theme-toggle" role="group" aria-label="Theme">
      <button
        className={`theme-toggle__option${
          theme === "light" ? " theme-toggle__option--active" : ""
        }`}
        onClick={() => setTheme("light")}
        aria-pressed={theme === "light"}
        title="Light mode"
        type="button"
      >
        <span aria-hidden="true">☀</span>
        <span className="theme-toggle__label">Light</span>
      </button>
      <button
        className={`theme-toggle__option${
          theme === "dark" ? " theme-toggle__option--active" : ""
        }`}
        onClick={() => setTheme("dark")}
        aria-pressed={theme === "dark"}
        title="Dark mode"
        type="button"
      >
        <span aria-hidden="true">☾</span>
        <span className="theme-toggle__label">Dark</span>
      </button>
    </div>
  );
}
