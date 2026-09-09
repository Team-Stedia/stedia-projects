import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft } from "lucide-react";
import { getDictionary } from "@/lib/i18n/dictionaries";
import type { Locale } from "@/lib/i18n/dictionaries";
import { projects } from "@/data/projects";
import { LiveDemo } from "@/components/demo/manifest";
import { Button } from "@/components/ui/button";

export const dynamicParams = false;

export function generateStaticParams() {
  return projects
    .filter((p) => p.demoType === "component")
    .flatMap((project) =>
      (["en", "th"] as const).map((lang) => ({ lang, slug: project.slug }))
    );
}

export async function generateMetadata({
  params,
}: PageProps<"/[lang]/demo/[slug]">): Promise<Metadata> {
  const { lang, slug } = await params;
  const locale = lang as Locale;
  const project = projects.find((item) => item.slug === slug);
  if (!project) return {};
  return {
    title: `${project.title[locale]} — Live Demo`,
    description: project.description[locale],
  };
}

export default async function DemoSinglePage({ params }: PageProps<"/[lang]/demo/[slug]">) {
  const { lang, slug } = await params;
  const locale = lang as Locale;
  const project = projects.find((item) => item.slug === slug);
  if (!project) notFound();
  const dict = getDictionary(locale);

  return (
    <div className="relative flex min-h-screen flex-col items-center overflow-hidden bg-secondary/40 px-4 py-12">
      <div className="pointer-events-none absolute -top-32 left-1/2 h-80 w-[36rem] max-w-full -translate-x-1/2 rounded-full bg-gradient-to-br from-primary/20 via-transparent to-[oklch(0.55_0.16_255)]/20 blur-3xl" />

      <div className="relative z-10 flex w-full max-w-sm flex-col items-center gap-6">
        <Button asChild variant="ghost" size="sm" className="-ms-2 self-start text-muted-foreground">
          <Link href={`/${locale}/work/${project.slug}`}>
            <ArrowLeft className="me-1 size-4" />
            {dict.demoPage.back}
          </Link>
        </Button>

        <div className="flex items-center gap-2 rounded-full border border-border bg-card px-4 py-1.5">
          <span className="size-2 animate-pulse rounded-full bg-emerald-500" />
          <span className="text-xs font-medium text-muted-foreground">
            {project.title[locale]} — {dict.demoPage.liveBadge}
          </span>
        </div>

        <LiveDemo name={project.demoComponent} />
      </div>
    </div>
  );
}