"use client";

import Image from "next/image";
import Link from "next/link";
import LocaleLink from "../components/LocaleLink";
import { useEffect, useState } from "react";
import { useTranslation } from "../i18n/LanguageContext";
import { getHomeShelfApps, getLocalizedApps, type AppLaunchStatus } from "../data/apps";
import AppIcon from "../components/AppIcon";
import AppDemoScreenshot from "../components/AppDemoScreenshot";
import HomeDecisionPath from "../components/HomeDecisionPath";
import HomeSystemLoop from "../components/HomeSystemLoop";
import TypewriterText from "../components/TypewriterText";
import { agentRoles, getTeamCopy } from "../data/team";

function AnswerIcon({ index }: { index: number }) {
  const common = {
    width: 22,
    height: 22,
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: 1.8,
    strokeLinecap: "round" as const,
    strokeLinejoin: "round" as const,
    "aria-hidden": true,
  };

  if (index === 0) {
    return (
      <svg {...common}>
        <path d="M12 3 4.5 7v5.4c0 4.2 3.1 7.2 7.5 8.6 4.4-1.4 7.5-4.4 7.5-8.6V7z" />
        <path d="M9 12h6" />
        <path d="M12 9v6" />
      </svg>
    );
  }
  if (index === 1) {
    return (
      <svg {...common}>
        <path d="M5 5h14v5H5z" />
        <path d="M5 14h14v5H5z" />
        <path d="M8 10v4" />
        <path d="M16 10v4" />
      </svg>
    );
  }
  if (index === 2) {
    return (
      <svg {...common}>
        <path d="M4 12h12" />
        <path d="m12 7 5 5-5 5" />
        <path d="M5 5h14" />
        <path d="M5 19h14" />
      </svg>
    );
  }
  if (index === 3) {
    return (
      <svg {...common}>
        <path d="M4 7.5 12 3l8 4.5-8 4.5z" />
        <path d="M4 12.5 12 17l8-4.5" />
        <path d="M4 17.5 12 22l8-4.5" />
      </svg>
    );
  }
  return (
    <svg {...common}>
      <path d="M4 6h16v12H4z" />
      <path d="m4 7 8 6 8-6" />
    </svg>
  );
}

