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
  screenshots: { src: string; srcDark?: string; alt: string; caption: string }[];
  features: AppFeature[];
  roadmap: RoadmapItem[];
  demoUrl?: string;
  sourceUrl?: string;
  /** `gumroad` = paid template CTA; `github` = open repo CTA (default gumroad when sourceUrl set). */
  sourceKind?: "gumroad" | "github";
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
    demoUrl: "https://xingai-meal-coach-ai.vercel.app/",
    sourceUrl: "https://uwspstar.gumroad.com/l/ai-meal-planner-nextjs-fastapi",
    sourceKind: "gumroad",
    description:
      "AI-powered meal coaching\u2014personalized suggestions, dietary awareness, and clarity without analysis paralysis. Built with local AI where privacy matters.",
    category: "Health AI",
    screenshots: [
      {
        src: "/food-demo-light.jpg",
        srcDark: "/food-demo-dark.jpg",
        alt: "XingAI Meal Coach",
        caption: "Meal coaching flow",
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
    demoUrl: "https://cook.xingai.app/",
    sourceUrl: "https://github.com/xingaiapp/xingai-cook-ai",
    sourceKind: "github",
    description:
      "Decide what to cook from what you already have\u2014scan your fridge or list ingredients, pick a meal slot, get one dish with an optional buy list and step-by-step cooking. OpenAI-powered V1 demo.",
    category: "Cooking AI",
    screenshots: [
      {
        src: "/cook-demo-light.jpg",
        srcDark: "/cook-demo-dark.jpg",
        alt: "XingAI Cook AI",
        caption: "Inventory \u2192 meal recommendation \u2192 cook",
      },
    ],
    features: [
      { name: "Fridge & pantry scan", free: true, pro: true, enterprise: true },
      { name: "Ingredient list input", free: true, pro: true, enterprise: true },
      { name: "Meal slot recommendations", free: true, pro: true, enterprise: true },
      { name: "Optional buy list", free: true, pro: true, enterprise: true },
      { name: "Step-by-step cooking", free: true, pro: true, enterprise: true },
      { name: "Speed mode constraints", free: true, pro: true, enterprise: true },
      { name: "Ingredient substitutions", free: true, pro: true, enterprise: true },
      { name: "Saved pantry & meals", free: false, pro: true, enterprise: true },
      { name: "API access", free: false, pro: false, enterprise: true },
      { name: "Custom branding", free: false, pro: false, enterprise: true },
    ],
    roadmap: [
      { title: "Inventory \u2192 meal \u2192 cook flow", status: "shipped" },
      { title: "Light & dark theme UI", status: "shipped" },
      { title: "OpenAI meal recommendations", status: "shipped" },
      { title: "Live demo at cook.xingai.app", status: "shipped" },
      { title: "Pantry & saved meals", status: "in-progress" },
      { title: "Real step timers", status: "planned" },
      { title: "Weekly meal planning", status: "planned" },
    ],
  },
  {
    slug: "outfit-ai",
    name: "XingAI Outfit AI",
    tagline: "Dress Smarter",
    icon: "/outfit-ai-icon.png",
    iconDark: "/outfit-ai-icon-dark.png",
    favicon: "/favicon-outfit-ai.png",
    demoUrl: "https://wear.xingai.app/",
    description:
      "Style and outfit decisions with structured AI guidance\u2014fewer tabs, clearer choices, and confidence before you walk out the door.",
    category: "Outfit AI",
    screenshots: [
      { src: "/wear-ai-demo-light.png", srcDark: "/wear-ai-demo-dark.png", alt: "XingAI Outfit AI Wear AI demo", caption: "AI outfit recommendation flow" },
    ],
    features: [
      { name: "AI outfit recommendation", free: true, pro: true, enterprise: true },
      { name: "Weather and occasion context", free: true, pro: true, enterprise: true },
      { name: "Demo model look preview", free: true, pro: true, enterprise: true },
      { name: "Local profile and saved looks", free: true, pro: true, enterprise: true },
    ],
    roadmap: [
      { title: "AI outfit recommendation", status: "shipped" },
      { title: "Confidence-first decision flow", status: "shipped" },
      { title: "Wardrobe-aware outfit suggestions", status: "planned" },
    ],
  },
  {
    slug: "routine-ai",
    name: "XingAI Routine AI",
    tagline: "Live Better",
    icon: "/routine-ai-icon.png",
    iconDark: "/routine-ai-icon-dark.png",
    favicon: "/favicon-routine-ai.png",
    demoUrl: "https://xingai-routine-ai.vercel.app/",
    sourceUrl: "https://github.com/xingaiapp/xingai-routine-ai",
    sourceKind: "github",
    description:
      "Decide a weekly rhythm that sticks\u2014describe your habit context, pick focus and cadence, get one realistic plan with next actions and a gentle nudge. OpenAI-powered V1 demo.",
    category: "Routine AI",
    screenshots: [
      {
        src: "/routine-demo-light.jpg",
        srcDark: "/routine-demo-dark.jpg",
        alt: "XingAI Routine AI",
        caption: "Context \u2192 rhythm \u2192 live it",
      },
    ],
    features: [
      { name: "Habit context input", free: true, pro: true, enterprise: true },
      { name: "Focus & cadence presets", free: true, pro: true, enterprise: true },
      { name: "AI rhythm recommendation", free: true, pro: true, enterprise: true },
      { name: "Next actions & gentle nudge", free: true, pro: true, enterprise: true },
      { name: "Profile & check-in flow", free: true, pro: true, enterprise: true },
      { name: "Light & dark theme", free: true, pro: true, enterprise: true },
      { name: "Saved routines & history", free: false, pro: true, enterprise: true },
      { name: "API access", free: false, pro: false, enterprise: true },
      { name: "Custom branding", free: false, pro: false, enterprise: true },
    ],
    roadmap: [
      { title: "Context \u2192 rhythm \u2192 live it flow", status: "shipped" },
      { title: "Light & dark theme UI", status: "shipped" },
      { title: "OpenAI routine recommendations", status: "shipped" },
      { title: "Live demo on Vercel", status: "shipped" },
      { title: "Habit design templates", status: "planned" },
      { title: "Accountability without guilt", status: "planned" },
      { title: "routine.xingai.app custom domain", status: "planned" },
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
      { src: "/parent-demo-light.jpg", srcDark: "/parent-demo-dark.jpg", alt: "XingAI Parent AI", caption: "Parenting guidance flow" },
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
      { src: "/travel-demo-light.jpg", srcDark: "/travel-demo-dark.jpg", alt: "XingAI Travel AI", caption: "Travel planning flow" },
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
      { src: "/invest-demo-light.jpg", srcDark: "/invest-demo-dark.jpg", alt: "XingAI Investment Assistant", caption: "Investment decision flow" },
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
