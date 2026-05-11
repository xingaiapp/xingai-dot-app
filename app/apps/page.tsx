"use client";

import Image from "next/image";
import Link from "next/link";
import { useTranslation } from "../i18n/LanguageContext";
import { apps } from "../data/apps";

export default function AppsPage() {
  const { t } = useTranslation();

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
                <h2 className="app-card-name">{app.name}</h2>
                <p className="app-card-tagline">{app.tagline}</p>
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
