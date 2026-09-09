"use client"

import Link from "next/link"
import {
  ArrowUpRight,
  Blocks,
  Calculator,
  Clock,
  Dices,
  Keyboard,
  ListChecks,
  Palette,
  Timer,
} from "lucide-react"
import type { Project } from "@/data/projects"
import { useLang } from "@/components/lang-provider"
import { cn } from "@/lib/utils"

const gradientTokens = {
  calc: { className: "from-cyan-500/80 to-blue-700", Icon: Calculator },
  todo: { className: "from-violet-500/80 to-blue-700", Icon: ListChecks },
  pomodoro: { className: "from-rose-500/80 to-pink-700", Icon: Timer },
  stopwatch: { className: "from-amber-500/80 to-orange-700", Icon: Clock },
  typing: { className: "from-emerald-500/80 to-teal-700", Icon: Keyboard },
  memory: { className: "from-fuchsia-500/80 to-purple-700", Icon: Blocks },
  slot: { className: "from-red-500/80 to-rose-700", Icon: Dices },
  color: { className: "from-blue-500/80 to-indigo-700", Icon: Palette },
} as const

export function ProjectCard({ project }: { project: Project }) {
  const { dict, lang } = useLang()
  const token = project.thumbnail.replace(/^gradient:/, "")
  const gradient = gradientTokens[token as keyof typeof gradientTokens]
  const title = project.title[lang]
  const tags = project.tags[lang]
  const description = project.description[lang]

  return (
    <Link
      href={`/${lang}/work/${project.slug}`}
      className="group flex flex-col overflow-hidden rounded-2xl border border-border bg-card transition-all duration-300 hover:-translate-y-1 hover:border-primary/40 hover:shadow-lg"
    >
      <div className="relative aspect-[16/10] overflow-hidden">
        {gradient ? (
          <div
            className={cn(
              "flex h-full w-full items-center justify-center bg-gradient-to-br transition-transform duration-500 group-hover:scale-105",
              gradient.className
            )}
          >
            <gradient.Icon className="size-16 text-white/90" />
          </div>
        ) : (
          // eslint-disable-next-line @next/next/no-img-element
          <img
            src={project.thumbnail}
            alt={title}
            className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
          />
        )}
        <ArrowUpRight className="absolute top-3 right-3 size-5 rounded-full bg-background p-1 text-foreground opacity-0 shadow transition-all duration-300 group-hover:opacity-100" />
      </div>
      <div className="flex flex-1 flex-col gap-3 p-5">
        <div className="flex flex-wrap gap-1.5">
          {tags.slice(0, 3).map((tag) => (
            <span
              key={tag}
              className="rounded-full bg-muted px-2.5 py-0.5 text-[11px] font-medium text-muted-foreground"
            >
              {tag}
            </span>
          ))}
        </div>
        <h3 className="text-lg font-semibold tracking-tight">{title}</h3>
        <p className="line-clamp-2 text-sm text-muted-foreground">{description}</p>
        <span className="mt-auto pt-2 text-sm font-medium text-primary transition-colors group-hover:underline">
          {dict.showcase.viewCase}
        </span>
      </div>
    </Link>
  )
}