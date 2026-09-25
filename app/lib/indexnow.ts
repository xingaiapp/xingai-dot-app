/** IndexNow key for Bing / Yandex / Seznam / Naver. Public by protocol: hosted at `/{key}.txt`. */
export const INDEXNOW_KEY =
  "81cb1605b45dafc8512a99cb09c075e30c484be8d10d24f955561226814b415b";

export const INDEXNOW_HOST = "xingai.app";

export const INDEXNOW_KEY_LOCATION = `https://${INDEXNOW_HOST}/${INDEXNOW_KEY}.txt`;

/** Best-effort notify. Never throw — search ping must not fail product writes. */
export async function notifyIndexNow(
  urls: string[],
): Promise<{ ok: boolean; status?: number }> {
  const unique = [
    ...new Set(urls.filter((u) => u.startsWith(`https://${INDEXNOW_HOST}`))),
  ];
  if (unique.length === 0) return { ok: false };

  const payload = {
    host: INDEXNOW_HOST,
    key: INDEXNOW_KEY,
    keyLocation: INDEXNOW_KEY_LOCATION,
    urlList: unique.slice(0, 100),
  };

  try {
    const res = await fetch("https://api.indexnow.org/indexnow", {
      method: "POST",
      headers: {
        "Content-Type": "application/json; charset=utf-8",
        "User-Agent": "XingAI-IndexNow/1.0",
      },
      body: JSON.stringify(payload),
      signal: AbortSignal.timeout(5000),
    });
    return { ok: res.status === 200 || res.status === 202, status: res.status };
  } catch {
    return { ok: false };
  }
}
