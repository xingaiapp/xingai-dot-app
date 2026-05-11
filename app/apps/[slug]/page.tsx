"use client";

import Image from "next/image";
import Link from "next/link";
import { useParams } from "next/navigation";
import { useTranslation } from "../../i18n/LanguageContext";
import { getAppBySlug, apps } from "../../data/apps";

const statusLabel: Record<string, string> = {
  shipped: "Shipped",
  "in-progress": "In progress",
  planned: "Planned",
};

export default function AppDetailPage() {
  const { slug } = useParams<{ slug: string }>();
  const { t } = useTranslation();
  const app = getAppBySlug(slug);

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
        <h1 className="page-heading">{app.name}</h1>
        <p className="page-lead">{app.description}</p>
      </section>

      {/* Screenshots */}
      <section className="detail-section" aria-labelledby="screenshots-heading">
        <h2 id="screenshots-heading" className="detail-heading">
          {t("appScreenshots")}
        </h2>
        <div className="screenshots-grid">
          {app.screenshots.map((shot, i) => (
            <figure key={i} className="screenshot-card">
              <div className="screenshot-wrap">
                <Image
                  src={shot.src}
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

      {/* Versions & Pricing */}
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
                href={i === 2 ? "/contact" : "mailto:xing@xingai.app"}
                className={`cta${i === 1 ? "" : " cta--outline"}`}
              >
                {t(cta)}
              </a>
            </div>
          ))}
        </div>
      </section>

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
