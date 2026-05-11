"use client";

import Image from "next/image";
import { useTranslation } from "../i18n/LanguageContext";

export default function AboutPage() {
  const { t } = useTranslation();

  return (
    <main className="wrap">
      <section className="page-header">
        <h1 className="page-heading">{t("aboutHeading")}</h1>
        <p className="page-lead">{t("aboutLead")}</p>
      </section>

      <section className="about-cofounders" aria-labelledby="about-cofounders-heading">
        <h2 id="about-cofounders-heading" className="section-eyebrow">
          {t("cofounders")}
        </h2>
        <div className="cofounders-grid">
          <div className="cofounder">
            <figure>
              <div className="cofounder-photo">
                <Image
                  src="/xing1.png"
                  alt="Xing"
                  fill
                  sizes="(max-width: 400px) 85vw, 11rem"
                  className="cofounder-photo-img"
                />
              </div>
              <figcaption>
                Xing
                <span className="role">
                  {t("cofounder")}
                  <span className="role-sub">{t("aiArchitect")}</span>
                </span>
              </figcaption>
            </figure>
            <p className="cofounder-bio">{t("xingBio")}</p>
          </div>
          <div className="cofounder">
            <figure>
              <div className="cofounder-photo">
                <Image
                  src="/allen1.png"
                  alt="Allen"
                  fill
                  sizes="(max-width: 400px) 85vw, 11rem"
                  className="cofounder-photo-img"
                />
              </div>
              <figcaption>
                Allen
                <span className="role">
                  {t("cofounder")}
                  <span className="role-sub">{t("aiArchitect")}</span>
                </span>
              </figcaption>
            </figure>
            <p className="cofounder-bio">{t("allenBio")}</p>
          </div>
        </div>
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
        <a href="mailto:xing@xingai.app">xing@xingai.app</a>{" "}
        {t("contactTail")}
      </p>
    </main>
  );
}
