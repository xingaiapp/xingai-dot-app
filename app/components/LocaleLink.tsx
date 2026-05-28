"use client";

import Link from "next/link";
import type { ComponentProps } from "react";
import { useLocalePath } from "../lib/use-locale-path";

type Props = Omit<ComponentProps<typeof Link>, "href"> & {
  href: string;
};

/** Internal path link with current locale prefix (`/zh`, `/ko`). */
export default function LocaleLink({ href, ...props }: Props) {
  const localePath = useLocalePath();
  if (href.startsWith("http") || href.startsWith("mailto:")) {
    return <Link href={href} {...props} />;
  }
  return <Link href={localePath(href)} {...props} />;
}
