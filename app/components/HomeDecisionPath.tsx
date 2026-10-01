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
            className={`home-path__step${step.id === "decide" ? " home-path__step--final" : ""}`}
          >
            <span className="home-path__num" aria-hidden="true">
              {index + 1}
            </span>
            <h3 className="home-path__label">{t(step.label)}</h3>
            <p className="home-path__body">{t(step.body)}</p>
            <p className="home-path__example">{t(step.example)}</p>
          </li>
        ))}
      </ol>
      <p className="about-story-link">
        <LocaleLink href="/apps/travel-ai">{t("homePathTryTravel")} &rarr;</LocaleLink>
      </p>
    </section>
  );
}
