"use client";

import Link from "next/link";
import { useTranslation } from "../../i18n/LanguageContext";
import { useLocalePath } from "../../lib/use-locale-path";
import { trackCta } from "../../lib/track-cta";

/**
 * Services index: the custom decision-system build (the "Build with us" nav
 * target, so it comes first) plus two fixed-scope offers. No prices on the
 * page by design — fees are quoted after a scoping call.
 */
export default function ServicesPage() {
  const { t } = useTranslation();
  const p = useLocalePath();

  const topics = t("svcWorkshopTopics").split("|");
  const deliver = t("svcWorkshopDeliver").split("|");
  const workshopMailto = `mailto:contact@xingai.app?subject=${encodeURIComponent(
    "[xingai.app] Engineering practice workshop"
  )}`;

  return (
    <main className="wrap">
      <section className="page-header">
        <h1 className="page-heading">{t("svcHeading")}</h1>
        <p className="page-lead">{t("svcLead")}</p>
      </section>

      <div id="build" className="panel">
        <h2 className="panel-heading">{t("buildHeading")}</h2>
        <p>{t("buildLead")}</p>
        <ul>
          <li>{t("buildPoint1")}</li>
          <li>{t("buildPoint2")}</li>
          <li>{t("buildPoint3")}</li>
        </ul>
        <p>
          <Link
            className="cta"
            href={p("/contact")}
            onClick={() => trackCta("build", "services")}
          >
            {t("buildCta")}
          </Link>
        </p>
      </div>

      <div className="panel">
        <h2 className="panel-heading">{t("svcAssessTitle")}</h2>
        <p>{t("svcAssessBody")}</p>
        <p>
          <Link className="cta" href={p("/services/agent-security-assessment")}>
            {t("svcAssessLink")}
          </Link>
        </p>
      </div>

      <div className="panel">
        <h2 className="panel-heading">{t("svcWorkshopTitle")}</h2>
        <p>{t("svcWorkshopBody")}</p>
        <p><strong>{t("svcWorkshopTopicsHeading")}</strong></p>
        <ul>
          {topics.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
        <p><strong>{t("svcWorkshopDeliverHeading")}</strong></p>
        <ul>
          {deliver.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
        <p>
          <a className="cta" href={workshopMailto}>
            {t("svcWorkshopCta")}
          </a>
        </p>
      </div>

      <p className="page-lead">{t("svcFeeNote")}</p>

      <div className="panel">
        <h2 className="panel-heading">{t("svcOtherHeading")}</h2>
        <p>{t("svcOtherBody")}</p>
        <p>
          <Link className="cta" href={p("/contact")}>
            {t("svcOtherCta")}
          </Link>
        </p>
      </div>
    </main>
  );
}
