"use client";

import AgentTeamDiagram from "../../components/AgentTeamDiagram";
import LocaleLink from "../../components/LocaleLink";
import { useTranslation } from "../../i18n/LanguageContext";
import { agentGroups, getAgentTeamCopy } from "../../data/agent-team";

const SYSTEMS = ["Claude", "Cursor", "Codex"];

export default function AgentTeamPage() {
  const { locale } = useTranslation();
  const copy = getAgentTeamCopy(locale);

  return (
    <main className="wrap at-page">
      <section className="page-header">
        <p className="section-eyebrow">{copy.eyebrow}</p>
        <h1 className="page-heading">{copy.heading}</h1>
        <p className="page-lead at-lead">{copy.lead}</p>
        {copy.intro.map((line) => (
          <p key={line} className="page-lead">
            {line}
          </p>
        ))}
      </section>

      <figure className="at-diagram panel">
        <div className="at-diagram__scroll">
          <AgentTeamDiagram />
        </div>
        <figcaption className="at-diagram__caption">{copy.diagramCaption}</figcaption>
      </figure>

      <section className="at-section" aria-labelledby="at-groups-heading">
        <h2 id="at-groups-heading" className="section-title">
          {copy.groupsHeading}
        </h2>
        <p className="section-lead">{copy.groupsLead}</p>
        <div className="at-groups">
          {agentGroups.map((group) => (
            <article
              key={group.id}
              className="panel at-group"
              style={{ borderTop: `3px solid ${group.accent}` }}
            >
              <header className="at-group__head">
                <h3 className="at-group__name">{group.name[locale]}</h3>
                <p className="at-group__meta">
                  {group.members.length} {copy.groupAccessNote}
                </p>
                <p className="at-group__tagline">{group.tagline[locale]}</p>
              </header>
              <ul className="at-members">
                {group.members.map((member) => (
                  <li key={member.id} className="at-member">
                    <div className="at-member__top">
                      <span className="at-member__name">{member.id}</span>
                      <span className={`at-badge at-badge--${member.access}`}>
                        {copy.accessLabels[member.access]}
                      </span>
                    </div>
                    <p className="at-member__duty">{member.duty[locale]}</p>
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </section>

      <section className="at-section" aria-labelledby="at-permissions-heading">
        <h2 id="at-permissions-heading" className="section-title">
          {copy.permissionsHeading}
        </h2>
        <p className="section-lead">{copy.permissionsLead}</p>
        <div className="at-stats">
          {copy.stats.map((stat) => (
            <div key={stat.label} className="panel at-stat">
              <p className="at-stat__value">{stat.value}</p>
              <p className="at-stat__label">{stat.label}</p>
            </div>
          ))}
        </div>
        <ul className="panel at-rules">
          {copy.rules.map((rule) => (
            <li key={rule} className="at-rule">
              <span className="at-rule__mark" aria-hidden="true">
                ✓
              </span>
              <span>{rule}</span>
            </li>
          ))}
        </ul>
      </section>

      <section className="at-section" aria-labelledby="at-cross-heading">
        <h2 id="at-cross-heading" className="section-title">
          {copy.crossHeading}
        </h2>
        {copy.crossBody.map((line) => (
          <p key={line} className="section-lead at-cross__body">
            {line}
          </p>
        ))}
        <p className="at-systems-note">{copy.systemsNote}</p>
        <ul className="at-systems" aria-label={copy.systemsNote}>
          {SYSTEMS.map((system) => (
            <li key={system} className="at-system">
              {system}
            </li>
          ))}
        </ul>
      </section>

      <section className="at-closing">
        <p className="at-closing__slogan">{copy.closingSlogan}</p>
        <p className="at-closing__line">{copy.closingLine}</p>
      </section>

      <p className="team-outro">
        <LocaleLink href="/team">{copy.outroTeam} &rarr;</LocaleLink>
        <LocaleLink href="/about">{copy.outroAbout} &rarr;</LocaleLink>
      </p>
    </main>
  );
}
