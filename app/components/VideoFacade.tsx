"use client";

import { useState } from "react";

/**
 * Click-to-load YouTube facade: renders only the thumbnail and a play
 * button until clicked, then swaps in the youtube-nocookie player.
 * Keeps third-party iframes off the page until the visitor asks for one
 * (the industry-standard lite-embed pattern, same as the sister sites).
 */
export default function VideoFacade({
  videoId,
  title,
  thumbnail,
}: {
  videoId: string;
  title: string;
  thumbnail: string;
}) {
  const [playing, setPlaying] = useState(false);

  if (playing) {
    return (
      <div className="channels-facade">
        <iframe
          src={`https://www.youtube-nocookie.com/embed/${videoId}?autoplay=1&rel=0`}
          title={title}
          loading="lazy"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen
          className="channels-facade__iframe"
        />
      </div>
    );
  }

  return (
    <div className="channels-facade">
      <button
        type="button"
        onClick={() => setPlaying(true)}
        aria-label={title}
        className="channels-facade__button"
      >
        <img src={thumbnail} alt="" loading="lazy" className="channels-facade__thumb" />
        <span className="channels-facade__shade" aria-hidden />
        <span className="channels-facade__play" aria-hidden>
          <svg viewBox="0 0 24 24" width="30" height="30" fill="currentColor" aria-hidden>
            <path d="M8 5.5v13l11-6.5z" />
          </svg>
        </span>
      </button>
    </div>
  );
}
