"use client"

import { SectionAnimate } from "@/components/section-animate"
import { SectionHeading } from "@/components/section-heading"
import { useLang } from "@/components/lang-provider"

export function Process() {
  const { dict } = useLang()
  const process = dict.process

  return (
    <section className="border-y border-border/60 bg-muted/30">
      <div className="mx-auto w-full max-w-6xl px-6 py-20 md:px-8 md:py-28">
        <SectionAnimate>
          <SectionHeading
            eyebrow={process.eyebrow}
            title={process.title}
            subtitle={process.subtitle}
          />
        </SectionAnimate>
        <ol className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {process.steps.map((step, index) => (
            <SectionAnimate key={step.title} delay={index * 0.08}>
              <li className="flex h-full flex-col rounded-2xl border border-border bg-card p-6">
                <span className="text-4xl font-semibold tracking-tight text-primary/30">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <h3 className="mt-4 text-lg font-semibold tracking-tight">{step.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{step.desc}</p>
              </li>
            </SectionAnimate>
          ))}
        </ol>
      </div>
    </section>
  )
}
