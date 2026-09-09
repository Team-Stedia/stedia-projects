"use client"

import Link from "next/link"
import { ArrowLeft, ExternalLink } from "lucide-react"
import { Button } from "@/components/ui/button"
import { LiveDemo } from "@/components/demo/manifest"
import { SectionAnimate } from "@/components/section-animate"
import { useLang } from "@/components/lang-provider"
import type { Project } from "@/data/projects"

export function ProjectDetailLayout({ project }: { project: Project }) {
  const { dict, lang } = useLang()
  const caseStudy = dict.caseStudy
  const title = project.title[lang]
  const tags = project.tags[lang]
  const description = project.description[lang]

  return (
    <div className="mx-auto w-full max-w-6xl px-6 py-16 md:px-8 md:py-24">
      <SectionAnimate>
        <Button asChild variant="ghost" size="sm" className="mb-8 -ms-2 text-muted-foreground">
          <Link href={`/${lang}/work`}>
            <ArrowLeft className="me-1 size-4" />
            {caseStudy.back}
          </Link>
        </Button>
      </SectionAnimate>

      <SectionAnimate>
        <div className="flex flex-wrap gap-1.5">
          {tags.map((tag) => (
            <span
              key={tag}
              className="rounded-full bg-muted px-2.5 py-0.5 text-[11px] font-medium text-muted-foreground"
            >
              {tag}
            </span>
          ))}
        </div>
        <h1 className="mt-4 text-balance text-4xl font-semibold tracking-tight sm:text-5xl">
          {title}
        </h1>
        <p className="mt-5 max-w-2xl text-pretty text-base leading-relaxed text-muted-foreground">
          {description}
        </p>
      </SectionAnimate>

      <SectionAnimate delay={0.1} className="mt-14">
        <div className="mb-6 flex flex-wrap items-center justify-between gap-4">
          <h2 className="text-xl font-semibold tracking-tight">{caseStudy.liveDemo}</h2>
          {project.demoUrl && (
            <Button asChild variant="outline" size="sm">
              <a href={`/${lang}${project.demoUrl}`} target="_blank" rel="noopener noreferrer">
                {caseStudy.openFull}
                <ExternalLink className="ms-1 size-3.5" />
              </a>
            </Button>
          )}
        </div>

        <div className="rounded-2xl border border-border bg-card p-4 shadow-sm md:p-6">
          {project.demoType === "iframe" && project.demoUrl ? (
            <div className="relative h-[560px] w-full overflow-hidden rounded-xl border border-border">
              <iframe
                src={`/${lang}${project.demoUrl}`}
                title={`${title} live demo`}
                className="absolute inset-0 h-full w-full"
                allowFullScreen={false}
              />
            </div>
          ) : (
            <LiveDemo name={project.demoComponent} />
          )}
        </div>
      </SectionAnimate>
    </div>
  )
}