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

      <section className="cofounders" aria-labelledby="cofounders-heading">
        <h2 id="cofounders-heading" className="cofounders-heading">
          Co-founders
        </h2>
        <div className="cofounders-grid">
          <div className="cofounder">
            <figure>
              <div className="cofounder-photo">
                <Image
                  src="/xing1.png"
                  alt="Xing"
                  fill
                  sizes="(max-width: 400px) 85vw, 11rem"
                  className="cofounder-photo-img"
                />
              </div>
              <figcaption>
                Xing
                <span className="role">
                  Co-founder
                  <span className="role-sub">AI architect</span>
                </span>
              </figcaption>
            </figure>
            <p className="cofounder-bio">
              AI architecture, product direction, and decision intelligence—how
              we shape models, data, and UX so the system stays understandable.
            </p>
          </div>
          <div className="cofounder">
            <figure>
              <div className="cofounder-photo">
                <Image
                  src="/allen1.png"
                  alt="Allen"
                  fill
                  sizes="(max-width: 400px) 85vw, 11rem"
                  className="cofounder-photo-img"
                />
              </div>
              <figcaption>
                Allen
                <span className="role">
                  Co-founder
                  <span className="role-sub">AI architect</span>
                </span>
              </figcaption>
            </figure>
            <p className="cofounder-bio">
              AI architecture, engineering, and reliable systems—Next.js,
              FastAPI, and local AI wired so behavior stays traceable and safe.
            </p>
          </div>
        </div>
        <p className="cofounders-contact-note">
          Questions for either of us?{" "}
          <a href="mailto:xing@xingai.app">xing@xingai.app</a> — we both read
          this inbox.
        </p>
      </section>

      <h2 className="tagline">
        AI lifestyle decision systems—built for clarity on the web.
      </h2>
      <p className="lead">
        Founded by Xing and Allen—co-founders and AI architects—xingai.app ships
        thoughtful tools at the intersection of local AI, decision intelligence,
        and everyday life. Stack: Next.js, FastAPI, and interfaces that respect
        your time.
      </p>

      <div className="panel">
        <p>
          <strong>Xing</strong> and <strong>Allen</strong> co-founded xingai.app
          as AI architects: we design how intelligence is structured, evaluated,
          and surfaced—clear interfaces, fast workflows, and tools that feel
          grounded instead of gimmicky.
        </p>
        <p>
          We are building in public—experiments, refinements, and releases that
          favor reliability before hype.
        </p>
        <p>
          Code and updates on GitHub; announcements on LinkedIn and shorter notes
          on X—links below.
        </p>
      </div>

      <p style={{ margin: "0 0 1.5rem" }}>
        <a className="cta" href="mailto:xing@xingai.app">
          Email Xing &amp; Allen
        </a>
      </p>

      <section className="demos-section" aria-labelledby="demos-heading">
        <p className="demos-heading">AI we build</p>
        <h2 id="demos-heading" className="demos-title">
          Apps &amp; demos
        </h2>
        <p className="demos-lead">
          Live apps and playable demos land here. Add a list row when something
          new goes public—use the cards for screenshots until you replace them
          with links.
        </p>
        <ul className="app-roadmap" aria-label="Roadmap and listings">
          <li>
            <span className="roadmap-name">Food / meals</span> — UI previews
            below; swap in a hosted link when the demo is live.
          </li>
          <li>
            <span className="roadmap-name">Next product</span> — duplicate a
            card or list item as you add more AI apps.
          </li>
        </ul>
        <ul className="demos-grid" aria-label="Food app demo previews">
          <li className="demo-card">
            <figure>
              <div className="demo-shot-wrap">
                <Image
                  src="/food-demo-light.jpg"
                  alt="Food app demo interface, light theme"
                  fill
                  sizes="(max-width: 36rem) 90vw, 17rem"
                  className="demo-shot-img"
                />
              </div>
              <figcaption className="demo-card-body">
                <h3 className="demo-card-title">Food</h3>
                <p className="demo-card-meta">Meal-focused flow — light theme.</p>
                <span className="demo-badge">Demo preview</span>
              </figcaption>
            </figure>
          </li>
          <li className="demo-card">
            <figure>
              <div className="demo-shot-wrap">
                <Image
                  src="/food-demo-dark.jpg"
                  alt="Food app demo interface, dark theme"
                  fill
                  sizes="(max-width: 36rem) 90vw, 17rem"
                  className="demo-shot-img"
                />
              </div>
              <figcaption className="demo-card-body">
                <h3 className="demo-card-title">Food</h3>
                <p className="demo-card-meta">Same flow — dark theme.</p>
                <span className="demo-badge">Demo preview</span>
              </figcaption>
            </figure>
          </li>
        </ul>
      </section>

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
        <div className="footer-main">
          <Image
            className="footer-logo"
            src="/xingai-logo.png"
            alt=""
            width={1774}
            height={887}
          />
          <span>© xingai.app</span>
        </div>
        <p className="footer-build">
          AI we build — demos and product links will grow here as we publish
          each surface.
        </p>
      </footer>
    </main>
  );
}
