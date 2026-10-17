import { describe, expect, it } from "vitest";
import { localizePath, parseRoutingLocale, stripLocaleFromPathname } from "../app/lib/locale-routing";

describe("locale routing", () => {
  it("keeps English at the root and prefixes zh and ko", () => {
    expect(localizePath("en", "/apps")).toBe("/apps");
    expect(localizePath("zh", "/")).toBe("/zh");
    expect(localizePath("ko", "/apps/meal-coach")).toBe("/ko/apps/meal-coach");
  });

  it("strips the locale prefix and leaves other paths alone", () => {
    expect(stripLocaleFromPathname("/zh")).toBe("/");
    expect(stripLocaleFromPathname("/ko/apps")).toBe("/apps");
    expect(stripLocaleFromPathname("/apps")).toBe("/apps");
  });

  it("falls back to English for unknown locales", () => {
    expect(parseRoutingLocale("zh")).toBe("zh");
    expect(parseRoutingLocale("fr")).toBe("en");
    expect(parseRoutingLocale(undefined)).toBe("en");
  });
});
