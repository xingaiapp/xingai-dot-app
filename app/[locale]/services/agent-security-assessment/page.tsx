"use client";

import { useTranslation } from "../../../i18n/LanguageContext";

export default function AgentSecurityAssessmentPage() {
  const { t } = useTranslation();

  const whatItems = t("secWhatItems").split(",");
  const deliverItems = t("secDeliverItems").split(",");
  const processItems = t("secProcessItems").split(",");

  const mailto = `mailto:contact@xingai.app?subject=${encodeURIComponent(
    "[xingai.app] Agent Security Assessment — scoping call"
  )}`;

  return (
    <main className="wrap">
      <section className="page-header">
        <h1 className="page-heading">{t("secHeading")}</h1>
        <p className="page-lead">{t("secLead")}</p>
      </section>

      <div className="panel">
        <h2 className="panel-heading">{t("secWhatHeading")}</h2>
        <ul>
          {whatItems.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      </div>

      <div className="panel">
        <h2 className="panel-heading">{t("secDeliverHeading")}</h2>
        <ul>
          {deliverItems.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      </div>

      <div className="panel">
        <h2 className="panel-heading">{t("secProcessHeading")}</h2>
        <ol>
          {processItems.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ol>
      </div>

      <div className="panel">
        <h2 className="panel-heading">{t("secWhoHeading")}</h2>
        <p>{t("secWhoBody")}</p>
        <p>{t("secNote")}</p>
        <p>
          <a className="cta" href={mailto}>
            {t("secCtaButton")}
          </a>
        </p>
      </div>
    </main>
  );
}
