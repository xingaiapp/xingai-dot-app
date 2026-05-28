import { cookies, headers } from "next/headers";
import type { Locale } from "../i18n/translations";
import { isLocale, LOCALE_COOKIE } from "./locale-constants";

export { LOCALE_COOKIE, isLocale } from "./locale-constants";

export async function getServerLocale(): Promise<Locale> {
  const headerStore = await headers();
  const fromMiddleware = headerStore.get("x-locale");
  if (isLocale(fromMiddleware)) return fromMiddleware;

  const cookieStore = await cookies();
  const stored = cookieStore.get(LOCALE_COOKIE)?.value;
  return isLocale(stored) ? stored : "en";
}
