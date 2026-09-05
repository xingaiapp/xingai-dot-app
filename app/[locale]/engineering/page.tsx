"use client";

import { useTranslation } from "../../i18n/LanguageContext";

/**
 * Engineering practice — the client-facing case that the products are backed by
 * recorded decisions rather than demos. The three excerpts are verbatim from
 * real ADRs; two of the source repos are private, which is why the text is
 * quoted here in full instead of linked.
 */
export default function EngineeringPage() {
  const { t } = useTranslation();

  const mailto = `mailto:contact@xingai.app?subject=${encodeURIComponent(
    "[xingai.app] Engineering practice — technical conversation"
  )}`;

  const examples = [
    {
      heading: t("engEx1Heading"),
      quote: t("engEx1Quote"),
      cite: t("engEx1Cite"),
      body: t("engEx1Body"),
    },
    {
      heading: t("engEx2Heading"),
      quote: t("engEx2Quote"),
      cite: t("engEx2Cite"),
      body: t("engEx2Body"),
    },
    {
      heading: t("engEx3Heading"),
      quote: t("engEx3Quote"),
      cite: t("engEx3Cite"),
      body: t("engEx3Body"),
    },
  ];

  return (
    <main className="wrap">
      <section className="page-header">
        <h1 className="page-heading">{t("engHeading")}</h1>
        <p className="page-lead">{t("engLead")}</p>
      </section>

      <div className="panel">
        <h2 className="panel-heading">{t("engRecordHeading")}</h2>
        <p>{t("engRecordBody")}</p>
        <p className="adr-cite">{t("engRecordNote")}</p>
      </div>

      {examples.map((ex) => (
        <div className="panel" key={ex.heading}>
          <h2 className="panel-heading">{ex.heading}</h2>
          <blockquote className="adr-quote">
            <p>{ex.quote}</p>
            <span className="adr-cite">{ex.cite}</span>
          </blockquote>
          <p>{ex.body}</p>
        </div>
      ))}

      <div className="panel">
        <h2 className="panel-heading">{t("engOpenHeading")}</h2>
        <p>{t("engOpenBody")}</p>
        <ul>
          <li>
            <a href="https://github.com/xingaiapp/xingai-eval-registry">
              xingai-eval-registry
            </a>{" "}
            — {t("engOpenEvalRegistry")}
          </li>
          <li>
            <a href="https://github.com/xingaiapp/xingai-enterprise-ai-pocs">
              xingai-enterprise-ai-pocs
            </a>{" "}
            — {t("engOpenPocs")}
          </li>
          <li>
            <a href="https://github.com/xingaiapp/xingai-enterprise-ai-design">
              xingai-enterprise-ai-design
            </a>{" "}
            — {t("engOpenDesign")}
          </li>
        </ul>
      </div>

      <div className="panel">
        <h2 className="panel-heading">{t("engTalkHeading")}</h2>
        <p>{t("engTalkBody")}</p>
        <p>
          <a className="cta" href={mailto}>
            {t("engTalkCta")}
          </a>
        </p>
      </div>
    </main>
  );
}
