/**
 * Small in-memory sliding-window limiter.
 *
 * State lives in one server instance, so on serverless hosting each warm instance counts on its own.
 * That blunts scripted floods without needing an external store; a shared store would be the next step
 * if abuse ever gets past it.
 */

export type RateRule = {
  /** Window length in milliseconds. */
  windowMs: number;
  /** Requests allowed per key inside the window. */
  max: number;
};

export type RateResult = { ok: true } | { ok: false; retryAfterSec: number };

const MAX_KEYS = 5000;

export function createRateLimiter(rules: RateRule[], now: () => number = Date.now) {
  const hits = new Map<string, number[]>();
  const longest = Math.max(...rules.map((r) => r.windowMs));

  function prune(t: number) {
    for (const [key, stamps] of hits) {
      const fresh = stamps.filter((s) => t - s < longest);
      if (fresh.length) hits.set(key, fresh);
      else hits.delete(key);
    }
  }

  return function check(key: string): RateResult {
    const t = now();
    if (hits.size >= MAX_KEYS) prune(t);

    const stamps = (hits.get(key) ?? []).filter((s) => t - s < longest);
    let wait = 0;
    for (const rule of rules) {
      const inWindow = stamps.filter((s) => t - s < rule.windowMs);
      if (inWindow.length >= rule.max) {
        // Allowed again once enough hits age out to drop the count below `max`.
        const unblocking = inWindow[inWindow.length - rule.max];
        wait = Math.max(wait, unblocking + rule.windowMs - t);
      }
    }
    if (wait > 0) {
      hits.set(key, stamps);
      return { ok: false, retryAfterSec: Math.max(1, Math.ceil(wait / 1000)) };
    }

    stamps.push(t);
    hits.set(key, stamps);
    return { ok: true };
  };
}

/** Best-effort client address from the proxy headers the host sets. */
export function clientKey(request: Request): string {
  const real = request.headers.get("x-real-ip")?.trim();
  if (real) return real;
  const forwarded = request.headers.get("x-forwarded-for")?.split(",")[0]?.trim();
  return forwarded || "unknown";
}
