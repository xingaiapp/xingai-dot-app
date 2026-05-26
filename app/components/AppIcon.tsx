"use client";

import Image from "next/image";
import { APP_ICON_SIZE } from "../lib/app-icon";
import { useTheme } from "./ThemeContext";

type Props = {
  light: string;
  dark: string;
  alt: string;
  size?: number;
  className?: string;
};

export default function AppIcon({
  light,
  dark,
  alt,
  size = APP_ICON_SIZE,
  className,
}: Props) {
  const { theme, mounted } = useTheme();
  const src = mounted && theme === "dark" ? dark : light;

  return (
    <span
      className={["app-icon-frame", className].filter(Boolean).join(" ")}
      style={{ width: size, height: size }}
      aria-hidden={alt === "" ? true : undefined}
    >
      <Image
        src={src}
        alt={alt}
        width={size}
        height={size}
        className="app-icon-frame__img"
      />
    </span>
  );
}
