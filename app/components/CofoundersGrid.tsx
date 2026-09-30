"use client";

import Image from "next/image";
import { useTranslation } from "../i18n/LanguageContext";

/** Xing + Allen photo cards, shared by /about and /team. */
export default function CofoundersGrid() {
  const { t } = useTranslation();

  return (
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
            <a
              href="https://www.linkedin.com/in/xingaiapp/"
              className="cofounder-name-link"
              rel="noopener noreferrer"
              target="_blank"
            >
              Xing
            </a>
            <span className="role">
              {t("cofounder")}
              <span className="role-sub">{t("aiArchitect")}</span>
            </span>
          </figcaption>
        </figure>
        <p className="cofounder-bio">{t("xingBio")}</p>
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
            <a
              href="https://www.linkedin.com/in/uwspstar/"
              className="cofounder-name-link"
              rel="noopener noreferrer"
              target="_blank"
            >
              Allen
            </a>
            <span className="role">
              {t("cofounder")}
              <span className="role-sub">{t("aiArchitect")}</span>
            </span>
          </figcaption>
        </figure>
        <p className="cofounder-bio">{t("allenBio")}</p>
      </div>
    </div>
  );
}
