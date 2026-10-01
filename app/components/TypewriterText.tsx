"use client";

import { createElement, useEffect, useState, type ElementType } from "react";

type TypewriterTextProps = {
  text: string;
  className?: string;
  /** Element tag for the outer wrapper (default `p`). */
  as?: "p" | "h2" | "h3" | "span";
  /** Milliseconds per letter — letter-by-letter, linear. */
  msPerChar?: number;
  /** Cap on how long typing may take. */
  maxDurationMs?: number;
  /** Replay forever (respects reduced motion — shows static text). */
  loop?: boolean;
  /** Pause with full text before clearing and typing again. */
  loopPauseMs?: number;
};

/**
 * Types `text` letter by letter (restarts when `text` changes).
 * Ghost copy reserves height so layout doesn't jump.
 * Full string stays in a visually-hidden node for assistive tech.
 * Respects prefers-reduced-motion (shows full text, no caret).
 */
export default function TypewriterText({
  text,
  className,
  as = "p",
  msPerChar = 85,
  maxDurationMs = 8000,
  loop = false,
  loopPauseMs = 2400,
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
    let frame = 0;
    let pauseTimer = 0;
    let cancelled = false;

    const chars = Array.from(text);
    const total = chars.length;
    const duration = Math.min(maxDurationMs, Math.max(msPerChar * 4, total * msPerChar));

    const runCycle = () => {
      if (cancelled) return;
      setShown("");
      setDone(false);
      const started = performance.now();

      const tick = (now: number) => {
        if (cancelled) return;
        const t = Math.min(1, (now - started) / duration);
        const count = Math.min(total, Math.floor(t * total));
        setShown(chars.slice(0, count).join(""));
        if (count >= total) {
          setDone(true);
          if (loop) {
            pauseTimer = window.setTimeout(runCycle, loopPauseMs);
          }
          return;
        }
        frame = window.requestAnimationFrame(tick);
      };

      frame = window.requestAnimationFrame(tick);
    };

    runCycle();

    return () => {
      cancelled = true;
      window.cancelAnimationFrame(frame);
      window.clearTimeout(pauseTimer);
    };
  }, [text, maxDurationMs, msPerChar, loop, loopPauseMs]);

  const Tag = as as ElementType;
  // When looping, keep the caret blinking between cycles (no fade-out).
  const caretClass =
    done && !loop
      ? "typewriter__caret typewriter__caret--done"
      : "typewriter__caret";

  return createElement(
    Tag,
    { className },
    <span className="visually-hidden">{text}</span>,
    <span className="typewriter" aria-hidden="true">
      <span className="typewriter__ghost">{text}</span>
      <span className="typewriter__live">
        {shown}
        {motionOk ? <span className={caretClass} /> : null}
      </span>
    </span>,
  );
}
