import ThemedImage from "./ThemedImage";
import { DEMO_SCREENSHOT_HEIGHT, DEMO_SCREENSHOT_WIDTH } from "../lib/demo-screenshot";

export type DemoScreenshotShot = {
  src: string;
  srcDark?: string;
  alt: string;
  framing?: "hero-focus";
};

type Props = {
  shot: DemoScreenshotShot;
  sizes: string;
  wrapClassName?: string;
  imageClassName?: string;
  unoptimized?: boolean;
};

export default function AppDemoScreenshot({
  shot,
  sizes,
  wrapClassName = "",
  imageClassName = "app-demo-shot",
  unoptimized,
}: Props) {
  const heroFocus = shot.framing === "hero-focus";

  return (
    <div
      className={`${wrapClassName}${heroFocus ? " demo-shot-wrap--hero-focus" : ""}`.trim()}
    >
      <ThemedImage
        src={shot.src}
        srcDark={shot.srcDark}
        alt={shot.alt}
        fill={heroFocus}
        width={DEMO_SCREENSHOT_WIDTH}
        height={DEMO_SCREENSHOT_HEIGHT}
        sizes={sizes}
        unoptimized={unoptimized}
        className={`${imageClassName}${heroFocus ? " app-demo-shot--hero-focus" : ""}`.trim()}
      />
    </div>
  );
}
