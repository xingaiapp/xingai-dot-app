"use client";

import Link from "next/link";
import { useTranslation } from "../../i18n/LanguageContext";
import { useLocalePath } from "../../lib/use-locale-path";
import { trackCta } from "../../lib/track-cta";

export default function PricingPage() {
  const { t } = useTranslation();
  const p = useLocalePath();

  return (
    <main className="wrap">
      <section className="page-header">
        <h1 className="page-heading">{t("pricingHeading")}</h1>
        <p className="page-lead">{t("pricingLead")}</p>
      </section>

      <div className="about-grid">
        <section className="panel">
          <h2 className="panel-heading">{t("pricingFreeTitle")}</h2>
          <p>{t("pricingFreeBody")}</p>
        </section>
        <section className="panel">
          <h2 className="panel-heading">
            {t("pricingProTitle")}{" "}
            <span className="app-status-badge app-status-badge--coming-soon">{t("pricingProBadge")}</span>
          </h2>
          <p>{t("pricingProBody")}</p>
          <p>
            <Link
              className="cta"
              href={p("/contact")}
              onClick={() => trackCta("pricing", "pricing")}
            >
              {t("pricingCta")}
            </Link>
          </p>
        </section>
        <section className="panel">
          <h2 className="panel-heading">
            {t("pricingUnlimitedTitle")}{" "}
            <span className="app-status-badge app-status-badge--coming-soon">
              {t("pricingUnlimitedBadge")}
            </span>
          </h2>
          <p>{t("pricingUnlimitedBody")}</p>
        </section>
      </div>

      <p className="cofounders-contact-note">{t("pricingNote")}</p>
    </main>
  );
}
