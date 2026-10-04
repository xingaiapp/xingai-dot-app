"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import type { AgentId, TeamCopy } from "../data/team";

type Line = TeamCopy["banter"][number];

type Props = {
  heading: string;
  lines: Line[];
  agents: TeamCopy["agents"];
  avatarOf: (id: AgentId) => string;
  watcherName: string;
  watcherCaption: string;
  watcherAvatar?: string;
};

type Phase =
  | { kind: "idle" }
  | { kind: "typing"; index: number }
  | { kind: "reveal"; index: number; chars: number }
  | { kind: "pause"; index: number }
  | { kind: "loop-wait" };

type WatcherMood = "idle" | "react" | "laugh";

function Watcher({
  name,
  caption,
  avatar,
  mood,
}: {
  name: string;
  caption: string;
  avatar: string;
  mood: WatcherMood;
}) {
  return (
    <aside
      className={`team-banter__watcher team-banter__watcher--${mood}`}
      aria-label={`${name}: ${caption}`}
    >
      <span className="team-banter__watcher-pop" aria-hidden="true">
        {mood === "laugh" ? "哈哈" : mood === "react" ? "👀" : "☕"}
      </span>
      <span className="team-avatar team-avatar--watcher team-avatar--xing-ge">
        <Image src={avatar} alt="" fill sizes="7rem" className="team-avatar__img" />
      </span>
      <p className="team-banter__watcher-line">
        <strong className="team-banter__watcher-name">{name}</strong>
        <span className="team-banter__watcher-caption">{caption}</span>
      </p>
    </aside>
  );
}

/**
 * Chat-style banter: typing dots → typewriter line → next speaker → loop.
 * Xing Ge watches from the right, smiling.
 * Reduced motion: show the full transcript at once.
 */
