import Link from "next/link"
import { ArrowUpRight, Calculator, ListChecks } from "lucide-react"
import type { Project } from "@/data/projects"
import { cn } from "@/lib/utils"

const gradientTokens = {
  calc: {
    className: "from-cyan-500/80 to-blue-700",
    Icon: Calculator,
  },
  todo: {
    className: "from-violet-500/80 to-blue-700",
    Icon: ListChecks,
  },
} as const

export function ProjectCard({ project }: { project: Project }) {
  const token = project.thumbnail.replace(/^gradient:/, "")
  const gradient = gradientTokens[token as keyof typeof gradientTokens]

  return (
    <Link
      href={`/work/${project.slug}`}
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
            alt={project.title}
            className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
          />
        )}
        <ArrowUpRight className="absolute top-3 right-3 size-5 rounded-full bg-background p-1 text-foreground opacity-0 shadow transition-all duration-300 group-hover:opacity-100" />
      </div>
      <div className="flex flex-1 flex-col gap-3 p-5">
        <div className="flex flex-wrap gap-1.5">
          {project.tags.slice(0, 3).map((tag) => (
            <span
              key={tag}
              className="rounded-full bg-muted px-2.5 py-0.5 text-[11px] font-medium text-muted-foreground"
            >
              {tag}
            </span>
          ))}
        </div>
        <h3 className="text-lg font-semibold tracking-tight">{project.title}</h3>
        <p className="line-clamp-2 text-sm text-muted-foreground">{project.description}</p>
        <span className="mt-auto pt-2 text-sm font-medium text-primary transition-colors group-hover:underline">
          View case study
        </span>
      </div>
    </Link>
  )
}