export default function Home() {
  const { locale, t } = useTranslation();
  const teamCopy = getTeamCopy(locale);
  const [activeHeroIndex, setActiveHeroIndex] = useState(0);
  const apps = getLocalizedApps(locale);
  const homeShelfApps = getHomeShelfApps(locale);
  const heroPreviewApps = ["investment-assistant", "travel-ai", "cook-ai", "outfit-ai"].flatMap(
    (slug) => {
      const app = apps.find((item) => item.slug === slug);
      return app ? [app] : [];
    },
  );
  const heroPrimaryApp =
    heroPreviewApps[activeHeroIndex] ?? heroPreviewApps[0] ?? apps[0];
  const appStatusLabels: Record<AppLaunchStatus, string> = {
    live: t("appStatusLive"),
    demo: t("appStatusDemo"),
    "coming-soon": t("appStatusComingSoon"),
  };

  useEffect(() => {
    setActiveHeroIndex(0);
  }, [locale]);

  const answerItems = [
    { question: t("answerQ1"), answer: t("answerA1") },
    { question: t("answerQ2"), answer: t("answerA2") },
    { question: t("answerQ3"), answer: t("answerA3") },
    { question: t("answerQ4"), answer: t("answerA4") },
    { question: t("answerQ5"), answer: t("answerA5") },
  ];

  return (
    <main className="wrap">
      <section className="hero-section" aria-labelledby="hero-page-title">
        <h1 id="hero-page-title" className="hero-page-title">
          {t("tagline")}
        </h1>
        <p className="hero-page-sub">{t("taglineSub")}</p>
        <div className="hero-section--platform">
        <div className="hero-layout">
          <div className="hero-copy">
            <TypewriterText
              as="h2"
              className="hero-card-heading"
              text={t("heroCardHeading")}
              msPerChar={125}
              maxDurationMs={5000}
              loop
              loopPauseMs={2400}
            />
            <p className="hero-sub">{t("heroSub")}</p>
            <p className="hero-story-link">
              <LocaleLink href="/story">{t("heroStoryLink")} &rarr;</LocaleLink>
            </p>
            <div className="hero-actions">
              <a href="https://invest.xingai.app/ai-map" className="cta">
                {t("heroInvestMapCta")}
              </a>
              <a href="#start-here" className="cta cta--outline">
                {t("heroTryLiveCta")}
              </a>
            </div>
            <p className="hero-beta-note">{t("publicBetaNote")}</p>
          </div>

          {heroPrimaryApp ? (
            <div className="hero-preview" aria-label={t("heroPreviewLabel")}>
              <div className="hero-preview-stage">
              <LocaleLink
                href={`/apps/${heroPrimaryApp.slug}`}
                className="hero-preview-card"
              >
                {heroPrimaryApp.screenshots[0] ? (
                  <AppDemoScreenshot
                    shot={heroPrimaryApp.screenshots[0]}
                    unoptimized
                    sizes="(max-width: 36rem) 90vw, 30rem"
                    wrapClassName="hero-preview-media"
                    imageClassName="hero-preview-img app-demo-shot"
                  />
                ) : (
                  <div className="hero-preview-media hero-preview--crop">
                    <span className="app-card-thumb-placeholder">
                      {t("appComingSoonBadge")}
                    </span>
                  </div>
                )}
                <div className="hero-preview-body">
                  <span className="app-card-category">{heroPrimaryApp.category}</span>
                  <div className="app-card-title-row">
                    <h2 className="app-card-name">{heroPrimaryApp.name}</h2>
                    <span
                      className={`app-status-badge app-status-badge--${heroPrimaryApp.launchStatus}`}
                    >
                      {appStatusLabels[heroPrimaryApp.launchStatus]}
                    </span>
                  </div>
                  <p>{heroPrimaryApp.canDo}</p>
                  <dl className="hero-preview-fit">
                    <div>
                      <dt>{t("appCardBestFor")}</dt>
                      <dd>{heroPrimaryApp.bestFor}</dd>
                    </div>
                    <div>
                      <dt>{t("appCardClickTarget")}</dt>
                      <dd>{heroPrimaryApp.clickTarget}</dd>
                    </div>
                  </dl>
                </div>
              </LocaleLink>
              </div>

              {heroPreviewApps.length > 1 ? (
                <div className="hero-slide-controls" aria-label={t("heroPreviewLabel")}>
                  {heroPreviewApps.map((app, index) => (
                    <button
                      key={app.slug}
                      type="button"
                      className={`hero-slide-dot${
                        app.slug === heroPrimaryApp.slug ? " hero-slide-dot--active" : ""
                      }`}
                      aria-label={app.name}
                      aria-current={app.slug === heroPrimaryApp.slug ? "true" : undefined}
                      onClick={() => setActiveHeroIndex(index)}
                    >
                      <span>{app.name}</span>
                    </button>
                  ))}
                </div>
              ) : null}

              <p className="hero-see-all">
                <LocaleLink href="/apps">
                  {t("footerSeeSystems")}
                  <span aria-hidden="true"> →</span>
                </LocaleLink>
              </p>
            </div>
          ) : null}
        </div>
        </div>
      </section>

      <HomeDecisionPath />

      <section id="start-here" className="home-apps" aria-labelledby="home-apps-heading">
        <h2 id="home-apps-heading" className="section-title">
          {t("homeAppsHeading")}
        </h2>
        <p className="section-lead">{t("homeAppsLead")}</p>

        <ul className="app-cards">
          {homeShelfApps.map((app) => (
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
                </div>
              </LocaleLink>
            </li>
          ))}
        </ul>
        <div className="home-apps-more">
          <LocaleLink href="/apps" className="cta cta--browse">
            {t("homeBrowseAll")} <span aria-hidden="true">→</span>
          </LocaleLink>
        </div>
      </section>

      <section className="home-team" aria-labelledby="home-team-heading">
        <h2 id="home-team-heading" className="section-title">
          {t("homeTeamHeading")}
        </h2>
        <p className="section-lead">{t("homeTeamLead")}</p>
        <ul className="home-team__agents">
          {agentRoles.map((role) => {
            const agent = teamCopy.agents[role.id];
            return (
              <li key={role.id}>
                <LocaleLink href={`/team#${role.id}`} className="home-team__agent">
                  <span className={`team-avatar team-avatar--${role.id}`}>
                    <Image src={role.avatar} alt="" fill sizes="4.5rem" className="team-avatar__img" />
                  </span>
                  <span className="home-team__name">{agent.name}</span>
                  <span className="home-team__role">{agent.title}</span>
                </LocaleLink>
              </li>
            );
          })}
        </ul>
        <p className="about-story-link">
          <LocaleLink href="/team">{t("homeMeetTeam")} &rarr;</LocaleLink>
        </p>
      </section>

      <HomeSystemLoop />

      <section className="home-answers" aria-labelledby="home-answers-heading">
        <h2 id="home-answers-heading" className="section-title">
          {t("answerHeading")}
        </h2>
        <p className="section-lead">{t("answerLead")}</p>
        <dl className="answer-list">
          {answerItems.map((item, index) => (
            <div key={item.question} className="answer-item">
              <dt>
                <span className="answer-icon">
                  <AnswerIcon index={index} />
                </span>
                <span>{item.question}</span>
              </dt>
              <dd>{item.answer}</dd>
            </div>
          ))}
        </dl>
      </section>

      <section id="build" className="home-build" aria-labelledby="home-build-heading">
        <h2 id="home-build-heading" className="section-title">
          {t("buildHeading")}
        </h2>
        <p className="section-lead">{t("buildLead")}</p>
        <ul className="build-points">
          <li>{t("buildPoint1")}</li>
          <li>{t("buildPoint2")}</li>
          <li>{t("buildPoint3")}</li>
        </ul>
        <LocaleLink href="/contact" className="cta">
          {t("buildCta")}
        </LocaleLink>
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
                <a
                  href="https://www.linkedin.com/in/xingaiapp/"
                  className="cofounder-name-link"
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  Xing
                </a>
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
          <a href="mailto:contact@xingai.app">contact@xingai.app</a>{" "}
          {t("contactTail")}
        </p>
      </section>
    </main>
  );
}
