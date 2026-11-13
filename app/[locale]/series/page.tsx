"use client";

import { useTranslation } from "../../i18n/LanguageContext";
import { seriesGroups, type SeriesStatus } from "../../data/series";

export default function SeriesPage() {
  const { locale, t } = useTranslation();

  const statusLabels: Record<SeriesStatus, string> = {
    ongoing: t("seriesStatusOngoing"),
    upcoming: t("seriesStatusUpcoming"),
    paused: t("seriesStatusPaused"),
    completed: t("seriesStatusCompleted"),
  };

  const faqs: { q: string; a: string }[] = [
    { q: t("seriesFaqQ1"), a: t("seriesFaqA1") },
    { q: t("seriesFaqQ2"), a: t("seriesFaqA2") },
    { q: t("seriesFaqQ3"), a: t("seriesFaqA3") },
  ];

  return (
    <main className="wrap">
      <section className="page-header">
        <h1 className="page-heading">{t("seriesHeading")}</h1>
        <p className="page-lead">{t("seriesLead")}</p>
      </section>

      <nav className="apps-jump" aria-label={t("seriesJumpLabel")}>
        {seriesGroups.map((group) => (
          <a key={group.id} href={`#series-${group.id}`} className="apps-jump__link">
            {group.channel[locale]} <span className="apps-jump__count">{group.series.length}</span>
          </a>
        ))}
      </nav>

      {seriesGroups.map((group) => (
        <section
          key={group.id}
          id={`series-${group.id}`}
          className="series-group"
          aria-labelledby={`series-${group.id}-heading`}
        >
          <div className="series-group__head">
            <h2 id={`series-${group.id}-heading`} className="apps-group__heading">
              {group.channel[locale]} <span className="series-group__handles">{group.handles}</span>
            </h2>
            <p className="series-group__pitch">{group.pitch[locale]}</p>
            <p className="series-group__links">
              <a href={group.channelUrl} target="_blank" rel="noopener noreferrer">
                {t("seriesChannelBtn")} &rarr;
              </a>
              <a href={group.siteUrl} target="_blank" rel="noopener noreferrer">
                {group.siteUrl.replace("https://", "")} &rarr;
              </a>
            </p>
          </div>

          <ul className="app-cards app-cards--full">
            {group.series.map((s) => (
              <li key={s.id} className="app-card series-card">
                <div className="series-card__body">
                  <div className="app-card-title-row">
                    <h3 className="app-card-name">{s.name[locale]}</h3>
                    <span className={`app-status-badge series-status--${s.status}`}>
                      {statusLabels[s.status]}
                    </span>
                  </div>
                  <p className="series-card__pitch">{s.pitch[locale]}</p>
                  <p className="series-card__cadence">{s.cadence[locale]}</p>
                  {s.pageUrl || s.playlistUrl ? (
                    <p className="series-card__actions">
                      {s.pageUrl ? (
                        <a
                          className="series-card__btn"
                          href={s.pageUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          {t("seriesPageBtn")} &rarr;
                        </a>
                      ) : null}
                      {s.playlistUrl ? (
                        <a
                          className="series-card__btn"
                          href={s.playlistUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          {t("seriesPlaylistBtn")} &rarr;
                        </a>
                      ) : null}
                    </p>
                  ) : null}
                </div>
              </li>
            ))}
          </ul>
        </section>
      ))}

      <section className="series-faq" aria-labelledby="series-faq-heading">
        <h2 id="series-faq-heading" className="apps-group__heading">
          {t("seriesFaqHeading")}
        </h2>
        <dl className="series-faq__list">
          {faqs.map((f) => (
            <div key={f.q} className="series-faq__item">
              <dt>{f.q}</dt>
              <dd>{f.a}</dd>
            </div>
          ))}
        </dl>
      </section>
    </main>
  );
}
