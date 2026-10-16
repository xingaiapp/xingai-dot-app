"use client";

import { useEffect, useRef, useState } from "react";
import { useTranslation } from "../i18n/LanguageContext";
import { useTheme } from "./ThemeContext";

type DeviceKind = "desktop" | "mobile";
type Quality = "4k" | "1080p";

/** Languages whose promo files are live under /promo. Others fall back to English. */
const AVAILABLE_LANGS = new Set(["en"]);

function detectMobile(): boolean {
  if (typeof window === "undefined") return false;
  if (window.matchMedia("(max-width: 820px)").matches) return true;
  const nav = navigator as Navigator & {
    userAgentData?: { mobile?: boolean };
  };
  return nav.userAgentData?.mobile === true;
}

function detectLowBandwidth(): boolean {
  if (typeof navigator === "undefined") return false;
  const conn = (
    navigator as Navigator & {
      connection?: { saveData?: boolean; effectiveType?: string };
    }
  ).connection;
  if (!conn) return false;
  if (conn.saveData) return true;
  return ["slow-2g", "2g", "3g"].includes(conn.effectiveType ?? "");
}

export default function PromoVideo() {
  const { locale, t } = useTranslation();
  const { theme, mounted } = useTheme();
  const [device, setDevice] = useState<DeviceKind>("desktop");
  const [quality, setQuality] = useState<Quality>("4k");
  const [ready, setReady] = useState(false);
  const videoRef = useRef<HTMLVideoElement | null>(null);
  const resumeAtRef = useRef(0);

  useEffect(() => {
    const update = () => setDevice(detectMobile() ? "mobile" : "desktop");
    update();
    if (detectLowBandwidth()) setQuality("1080p");
    setReady(true);
    const mq = window.matchMedia("(max-width: 820px)");
    mq.addEventListener?.("change", update);
    return () => mq.removeEventListener?.("change", update);
  }, []);

  // Pre-hydration default is Dark (house default for the promo); once the
  // site's theme mechanism reports, the video follows the site theme.
  const resolvedTheme = mounted ? theme : "dark";
  const lang = AVAILABLE_LANGS.has(locale) ? locale : "en";
  const src = `/promo/promo-${lang}-${device}-${resolvedTheme}${
    quality === "1080p" ? "-1080p" : ""
  }.mp4`;
  const poster = `/promo/poster-${resolvedTheme}.jpg`;

  const switchQuality = (next: Quality) => {
    if (next === quality) return;
    const el = videoRef.current;
    if (el) resumeAtRef.current = el.currentTime;
    setQuality(next);
  };

  return (
    <section className="promo-section" aria-labelledby="promo-video-title">
      <div className="promo-head">
        <h2 id="promo-video-title" className="promo-title">
          {t("promoVideoTitle")}
        </h2>
        <p className="promo-caption">{t("promoVideoCaption")}</p>
      </div>
      <div className="promo-frame">
        {ready && mounted ? (
          <video
            key={src}
            ref={videoRef}
            className="promo-video"
            controls
            playsInline
            preload="none"
            poster={poster}
            aria-label={t("promoVideoTitle")}
            onLoadedMetadata={() => {
              const el = videoRef.current;
              if (el && resumeAtRef.current > 0) {
                el.currentTime = resumeAtRef.current;
                resumeAtRef.current = 0;
              }
            }}
          >
            <source src={src} type="video/mp4" />
          </video>
        ) : (
          <div
            className="promo-placeholder"
            style={{ backgroundImage: `url(${poster})` }}
            aria-hidden
          />
        )}
        <div className="promo-quality" role="group" aria-label="Video quality">
          <button
            type="button"
            className={`promo-quality-btn${quality === "4k" ? " is-active" : ""}`}
            onClick={() => switchQuality("4k")}
          >
            4K
          </button>
          <button
            type="button"
            className={`promo-quality-btn${quality === "1080p" ? " is-active" : ""}`}
            onClick={() => switchQuality("1080p")}
          >
            1080p
          </button>
        </div>
      </div>
    </section>
  );
}
