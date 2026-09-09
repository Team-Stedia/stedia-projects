"use client"

import { SectionAnimate } from "@/components/section-animate"
import { useLang } from "@/components/lang-provider"

const stack = ["Next.js", "React", "TypeScript", "Tailwind CSS", "NestJS", "TypeORM"]

export function StackStrip() {
  const { dict } = useLang()

  return (
    <section className="border-y border-border/60 bg-muted/30">
      <SectionAnimate>
        <div className="mx-auto flex w-full max-w-6xl flex-col items-center gap-5 px-6 py-10 md:px-8">
          <p className="text-center text-xs font-medium uppercase tracking-widest text-muted-foreground">
            {dict.stack.label}
          </p>
          <ul className="flex flex-wrap items-center justify-center gap-2.5">
            {stack.map((tech) => (
              <li
                key={tech}
                className="rounded-full border border-border bg-card px-4 py-1.5 text-sm font-semibold tracking-tight text-foreground"
              >
                {tech}
              </li>
            ))}
          </ul>
        </div>
      </SectionAnimate>
    </section>
  )
}
