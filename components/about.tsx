"use client"

import { SectionAnimate } from "@/components/section-animate"
import { SectionHeading } from "@/components/section-heading"
import { useLang } from "@/components/lang-provider"
import { logoMark } from "@/components/logo"

export function About() {
  const { dict } = useLang()
  const about = dict.about

  return (
    <section id="about" className="border-y border-border/60">
      <div className="mx-auto grid w-full max-w-6xl gap-12 px-6 py-20 md:px-8 md:py-28 lg:grid-cols-2 lg:gap-20">
        <SectionAnimate>
          <SectionHeading
            eyebrow={about.eyebrow}
            title={about.title}
            subtitle={about.subtitle}
          />
        </SectionAnimate>
        <SectionAnimate delay={0.1}>
          <div className="flex flex-col gap-6">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/images/sections/about.jpg"
              alt={about.imageAlt}
              loading="lazy"
              className="aspect-[16/10] w-full rounded-2xl border border-border object-cover"
            />
            <div className="flex items-start gap-4 rounded-2xl border border-border bg-card p-6">
              <div className="mt-1 shrink-0">{logoMark}</div>
              <div>
                <h3 className="text-base font-semibold">{about.cardTitle}</h3>
                <p className="mt-1.5 text-sm leading-relaxed text-muted-foreground">
                  {about.cardBody}
                </p>
              </div>
            </div>
            <dl className="grid grid-cols-3 gap-4">
              {about.stats.map((stat) => (
                <div
                  key={stat.label}
                  className="rounded-2xl border border-border bg-card p-5 text-center"
                >
                  <dt className="order-2 mt-1 text-xs font-medium text-muted-foreground">
                    {stat.label}
                  </dt>
                  <dd className="order-1 text-2xl font-semibold tracking-tight text-primary">
                    {stat.value}
                  </dd>
                </div>
              ))}
            </dl>
          </div>
        </SectionAnimate>
      </div>
    </section>
  )
}