"use client";

import { useLayoutEffect, useRef, type ReactNode } from "react";
import LocaleLink from "./LocaleLink";
import { useTranslation } from "../i18n/LanguageContext";
import { systemLayers, type SystemStage } from "../data/ecosystem";

/**
 * Compact system spine for the homepage. Same layers/stages as /story.
 * Desktop: six cards on a circle + flowing arc wires. Mobile: stacked list.
 * Visual reference: docs/ux/home-system-loop-example.jpg (icons/status, not layout).
 */
export default function HomeSystemLoop() {
  const { t } = useTranslation();
  const boardRef = useRef<HTMLDivElement>(null);
  const wiresRef = useRef<SVGSVGElement>(null);
  const stageLabels: Record<SystemStage, string> = {
    available: t("storyStageAvailable"),
    building: t("storyStageBuilding"),
    planned: t("storyStagePlanned"),
  };

  useLayoutEffect(() => {
    const board = boardRef.current;
    const wires = wiresRef.current;
    if (!board || !wires) return;

    const clearWires = () => {
      wires.replaceChildren();
      wires.removeAttribute("viewBox");
      wires.setAttribute("width", "0");
      wires.setAttribute("height", "0");
      board.dataset.wires = "off";
      board.dataset.layout = "stack";
      board.querySelectorAll<HTMLElement>("[data-home-loop-step]").forEach((el) => {
        el.style.left = "";
        el.style.top = "";
        el.style.width = "";
      });
    };

    const paint = () => {
      const steps = [...board.querySelectorAll<HTMLElement>("[data-home-loop-step]")];
      const narrow = window.matchMedia("(max-width: 35.99rem)").matches;
      const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
      const n = steps.length;

      if (narrow || n < 2) {
        clearWires();
        return;
      }

      board.dataset.layout = "circle";
      board.dataset.wires = "on";

      const br = board.getBoundingClientRect();
      const w = br.width;
      const h = br.height;
      wires.setAttribute("viewBox", `0 0 ${w} ${h}`);
      wires.setAttribute("width", String(w));
      wires.setAttribute("height", String(h));

      const cx = w / 2;
      const cy = h / 2;
      // Keep cards inside the board with breathing room.
      const cardW = Math.min(124, Math.max(100, w * 0.175));
      const cardH = 118;
      const rx = Math.max(0, (w - cardW) / 2 - 10);
      const ry = Math.max(0, (h - cardH) / 2 - 10);
      const wireRx = rx * 0.72;
      const wireRy = ry * 0.72;
      const hubR = Math.min(wireRx, wireRy) * 0.38;

      const angles = steps.map((_, i) => -Math.PI / 2 + (i / n) * Math.PI * 2);

      steps.forEach((el, i) => {
        const a = angles[i];
        const x = cx + rx * Math.cos(a) - cardW / 2;
        const y = cy + ry * Math.sin(a) - cardH / 2;
        el.style.width = `${cardW}px`;
        el.style.left = `${x}px`;
        el.style.top = `${y}px`;
      });

      const flowClass = reduce
        ? "home-loop__wire-flow home-loop__wire-flow--static"
        : "home-loop__wire-flow";
      const frag = document.createDocumentFragment();

      const ns = "http://www.w3.org/2000/svg";
      const defs = document.createElementNS(ns, "defs");
      const marker = document.createElementNS(ns, "marker");
      marker.setAttribute("id", "home-loop-arrow");
      marker.setAttribute("viewBox", "0 0 10 10");
      marker.setAttribute("refX", "8");
      marker.setAttribute("refY", "5");
      marker.setAttribute("markerWidth", "5.5");
      marker.setAttribute("markerHeight", "5.5");
      marker.setAttribute("orient", "auto-start-reverse");
      marker.setAttribute("markerUnits", "strokeWidth");
      const tip = document.createElementNS(ns, "path");
      tip.setAttribute("d", "M 1 1 L 9 5 L 1 9 z");
      tip.setAttribute("class", "home-loop__arrow-tip");
      marker.appendChild(tip);
      defs.appendChild(marker);
      frag.appendChild(defs);

      // Center circle (hub track).
      const hub = document.createElementNS(ns, "circle");
      hub.setAttribute("cx", String(cx));
      hub.setAttribute("cy", String(cy));
      hub.setAttribute("r", String(hubR));
      hub.setAttribute("class", "home-loop__center-ring");
      frag.appendChild(hub);

      const hubFlow = document.createElementNS(ns, "circle");
      hubFlow.setAttribute("cx", String(cx));
      hubFlow.setAttribute("cy", String(cy));
      hubFlow.setAttribute("r", String(hubR));
      hubFlow.setAttribute(
        "class",
        reduce
          ? "home-loop__center-ring-flow home-loop__center-ring-flow--static"
          : "home-loop__center-ring-flow",
      );
      frag.appendChild(hubFlow);

      const appendPath = (d: string, baseClass: string, flowExtra = "") => {
        const base = document.createElementNS(ns, "path");
        base.setAttribute("d", d);
        base.setAttribute("class", baseClass);
        base.setAttribute("marker-end", "url(#home-loop-arrow)");
        frag.appendChild(base);

        const flow = document.createElementNS(ns, "path");
        flow.setAttribute("d", d);
        flow.setAttribute("class", `${flowClass}${flowExtra ? ` ${flowExtra}` : ""}`);
        frag.appendChild(flow);
      };

      const ellipseArc = (a0: number, a1: number) => {
        const x0 = cx + wireRx * Math.cos(a0);
        const y0 = cy + wireRy * Math.sin(a0);
        const x1 = cx + wireRx * Math.cos(a1);
        const y1 = cy + wireRy * Math.sin(a1);
        const delta = ((a1 - a0) % (Math.PI * 2) + Math.PI * 2) % (Math.PI * 2);
        const large = delta > Math.PI ? 1 : 0;
        return `M ${x0} ${y0} A ${wireRx} ${wireRy} 0 ${large} 1 ${x1} ${y1}`;
      };

      for (let i = 0; i < n; i += 1) {
        const a0 = angles[i];
        const a1 = angles[(i + 1) % n];
        // Pull endpoints slightly toward the next angle so arcs sit between cards.
        const span = ((a1 - a0) % (Math.PI * 2) + Math.PI * 2) % (Math.PI * 2);
        const inset = Math.min(0.22, span * 0.28);
        const d = ellipseArc(a0 + inset, a1 - inset);
        const isReturn = i === n - 1;
        appendPath(
          d,
          isReturn ? "home-loop__wire home-loop__wire--return" : "home-loop__wire",
          isReturn ? "home-loop__wire-flow--return" : "",
        );
      }

      wires.replaceChildren(frag);
    };

    paint();
    const ro = new ResizeObserver(paint);
    ro.observe(board);
    window.addEventListener("resize", paint);
    const mqNarrow = window.matchMedia("(max-width: 35.99rem)");
    const mqMotion = window.matchMedia("(prefers-reduced-motion: reduce)");
    mqNarrow.addEventListener("change", paint);
    mqMotion.addEventListener("change", paint);

    return () => {
      ro.disconnect();
      window.removeEventListener("resize", paint);
      mqNarrow.removeEventListener("change", paint);
      mqMotion.removeEventListener("change", paint);
    };
  }, []);

  return (
    <section className="home-loop" aria-labelledby="home-loop-heading">
      <div className="home-loop__intro">
        <h2 id="home-loop-heading" className="section-title">
          {t("homeLoopHeading")}
        </h2>
        <p className="section-lead">{t("homeLoopLead")}</p>
      </div>

      <LocaleLink href="/story" className="home-loop__card">
        <p className="home-loop__eyebrow">{t("homeLoopEyebrow")}</p>
        <div className="home-loop__board" ref={boardRef} data-wires="off" data-layout="stack">
          <svg
            ref={wiresRef}
            className="home-loop__wires"
            aria-hidden="true"
            focusable="false"
          />
          <div className="home-loop__hub" aria-hidden="true">
            <span className="home-loop__hub-ring" />
            <span className="home-loop__hub-mark">↺</span>
            <span className="home-loop__hub-text">{t("homeLoopBack")}</span>
          </div>
          <ol className="home-loop__steps">
            <li
              className="home-loop__step home-loop__step--idea"
              data-home-loop-step
              data-tone="idea"
            >
              <span className="home-loop__num" aria-hidden="true">
                1
              </span>
              <LoopIcon kind="idea" />
              <span className="home-loop__name">{t("homeLoopIdea")}</span>
              <span className="home-loop__stage home-loop__stage--start">
                {t("homeLoopIdeaRole")}
              </span>
            </li>
            {systemLayers.map((layer, index) => (
              <li
                key={layer.id}
                className={`home-loop__step home-loop__step--${layer.stage}`}
                data-home-loop-step
                data-home-loop-id={layer.id}
                data-tone={layer.id}
              >
                <span className="home-loop__num" aria-hidden="true">
                  {index + 2}
                </span>
                <LoopIcon kind={layer.id} />
                <span className="home-loop__name">
                  {layer.ideaId ? (
                    <span className="home-loop__id">{layer.ideaId}</span>
                  ) : null}
                  {t(layer.nameKey)}
                </span>
                <span className={`home-loop__stage home-loop__stage--${layer.stage}`}>
                  {stageLabels[layer.stage]}
                </span>
              </li>
            ))}
          </ol>
        </div>
        <p className="home-loop__back home-loop__back--mobile">
          <span aria-hidden="true">↺ </span>
          {t("homeLoopBack")}
        </p>
        <span className="home-loop__cta">
          {t("homeLoopCta")} <span aria-hidden="true">→</span>
        </span>
      </LocaleLink>
    </section>
  );
}

