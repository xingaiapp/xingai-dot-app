import { afterEach, beforeEach, describe, expect, it, vi } from "vitest";
import { clientKey, createRateLimiter } from "../app/lib/rate-limit";

describe("createRateLimiter", () => {
  it("allows up to max hits, then blocks with a retry time", () => {
    let t = 0;
    const check = createRateLimiter([{ windowMs: 60_000, max: 3 }], () => t);
    expect(check("a").ok).toBe(true);
    t = 1000;
    expect(check("a").ok).toBe(true);
    t = 2000;
    expect(check("a").ok).toBe(true);
    t = 3000;
    const blocked = check("a");
    expect(blocked).toEqual({ ok: false, retryAfterSec: 57 });
  });

  it("allows again once the oldest hit leaves the window", () => {
    let t = 0;
    const check = createRateLimiter([{ windowMs: 60_000, max: 2 }], () => t);
    check("a");
    t = 10_000;
    check("a");
    t = 20_000;
    expect(check("a").ok).toBe(false);
    t = 60_001;
    expect(check("a").ok).toBe(true);
  });

  it("keeps visitors separate", () => {
    const check = createRateLimiter([{ windowMs: 60_000, max: 1 }], () => 0);
    expect(check("a").ok).toBe(true);
    expect(check("b").ok).toBe(true);
    expect(check("a").ok).toBe(false);
  });

  it("applies the strictest of several rules", () => {
    let t = 0;
    const check = createRateLimiter(
      [
        { windowMs: 60_000, max: 3 },
        { windowMs: 3_600_000, max: 4 },
      ],
      () => t,
    );
    for (let i = 0; i < 3; i++) {
      t = i * 61_000;
      expect(check("a").ok).toBe(true);
    }
    t = 3 * 61_000;
    expect(check("a").ok).toBe(true);
    t = 4 * 61_000;
    const blocked = check("a");
    expect(blocked.ok).toBe(false);
    if (!blocked.ok) expect(blocked.retryAfterSec).toBeGreaterThan(3000);
  });

  it("does not count blocked attempts", () => {
    let t = 0;
    const check = createRateLimiter([{ windowMs: 60_000, max: 1 }], () => t);
    check("a");
    for (t = 1000; t < 30_000; t += 1000) check("a");
    t = 60_001;
    expect(check("a").ok).toBe(true);
  });
});

describe("clientKey", () => {
  it("prefers x-real-ip, then the first forwarded address", () => {
    expect(clientKey(new Request("http://x", { headers: { "x-real-ip": "1.1.1.1", "x-forwarded-for": "2.2.2.2" } }))).toBe("1.1.1.1");
    expect(clientKey(new Request("http://x", { headers: { "x-forwarded-for": "2.2.2.2, 3.3.3.3" } }))).toBe("2.2.2.2");
    expect(clientKey(new Request("http://x"))).toBe("unknown");
  });
});

describe("POST /api/contact", () => {
  const original = { ...process.env };
  beforeEach(() => {
    vi.resetModules();
    process.env.RESEND_API_KEY = "test-key";
    vi.stubGlobal("fetch", vi.fn(async () => new Response("{}", { status: 200 })));
  });
  afterEach(() => {
    process.env = { ...original };
    vi.unstubAllGlobals();
  });

  const send = (post: (r: Request) => Promise<Response>, ip: string) =>
    post(
      new Request("http://localhost/api/contact", {
        method: "POST",
        headers: { "content-type": "application/json", "x-real-ip": ip },
        body: JSON.stringify({ name: "A", email: "a@example.com", subject: "Hi", message: "Hello", website: "" }),
      }),
    );

  it("returns 429 with Retry-After after three sends in a minute and sends no extra email", async () => {
    const { POST } = await import("../app/api/contact/route");
    const statuses: number[] = [];
    for (let i = 0; i < 5; i++) statuses.push((await send(POST, "9.9.9.9")).status);
    expect(statuses).toEqual([200, 200, 200, 429, 429]);
    expect((fetch as unknown as ReturnType<typeof vi.fn>).mock.calls.length).toBe(3);
    const blocked = await send(POST, "9.9.9.9");
    expect(blocked.headers.get("Retry-After")).toMatch(/^\d+$/);
    expect(await blocked.json()).toEqual({ ok: false, error: "rate_limited" });
  });

  it("does not limit a different visitor", async () => {
    const { POST } = await import("../app/api/contact/route");
    for (let i = 0; i < 4; i++) await send(POST, "9.9.9.9");
    expect((await send(POST, "8.8.8.8")).status).toBe(200);
  });

  it("does not count bad submissions against the allowance", async () => {
    const { POST } = await import("../app/api/contact/route");
    const bad = () =>
      POST(new Request("http://localhost/api/contact", { method: "POST", headers: { "x-real-ip": "7.7.7.7" }, body: JSON.stringify({ name: "" }) }));
    for (let i = 0; i < 6; i++) expect((await bad()).status).toBe(400);
    expect((await send(POST, "7.7.7.7")).status).toBe(200);
  });
});
