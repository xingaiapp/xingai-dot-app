"use client";

import CofoundersGrid from "../../components/CofoundersGrid";
import LocaleLink from "../../components/LocaleLink";
import { useTranslation } from "../../i18n/LanguageContext";

export default function AboutPage() {
  const { t } = useTranslation();

  return (
    <main className="wrap">
      <section className="page-header">
        <h1 className="page-heading">{t("aboutHeading")}</h1>
        <p className="page-lead">{t("aboutLead")}</p>
        <p className="about-story-link">
          <LocaleLink href="/story">{t("aboutStoryLink")} &rarr;</LocaleLink>
        </p>
      </section>

      <section className="about-cofounders" aria-labelledby="about-cofounders-heading">
        <h2 id="about-cofounders-heading" className="section-eyebrow">
          {t("cofounders")}
        </h2>
        <CofoundersGrid />
      </section>

      <div className="about-grid">
        <section className="panel">
          <h3 className="panel-heading">{t("aboutMission")}</h3>
          <p>{t("aboutMissionText")}</p>
        </section>
        <section className="panel">
          <h3 className="panel-heading">{t("aboutStack")}</h3>
          <p>{t("aboutStackText")}</p>
        </section>
        <section className="panel">
          <h3 className="panel-heading">{t("aboutBuilding")}</h3>
          <p>{t("aboutBuildingText")}</p>
        </section>
      </div>

      <p className="cofounders-contact-note">
        {t("contactNote")}{" "}
        <a href="mailto:contact@xingai.app">contact@xingai.app</a>{" "}
        {t("contactTail")}
      </p>
    </main>
  );
}
