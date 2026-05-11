export type AppFeature = {
  name: string;
  free: boolean;
  pro: boolean;
  enterprise: boolean;
};

export type RoadmapItem = {
  title: string;
  status: "shipped" | "in-progress" | "planned";
};

export type AppData = {
  slug: string;
  name: string;
  tagline: string;
  description: string;
  category: string;
  icon: string;
  iconDark: string;
  favicon: string;
  screenshots: { src: string; alt: string; caption: string }[];
  features: AppFeature[];
  roadmap: RoadmapItem[];
  /** Product in development—detail page uses a lighter layout */
  comingSoon?: boolean;
};

export const apps: AppData[] = [
  {
    slug: "meal-coach",
    name: "XingAI Meal Coach",
    tagline: "Eat Better",
    icon: "/meal-coach-icon.png",
    iconDark: "/meal-coach-icon-dark.png",
    favicon: "/favicon-meal-coach.png",
    description:
      "AI-powered meal coaching\u2014personalized suggestions, dietary awareness, and clarity without analysis paralysis. Built with local AI where privacy matters.",
    category: "Health AI",
    screenshots: [
      {
        src: "/food-demo-light.jpg",
        alt: "XingAI Meal Coach light theme",
        caption: "Meal coaching flow \u2014 light theme",
      },
      {
        src: "/food-demo-dark.jpg",
        alt: "XingAI Meal Coach dark theme",
        caption: "Same flow \u2014 dark theme",
      },
    ],
    features: [
      { name: "Meal suggestions", free: true, pro: true, enterprise: true },
      { name: "Dietary filters", free: true, pro: true, enterprise: true },
      { name: "Weekly meal plan", free: false, pro: true, enterprise: true },
      { name: "Grocery list export", free: false, pro: true, enterprise: true },
      { name: "Nutrition tracking", free: false, pro: true, enterprise: true },
      { name: "Family profiles", free: false, pro: false, enterprise: true },
      { name: "API access", free: false, pro: false, enterprise: true },
      { name: "Custom branding", free: false, pro: false, enterprise: true },
    ],
    roadmap: [
      { title: "Core meal suggestion engine", status: "shipped" },
      { title: "Light & dark theme UI", status: "shipped" },
      { title: "Dietary preference filters", status: "in-progress" },
      { title: "Weekly meal planner", status: "planned" },
      { title: "Grocery list generation", status: "planned" },
      { title: "Nutrition dashboard", status: "planned" },
    ],
  },
  {
    slug: "cook-ai",
    name: "XingAI Cook AI",
    tagline: "Cook Smarter",
    icon: "/cook-ai-icon.png",
    iconDark: "/cook-ai-icon-dark.png",
    favicon: "/favicon-cook-ai.png",
    description:
      "Step-by-step cooking guidance powered by AI\u2014recipes, substitutions, timing, and technique tips so every dish turns out right.",
    category: "Cooking AI",
    screenshots: [
      { src: "/cook-demo-light.jpg", alt: "Cook AI light theme", caption: "Cooking guidance flow \u2014 light theme" },
      { src: "/cook-demo-dark.jpg", alt: "Cook AI dark theme", caption: "Same flow \u2014 dark theme" },
    ],
    features: [],
    comingSoon: true,
    roadmap: [
      { title: "Recipe-aware step guidance", status: "planned" },
      { title: "Ingredient substitution engine", status: "planned" },
      { title: "Public preview", status: "planned" },
    ],
  },
  {
    slug: "outfit-ai",
    name: "XingAI Outfit AI",
    tagline: "Dress Smarter",
    icon: "/outfit-ai-icon.png",
    iconDark: "/outfit-ai-icon-dark.png",
    favicon: "/favicon-outfit-ai.png",
    description:
      "Style and outfit decisions with structured AI guidance\u2014fewer tabs, clearer choices, and confidence before you walk out the door.",
    category: "Outfit AI",
    screenshots: [
      { src: "/outfit-demo-light.jpg", alt: "Outfit AI light theme", caption: "Style decision flow \u2014 light theme" },
      { src: "/outfit-demo-dark.jpg", alt: "Outfit AI dark theme", caption: "Same flow \u2014 dark theme" },
    ],
    features: [],
    comingSoon: true,
    roadmap: [
      { title: "Wardrobe-aware outfit suggestions", status: "planned" },
      { title: "Confidence-first decision flow", status: "planned" },
      { title: "Public preview", status: "planned" },
    ],
  },
  {
    slug: "routine-ai",
    name: "XingAI Routine AI",
    tagline: "Live Better",
    icon: "/routine-ai-icon.png",
    iconDark: "/routine-ai-icon-dark.png",
    favicon: "/favicon-routine-ai.png",
    description:
      "Habit and routine decisions that stick\u2014gentle nudges, realistic schedules, and feedback tuned for everyday life.",
    category: "Routine AI",
    screenshots: [
      { src: "/routine-demo-light.jpg", alt: "Routine AI light theme", caption: "Daily routine flow \u2014 light theme" },
      { src: "/routine-demo-dark.jpg", alt: "Routine AI dark theme", caption: "Same flow \u2014 dark theme" },
    ],
    features: [],
    comingSoon: true,
    roadmap: [
      { title: "Habit design templates", status: "planned" },
      { title: "Accountability without guilt", status: "planned" },
      { title: "Public preview", status: "planned" },
    ],
  },
  {
    slug: "parent-ai",
    name: "XingAI Parent AI",
    tagline: "Family Support",
    icon: "/parent-ai-icon.png",
    iconDark: "/parent-ai-icon-dark.png",
    favicon: "/favicon-parent-ai.png",
    description:
      "Parenting decision support\u2014schedules, milestones, and gentle guidance so you feel prepared instead of overwhelmed.",
    category: "Parenting AI",
    screenshots: [
      { src: "/parent-demo-light.jpg", alt: "Parent AI light theme", caption: "Parenting guidance flow \u2014 light theme" },
      { src: "/parent-demo-dark.jpg", alt: "Parent AI dark theme", caption: "Same flow \u2014 dark theme" },
    ],
    features: [],
    comingSoon: true,
    roadmap: [
      { title: "Age-aware milestone tracking", status: "planned" },
      { title: "Schedule & routine suggestions", status: "planned" },
      { title: "Public preview", status: "planned" },
    ],
  },
  {
    slug: "travel-ai",
    name: "XingAI Travel AI",
    tagline: "Explore Better",
    icon: "/travel-ai-icon.png",
    iconDark: "/travel-ai-icon-dark.png",
    favicon: "/favicon-travel-ai.png",
    description:
      "Travel decision intelligence\u2014destination options, itinerary trade-offs, and local insights without tab overload.",
    category: "Travel AI",
    screenshots: [
      { src: "/travel-demo-light.jpg", alt: "Travel AI light theme", caption: "Travel planning flow \u2014 light theme" },
      { src: "/travel-demo-dark.jpg", alt: "Travel AI dark theme", caption: "Same flow \u2014 dark theme" },
    ],
    features: [],
    comingSoon: true,
    roadmap: [
      { title: "Destination comparison engine", status: "planned" },
      { title: "Itinerary decision flow", status: "planned" },
      { title: "Public preview", status: "planned" },
    ],
  },
  {
    slug: "investment-assistant",
    name: "XingAI Investment Assistant",
    tagline: "Invest Smarter",
    icon: "/investment-ai-icon.png",
    iconDark: "/investment-ai-icon-dark.png",
    favicon: "/favicon-investment-ai.png",
    description:
      "Investing decision support\u2014structure, context, and risk-aware framing so you can think in systems, not headlines.",
    category: "Finance AI",
    screenshots: [
      { src: "/invest-demo-light.jpg", alt: "Investment Assistant light theme", caption: "Investment decision flow \u2014 light theme" },
      { src: "/invest-demo-dark.jpg", alt: "Investment Assistant dark theme", caption: "Same flow \u2014 dark theme" },
    ],
    features: [],
    comingSoon: true,
    roadmap: [
      { title: "Signal framing & scenario views", status: "planned" },
      { title: "Risk-first guardrails", status: "planned" },
      { title: "Public preview", status: "planned" },
    ],
  },
];

export function getAppBySlug(slug: string): AppData | undefined {
  return apps.find((a) => a.slug === slug);
}
