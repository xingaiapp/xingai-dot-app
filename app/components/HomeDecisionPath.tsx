"use client";

import LocaleLink from "./LocaleLink";
import { useTranslation } from "../i18n/LanguageContext";

/**
 * Homepage band: question → research → challenge → evidence → you decide.
 * Worked through a travel example on purpose — investing stays research-only.
 */
const steps = [
  { id: "question", label: "homePathQuestion", body: "homePathQuestionBody", example: "homePathQuestionExample" },
  { id: "research", label: "homePathResearch", body: "homePathResearchBody", example: "homePathResearchExample" },
  { id: "challenge", label: "homePathChallenge", body: "homePathChallengeBody", example: "homePathChallengeExample" },
  { id: "evidence", label: "homePathEvidence", body: "homePathEvidenceBody", example: "homePathEvidenceExample" },
  { id: "decide", label: "homePathDecide", body: "homePathDecideBody", example: "homePathDecideExample" },
] as const;

export type StepId = (typeof steps)[number]["id"];

export function StepIcon({ id, size = 24 }: { id: StepId; size?: number }) {
  const common = {
    width: size,
    height: size,
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: 1.8,
    strokeLinecap: "round" as const,
    strokeLinejoin: "round" as const,
    "aria-hidden": true,
  };

  if (id === "question") {
    return (
      <svg {...common}>
        <path d="M21 12a8.5 8.5 0 0 1-12.4 7.6L3.5 21l1.4-4.6A8.5 8.5 0 1 1 21 12z" />
        <path d="M9.8 9.6a2.3 2.3 0 1 1 3.3 2.1c-.6.3-1.1.8-1.1 1.5v.3" />
        <path d="M12 16.2h.01" />
      </svg>
    );
  }
  if (id === "research") {
    return (
      <svg {...common}>
        <circle cx="10.5" cy="10.5" r="6.5" />
        <path d="m20 20-4.8-4.8" />
      </svg>
    );
  }
  if (id === "challenge") {
    return (
      <svg {...common}>
        <path d="M12 3.5 2.8 19.5h18.4z" />
        <path d="M12 10v4" />
        <path d="M12 16.8h.01" />
      </svg>
    );
  }
  if (id === "evidence") {
    return (
      <svg {...common}>
        <path d="M9 3.5h6v3H9z" />
        <path d="M15 5h3.5v15.5h-13V5H9" />
        <path d="m9 13.5 2 2 4-4" />
      </svg>
    );
  }
  return (
    <svg {...common}>
      <circle cx="12" cy="12" r="9" />
      <path d="m8 12.2 2.8 2.8L16.2 9.5" />
    </svg>
  );
}

export default function HomeDecisionPath() {
  const { t } = useTranslation();

  return (
    <section className="home-path" aria-labelledby="home-path-heading">
      <h2 id="home-path-heading" className="section-title">
        {t("homePathHeading")}
      </h2>
      <p className="section-lead">{t("homePathLead")}</p>
      <ol className="home-path__steps">
        {steps.map((step, index) => (
          <li
            key={step.id}
            data-tone={step.id}
            className={`home-path__step${step.id === "decide" ? " home-path__step--final" : ""}`}
          >
            <span className="home-path__node">
              <StepIcon id={step.id} />
            </span>
            <div className="home-path__content">
              <span className="home-path__num" aria-hidden="true">
                {String(index + 1).padStart(2, "0")}
              </span>
              <h3 className="home-path__label">{t(step.label)}</h3>
              <p className="home-path__body">{t(step.body)}</p>
              <p className="home-path__example">{t(step.example)}</p>
            </div>
          </li>
        ))}
      </ol>
      <p className="about-story-link">
        <LocaleLink href="/apps/travel-ai">{t("homePathTryTravel")} &rarr;</LocaleLink>
      </p>
    </section>
  );
}
