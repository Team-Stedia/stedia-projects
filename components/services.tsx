"use client"

import { Code2, MonitorSmartphone, Rocket, PenTool } from "lucide-react"
import { SectionAnimate } from "@/components/section-animate"
import { SectionHeading } from "@/components/section-heading"
import { useLang } from "@/components/lang-provider"

const serviceIcons = [MonitorSmartphone, PenTool, Code2, Rocket]

export function Services() {
  const { dict } = useLang()
  const services = dict.services

  return (
    <section id="services" className="mx-auto w-full max-w-6xl px-6 py-20 md:px-8 md:py-28">
      <SectionAnimate>
        <SectionHeading
          eyebrow={services.eyebrow}
          title={services.title}
          subtitle={services.subtitle}
        />
      </SectionAnimate>
      <div className="mt-12 grid gap-6 sm:grid-cols-2">
        {services.items.map((service, index) => {
          const Icon = serviceIcons[index] ?? Code2
          return (
            <SectionAnimate key={service.title} delay={index * 0.08}>
              <div className="group h-full rounded-2xl border border-border bg-card p-6 transition-all duration-300 hover:-translate-y-1 hover:border-primary/40 hover:shadow-lg">
                <div className="mb-5 flex size-12 items-center justify-center rounded-xl bg-primary/10 text-primary transition-colors group-hover:bg-primary group-hover:text-primary-foreground">
                  <Icon className="size-6" />
                </div>
                <h3 className="text-lg font-semibold tracking-tight">{service.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                  {service.description}
                </p>
              </div>
            </SectionAnimate>
          )
        })}
      </div>
    </section>
  )
}