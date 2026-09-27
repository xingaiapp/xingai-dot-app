"use client";

import LocaleLink from "./LocaleLink";
import { useTranslation } from "../i18n/LanguageContext";
import { systemLayers, type SystemStage } from "../data/ecosystem";

/**
 * Compact version of the /story loop for the homepage. Same layers and stage
 * tags as the Story page (both read `systemLayers`), so the two never disagree.
 */
export default function HomeSystemLoop() {
  const { t } = useTranslation();
  const stageLabels: Record<SystemStage, string> = {
    available: t("storyStageAvailable"),
    building: t("storyStageBuilding"),
    planned: t("storyStagePlanned"),
  };

  return (
    <section className="home-loop" aria-labelledby="home-loop-heading">
      <h2 id="home-loop-heading" className="section-title">
        {t("homeLoopHeading")}
      </h2>
      <p className="section-lead">{t("homeLoopLead")}</p>

      <LocaleLink href="/story" className="home-loop__card">
        <ol className="home-loop__steps">
          <li className="home-loop__step home-loop__step--idea">
            <span className="home-loop__name">{t("homeLoopIdea")}</span>
          </li>
          {systemLayers.map((layer) => (
            <li key={layer.id} className="home-loop__step">
              <span className="home-loop__name">
                {layer.ideaId ? <span className="home-loop__id">{layer.ideaId}</span> : null}
                {t(layer.nameKey)}
              </span>
              <span className={`home-loop__stage home-loop__stage--${layer.stage}`}>
                {stageLabels[layer.stage]}
              </span>
            </li>
          ))}
        </ol>
        <p className="home-loop__back">
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