type LoopIconKind = "idea" | "vault" | "orchestrator" | "agents" | "apps" | "trust";

function LoopIcon({ kind }: { kind: LoopIconKind }) {
  // Same stroke language for every node (rounded 24px glyphs).
  const paths: Record<LoopIconKind, ReactNode> = {
    idea: (
      <>
        <path d="M12 3.5a5.5 5.5 0 0 0-3.2 9.9V16h6.4v-2.6A5.5 5.5 0 0 0 12 3.5z" />
        <path d="M10 19h4" />
        <path d="M10.5 21.5h3" />
      </>
    ),
    vault: (
      <>
        <rect x="4.5" y="5" width="15" height="14" rx="2" />
        <circle cx="12" cy="12" r="2.4" />
        <path d="M12 14.4v2.2" />
      </>
    ),
    orchestrator: (
      <>
        <ellipse cx="12" cy="11" rx="6.5" ry="7.5" />
        <path d="M9.2 10h5.6M9.8 13h4.4" />
      </>
    ),
    agents: (
      <>
        <circle cx="12" cy="6.5" r="2.1" />
        <circle cx="6.2" cy="16" r="2.1" />
        <circle cx="17.8" cy="16" r="2.1" />
        <path d="M12 8.6v3.2M10.3 13.8 7.8 14.6M13.7 13.8 16.2 14.6" />
      </>
    ),
    apps: (
      <>
        <rect x="4.5" y="4.5" width="6" height="6" rx="1.2" />
        <rect x="13.5" y="4.5" width="6" height="6" rx="1.2" />
        <rect x="4.5" y="13.5" width="6" height="6" rx="1.2" />
        <rect x="13.5" y="13.5" width="6" height="6" rx="1.2" />
      </>
    ),
    trust: (
      <>
        <path d="M4.5 15.5 8.2 11.8l2.8 2.8 4.8-5.6 3.7 3.5" />
        <circle cx="17.2" cy="17.2" r="3" />
        <path d="M16.1 17.2h2.2M17.2 16.1v2.2" />
      </>
    ),
  };

  return (
    <svg
      className="home-loop__icon"
      viewBox="0 0 24 24"
      width="24"
      height="24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.65"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      focusable="false"
    >
      {paths[kind]}
    </svg>
  );
}
