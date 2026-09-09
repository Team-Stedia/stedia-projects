import Link from "next/link"
import { ArrowLeft, ExternalLink } from "lucide-react"
import { Button } from "@/components/ui/button"
import { LiveDemo } from "@/components/demo/manifest"
import { SectionAnimate } from "@/components/section-animate"
import type { Project } from "@/data/projects"

export function ProjectDetailLayout({ project }: { project: Project }) {
  return (
    <div className="mx-auto w-full max-w-6xl px-6 py-16 md:px-8 md:py-24">
      <SectionAnimate>
        <Button asChild variant="ghost" size="sm" className="mb-8 -ms-2 text-muted-foreground">
          <Link href="/work">
            <ArrowLeft className="me-1 size-4" />
            Back to work
          </Link>
        </Button>
      </SectionAnimate>

      <SectionAnimate>
        <div className="flex flex-wrap gap-1.5">
          {project.tags.map((tag) => (
            <span
              key={tag}
              className="rounded-full bg-muted px-2.5 py-0.5 text-[11px] font-medium text-muted-foreground"
            >
              {tag}
            </span>
          ))}
        </div>
        <h1 className="mt-4 text-balance text-4xl font-semibold tracking-tight sm:text-5xl">
          {project.title}
        </h1>
        <p className="mt-5 max-w-2xl text-pretty text-base leading-relaxed text-muted-foreground">
          {project.description}
        </p>
      </SectionAnimate>

      <SectionAnimate delay={0.1} className="mt-14">
        <div className="mb-6 flex flex-wrap items-center justify-between gap-4">
          <h2 className="text-xl font-semibold tracking-tight">Live Demo</h2>
          {project.demoUrl && (
            <Button asChild variant="outline" size="sm">
              <a href={project.demoUrl} target="_blank" rel="noopener noreferrer">
                Open Full Demo
                <ExternalLink className="ms-1 size-3.5" />
              </a>
            </Button>
          )}
        </div>

        <div className="rounded-2xl border border-border bg-card p-4 shadow-sm md:p-6">
          {project.demoType === "iframe" && project.demoUrl ? (
            <div className="relative h-[560px] w-full overflow-hidden rounded-xl border border-border">
              <iframe
                src={project.demoUrl}
                title={`${project.title} live demo`}
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