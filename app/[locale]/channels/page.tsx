import { getTranslations } from "../../i18n/translations";
import { parseRoutingLocale } from "../../lib/locale-routing";
import { YOUTUBE_CHANNELS, getLatestVideos, type YoutubeChannel } from "../../lib/youtube-channels";
import VideoFacade from "../../components/VideoFacade";

type Props = { params: Promise<{ locale: string }> };

export default async function ChannelsPage({ params }: Props) {
  const { locale: raw } = await params;
  const locale = parseRoutingLocale(raw);
  const t = getTranslations(locale);

  const feeds = await Promise.all(
    YOUTUBE_CHANNELS.map(async (ch) => ({ channel: ch, videos: await getLatestVideos(ch.channelId, 3) })),
  );
  const visible = feeds.filter(({ videos }) => videos.length > 0);

  return (
    <main className="wrap channels-page">
      <section className="page-header">
        <p className="section-eyebrow">{t.channelsEyebrow}</p>
        <h1 className="page-heading">{t.channelsHeading}</h1>
        <p className="page-lead">{t.channelsLead}</p>
      </section>

      {visible.map(({ channel, videos }) => (
        <ChannelSection key={channel.key} channel={channel} videos={videos} t={t} />
      ))}
    </main>
  );
}

function ChannelSection({
  channel,
  videos,
  t,
}: {
  channel: YoutubeChannel;
  videos: Awaited<ReturnType<typeof getLatestVideos>>;
  t: ReturnType<typeof getTranslations>;
}) {
  const [main, ...rest] = videos;
  const headingId = `channel-${channel.key}`;

  return (
    <section className="channels-section" aria-labelledby={headingId}>
      <div className="channels-section__head">
        <div>
          <h2 id={headingId} className="section-title">
            {channel.name}{" "}
            <a
              href={channel.channelUrl}
              target="_blank"
              rel="noreferrer"
              className="channels-section__handle"
            >
              {channel.handle}
            </a>
          </h2>
          <p className="section-lead">{t[channel.taglineKey]}</p>
        </div>
        <a href={channel.subscribeUrl} target="_blank" rel="noreferrer" className="cta channels-subscribe">
          {t.channelsSubscribe}
        </a>
      </div>

      <div className="channels-grid">
        <figure className="channels-main">
          <VideoFacade videoId={main.id} title={main.title} thumbnail={main.thumbnail} />
          <figcaption className="channels-main__caption">
            <a href={main.url} target="_blank" rel="noreferrer">
              {main.title}
            </a>
          </figcaption>
        </figure>

        <div>
          <ul className="channels-cards">
            {rest.map((video) => (
              <li key={video.id}>
                <a href={video.url} target="_blank" rel="noreferrer" className="channels-card">
                  <span className="channels-card__media">
                    <img src={video.thumbnail} alt="" loading="lazy" />
                    <span className="channels-card__play" aria-hidden>
                      <svg viewBox="0 0 24 24" width="16" height="16" fill="currentColor" aria-hidden>
                        <path d="M8 5.5v13l11-6.5z" />
                      </svg>
                    </span>
                  </span>
                  <span className="channels-card__body">
                    <span className="channels-card__title">{video.title}</span>
                    <span className="channels-card__watch">
                      {t.channelsWatchOn} <span aria-hidden>→</span>
                    </span>
                  </span>
                </a>
              </li>
            ))}
          </ul>
          <a href={channel.uploadsUrl} target="_blank" rel="noreferrer" className="channels-all-link">
            {t.channelsAllVideos} <span aria-hidden>→</span>
          </a>
        </div>
      </div>
    </section>
  );
}
