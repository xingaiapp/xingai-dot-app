"use client";

import Link from "next/link";
import { useTranslation } from "../i18n/LanguageContext";
import { getLocalizedApps, type AppLaunchStatus } from "../data/apps";
import {
  ecosystemClusters,
  investFlowSteps,
} from "../data/ecosystem";
import AppIcon from "../components/AppIcon";
import { APP_ICON_SIZE } from "../lib/app-icon";

export default function StoryPage() {
  const { locale, t } = useTranslation();
  const apps = getLocalizedApps(locale);
  const appsBySlug = new Map(apps.map((app) => [app.slug, app]));
  const statusLabels: Record<AppLaunchStatus, string> = {
    live: t("appStatusLive"),
    demo: t("appStatusDemo"),
    "coming-soon": t("appStatusComingSoon"),
  };

  const principlePoints = [
    t("storyPrinciplePoint1"),
    t("storyPrinciplePoint2"),
    t("storyPrinciplePoint3"),
  ];

  return (
    <main className="wrap story-page">
      <section className="page-header">
        <p className="section-eyebrow">{t("storyEyebrow")}</p>
        <h1 className="page-heading">{t("storyHeading")}</h1>
        <p className="page-lead">{t("storyLead")}</p>
      </section>

      <section className="story-section" aria-labelledby="story-principle-heading">
        <h2 id="story-principle-heading" className="section-title">
          {t("storyPrincipleTitle")}
        </h2>
        <p className="section-lead">{t("storyPrincipleLead")}</p>
        <ul className="story-principle-list">
          {principlePoints.map((point) => (
            <li key={point}>{point}</li>
          ))}
        </ul>
      </section>

      <section className="story-section" aria-labelledby="story-clusters-heading">
        <h2 id="story-clusters-heading" className="section-title">
          {t("storyClustersTitle")}
        </h2>
        <p className="section-lead">{t("storyClustersLead")}</p>
        <div className="story-cluster-grid">
          {ecosystemClusters.map((cluster) => (
            <article key={cluster.id} className="panel story-cluster-card">
              <h3 className="panel-heading">{t(cluster.titleKey)}</h3>
              <p>{t(cluster.leadKey)}</p>
              <ul className="story-cluster-products">
                {cluster.productSlugs.map((slug) => {
                  const app = appsBySlug.get(slug);
                  if (!app) return null;
                  return (
                    <li key={slug}>
                      <Link href={`/apps/${slug}`} className="story-product-link">
                        <AppIcon
                          light={app.icon}
                          dark={app.iconDark}
                          alt=""
                          size={APP_ICON_SIZE}
                          className="story-product-link__icon"
                        />
                        <span className="story-product-link__text">
                          <span className="story-product-link__name">{app.name}</span>
                          <span className="story-product-link__tagline">{app.tagline}</span>
                        </span>
                        <span
                          className={`app-status-badge app-status-badge--${app.launchStatus}`}
                        >
                          {statusLabels[app.launchStatus]}
                        </span>
                      </Link>
                    </li>
                  );
                })}
              </ul>
            </article>
          ))}
        </div>
      </section>

      <section className="story-section" aria-labelledby="story-invest-flow-heading">
        <h2 id="story-invest-flow-heading" className="section-title">
          {t("storyInvestFlowTitle")}
        </h2>
        <p className="section-lead">{t("storyInvestFlowLead")}</p>
        <ol className="story-invest-flow">
          {investFlowSteps.map((step, index) => {
            const app = appsBySlug.get(step.slug);
            if (!app) return null;
            return (
              <li key={step.slug} className="story-invest-flow__step">
                <span className="story-invest-flow__index" aria-hidden>
                  {index + 1}
                </span>
                <div className="story-invest-flow__body">
                  <p className="story-invest-flow__domain">{step.domain}</p>
                  <h3 className="story-invest-flow__name">{app.name}</h3>
                  <p className="story-invest-flow__role">{t(step.roleKey)}</p>
                  <div className="story-invest-flow__actions">
                    <Link href={`/apps/${step.slug}`} className="story-inline-link">
                      {t("appViewDetails")} &rarr;
                    </Link>
                    {app.demoUrl && !app.earlyAccess ? (
                      <a
                        href={app.demoUrl}
                        className="story-inline-link"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        {t("appDemo")} &rarr;
                      </a>
                    ) : null}
                    {app.earlyAccess ? (
                      <Link href="/contact" className="story-inline-link">
                        {t("homeDemoRequestEarlyAccess")} &rarr;
                      </Link>
                    ) : null}
                  </div>
                </div>
              </li>
            );
          })}
        </ol>
        <p className="story-disclaimer">{t("storyInvestDisclaimer")}</p>
      </section>

      <section className="story-section story-try panel" aria-labelledby="story-try-heading">
        <h2 id="story-try-heading" className="panel-heading">
          {t("storyTryTitle")}
        </h2>
        <p>{t("storyTryLead")}</p>
        <div className="story-try-actions">
          <Link href="/apps" className="cta">
            {t("viewAllApps")} &rarr;
          </Link>
          <Link href="/contact" className="cta cta--outline">
            {t("homeCta")} &rarr;
          </Link>
        </div>
      </section>

      <section className="story-section story-about-link">
        <p>
          {t("storyAboutTeaser")}{" "}
          <Link href="/about" className="story-inline-link">
            {t("navAbout")} &rarr;
          </Link>
        </p>
      </section>
    </main>
  );
}
