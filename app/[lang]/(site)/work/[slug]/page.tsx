import type { Metadata } from "next";
import { notFound } from "next/navigation";
import type { Locale } from "@/lib/i18n/dictionaries";
import { projects } from "@/data/projects";
import { ProjectDetailLayout } from "@/components/project-detail-layout";

export const dynamicParams = false;

export function generateStaticParams() {
  return projects.flatMap((project) =>
    (["en", "th"] as const).map((lang) => ({ lang, slug: project.slug }))
  );
}

export async function generateMetadata({
  params,
}: PageProps<"/[lang]/work/[slug]">): Promise<Metadata> {
  const { lang, slug } = await params;
  const locale = lang as Locale;
  const project = projects.find((item) => item.slug === slug);
  if (!project) return {};
  return {
    title: `${project.title[locale]} — Stedia`,
    description: project.description[locale],
  };
}

export default async function ProjectPage({ params }: PageProps<"/[lang]/work/[slug]">) {
  const { slug } = await params;
  const project = projects.find((item) => item.slug === slug);
  if (!project) notFound();

  return <ProjectDetailLayout project={project} />;
}