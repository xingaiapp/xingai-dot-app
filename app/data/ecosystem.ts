/** Structure for the /story page. Product slugs must match `apps.ts`. */

import type { TranslationKey } from "../i18n/translations";

/**
 * Where each part of the system stands today. Keep this honest: the story
 * page must not present roadmap pieces as shipped.
 */
export type SystemStage = "available" | "building" | "planned";

export type SystemLayer = {
  id: "vault" | "orchestrator" | "agents" | "apps" | "trust";
  /** Permanent idea number, shown only for the two core system pieces. */
  ideaId?: string;
  roleKey: TranslationKey;
  nameKey: TranslationKey;
  textKey: TranslationKey;
  stage: SystemStage;
};

/** Top-to-bottom order of the loop diagram. Results return from the last layer to the first. */
export const systemLayers: SystemLayer[] = [
  {
    id: "vault",
    ideaId: "#001",
    roleKey: "storyLayerVaultRole",
    nameKey: "storyLayerVaultName",
    textKey: "storyLayerVaultText",
    stage: "building",
  },
  {
    id: "orchestrator",
    ideaId: "#002",
    roleKey: "storyLayerOrchRole",
    nameKey: "storyLayerOrchName",
    textKey: "storyLayerOrchText",
    stage: "planned",
  },
  {
    id: "agents",
    roleKey: "storyLayerAgentsRole",
    nameKey: "storyLayerAgentsName",
    textKey: "storyLayerAgentsText",
    stage: "planned",
  },
  {
    id: "apps",
    roleKey: "storyLayerAppsRole",
    nameKey: "storyLayerAppsName",
    textKey: "storyLayerAppsText",
    stage: "available",
  },
  {
    id: "trust",
    roleKey: "storyLayerTrustRole",
    nameKey: "storyLayerTrustName",
    textKey: "storyLayerTrustText",
    stage: "available",
  },
];

/** Agent roles the Orchestrator is planned to coordinate. None run as agents yet. */
export const plannedAgentKeys: TranslationKey[] = [
  "storyAgentResearch",
  "storyAgentEvidence",
  "storyAgentArchitecture",
  "storyAgentBuild",
  "storyAgentMonitor",
  "storyAgentGrowth",
  "storyAgentReport",
];

export type ProductDomain = {
  id: "everyday" | "learning" | "investing" | "research" | "operations";
  titleKey: TranslationKey;
  leadKey: TranslationKey;
  productSlugs: string[];
};

/** The product layer, grouped by the job each app does. Every catalog app appears once. */
export const productDomains: ProductDomain[] = [
  {
    id: "everyday",
    titleKey: "storyDomainEverydayTitle",
    leadKey: "storyDomainEverydayLead",
    productSlugs: [
      "cook-ai",
      "travel-ai",
      "outfit-ai",
      "meal-coach",
      "routine-ai",
      "daily-assistant",
      "parent-ai",
    ],
  },
  {
    id: "learning",
    titleKey: "storyDomainLearningTitle",
    leadKey: "storyDomainLearningLead",
    productSlugs: ["research-ai", "learn-ai", "sat-ai", "engineering-coach"],
  },
  {
    id: "investing",
    titleKey: "storyDomainInvestingTitle",
    leadKey: "storyDomainInvestingLead",
    productSlugs: ["investment-assistant", "decision-agent", "performance-sim", "t-today"],
  },
  {
    id: "research",
    titleKey: "storyDomainResearchTitle",
    leadKey: "storyDomainResearchLead",
    productSlugs: ["shop-radar", "passive-income", "founder-ai"],
  },
];

/** Trust + feedback layer: shown in its own section, not with the product domains. */
export const operationsDomain: ProductDomain = {
  id: "operations",
  titleKey: "storyDomainOperationsTitle",
  leadKey: "storyDomainOperationsLead",
  productSlugs: ["evidence-engine", "growth-monitor", "ops-status", "eval-registry"],
};

export type InvestFlowStep = {
  slug: string;
  domain: string;
  roleKey: "storyInvestRoleCore" | "storyInvestRoleLab" | "storyInvestRoleT";
};

/** Left-to-right: decision core → paper lab → daily T plan */
export const investFlowSteps: InvestFlowStep[] = [
  {
    slug: "investment-assistant",
    domain: "invest.xingai.app",
    roleKey: "storyInvestRoleCore",
  },
  {
    slug: "performance-sim",
    domain: "lab.xingai.app",
    roleKey: "storyInvestRoleLab",
  },
  {
    slug: "t-today",
    domain: "t.xingai.app",
    roleKey: "storyInvestRoleT",
  },
];
