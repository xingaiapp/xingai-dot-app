import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <main className="wrap">
      <section className="title-hero" aria-labelledby="site-title">
        <h1 id="site-title" className="page-title">
          <Link href="/">
            <Image
              src="/xingai-logo.png"
              alt="xingai.app"
              width={1774}
              height={887}
              priority
              sizes="(max-width: 560px) 100vw, 416px"
            />
          </Link>
        </h1>
      </section>

      <div className="profile-row">
        <Image
          src="/xing1.png"
          alt="Xing"
          width={1087}
          height={1447}
          sizes="(max-width: 560px) 42vw, 11rem"
        />
      </div>

      <h2 className="tagline">
        AI lifestyle decision systems—built for clarity on the web.
      </h2>
      <p className="lead">
        xingai.app ships thoughtful tools at the intersection of local AI,
        decision intelligence, and everyday life. Stack: Next.js, FastAPI, and
        interfaces that respect your time.
      </p>

      <div className="panel">
        <p>
          We are building in public. Expect experiments, refinements, and
          releases that aim for reliability before hype.
        </p>
        <p>
          Code and updates live on GitHub; announcements on LinkedIn and X—see
          links below.
        </p>
      </div>

      <p style={{ margin: "0 0 1.5rem" }}>
        <a className="cta" href="mailto:xing@xingai.app">
          Get in touch
        </a>
      </p>

      <nav className="socials" aria-label="Social and code">
        <span className="socials-label">Elsewhere</span>
        <a
          href="https://github.com/xingaiapp"
          rel="noopener noreferrer"
          target="_blank"
        >
          GitHub
        </a>
        <span className="socials-sep" aria-hidden="true">
          ·
        </span>
        <a
          href="https://www.linkedin.com/in/xingaiapp/"
          rel="noopener noreferrer"
          target="_blank"
        >
          LinkedIn
        </a>
        <span className="socials-sep" aria-hidden="true">
          ·
        </span>
        <a
          href="https://x.com/XingAIApp"
          rel="noopener noreferrer"
          target="_blank"
        >
          X
        </a>
      </nav>

      <footer className="site-footer">
        <Image
          className="footer-logo"
          src="/xingai-logo.png"
          alt=""
          width={1774}
          height={887}
        />
        <span>© xingai.app</span>
      </footer>
    </main>
  );
}
