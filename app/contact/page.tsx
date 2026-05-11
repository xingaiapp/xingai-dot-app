"use client";

import Link from "next/link";
import { useTranslation } from "../i18n/LanguageContext";

export default function ContactPage() {
  const { t } = useTranslation();

  return (
    <main className="wrap">
      <section className="page-header">
        <h1 className="page-heading">{t("contactHeading")}</h1>
        <p className="page-lead">{t("contactLead")}</p>
      </section>

      <div className="contact-grid">
        <div className="panel contact-card">
          <h2 className="panel-heading">{t("contactEmailLabel")}</h2>
          <p>{t("contactEmailDesc")}</p>
          <a className="cta" href="mailto:xing@xingai.app">
            xing@xingai.app
          </a>
        </div>

        <div className="panel contact-card">
          <h2 className="panel-heading">{t("contactCustomLabel")}</h2>
          <p>{t("contactCustomDesc")}</p>
          <a className="cta cta--outline" href="mailto:xing@xingai.app">
            xing@xingai.app
          </a>
        </div>

        <div className="panel contact-card">
          <h2 className="panel-heading">{t("contactSocialsLabel")}</h2>
          <div className="contact-socials">
            <a href="https://github.com/xingaiapp" rel="noopener noreferrer" target="_blank">GitHub</a>
            <a href="https://www.linkedin.com/in/xingaiapp/" rel="noopener noreferrer" target="_blank">LinkedIn</a>
            <a href="https://x.com/XingAIApp" rel="noopener noreferrer" target="_blank">X</a>
          </div>
        </div>
      </div>
    </main>
  );
}
