"use client";

import { useTranslation } from "../i18n/LanguageContext";
import type { TranslationKey } from "../i18n/translations";
import AppIcon from "./AppIcon";

type ProductSite = {
  id: "invest" | "travel" | "cook" | "wear";
  name: string;
  domain: string;
  href: string;
  icon: string;
  iconDark: string;
  lineKey: TranslationKey;
};

/** The four standalone XingAI product sites, linked from the homepage. */
const productSites: ProductSite[] = [
  {
    id: "invest",
    name: "XingAI Invest",
    domain: "invest.xingai.app",
    href: "https://invest.xingai.app",
    icon: "/investment-ai-icon.png",
    iconDark: "/investment-ai-icon-dark.png",
    lineKey: "productInvestLine",
  },
  {
    id: "travel",
    name: "XingAI Travel",
    domain: "travel.xingai.app",
    href: "https://travel.xingai.app",
    icon: "/travel-ai-icon.png",
    iconDark: "/travel-ai-icon-dark.png",
    lineKey: "productTravelLine",
  },
  {
    id: "cook",
    name: "XingAI Cook",
    domain: "cook.xingai.app",
    href: "https://cook.xingai.app",
    icon: "/cook-ai-icon.png",
    iconDark: "/cook-ai-icon-dark.png",
    lineKey: "productCookLine",
  },
  {
    id: "wear",
    name: "XingAI Wear",
    domain: "wear.xingai.app",
    href: "https://wear.xingai.app",
    icon: "/outfit-ai-icon.png",
    iconDark: "/outfit-ai-icon-dark.png",
    lineKey: "productWearLine",
  },
];

export default function HomeProducts() {
  const { t } = useTranslation();

  return (
    <section id="products" className="home-products" aria-labelledby="home-products-heading">
      <h2 id="home-products-heading" className="section-title">
        {t("productsHeading")}
      </h2>
      <p className="section-lead">{t("productsLead")}</p>

      <ul className="product-cards">
        {productSites.map((site) => (
          <li key={site.id} className={`product-card product-card--${site.id}`}>
            <a href={site.href} className="product-card-link">
              <span className="product-card-head">
                <AppIcon
                  light={site.icon}
                  dark={site.iconDark}
                  alt=""
                  size={44}
                  className="product-card-icon"
                />
                <span className="product-card-titles">
                  <span className="product-card-name">{site.name}</span>
                  <span className="product-card-domain">{site.domain}</span>
                </span>
              </span>
              <p className="product-card-line">{t(site.lineKey)}</p>
              <span className="product-card-visit">
                {t("productVisit")} <span aria-hidden="true">→</span>
              </span>
            </a>
          </li>
        ))}
      </ul>
    </section>
  );
}
