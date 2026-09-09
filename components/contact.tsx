"use client"

import { Check } from "lucide-react"
import { FacebookIcon } from "@/components/icons"
import { SectionAnimate } from "@/components/section-animate"
import { SectionHeading } from "@/components/section-heading"
import { useLang } from "@/components/lang-provider"
import { FACEBOOK_URL } from "@/lib/social"

export function Contact() {
  const { dict } = useLang()
  const contact = dict.contact

  return (
    <section id="contact" className="border-t border-border/60 bg-muted/30">
      <div className="mx-auto grid w-full max-w-6xl gap-12 px-6 py-20 md:px-8 md:py-28 lg:grid-cols-[0.9fr_1.1fr] lg:gap-20">
        <SectionAnimate>
          <SectionHeading
            eyebrow={contact.eyebrow}
            title={contact.title}
            subtitle={contact.subtitle}
          />
        </SectionAnimate>

        <SectionAnimate delay={0.1}>
          <div className="flex h-full flex-col justify-center gap-6 rounded-2xl border border-border bg-card p-8">
            <div>
              <h3 className="text-xl font-semibold tracking-tight">{contact.facebookTitle}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                {contact.facebookBody}
              </p>
            </div>
            <a
              href={FACEBOOK_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex h-12 items-center justify-center gap-2 rounded-xl bg-[#1877F2] px-6 text-base font-semibold text-white shadow-lg shadow-blue-600/30 transition-transform hover:scale-[1.02] active:scale-95"
            >
              <FacebookIcon className="size-5" />
              {contact.facebookButton}
            </a>
            <ul className="flex flex-col gap-2.5 border-t border-border/60 pt-6">
              {contact.points.map((point) => (
                <li key={point} className="flex items-start gap-2.5 text-sm">
                  <span className="mt-0.5 flex size-5 shrink-0 items-center justify-center rounded-full bg-emerald-500/15 text-emerald-600 dark:text-emerald-400">
                    <Check className="size-3" />
                  </span>
                  {point}
                </li>
              ))}
            </ul>
            <p className="text-xs text-muted-foreground">{contact.note}</p>
          </div>
        </SectionAnimate>
      </div>
    </section>
  )
}
