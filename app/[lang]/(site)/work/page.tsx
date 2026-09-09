"use client"

import { useState } from "react"
import { demoCategories, projects } from "@/data/projects"
import type { DemoCategory } from "@/data/projects"
import { ProjectCard } from "@/components/project-card"
import { SectionHeading } from "@/components/section-heading"
import { useLang } from "@/components/lang-provider"
import { cn } from "@/lib/utils"

const categoryKeys: Record<DemoCategory, "categoryTool" | "categoryGame" | "categoryUi"> = {
  tool: "categoryTool",
  game: "categoryGame",
  ui: "categoryUi",
}

export default function WorkPage() {
  const { dict } = useLang()
  const [active, setActive] = useState<"all" | DemoCategory>("all")

  const filtered = active === "all" ? projects : projects.filter((p) => p.category === active)

  return (
    <div className="mx-auto w-full max-w-6xl px-6 py-16 md:px-8 md:py-24">
      <SectionHeading
        eyebrow={dict.work.eyebrow}
        title={dict.work.title}
        subtitle={dict.work.subtitle}
      />

      <div className="mt-10 flex flex-wrap gap-2">
        <button
          type="button"
          onClick={() => setActive("all")}
          className={cn(
            "rounded-full border px-4 py-1.5 text-sm font-medium transition-colors",
            active === "all"
              ? "border-primary bg-primary text-primary-foreground"
              : "border-border bg-card text-muted-foreground hover:border-primary/40 hover:text-foreground"
          )}
        >
          {dict.work.all}
        </button>
        {demoCategories.map((category) => (
          <button
            key={category}
            type="button"
            onClick={() => setActive(category)}
            className={cn(
              "rounded-full border px-4 py-1.5 text-sm font-medium transition-colors",
              active === category
                ? "border-primary bg-primary text-primary-foreground"
                : "border-border bg-card text-muted-foreground hover:border-primary/40 hover:text-foreground"
            )}
          >
            {dict.demos[categoryKeys[category]]}
          </button>
        ))}
      </div>

      <div className="mt-10 grid gap-6 sm:grid-cols-2">
        {filtered.map((project) => (
          <ProjectCard key={project.slug} project={project} />
        ))}
      </div>

      {filtered.length === 0 && (
        <p className="mt-12 text-center text-sm text-muted-foreground">{dict.work.empty}</p>
      )}
    </div>
  )
}