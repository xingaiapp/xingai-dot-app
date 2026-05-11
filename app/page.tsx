"use client";

import Image from "next/image";
import Link from "next/link";
import { useTranslation } from "./i18n/LanguageContext";
import { apps } from "./data/apps";
import AppIcon from "./components/AppIcon";
import ThemedImage from "./components/ThemedImage";

export default function Home() {
  const { t } = useTranslation();

  return (
    <main className="wrap">
      <section className="hero-section">
        <p className="hero-brand">{t("heroBrand")}</p>
        <h1 className="tagline">{t("tagline")}</h1>
        <p className="hero-sub">{t("heroSub")}</p>

        <ul className="hero-grid" aria-label={t("heroGridLabel")}>
          {apps.map((app) => (
            <li key={app.slug} className="hero-grid-item">
              <Link
                href={`/apps/${app.slug}`}
                className="hero-grid-link"
                data-tooltip={app.description}
              >
                <AppIcon
                  light={app.icon}
                  dark={app.iconDark}
                  alt=""
                  size={36}
                  className="hero-grid-icon"
                />
                <span className="hero-grid-name">{app.name}</span>
                <span className="hero-grid-pos">{app.tagline}</span>
              </Link>
            </li>
          ))}
        </ul>
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
        <h2 id="home-apps-heading" className="section-title">
          {t("homeAppsHeading")}
        </h2>
        <p className="section-lead">{t("homeAppsLead")}</p>

        <ul className="app-cards">
          {apps.map((app) => (
            <li key={app.slug} className="app-card">
              <Link href={`/apps/${app.slug}`} className="app-card-link">
                <div className="app-card-thumb">
                  {app.screenshots[0] ? (
                    <ThemedImage
                      src={app.screenshots[0].src}
                      srcDark={app.screenshots[0].srcDark}
                      alt={app.screenshots[0].alt}
                      fill
                      sizes="(max-width: 36rem) 90vw, 17rem"
                      className="app-card-thumb-img"
                    />
                  ) : (
                    <span className="app-card-thumb-placeholder">
                      {t("appComingSoonBadge")}
                    </span>
                  )}
                </div>
                <div className="app-card-info">
                  <AppIcon
                    light={app.icon}
                    dark={app.iconDark}
                    alt=""
                    size={32}
                    className="app-card-icon"
                  />
                  <span className="app-card-category">
                    {app.comingSoon ? t("appComingSoonBadge") : app.category}
                  </span>
                  <h3 className="app-card-name">{app.name}</h3>
                  <p className="app-card-tagline">{app.tagline}</p>
                </div>
              </Link>
            </li>
          ))}
        </ul>
      </section>

      <section className="home-build" aria-labelledby="home-build-heading">
        <h2 id="home-build-heading" className="section-title">
          {t("buildHeading")}
        </h2>
        <p className="section-lead">{t("buildLead")}</p>
        <ul className="build-points">
          <li>{t("buildPoint1")}</li>
          <li>{t("buildPoint2")}</li>
          <li>{t("buildPoint3")}</li>
        </ul>
        <Link href="/contact" className="cta">
          {t("buildCta")}
        </Link>
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
