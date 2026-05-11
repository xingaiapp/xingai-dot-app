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
  screenshots: { src: string; alt: string; caption: string }[];
  features: AppFeature[];
  roadmap: RoadmapItem[];
};

export const apps: AppData[] = [
  {
    slug: "food-ai",
    name: "Food AI",
    tagline: "Meal decisions, simplified",
    description:
      "AI-powered meal planning and food decision tool. Suggests meals based on preferences, dietary needs, and what you have available. Built with local AI for privacy.",
    category: "Lifestyle",
    screenshots: [
      {
        src: "/food-demo-light.jpg",
        alt: "Food AI light theme",
        caption: "Meal-focused flow — light theme",
      },
      {
        src: "/food-demo-dark.jpg",
        alt: "Food AI dark theme",
        caption: "Same flow — dark theme",
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
];

export function getAppBySlug(slug: string): AppData | undefined {
  return apps.find((a) => a.slug === slug);
}
