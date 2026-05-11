"use client";

import Image from "next/image";
import Link from "next/link";
import { useParams } from "next/navigation";
import { useEffect } from "react";
import { useTranslation } from "../../i18n/LanguageContext";
import { getAppBySlug } from "../../data/apps";
import AppIcon from "../../components/AppIcon";
import ThemedImage from "../../components/ThemedImage";

const statusLabel: Record<string, string> = {
  shipped: "Shipped",
  "in-progress": "In progress",
  planned: "Planned",
};

export default function AppDetailPage() {
  const { slug } = useParams<{ slug: string }>();
  const { t } = useTranslation();
  const app = getAppBySlug(slug);

  useEffect(() => {
    if (!app) return;
    let link = document.querySelector<HTMLLinkElement>('link[rel="icon"]');
    if (!link) {
      link = document.createElement("link");
      link.rel = "icon";
      document.head.appendChild(link);
    }
    link.href = app.favicon;
    return () => { link.href = "/favicon.ico"; };
  }, [app]);

  if (!app) {
    return (
      <main className="wrap">
        <section className="page-header">
          <h1 className="page-heading">App not found</h1>
          <p className="page-lead">
            <Link href="/apps">&larr; {t("backToHome")}</Link>
          </p>
        </section>
      </main>
    );
  }

  const tiers = [
    { key: "appFree" as const, price: "appFreePrice" as const, cta: "appGetStarted" as const },
    { key: "appPro" as const, price: "appProPrice" as const, cta: "appUpgrade" as const },
    { key: "appEnterprise" as const, price: "appEnterprisePrice" as const, cta: "appContactSales" as const },
  ];

  return (
    <main className="wrap">
      <section className="page-header">
        <Link href="/apps" className="breadcrumb">
          &larr; {t("appsHeading")}
        </Link>
        <div className="page-heading-row">
          <AppIcon
            light={app.icon}
            dark={app.iconDark}
            alt=""
            size={40}
            className="page-heading-icon"
          />
          <h1 className="page-heading">{app.name}</h1>
        </div>
        <p className="page-lead">{app.description}</p>
        {app.demoUrl && (
          <a
            href={app.demoUrl}
            className="cta"
            target="_blank"
            rel="noopener noreferrer"
          >
            {t("appDemo")} &rarr;
          </a>
        )}
      </section>

      {app.comingSoon && (
        <section
          className="detail-section detail-coming-soon"
          aria-label={t("appComingSoonBadge")}
        >
          <p className="section-lead detail-coming-soon__text">
            {t("appComingSoonBanner")}
          </p>
          <Link href="/contact" className="cta">
            {t("appEarlyAccessCta")}
          </Link>
        </section>
      )}

      {/* Screenshots */}
      {app.screenshots.length > 0 && (
      <section className="detail-section" aria-labelledby="screenshots-heading">
        <h2 id="screenshots-heading" className="detail-heading">
          {t("appScreenshots")}
        </h2>
        <div className="screenshots-grid">
          {app.screenshots.map((shot, i) => (
            <figure key={i} className="screenshot-card">
              <div className="screenshot-wrap">
                <ThemedImage
                  src={shot.src}
                  srcDark={shot.srcDark}
                  alt={shot.alt}
                  fill
                  sizes="(max-width: 36rem) 90vw, 17rem"
                  className="screenshot-img"
                />
              </div>
              <figcaption className="screenshot-caption">
                {shot.caption}
              </figcaption>
            </figure>
          ))}
        </div>
      </section>
      )}

      {/* Versions & Pricing */}
      {!app.comingSoon && (
      <section className="detail-section" aria-labelledby="versions-heading">
        <h2 id="versions-heading" className="detail-heading">
          {t("appVersions")}
        </h2>
        <div className="pricing-grid">
          {tiers.map(({ key, price, cta }, i) => (
            <div
              key={key}
              className={`pricing-card${i === 1 ? " pricing-card--featured" : ""}`}
            >
              <h3 className="pricing-tier">{t(key)}</h3>
              <p className="pricing-price">{t(price)}</p>
              <ul className="pricing-features">
                {app.features.map((f, fi) => {
                  const included =
                    i === 0 ? f.free : i === 1 ? f.pro : f.enterprise;
                  return (
                    <li
                      key={fi}
                      className={`pricing-feature${included ? "" : " pricing-feature--no"}`}
                    >
                      <span className="pricing-check">
                        {included ? "✓" : "—"}
                      </span>
                      {f.name}
                    </li>
                  );
                })}
              </ul>
              <a
                href={i === 0 ? "mailto:xing@xingai.app" : "/contact"}
                className={`cta${i === 1 ? "" : " cta--outline"}`}
              >
                {t(cta)}
              </a>
            </div>
          ))}
        </div>
      </section>
      )}

      {/* Source code */}
      {app.sourceUrl && (
        <section className="detail-section source-section">
          <h2 className="detail-heading">{t("appSourceCode")}</h2>
          <p className="section-lead">{t("appSourceText")}</p>
          <a
            href={app.sourceUrl}
            className="cta"
            target="_blank"
            rel="noopener noreferrer"
          >
            {t("appGetSource")} &rarr;
          </a>
        </section>
      )}

      {/* Custom version */}
      <section className="detail-section custom-section">
        <h2 className="detail-heading">{t("appCustom")}</h2>
        <p className="section-lead">{t("appCustomText")}</p>
        <Link href="/contact" className="cta">
          {t("contactHeading")}
        </Link>
      </section>

      {/* Roadmap */}
      <section className="detail-section" aria-labelledby="roadmap-heading">
        <h2 id="roadmap-heading" className="detail-heading">
          {t("appRoadmap")}
        </h2>
        <p className="section-lead">{t("appRoadmapLead")}</p>
        <ul className="roadmap-list">
          {app.roadmap.map((item, i) => (
            <li key={i} className="roadmap-item">
              <span className={`roadmap-status roadmap-status--${item.status}`}>
                {statusLabel[item.status]}
              </span>
              <span className="roadmap-title">{item.title}</span>
            </li>
          ))}
        </ul>
      </section>
    </main>
  );
}
