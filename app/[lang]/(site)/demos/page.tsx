"use client"

import { useState } from "react"
import Link from "next/link"
import { ArrowUpRight } from "lucide-react"
import { demoCategories, projects } from "@/data/projects"
import type { DemoCategory } from "@/data/projects"
import { useLang } from "@/components/lang-provider"
import { SectionHeading } from "@/components/section-heading"
import { LiveDemo } from "@/components/demo/manifest"
import { cn } from "@/lib/utils"

const categoryKeys: Record<DemoCategory, "categoryTool" | "categoryGame" | "categoryUi"> = {
  tool: "categoryTool",
  game: "categoryGame",
  ui: "categoryUi",
}

export default function DemosPage() {
  const { dict, lang } = useLang()
  const [active, setActive] = useState<"all" | DemoCategory>("all")

  const filtered = active === "all" ? projects : projects.filter((p) => p.category === active)

  return (
    <div className="mx-auto w-full max-w-6xl px-6 py-16 md:px-8 md:py-24">
      <SectionHeading
        eyebrow={dict.demos.eyebrow}
        title={dict.demos.title}
        subtitle={dict.demos.subtitle}
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

      <div className="mt-10 grid gap-6 lg:grid-cols-2">
        {filtered.map((project) => (
          <div
            key={project.slug}
            className="group flex flex-col overflow-hidden rounded-2xl border border-border bg-card transition-all duration-300 hover:border-primary/40 hover:shadow-lg"
          >
            <div className="flex items-center justify-between gap-3 border-b border-border/60 px-4 py-3">
              <div className="flex items-center gap-2.5">
                <div className="flex gap-1.5">
                  <span className="size-2.5 rounded-full bg-[#ff5f57]" />
                  <span className="size-2.5 rounded-full bg-[#febc2e]" />
                  <span className="size-2.5 rounded-full bg-[#28c840]" />
                </div>
                <span className="text-sm font-semibold tracking-tight">
                  {project.title[lang]}
                </span>
              </div>
              <span className="rounded-full bg-muted px-2.5 py-0.5 text-[11px] font-medium text-muted-foreground">
                {dict.demos[categoryKeys[project.category]]}
              </span>
            </div>

            <div className="relative mt-0 flex flex-col">
              <div className="flex h-96 w-full flex-col items-center overflow-y-auto bg-secondary/30 p-4">
                <LiveDemo name={project.demoComponent} />
              </div>
            </div>

            <div className="flex items-center justify-between gap-3 border-t border-border/60 px-4 py-3">
              <p className="line-clamp-1 text-sm text-muted-foreground">
                {project.description[lang]}
              </p>
              <div className="flex shrink-0 gap-2">
                <Link
                  href={`/${lang}/work/${project.slug}`}
                  className="rounded-md border border-border px-3 py-1.5 text-xs font-medium text-muted-foreground transition-colors hover:border-primary/40 hover:text-foreground"
                >
                  {dict.demos.viewCase}
                </Link>
                <Link
                  href={`/${lang}/demo/${project.slug}`}
                  className="inline-flex items-center gap-1 rounded-md bg-primary px-3 py-1.5 text-xs font-semibold text-primary-foreground transition-transform hover:scale-105 active:scale-95"
                >
                  {dict.demos.openFull}
                  <ArrowUpRight className="size-3.5" />
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>

      {filtered.length === 0 && (
        <p className="mt-12 text-center text-sm text-muted-foreground">{dict.demos.empty}</p>
      )}
    </div>
  )
}