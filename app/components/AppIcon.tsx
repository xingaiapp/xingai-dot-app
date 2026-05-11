"use client";

import Image from "next/image";
import { useTheme } from "./ThemeContext";

type Props = {
  light: string;
  dark: string;
  alt: string;
  size: number;
  className?: string;
};

export default function AppIcon({ light, dark, alt, size, className }: Props) {
  const { theme, mounted } = useTheme();
  const src = mounted && theme === "dark" ? dark : light;

  return (
    <Image
      src={src}
      alt={alt}
      width={size}
      height={size}
      className={className}
    />
  );
}
