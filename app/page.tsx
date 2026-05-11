"use client";

import Image from "next/image";
import Link from "next/link";
import { useTranslation } from "./i18n/LanguageContext";
import { apps } from "./data/apps";

export default function Home() {
  const { t } = useTranslation();

  return (
    <main className="wrap">
      <section className="hero-section">
        <h1 className="tagline">{t("tagline")}</h1>
        <p className="lead">{t("lead")}</p>
        <div className="hero-actions">
          <Link href="/apps" className="cta">
            {t("viewAllApps")}
          </Link>
          <Link href="/contact" className="cta cta--outline">
            {t("homeCta")}
          </Link>
        </div>
      </section>

      <section className="home-apps" aria-labelledby="home-apps-heading">
        <p className="section-eyebrow">{t("homeAppsHeading")}</p>
        <h2 id="home-apps-heading" className="section-title">
          {t("homeAppsHeading")}
        </h2>
        <p className="section-lead">{t("homeAppsLead")}</p>

        <ul className="app-cards">
          {apps.map((app) => (
            <li key={app.slug} className="app-card">
              <Link href={`/apps/${app.slug}`} className="app-card-link">
                <div className="app-card-thumb">
                  {app.screenshots[0] && (
                    <Image
                      src={app.screenshots[0].src}
                      alt={app.screenshots[0].alt}
                      fill
                      sizes="(max-width: 36rem) 90vw, 17rem"
                      className="app-card-thumb-img"
                    />
                  )}
                </div>
                <div className="app-card-info">
                  <span className="app-card-category">{app.category}</span>
                  <h3 className="app-card-name">{app.name}</h3>
                  <p className="app-card-tagline">{app.tagline}</p>
                </div>
              </Link>
            </li>
          ))}
        </ul>
      </section>

      <section className="home-cofounders" aria-labelledby="home-cofounders-heading">
        <h2 id="home-cofounders-heading" className="section-eyebrow">
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
        <p className="cofounders-contact-note">
          {t("contactNote")}{" "}
          <a href="mailto:xing@xingai.app">xing@xingai.app</a>{" "}
          {t("contactTail")}
        </p>
      </section>
    </main>
  );
}
