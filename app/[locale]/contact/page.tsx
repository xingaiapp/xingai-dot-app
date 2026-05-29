"use client";

import { useState } from "react";
import { useTranslation } from "../../i18n/LanguageContext";

export default function ContactPage() {
  const { t } = useTranslation();

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");
  const [status, setStatus] = useState<"idle" | "sending" | "success" | "error">("idle");

  const subjectOptions = t("contactFormSubjectOptions").split(",");

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setStatus("sending");
    const body = encodeURIComponent(
      `Name: ${name}\nEmail: ${email}\n\n${message}`
    );
    const subjectLine = encodeURIComponent(`[xingai.app] ${subject || subjectOptions[0]}`);
    // Open mailto — no backend needed
    const mailto = `mailto:contact@xingai.app?subject=${subjectLine}&body=${body}`;
    window.location.href = mailto;
    // After a short delay show success (mailto opened in client)
    setTimeout(() => setStatus("success"), 600);
  }

  return (
    <main className="wrap">
      <section className="page-header">
        <h1 className="page-heading">{t("contactHeading")}</h1>
        <p className="page-lead">{t("contactLead")}</p>
      </section>

      <div className="contact-grid">
        {/* Contact form */}
        <div className="panel contact-card contact-card--form">
          <h2 className="panel-heading">{t("contactFormLabel")}</h2>
          <p>{t("contactFormDesc")}</p>

          {status === "success" ? (
            <p className="contact-form-success">{t("contactFormSuccess")}</p>
          ) : (
            <form className="contact-form" onSubmit={handleSubmit} noValidate>
              <label className="contact-form__label">
                {t("contactFormName")}
                <input
                  className="contact-form__input"
                  type="text"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  required
                  autoComplete="name"
                />
              </label>

              <label className="contact-form__label">
                {t("contactFormEmail")}
                <input
                  className="contact-form__input"
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  autoComplete="email"
                />
              </label>

              <label className="contact-form__label">
                {t("contactFormSubject")}
                <select
                  className="contact-form__input contact-form__select"
                  value={subject}
                  onChange={(e) => setSubject(e.target.value)}
                >
                  {subjectOptions.map((opt) => (
                    <option key={opt} value={opt}>
                      {opt}
                    </option>
                  ))}
                </select>
              </label>

              <label className="contact-form__label">
                {t("contactFormMessage")}
                <textarea
                  className="contact-form__input contact-form__textarea"
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  required
                  rows={5}
                />
              </label>

              <button
                type="submit"
                className="cta"
                disabled={status === "sending"}
              >
                {status === "sending" ? t("contactFormSending") : t("contactFormSend")}
              </button>
            </form>
          )}
        </div>

        <div className="panel contact-card">
          <h2 className="panel-heading">{t("contactEmailLabel")}</h2>
          <p>{t("contactEmailDesc")}</p>
          <a className="cta" href="mailto:contact@xingai.app">
            contact@xingai.app
          </a>
        </div>

        <div className="panel contact-card">
          <h2 className="panel-heading">{t("contactCustomLabel")}</h2>
          <p>{t("contactCustomDesc")}</p>
          <a className="cta cta--outline" href="mailto:contact@xingai.app">
            contact@xingai.app
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
