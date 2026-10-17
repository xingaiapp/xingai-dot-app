import { describe, expect, it } from "vitest";
import translations from "../app/i18n/translations";

const locales = ["en", "zh", "ko"] as const;
const keys = (l: (typeof locales)[number]) => Object.keys(translations[l]).sort();

describe("translations", () => {
  it("has identical key sets in every locale", () => {
    for (const l of ["zh", "ko"] as const) {
      const missing = keys("en").filter((k) => !keys(l).includes(k));
      const extra = keys(l).filter((k) => !keys("en").includes(k));
      expect({ locale: l, missing, extra }).toEqual({ locale: l, missing: [], extra: [] });
    }
  });

  it("has no empty strings", () => {
    for (const l of locales) {
      const empty = Object.entries(translations[l]).filter(([, v]) => typeof v === "string" && v.trim() === "");
      expect({ locale: l, empty: empty.map(([k]) => k) }).toEqual({ locale: l, empty: [] });
    }
  });

  it("does not leave long English sentences in zh or ko", () => {
    const en = translations.en as Record<string, unknown>;
    for (const l of ["zh", "ko"] as const) {
      const same = Object.entries(translations[l] as Record<string, unknown>)
        .filter(([k, v]) => typeof v === "string" && v.length > 40 && v === en[k])
        .map(([k]) => k);
      expect({ locale: l, same }).toEqual({ locale: l, same: [] });
    }
  });
});
