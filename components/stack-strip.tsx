"use client"

import { Database } from "lucide-react"
import { stackCategories, stacks } from "@/data/stacks"
import type { StackCategory } from "@/data/stacks"
import { SectionAnimate } from "@/components/section-animate"
import { useLang } from "@/components/lang-provider"

const categoryKeys: Record<StackCategory, "frontend" | "backend" | "tools"> = {
  frontend: "frontend",
  backend: "backend",
  tools: "tools",
}

export function StackStrip() {
  const { dict } = useLang()

  return (
    <section className="border-y border-border/60 bg-muted/30">
      <SectionAnimate>
        <div className="mx-auto w-full max-w-6xl px-6 py-10 md:px-8">
          <p className="text-center text-xs font-medium uppercase tracking-widest text-muted-foreground">
            {dict.stack.label}
          </p>
          <div className="mt-8 grid gap-8 md:grid-cols-3">
            {stackCategories.map((category) => (
              <div key={category}>
                <h3 className="mb-4 text-center text-sm font-semibold tracking-tight md:text-left">
                  {dict.stack.categories[categoryKeys[category]]}
                </h3>
                <ul className="grid grid-cols-2 gap-3">
                  {stacks
                    .filter((item) => item.category === category)
                    .map((item) => (
                      <li
                        key={item.name}
                        className="flex items-center gap-3 rounded-xl border border-border bg-card px-3 py-2.5 transition-colors hover:border-primary/40"
                      >
                        <span className="flex size-10 shrink-0 items-center justify-center rounded-lg bg-white p-2 shadow-sm">
                          {item.iconSrc ? (
                            // eslint-disable-next-line @next/next/no-img-element
                            <img
                              src={item.iconSrc}
                              alt={`${item.name} logo`}
                              loading="lazy"
                              className="size-full object-contain"
                            />
                          ) : (
                            <Database className="size-5 text-slate-700" />
                          )}
                        </span>
                        <span className="text-sm font-semibold tracking-tight">{item.name}</span>
                      </li>
                    ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </SectionAnimate>
    </section>
  )
}
