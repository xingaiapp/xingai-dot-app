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
  const cardThumb = wrapClassName.includes("app-card-thumb");
  const heroPreview = wrapClassName.includes("hero-preview-media");
  const useFill = heroFocus || cardThumb || heroPreview;

  return (
    <div
      className={`${wrapClassName}${heroFocus ? " demo-shot-wrap--hero-focus" : ""}${cardThumb ? " app-card-thumb--crop" : ""}${heroPreview ? " hero-preview--crop" : ""}`.trim()}
    >
      <ThemedImage
        src={shot.src}
        srcDark={shot.srcDark}
        alt={shot.alt}
        fill={useFill}
        {...(useFill
          ? {}
          : { width: DEMO_SCREENSHOT_WIDTH, height: DEMO_SCREENSHOT_HEIGHT })}
        sizes={sizes}
        unoptimized={unoptimized}
        className={`${imageClassName}${heroFocus ? " app-demo-shot--hero-focus" : ""}`.trim()}
      />
    </div>
  );
}
