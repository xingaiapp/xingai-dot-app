"use client";

import { type ReactNode } from "react";
import type { Locale } from "../i18n/translations";
import Providers from "./Providers";

export default function LocaleProviders({
  locale,
  children,
}: {
  locale: Locale;
  children: ReactNode;
}) {
  return <Providers initialLocale={locale}>{children}</Providers>;
}