export default function TeamBanterChat({
  heading,
  lines,
  agents,
  avatarOf,
  watcherName,
  watcherCaption,
  watcherAvatar = "/team/xing-ge.webp",
}: Props) {
  const rootRef = useRef<HTMLDivElement>(null);
  const [inView, setInView] = useState(false);
  const [reduceMotion, setReduceMotion] = useState(false);
  const [phase, setPhase] = useState<Phase>({ kind: "idle" });
  const [visibleCount, setVisibleCount] = useState(0);

  useEffect(() => {
    setReduceMotion(window.matchMedia("(prefers-reduced-motion: reduce)").matches);
  }, []);

  useEffect(() => {
    const el = rootRef.current;
    if (!el) return;
    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry?.isIntersecting) setInView(true);
      },
      { threshold: 0.35 },
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  useEffect(() => {
    if (!inView || reduceMotion || lines.length === 0) return;
    if (phase.kind === "idle") {
      setVisibleCount(0);
      setPhase({ kind: "typing", index: 0 });
    }
  }, [inView, reduceMotion, lines.length, phase.kind]);

  useEffect(() => {
    if (!inView || reduceMotion) return;
    let timer: ReturnType<typeof setTimeout> | undefined;

    if (phase.kind === "typing") {
      timer = setTimeout(() => {
        setPhase({ kind: "reveal", index: phase.index, chars: 0 });
      }, 700);
    } else if (phase.kind === "reveal") {
      const full = lines[phase.index]?.line ?? "";
      if (phase.chars >= full.length) {
        setVisibleCount(phase.index + 1);
        timer = setTimeout(() => {
          setPhase({ kind: "pause", index: phase.index });
        }, 280);
      } else {
        timer = setTimeout(() => {
          setPhase({ kind: "reveal", index: phase.index, chars: phase.chars + 1 });
        }, 42);
      }
    } else if (phase.kind === "pause") {
      timer = setTimeout(() => {
        const next = phase.index + 1;
        if (next >= lines.length) {
          setPhase({ kind: "loop-wait" });
        } else {
          setPhase({ kind: "typing", index: next });
        }
      }, 520);
    } else if (phase.kind === "loop-wait") {
      timer = setTimeout(() => {
        setVisibleCount(0);
        setPhase({ kind: "typing", index: 0 });
      }, 2200);
    }

    return () => {
      if (timer) clearTimeout(timer);
    };
  }, [phase, inView, reduceMotion, lines]);

  const watcherMood: WatcherMood =
    phase.kind === "loop-wait"
      ? "laugh"
      : phase.kind === "typing" || phase.kind === "reveal" || phase.kind === "pause"
        ? "react"
        : "idle";

  const reactKey =
    phase.kind === "typing" || phase.kind === "reveal" || phase.kind === "pause"
      ? phase.index
      : phase.kind;

  const watcher = (
    <Watcher
      key={`watcher-${reactKey}-${watcherMood}`}
      name={watcherName}
      caption={watcherCaption}
      avatar={watcherAvatar}
      mood={reduceMotion ? "idle" : watcherMood}
    />
  );

  if (reduceMotion) {
    return (
      <div ref={rootRef} className="panel team-banter team-banter--room" aria-label={heading}>
        <p className="team-agent__label">{heading}</p>
        <div className="team-banter__stage">
          <div className="team-banter__room-chat">
            <ul>
              {lines.map(({ who, line }) => (
                <li key={who} className="team-banter__line">
                  <span className={`team-avatar team-avatar--sm team-avatar--${who}`}>
                    <Image src={avatarOf(who)} alt="" fill sizes="2.25rem" className="team-avatar__img" />
                  </span>
                  <span>
                    <strong>{agents[who].name}</strong> {line}
                  </span>
                </li>
              ))}
            </ul>
          </div>
          {watcher}
        </div>
      </div>
    );
  }

  if (!inView) {
    return (
      <div ref={rootRef} className="panel team-banter team-banter--room team-banter--live" aria-label={heading}>
        <p className="team-agent__label">{heading}</p>
        <div className="team-banter__stage">
          <div className="team-banter__room-chat">
            <ul />
          </div>
          {watcher}
        </div>
      </div>
    );
  }

  const typingIndex = phase.kind === "typing" ? phase.index : -1;
  const revealIndex = phase.kind === "reveal" ? phase.index : -1;
  const revealChars = phase.kind === "reveal" ? phase.chars : 0;

  return (
    <div ref={rootRef} className="panel team-banter team-banter--room team-banter--live" aria-label={heading}>
      <p className="team-agent__label">{heading}</p>
      <div className="team-banter__stage">
        <div className="team-banter__room-chat">
          <ul aria-live="polite">
            {lines.slice(0, visibleCount).map(({ who, line }) => (
              <li key={`done-${who}`} className="team-banter__line team-banter__line--in">
                <span className={`team-avatar team-avatar--sm team-avatar--${who}`}>
                  <Image src={avatarOf(who)} alt="" fill sizes="2.25rem" className="team-avatar__img" />
                </span>
                <span>
                  <strong>{agents[who].name}</strong> {line}
                </span>
              </li>
            ))}

            {typingIndex >= 0 && (
              <li key={`typing-${typingIndex}`} className="team-banter__line team-banter__line--typing">
                <span className={`team-avatar team-avatar--sm team-avatar--${lines[typingIndex].who}`}>
                  <Image
                    src={avatarOf(lines[typingIndex].who)}
                    alt=""
                    fill
                    sizes="2.25rem"
                    className="team-avatar__img"
                  />
                </span>
                <span className="team-banter__bubble">
                  <strong>{agents[lines[typingIndex].who].name}</strong>
                  <span className="team-banter__dots" aria-hidden="true">
                    <i />
                    <i />
                    <i />
                  </span>
                </span>
              </li>
            )}

            {revealIndex >= 0 && (
              <li key={`reveal-${revealIndex}`} className="team-banter__line team-banter__line--in">
                <span className={`team-avatar team-avatar--sm team-avatar--${lines[revealIndex].who}`}>
                  <Image
                    src={avatarOf(lines[revealIndex].who)}
                    alt=""
                    fill
                    sizes="2.25rem"
                    className="team-avatar__img"
                  />
                </span>
                <span>
                  <strong>{agents[lines[revealIndex].who].name}</strong>{" "}
                  {lines[revealIndex].line.slice(0, revealChars)}
                  <span className="team-banter__caret" aria-hidden="true" />
                </span>
              </li>
            )}
          </ul>
        </div>
        {watcher}
      </div>
    </div>
  );
}
