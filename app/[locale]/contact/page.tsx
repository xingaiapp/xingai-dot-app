"use client";

import { useState } from "react";
import { useTranslation } from "../../i18n/LanguageContext";

export default function ContactPage() {
  const { t } = useTranslation();

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");
  const [website, setWebsite] = useState("");
  const [status, setStatus] = useState<"idle" | "sending" | "success" | "error">("idle");

  const subjectOptions = t("contactFormSubjectOptions").split(",");

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (status === "sending") return;

    setStatus("sending");
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name,
          email,
          subject: subject || subjectOptions[0],
          message,
          website,
        }),
      });
      const data = (await res.json().catch(() => null)) as { ok?: boolean } | null;
      if (!res.ok || !data?.ok) {
        setStatus("error");
        return;
      }
      setStatus("success");
    } catch {
      setStatus("error");
    }
  }

  return (
    <main className="wrap">
      <section className="page-header">
        <h1 className="page-heading">{t("contactHeading")}</h1>
        <p className="page-lead">{t("contactLead")}</p>
      </section>

      <div className="contact-grid">
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
                  maxLength={120}
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
                  maxLength={254}
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
                  maxLength={5000}
                />
              </label>

              {/* Honeypot — hidden from people, filled by many bots. */}
              <label className="contact-form__honeypot" aria-hidden="true">
                Website
                <input
                  type="text"
                  name="website"
                  tabIndex={-1}
                  autoComplete="off"
                  value={website}
                  onChange={(e) => setWebsite(e.target.value)}
                />
              </label>

              {status === "error" ? (
                <p className="contact-form-error" role="alert">
                  {t("contactFormError")}
                </p>
              ) : null}

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
