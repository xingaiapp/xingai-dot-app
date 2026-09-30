"use client";

import Image from "next/image";
import CofoundersGrid from "../../components/CofoundersGrid";
import LocaleLink from "../../components/LocaleLink";
import { useTranslation } from "../../i18n/LanguageContext";
import { getLocalizedApps } from "../../data/apps";
import { agentRoles, getTeamCopy, type AgentId } from "../../data/team";

export default function TeamPage() {
  const { locale } = useTranslation();
  const copy = getTeamCopy(locale);
  const appsBySlug = new Map(getLocalizedApps(locale).map((app) => [app.slug, app]));
  const rolesById = new Map(agentRoles.map((role) => [role.id, role]));
  const avatarOf = (id: AgentId) => rolesById.get(id)?.avatar ?? "";

  return (
    <main className="wrap team-page">
      <section className="page-header team-hero">
        <p className="section-eyebrow">{copy.eyebrow}</p>
        <h1 className="page-heading">{copy.heading}</h1>
        <ul className="team-hero__avatars" aria-hidden="true">
          {agentRoles.map((role) => (
            <li key={role.id} className={`team-avatar team-avatar--${role.id}`}>
              <Image src={role.avatar} alt="" fill priority sizes="5.5rem" className="team-avatar__img" />
            </li>
          ))}
        </ul>
        {copy.lead.map((line) => (
          <p key={line} className="page-lead">
            {line}
          </p>
        ))}
        <p className="team-honesty">{copy.honesty}</p>
      </section>

      <section className="team-section" aria-labelledby="team-people-heading">
        <h2 id="team-people-heading" className="section-title">
          {copy.peopleHeading}
        </h2>
        <p className="section-lead">{copy.peopleLead}</p>
        <CofoundersGrid />
      </section>

      <section className="team-section" aria-labelledby="team-agents-heading">
        <h2 id="team-agents-heading" className="section-title">
          {copy.agentsHeading}
        </h2>
        <p className="section-lead">{copy.agentsLead}</p>
        <div className="team-agent-grid">
          {agentRoles.map((role) => {
            const agent = copy.agents[role.id];
            const app = appsBySlug.get(role.seenInSlug);
            return (
              <article key={role.id} className="panel team-agent" id={role.id}>
                <header className="team-agent__head">
                  <div className={`team-avatar team-avatar--${role.id}`}>
                    <Image
                      src={role.avatar}
                      alt={agent.name}
                      fill
                      sizes="4.5rem"
                      className="team-avatar__img"
                    />
                  </div>
                  <div className="team-agent__id">
                    <h3 className="team-agent__name">
                      {agent.name}
                      {locale !== "zh" && (
                        <span className="team-agent__zh" lang="zh-CN">
                          {role.zhName}
                        </span>
                      )}
                    </h3>
                    <p className="team-agent__title">{agent.title}</p>
                    <p className="team-agent__tag">{agent.tag}</p>
                  </div>
                </header>
                <blockquote className="team-agent__quote">“{agent.quote}”</blockquote>
                <p className="team-agent__body">{agent.body}</p>
                <ul className="team-agent__chips">
                  {agent.specialties.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
                <p className="team-agent__label">{copy.asksLabel}</p>
                <ul className="team-agent__asks">
                  {agent.asks.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
                <div className="team-agent__seen">
                  <p className="team-agent__label">
                    {copy.seenInLabel}
                    <span
                      className={`app-status-badge app-status-badge--${role.stage === "planned" ? "coming-soon" : role.stage}`}
                    >
                      {copy.stageLabels[role.stage]}
                    </span>
                  </p>
                  <p className="team-agent__seen-text">
                    {app ? (
                      <LocaleLink href={`/apps/${app.slug}`}>{agent.seenIn}</LocaleLink>
                    ) : (
                      agent.seenIn
                    )}
                  </p>
                </div>
              </article>
            );
          })}
        </div>
      </section>

      <section className="team-section" aria-labelledby="team-flow-heading">
        <h2 id="team-flow-heading" className="section-title">
          {copy.flowHeading}
        </h2>
        <p className="section-lead">{copy.flowLead}</p>
        <ol className="team-flow">
          {copy.flow.map((step, index) => (
            <li key={`${step.who}-${index}`} className={`team-flow__step team-flow__step--${step.kind}`}>
              <span className="team-flow__who">{step.who}</span>
              <span className="team-flow__what">{step.what}</span>
              {step.note && <span className="team-flow__note">↺ {step.note}</span>}
            </li>
          ))}
        </ol>
        <p className="team-flow__loop">↺ {copy.flowLoop}</p>

        <div className="panel team-banter">
          <p className="team-agent__label">{copy.banterHeading}</p>
          <ul>
            {copy.banter.map(({ who, line }) => (
              <li key={who} className="team-banter__line">
                <span className={`team-avatar team-avatar--sm team-avatar--${who}`}>
                  <Image src={avatarOf(who)} alt="" fill sizes="2.25rem" className="team-avatar__img" />
                </span>
                <span>
                  <strong>{copy.agents[who].name}</strong> {line}
                </span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {locale === "zh" && (
        <section className="team-section team-easter-egg" aria-labelledby="team-egg-heading">
          <h2 id="team-egg-heading" className="section-title">
            幕后花絮：团队的真实关系 😂
          </h2>
          <p className="section-lead">
            以上是官方分工。以下是他们私下的样子——仅供娱乐，不代表产品架构。
          </p>
          <div className="team-easter-egg__frame">
            <Image
              src="/team/team-cartoon-zh.webp"
              alt="团队关系图：星哥（神秘大Boss）、至尊宝（嘴最硬）、小甜甜（最会哄人）、牛夫人（最会追责）、二当家（背锅侠 + 情报员）"
              width={1689}
              height={931}
              sizes="(max-width: 48rem) 100vw, 48rem"
              className="team-easter-egg__img"
            />
          </div>
        </section>
      )}

      <p className="team-outro">
        <LocaleLink href="/story">{copy.outroStory} &rarr;</LocaleLink>
        <LocaleLink href="/about">{copy.outroAbout} &rarr;</LocaleLink>
      </p>
    </main>
  );
}
