"use client";

import LocaleLink from "../../../components/LocaleLink";
import { useTranslation } from "../../../i18n/LanguageContext";
import {
  getCatalogGroups,
  splitLiveByWeight,
  type AppData,
  type AppLaunchStatus,
  type CatalogGroupKey,
  type LiveWeightKey,
} from "../../../data/apps";
import AppIcon from "../../../components/AppIcon";
import AppDemoScreenshot from "../../../components/AppDemoScreenshot";

/**
 * Catalog grouped by status: Live (flagship / daily / research bands), Demo,
 * Coming soon, then internal ops tools collapsed at the end, with jump links.
 */
export default function AppsPage() {
  const { locale, t } = useTranslation();
  const groups = getCatalogGroups(locale);
  const appStatusLabels: Record<AppLaunchStatus, string> = {
    live: t("appStatusLive"),
    demo: t("appStatusDemo"),
    "coming-soon": t("appStatusComingSoon"),
  };
  const groupLabels: Record<CatalogGroupKey, string> = {
    live: t("appsGroupLive"),
    demo: t("appsGroupDemo"),
    "coming-soon": t("appsGroupComingSoon"),
    internal: t("appsGroupInternal"),
  };
  const liveWeightLabels: Record<LiveWeightKey, string> = {
    flagship: t("appsLiveFlagship"),
    daily: t("appsLiveDaily"),
    research: t("appsLiveResearch"),
  };

  const renderCards = (apps: AppData[]) => (
    <ul className="app-cards app-cards--full">
      {apps.map((app) => (
        <li key={app.slug} className="app-card">
          <LocaleLink href={`/apps/${app.slug}`} className="app-card-link">
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
                className="app-card-icon"
              />
              <span className="app-card-category">{app.category}</span>
              <div className="app-card-title-row">
                <h3 className="app-card-name">{app.name}</h3>
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
          </LocaleLink>
        </li>
      ))}
    </ul>
  );

  const renderLiveWeighted = (apps: AppData[]) => (
    <div className="apps-live-weights">
      {splitLiveByWeight(apps).map(({ key, apps: bandApps }) => (
        <div key={key} className="apps-live-weight" id={`apps-live-${key}`}>
          <h3 className="apps-live-weight__heading">{liveWeightLabels[key]}</h3>
          {renderCards(bandApps)}
        </div>
      ))}
    </div>
  );

  return (
    <main className="wrap">
      <section className="page-header">
        <h1 className="page-heading">{t("appsHeading")}</h1>
        <p className="page-lead">{t("appsLead")}</p>
      </section>

      <nav className="apps-jump" aria-label={t("appsJumpLabel")}>
        {groups.map(({ key, apps }) => (
          <a key={key} href={`#apps-${key}`} className="apps-jump__link">
            {groupLabels[key]} <span className="apps-jump__count">{apps.length}</span>
          </a>
        ))}
      </nav>

      {groups.map(({ key, apps }) =>
        key === "internal" ? (
          <details key={key} id={`apps-${key}`} className="apps-group apps-group--internal">
            <summary className="apps-group__heading">
              {groupLabels[key]} <span className="apps-jump__count">{apps.length}</span>
            </summary>
            <p className="apps-group__note">{t("appsGroupInternalNote")}</p>
            {renderCards(apps)}
          </details>
        ) : (
          <section
            key={key}
            id={`apps-${key}`}
            className="apps-group"
            aria-labelledby={`apps-${key}-heading`}
          >
            <h2 id={`apps-${key}-heading`} className="apps-group__heading">
              {groupLabels[key]} <span className="apps-jump__count">{apps.length}</span>
            </h2>
            {key === "live" ? renderLiveWeighted(apps) : renderCards(apps)}
          </section>
        ),
      )}

      <p className="demo-disclaimer">{t("appsFinanceDisclaimer")}</p>
    </main>
  );
}
