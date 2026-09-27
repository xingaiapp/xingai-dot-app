"use client";

import LocaleLink from "../../components/LocaleLink";
import { useTranslation } from "../../i18n/LanguageContext";
import { getLocalizedApps, type AppData, type AppLaunchStatus } from "../../data/apps";
import {
  investFlowSteps,
  operationsDomain,
  plannedAgentKeys,
  productDomains,
  systemLayers,
  type ProductDomain,
  type SystemStage,
} from "../../data/ecosystem";
import AppIcon from "../../components/AppIcon";
import ThemedImage from "../../components/ThemedImage";
import { APP_ICON_SIZE } from "../../lib/app-icon";

export default function StoryPage() {
  const { locale, t } = useTranslation();
  const apps = getLocalizedApps(locale);
  const appsBySlug = new Map(apps.map((app) => [app.slug, app]));
  const statusLabels: Record<AppLaunchStatus, string> = {
    live: t("appStatusLive"),
    demo: t("appStatusDemo"),
    "coming-soon": t("appStatusComingSoon"),
  };
  const stageLabels: Record<SystemStage, string> = {
    available: t("storyStageAvailable"),
    building: t("storyStageBuilding"),
    planned: t("storyStagePlanned"),
  };
  const liveCount = apps.filter((app) => app.launchStatus === "live").length;
  const layerText = (key: Parameters<typeof t>[0]) =>
    t(key).replace("{total}", String(apps.length)).replace("{live}", String(liveCount));

  const productLink = (app: AppData) => (
    <li key={app.slug}>
      <LocaleLink href={`/apps/${app.slug}`} className="story-product-link">
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
        <span className={`app-status-badge app-status-badge--${app.launchStatus}`}>
          {statusLabels[app.launchStatus]}
        </span>
      </LocaleLink>
    </li>
  );

  const domainCard = (domain: ProductDomain) => (
    <article key={domain.id} className="panel story-cluster-card">
      <h3 className="panel-heading">{t(domain.titleKey)}</h3>
      <p>{t(domain.leadKey)}</p>
      <ul className="story-cluster-products">
        {domain.productSlugs.map((slug) => {
          const app = appsBySlug.get(slug);
          return app ? productLink(app) : null;
        })}
      </ul>
    </article>
  );

  return (
    <main className="wrap story-page">
      <section className="page-header">
        <p className="section-eyebrow">{t("storyEyebrow")}</p>
        <h1 className="page-heading">{t("storyHeading")}</h1>
        <p className="page-lead">{t("storyLead")}</p>
        <p className="story-principle">{t("storyPrinciple")}</p>
      </section>

      {/* Desktop-only illustration. Text in the image is English and too small on phones;
          the HTML loop below stays the real, localized content. */}
      <figure className="story-hero-figure">
        <ThemedImage
          src="/how-xingai-works-light.webp"
          srcDark="/how-xingai-works-dark.webp"
          alt={t("storyHeroAlt")}
          width={1672}
          height={941}
          sizes="(min-width: 64rem) 60rem, 90vw"
          className="story-hero-figure__img"
          unoptimized
        />
      </figure>

      <section className="story-section" aria-labelledby="story-loop-heading">
        <h2 id="story-loop-heading" className="section-title">
          {t("storyLoopTitle")}
        </h2>
        <p className="section-lead">{t("storyLoopLead")}</p>

        <ul className="story-stage-legend" aria-label={t("storyLoopTitle")}>
          {(["available", "building", "planned"] as const).map((stage) => (
            <li key={stage}>
              <span className={`story-stage story-stage--${stage}`}>{stageLabels[stage]}</span>
            </li>
          ))}
        </ul>

        <div className="story-loop">
          <p className="story-loop__start">{t("storyLoopStart")}</p>
          <ol className="story-loop__layers">
            {systemLayers.map((layer) => (
              <li key={layer.id} className={`story-loop__layer story-loop__layer--${layer.id}`}>
                <div className="story-loop__head">
                  <span className="story-loop__role">{t(layer.roleKey)}</span>
                  <span className={`story-stage story-stage--${layer.stage}`}>
                    {stageLabels[layer.stage]}
                  </span>
                </div>
                <h3 className="story-loop__name">
                  {layer.ideaId ? <span className="story-loop__id">{layer.ideaId}</span> : null}
                  {t(layer.nameKey)}
                </h3>
                <p className="story-loop__text">{layerText(layer.textKey)}</p>
                {layer.id === "agents" ? (
                  <ul className="story-agent-list">
                    {plannedAgentKeys.map((key) => (
                      <li key={key}>{t(key)}</li>
                    ))}
                  </ul>
                ) : null}
              </li>
            ))}
          </ol>
          {/* Dashed rail on the right: results flow from the last layer back up to the Vault. */}
          <span className="story-loop__rail" aria-hidden />
          <div className="story-loop__return">
            <p>
              <span className="story-stage story-stage--planned">{stageLabels.planned}</span>{" "}
              {t("storyLoopReturn")}
            </p>
          </div>
        </div>
      </section>

      <section className="story-section" aria-labelledby="story-products-heading">
        <h2 id="story-products-heading" className="section-title">
          {t("storyProductsTitle")}
        </h2>
        <p className="section-lead">{t("storyProductsLead")}</p>
        <div className="story-cluster-grid">{productDomains.map(domainCard)}</div>
      </section>

      <section className="story-section" aria-labelledby="story-trust-heading">
        <h2 id="story-trust-heading" className="section-title">
          {t("storyTrustTitle")}
        </h2>
        <p className="section-lead">{t("storyTrustLead")}</p>
        <div className="story-cluster-grid">{domainCard(operationsDomain)}</div>
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
                    <LocaleLink href={`/apps/${step.slug}`} className="story-inline-link">
                      {t("appViewDetails")} &rarr;
                    </LocaleLink>
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
                      <LocaleLink href="/contact" className="story-inline-link">
                        {t("homeDemoRequestEarlyAccess")} &rarr;
                      </LocaleLink>
                    ) : null}
                  </div>
                </div>
              </li>
            );
          })}
        </ol>
        <p className="story-disclaimer">{t("storyInvestDisclaimer")}</p>
      </section>

      <section className="story-section" aria-labelledby="story-closing-heading">
        <h2 id="story-closing-heading" className="section-title">
          {t("storyClosingTitle")}
        </h2>
        {/* One translation string, steps separated by "|". */}
        <ol className="story-closing">
          {t("storyClosingSteps")
            .split("|")
            .map((step) => (
              <li key={step}>{step}</li>
            ))}
        </ol>
      </section>

      <section className="story-section story-try panel" aria-labelledby="story-try-heading">
        <h2 id="story-try-heading" className="panel-heading">
          {t("storyTryTitle")}
        </h2>
        <p>{t("storyTryLead")}</p>
        <div className="story-try-actions">
          <LocaleLink href="/apps" className="cta">
            {t("viewAllApps")} &rarr;
          </LocaleLink>
          <LocaleLink href="/contact" className="cta cta--outline">
            {t("homeCta")} &rarr;
          </LocaleLink>
        </div>
      </section>

      <section className="story-section story-about-link">
        <p>
          {t("storyAboutTeaser")}{" "}
          <LocaleLink href="/about" className="story-inline-link">
            {t("navAbout")} &rarr;
          </LocaleLink>
        </p>
      </section>
    </main>
  );
}
