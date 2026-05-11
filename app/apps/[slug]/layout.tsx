import type { Metadata } from "next";
import { getAppBySlug, apps } from "../../data/apps";

type Props = { params: Promise<{ slug: string }> };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const app = getAppBySlug(slug);
  if (!app) return { title: "App not found" };

  return {
    title: `${app.name} — ${app.tagline}`,
    description: app.description,
    openGraph: {
      title: `${app.name} — ${app.tagline} | XingAI`,
      description: app.description,
      ...(app.screenshots[0] && { images: [{ url: app.screenshots[0].src, alt: app.screenshots[0].alt }] }),
    },
  };
}

export async function generateStaticParams() {
  return apps.map((app) => ({ slug: app.slug }));
}

export default function AppSlugLayout({ children }: { children: React.ReactNode }) {
  return children;
}
