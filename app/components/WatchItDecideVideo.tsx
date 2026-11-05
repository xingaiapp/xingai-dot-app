"use client";

import { useState } from "react";

type Props = {
  videoId: string;
  /** Video title shown on the facade and used as the iframe title. */
  title: string;
  /** Localised "play" wording for the accessible label. */
  playLabel: string;
};

/**
 * Lightweight YouTube facade (ADR-0004): renders only the thumbnail until
 * clicked, so embedding a video never weighs down the first paint. The
 * privacy-enhanced (youtube-nocookie) player loads on click. Shaped 9:16
 * for the vertical Watch It Decide long-form videos (ADR-0216).
 */
export default function WatchItDecideVideo({ videoId, title, playLabel }: Props) {
  const [playing, setPlaying] = useState(false);

  if (playing) {
    return (
      <div className="watch-facade watch-facade--playing">
        <iframe
          className="watch-facade__frame"
          src={`https://www.youtube-nocookie.com/embed/${videoId}?autoplay=1&rel=0`}
          title={title}
          allow="accelerometer; autoplay; encrypted-media; picture-in-picture"
          allowFullScreen
        />
      </div>
    );
  }

  return (
    <button
      type="button"
      className="watch-facade"
      onClick={() => setPlaying(true)}
      aria-label={`${playLabel}: ${title}`}
    >
      <img
        className="watch-facade__thumb"
        src={`https://i.ytimg.com/vi/${videoId}/maxresdefault.jpg`}
        alt={title}
        loading="lazy"
      />
      <span className="watch-facade__play" aria-hidden="true">
        <svg viewBox="0 0 24 24" className="watch-facade__play-icon">
          <path d="M8 5v14l11-7z" />
        </svg>
      </span>
      <span className="watch-facade__title">{title}</span>
    </button>
  );
}
