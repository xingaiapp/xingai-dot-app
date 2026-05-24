"use client";

import Image from "next/image";
import Link from "next/link";
import { useTranslation } from "./i18n/LanguageContext";
import { getLocalizedApps, type AppLaunchStatus } from "./data/apps";
import AppIcon from "./components/AppIcon";
import ThemedImage from "./components/ThemedImage";

const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL?.replace(/\/$/, "") || "https://xingai.app";

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
  return (
    <svg {...common}>
      <path d="M4 7.5 12 3l8 4.5-8 4.5z" />
      <path d="M4 12.5 12 17l8-4.5" />
      <path d="M4 17.5 12 22l8-4.5" />
    </svg>
  );
}

export default function Home() {
  const { locale, t } = useTranslation();
  const apps = getLocalizedApps(locale);
  const appStatusLabels: Record<AppLaunchStatus, string> = {
    live: t("appStatusLive"),
    demo: t("appStatusDemo"),
    "coming-soon": t("appStatusComingSoon"),
  };
  const answerItems = [
    { question: t("answerQ1"), answer: t("answerA1") },
    { question: t("answerQ2"), answer: t("answerA2") },
    { question: t("answerQ3"), answer: t("answerA3") },
    { question: t("answerQ4"), answer: t("answerA4") },
  ];
  const faqJsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "@id": `${siteUrl}/#faq`,
    url: siteUrl,
    mainEntity: answerItems.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.answer,
      },
    })),
  };

  return (
    <main className="wrap">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />
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
        <p className="hero-beta-note">{t("publicBetaNote")}</p>
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
                  <span
                    className={`app-status-badge app-status-badge--${app.launchStatus}`}
                  >
                    {appStatusLabels[app.launchStatus]}
                  </span>
                </div>
                <div className="app-card-info">
                  <AppIcon
                    light={app.icon}
                    dark={app.iconDark}
                    alt=""
                    size={32}
                    className="app-card-icon"
                  />
                  <span className="app-card-category">{app.category}</span>
                  <h3 className="app-card-name">{app.name}</h3>
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
              </Link>
            </li>
          ))}
        </ul>
      </section>

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
