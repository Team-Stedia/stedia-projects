import { projects } from "@/data/projects"
import { ProjectCard } from "@/components/project-card"
import { SectionAnimate } from "@/components/section-animate"
import { SectionHeading } from "@/components/section-heading"

export function Showcase() {
  return (
    <section id="work" className="mx-auto w-full max-w-6xl px-6 py-20 md:px-8 md:py-28">
      <SectionAnimate>
        <SectionHeading
          eyebrow="Selected Work"
          title="Work we build, live on this page"
          subtitle="Every case study ships with a demo you can actually play with — no download, no wait."
        />
      </SectionAnimate>
      <div className="mt-12 grid gap-6 sm:grid-cols-2">
        {projects.map((project, index) => (
          <SectionAnimate key={project.slug} delay={index * 0.08}>
            <ProjectCard project={project} />
          </SectionAnimate>
        ))}
      </div>
    </section>
  )
}