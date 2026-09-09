"use client"

import Link from "next/link"
import { ArrowRight } from "lucide-react"
import { projects } from "@/data/projects"
import { ProjectCard } from "@/components/project-card"
import { SectionAnimate } from "@/components/section-animate"
import { SectionHeading } from "@/components/section-heading"
import { Button } from "@/components/ui/button"
import { useLang } from "@/components/lang-provider"

const featuredSlugs = ["page-shop", "page-admin-dashboard", "page-landing", "page-user-dashboard"]

export function SelectedWork() {
  const { dict, lang } = useLang()
  const work = dict.selectedWork
  const featured = featuredSlugs
    .map((slug) => projects.find((project) => project.slug === slug))
    .filter((project) => project !== undefined)

  return (
    <section id="work" className="mx-auto w-full max-w-6xl px-6 py-20 md:px-8 md:py-28">
      <SectionAnimate>
        <SectionHeading
          eyebrow={work.eyebrow}
          title={work.title}
          subtitle={work.subtitle}
        />
      </SectionAnimate>
      <div className="mt-12 grid gap-6 sm:grid-cols-2">
        {featured.map((project, index) => (
          <SectionAnimate key={project.slug} delay={index * 0.08}>
            <ProjectCard project={project} />
          </SectionAnimate>
        ))}
      </div>
      <SectionAnimate className="mt-10 flex justify-center">
        <Button asChild size="lg" className="h-10 px-6">
          <Link href={`/${lang}/work`}>
            {work.viewAll}
            <ArrowRight className="ms-1 size-4" />
          </Link>
        </Button>
      </SectionAnimate>
    </section>
  )
}
