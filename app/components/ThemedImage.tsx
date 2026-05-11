"use client";

import Image from "next/image";
import { useTheme } from "./ThemeContext";

type Props = {
  src: string;
  srcDark?: string;
  alt: string;
  fill?: boolean;
  sizes?: string;
  className?: string;
  width?: number;
  height?: number;
};

export default function ThemedImage({ src, srcDark, alt, ...rest }: Props) {
  const { theme, mounted } = useTheme();
  const resolved = mounted && theme === "dark" && srcDark ? srcDark : src;

  return <Image src={resolved} alt={alt} {...rest} />;
}
