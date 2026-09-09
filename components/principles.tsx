"use client"

import { Layers, MousePointerClick, UserCheck } from "lucide-react"
import { SectionAnimate } from "@/components/section-animate"
import { SectionHeading } from "@/components/section-heading"
import { useLang } from "@/components/lang-provider"

const principleIcons = [MousePointerClick, UserCheck, Layers]

export function Principles() {
  const { dict } = useLang()
  const principles = dict.principles

  return (
    <section className="mx-auto w-full max-w-6xl px-6 py-20 md:px-8 md:py-28">
      <SectionAnimate>
        <SectionHeading
          eyebrow={principles.eyebrow}
          title={principles.title}
          subtitle={principles.subtitle}
        />
      </SectionAnimate>
      <div className="mt-12 grid gap-6 md:grid-cols-3">
        {principles.items.map((item, index) => {
          const Icon = principleIcons[index] ?? MousePointerClick
          return (
            <SectionAnimate key={item.title} delay={index * 0.08}>
              <div className="h-full rounded-2xl border border-border bg-card p-6 transition-all duration-300 hover:-translate-y-1 hover:border-primary/40 hover:shadow-lg">
                <div className="mb-5 flex size-12 items-center justify-center rounded-xl bg-primary/10 text-primary">
                  <Icon className="size-6" />
                </div>
                <h3 className="text-lg font-semibold tracking-tight">{item.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{item.desc}</p>
              </div>
            </SectionAnimate>
          )
        })}
      </div>
    </section>
  )
}
