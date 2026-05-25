"use client";

import Link from "next/link";
import { useTranslation } from "../i18n/LanguageContext";
import { getLocalizedApps, type AppLaunchStatus } from "../data/apps";
import AppIcon from "../components/AppIcon";
import AppDemoScreenshot from "../components/AppDemoScreenshot";

export default function AppsPage() {
  const { locale, t } = useTranslation();
  const apps = getLocalizedApps(locale);
  const appStatusLabels: Record<AppLaunchStatus, string> = {
    live: t("appStatusLive"),
    demo: t("appStatusDemo"),
    "coming-soon": t("appStatusComingSoon"),
  };

  return (
    <main className="wrap">
      <section className="page-header">
        <h1 className="page-heading">{t("appsHeading")}</h1>
        <p className="page-lead">{t("appsLead")}</p>
      </section>

      <ul className="app-cards app-cards--full">
        {apps.map((app) => (
          <li key={app.slug} className="app-card">
            <Link href={`/apps/${app.slug}`} className="app-card-link">
              {app.screenshots[0] ? (
                <AppDemoScreenshot
                  shot={app.screenshots[0]}
                  sizes="(max-width: 36rem) 90vw, (max-width: 48rem) 45vw, 20rem"
                  wrapClassName="app-card-thumb"
                  imageClassName="app-card-thumb-img app-demo-shot"
                />
              ) : (
                <div className="app-card-thumb">
                  <span className="app-card-thumb-placeholder">
                    {t("appComingSoonBadge")}
                  </span>
                </div>
              )}
              <div className="app-card-info">
                <AppIcon
                  light={app.icon}
                  dark={app.iconDark}
                  alt=""
                  size={32}
                  className="app-card-icon"
                />
                <span className="app-card-category">{app.category}</span>
                <div className="app-card-title-row">
                  <h2 className="app-card-name">{app.name}</h2>
                  <span
                    className={`app-status-badge app-status-badge--${app.launchStatus}`}
                  >
                    {appStatusLabels[app.launchStatus]}
                  </span>
                </div>
                <p className="app-card-tagline">{app.tagline}</p>
                <dl className="app-card-fit">
                  <div>
                    <dt>{t("appCardCanDo")}</dt>
                    <dd>{app.canDo}</dd>
                  </div>
                  <div>
                    <dt>{t("appCardBestFor")}</dt>
                    <dd>{app.bestFor}</dd>
                  </div>
                  <div>
                    <dt>{t("appCardClickTarget")}</dt>
                    <dd>{app.clickTarget}</dd>
                  </div>
                </dl>
                <p className="app-card-desc">{app.description}</p>
                <span className="app-card-action">{t("appViewDetails")} &rarr;</span>
              </div>
            </Link>
          </li>
        ))}
      </ul>
    </main>
  );
}
