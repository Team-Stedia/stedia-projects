"use client"

import { useMemo, useState } from "react"
import { projects } from "@/data/projects"
import { ProjectCard } from "@/components/project-card"
import { SectionHeading } from "@/components/section-heading"
import { cn } from "@/lib/utils"

export default function WorkPage() {
  const tags = useMemo(() => {
    const set = new Set<string>()
    projects.forEach((project) => project.tags.forEach((tag) => set.add(tag)))
    return ["All", ...Array.from(set)]
  }, [])

  const [active, setActive] = useState("All")

  const filtered = useMemo(
    () => (active === "All" ? projects : projects.filter((p) => p.tags.includes(active))),
    [active]
  )

  return (
    <div className="mx-auto w-full max-w-6xl px-6 py-16 md:px-8 md:py-24">
      <SectionHeading
        eyebrow="All Work"
        title="Every project has a live demo"
        subtitle="Browse our case studies — every one ships with something you can click."
      />

      <div className="mt-10 flex flex-wrap gap-2">
        {tags.map((tag) => (
          <button
            key={tag}
            type="button"
            onClick={() => setActive(tag)}
            className={cn(
              "rounded-full border px-4 py-1.5 text-sm font-medium transition-colors",
              active === tag
                ? "border-primary bg-primary text-primary-foreground"
                : "border-border bg-card text-muted-foreground hover:border-primary/40 hover:text-foreground"
            )}
          >
            {tag}
          </button>
        ))}
      </div>

      <div className="mt-10 grid gap-6 sm:grid-cols-2">
        {filtered.map((project) => (
          <ProjectCard key={project.slug} project={project} />
        ))}
      </div>

      {filtered.length === 0 && (
        <p className="mt-12 text-center text-sm text-muted-foreground">
          No projects with this tag yet.
        </p>
      )}
    </div>
  )
}