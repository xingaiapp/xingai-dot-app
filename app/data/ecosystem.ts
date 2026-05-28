/** Product groupings for the /story ecosystem page. Slugs must match `apps.ts`. */

export type EcosystemClusterId = "everyday" | "invest";

export type EcosystemCluster = {
  id: EcosystemClusterId;
  titleKey: "storyClusterEverydayTitle" | "storyClusterInvestTitle";
  leadKey: "storyClusterEverydayLead" | "storyClusterInvestLead";
  productSlugs: string[];
};

export const ecosystemClusters: EcosystemCluster[] = [
  {
    id: "everyday",
    titleKey: "storyClusterEverydayTitle",
    leadKey: "storyClusterEverydayLead",
    productSlugs: [
      "meal-coach",
      "cook-ai",
      "outfit-ai",
      "routine-ai",
      "sat-ai",
      "parent-ai",
      "travel-ai",
    ],
  },
  {
    id: "invest",
    titleKey: "storyClusterInvestTitle",
    leadKey: "storyClusterInvestLead",
    productSlugs: ["investment-assistant", "performance-sim", "t-today"],
  },
];

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
