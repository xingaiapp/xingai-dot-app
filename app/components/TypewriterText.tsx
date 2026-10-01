"use client";

import { useEffect, useState } from "react";

type TypewriterTextProps = {
  text: string;
  className?: string;
  /** Cap on how long typing may take for long copy. */
  maxDurationMs?: number;
};

/**
 * Types `text` into view once (restarts when `text` changes).
 * Ghost copy reserves height so the hero doesn't jump.
 * Full string stays in a visually-hidden node for assistive tech.
 * Respects prefers-reduced-motion (shows full text, no caret).
 */
export default function TypewriterText({
  text,
  className,
  maxDurationMs = 14000,
}: TypewriterTextProps) {
  const [shown, setShown] = useState("");
  const [done, setDone] = useState(false);
  const [motionOk, setMotionOk] = useState(true);

  useEffect(() => {
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduce || !text) {
      setMotionOk(false);
      setShown(text);
      setDone(true);
      return;
    }

    setMotionOk(true);
    setShown("");
    setDone(false);

    const chars = Array.from(text);
    const total = chars.length;
    const duration = Math.min(maxDurationMs, Math.max(4000, total * 28));
    const started = performance.now();
    let frame = 0;

    const tick = (now: number) => {
      const t = Math.min(1, (now - started) / duration);
      const eased = 1 - (1 - t) * (1 - t);
      const count = Math.min(total, Math.floor(eased * total));
      setShown(chars.slice(0, count).join(""));
      if (count >= total) {
        setDone(true);
        return;
      }
      frame = window.requestAnimationFrame(tick);
    };

    frame = window.requestAnimationFrame(tick);
    return () => window.cancelAnimationFrame(frame);
  }, [text, maxDurationMs]);

  return (
    <p className={className}>
      <span className="visually-hidden">{text}</span>
      <span className="typewriter" aria-hidden="true">
        <span className="typewriter__ghost">{text}</span>
        <span className="typewriter__live">
          {shown}
          {motionOk ? (
            <span
              className={`typewriter__caret${done ? " typewriter__caret--done" : ""}`}
            />
          ) : null}
        </span>
      </span>
    </p>
  );
}
