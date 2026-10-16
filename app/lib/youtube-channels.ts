/**
 * Latest uploads for the five XingAI YouTube channels, read server-side from
 * each channel's public uploads feed (the RSS mirror of its uploads
 * playlist). Same mechanism as the travel homepage: no API key, no quota;
 * the fetch is ISR-cached (30 minutes) so the page stays static-fast and
 * refreshes itself. Any feed failure resolves to an empty list and that
 * channel's section hides itself — the page must never break because
 * YouTube is unreachable.
 */

import type { TranslationKey } from "../i18n/translations";

export interface YoutubeChannel {
  /** Stable key used for anchors and ordering. */
  key: string;
  /** Display name (channel name as it appears on YouTube). */
  name: string;
  handle: string;
  channelId: string;
  uploadsPlaylistId: string;
  channelUrl: string;
  subscribeUrl: string;
  uploadsUrl: string;
  taglineKey: TranslationKey;
}

function channel(
  key: string,
  name: string,
  handle: string,
  channelId: string,
  taglineKey: TranslationKey,
): YoutubeChannel {
  const uploadsPlaylistId = `UU${channelId.slice(2)}`;
  const channelUrl = `https://www.youtube.com/${handle}`;
  return {
    key,
    name,
    handle,
    channelId,
    uploadsPlaylistId,
    channelUrl,
    subscribeUrl: `${channelUrl}?sub_confirmation=1`,
    uploadsUrl: `https://www.youtube.com/playlist?list=${uploadsPlaylistId}`,
    taglineKey,
  };
}

/**
 * Section order: the brand channel first (this is the main site's own hub),
 * then the order used by the channels' "More from XingAI" cross-promotion.
 */
export const YOUTUBE_CHANNELS: YoutubeChannel[] = [
  channel("xingaiapp", "XingAI", "@xingaiapp", "UCY9z2PEkZMB_tjPnL5a64_w", "channelsTaglineApp"),
  channel("axingstocks", "阿星美股日記", "@axingstocks", "UCsYojMgvxLWvzwRfLgg_ERQ", "channelsTaglineAxingstocks"),
  channel("xingaiinvest", "XingAI Invest", "@xingaiinvest", "UCUWFq9x2Y7ejYvD4bzxzQaA", "channelsTaglineInvest"),
  channel("xingaitravel", "XingAI Travel", "@xingaitravel", "UCaexpFXZ7AsVAv3ZZmMzWtw", "channelsTaglineTravel"),
  channel("xingaicook", "XingAI Cook", "@xingaicook", "UCD3540suOLBaWiPSZCFkCTQ", "channelsTaglineCook"),
];

export interface LatestVideo {
  id: string;
  title: string;
  /** Canonical watch URL from the feed (shorts link for Shorts, watch link otherwise). */
  url: string;
  published: string;
  thumbnail: string;
}

function decodeEntities(value: string): string {
  return value
    .replace(/&amp;/g, "&")
    .replace(/&quot;/g, '"')
    .replace(/&#39;/g, "'")
    .replace(/&apos;/g, "'")
    .replace(/&lt;/g, "<")
    .replace(/&gt;/g, ">");
}

function firstMatch(source: string, pattern: RegExp): string | null {
  const match = source.match(pattern);
  return match ? match[1] : null;
}

export async function getLatestVideos(channelId: string, limit = 3): Promise<LatestVideo[]> {
  try {
    const response = await fetch(`https://www.youtube.com/feeds/videos.xml?channel_id=${channelId}`, {
      next: { revalidate: 1800 },
      headers: { "user-agent": "Mozilla/5.0 (compatible; XingAISite/1.0)" },
    });
    if (!response.ok) return [];
    const xml = await response.text();
    const entries = xml.match(/<entry>[\s\S]*?<\/entry>/g) ?? [];
    const videos: LatestVideo[] = [];
    for (const entry of entries) {
      const id = firstMatch(entry, /<yt:videoId>([^<]+)<\/yt:videoId>/);
      const title = firstMatch(entry, /<title>([^<]+)<\/title>/);
      if (!id || !title) continue;
      videos.push({
        id,
        title: decodeEntities(title),
        url: firstMatch(entry, /<link rel="alternate" href="([^"]+)"/) ?? `https://www.youtube.com/watch?v=${id}`,
        published: firstMatch(entry, /<published>([^<]+)<\/published>/) ?? "",
        thumbnail: `https://i.ytimg.com/vi/${id}/hqdefault.jpg`,
      });
      if (videos.length >= limit) break;
    }
    return videos;
  } catch {
    return [];
  }
}
