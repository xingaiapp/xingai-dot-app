"use client";

import Image from "next/image";
import CofoundersGrid from "../../components/CofoundersGrid";
import LocaleLink from "../../components/LocaleLink";
import TeamBanterChat from "../../components/TeamBanterChat";
import { useTranslation } from "../../i18n/LanguageContext";
import { getLocalizedApps } from "../../data/apps";
import {
  agentRoles,
  castLeaderOrder,
  getTeamCopy,
  visionAvatar,
  type AgentId,
  type FlowFace,
} from "../../data/team";

export default function TeamPage() {
  const { locale } = useTranslation();
  const copy = getTeamCopy(locale);
  const appsBySlug = new Map(getLocalizedApps(locale).map((app) => [app.slug, app]));
  const rolesById = new Map(agentRoles.map((role) => [role.id, role]));
  const avatarOf = (id: AgentId) => rolesById.get(id)?.avatar ?? "";
  const faceSrc = (face: FlowFace) => {
    if (face === "vision") return visionAvatar;
    if (face === "result") return "";
    return avatarOf(face);
  };
  const faceRing = (face: FlowFace) => {
    if (face === "vision") return "xing-ge";
    if (face === "result") return "result";
    return face;
  };
  const castLeaders = castLeaderOrder
    .map((id) => rolesById.get(id))
    .filter((role): role is NonNullable<typeof role> => Boolean(role));

  return (
    <main className="wrap team-page">
      <section className="page-header team-hero">
        <p className="section-eyebrow">{copy.eyebrow}</p>
        <h1 className="page-heading">{copy.heading}</h1>
        <div className="team-cast" aria-label={copy.castFooter}>
          <div className="team-cast__vision">
            <div className="team-avatar team-avatar--xing-ge team-cast__vision-avatar">
              <Image
                src={visionAvatar}
                alt={copy.visionName}
                fill
                priority
                sizes="7rem"
                className="team-avatar__img"
              />
            </div>
            <p className="team-cast__vision-name">
              {copy.visionName}
              {locale !== "zh" && (
                <span className="team-cast__zh" lang="zh-CN">
                  {copy.visionZhName}
                </span>
              )}
            </p>
            <p className="team-cast__vision-title">{copy.visionTitle}</p>
          </div>
          <p className="team-cast__mission">{copy.castMission}</p>
          <ul className="team-cast__leaders">
            {castLeaders.map((role) => {
              const agent = copy.agents[role.id];
              return (
                <li key={role.id} className="team-cast__leader">
                  <a href={`#${role.id}`} className="team-cast__leader-link">
                    <span className={`team-avatar team-avatar--${role.id} team-cast__leader-avatar`}>
                      <Image
                        src={role.avatar}
                        alt=""
                        fill
                        priority
                        sizes="5.5rem"
                        className="team-avatar__img"
                      />
                    </span>
                    <span className="team-cast__leader-name">
                      {agent.name}
                      {locale !== "zh" && (
                        <span className="team-cast__zh" lang="zh-CN">
                          {role.zhName}
                        </span>
                      )}
                    </span>
                    <span className="team-cast__leader-nick">{agent.nickname}</span>
                  </a>
                </li>
              );
            })}
          </ul>
          <p className="team-cast__footer">{copy.castFooter}</p>
        </div>
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
              <article key={role.id} className={`panel team-agent team-agent--${role.id}`} id={role.id}>
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
                    <p className="team-agent__nickname">{agent.nickname}</p>
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
              <div className="team-flow__rail" aria-hidden="true">
                <span className="team-flow__index">{index + 1}</span>
                <div className="team-flow__faces">
                  {(step.faces ?? []).map((face) => {
                    const src = faceSrc(face);
                    if (!src) {
                      return (
                        <span
                          key={face}
                          className={`team-flow__face team-flow__face--mark team-avatar--${faceRing(face)}`}
                        >
                          ✓
                        </span>
                      );
                    }
                    return (
                      <span
                        key={face}
                        className={`team-avatar team-avatar--${faceRing(face)} team-flow__face`}
                      >
                        <Image src={src} alt="" fill sizes="2.75rem" className="team-avatar__img" />
                      </span>
                    );
                  })}
                </div>
              </div>
              <div className="team-flow__body">
                <span className="team-flow__who">{step.who}</span>
                <span className="team-flow__what">{step.what}</span>
                {step.note && <span className="team-flow__note">↺ {step.note}</span>}
              </div>
            </li>
          ))}
        </ol>
        <p className="team-flow__loop">↺ {copy.flowLoop}</p>

        <TeamBanterChat
          heading={copy.banterHeading}
          lines={copy.banter}
          agents={copy.agents}
          avatarOf={avatarOf}
          watcherName={copy.banterWatcherName}
          watcherCaption={copy.banterWatcherCaption}
        />
      </section>

      <section className="team-section team-easter-egg" aria-labelledby="team-egg-heading">
        <h2 id="team-egg-heading" className="section-title">
          {copy.easterEggHeading}
        </h2>
        <p className="section-lead">{copy.easterEggLead}</p>
        <div className="team-easter-egg__frame">
          <Image
            src={copy.easterEggSrc}
            alt={copy.easterEggAlt}
            width={1280}
            height={720}
            sizes="(max-width: 48rem) 100vw, 48rem"
            className="team-easter-egg__img"
            priority={false}
          />
        </div>
        <p className="team-easter-egg__actions">
          <a className="team-easter-egg__download" href={copy.easterEggSrc} download>
            {copy.easterEggDownload}
          </a>
        </p>
      </section>

      <p className="team-outro">
        <LocaleLink href="/story">{copy.outroStory} &rarr;</LocaleLink>
        <LocaleLink href="/about">{copy.outroAbout} &rarr;</LocaleLink>
      </p>
    </main>
  );
}
