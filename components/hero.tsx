"use client"

import { useState } from "react"
import Link from "next/link"
import { motion } from "motion/react"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"

export function Hero() {
  const [clicked, setClicked] = useState(0)
  const [live, setLive] = useState(true)

  return (
    <section className="relative overflow-hidden">
      <div className="mx-auto grid w-full max-w-6xl gap-12 px-6 pt-20 pb-24 md:px-8 md:pt-28 md:pb-32 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
        <motion.div
          initial={{ opacity: 0, y: 28 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          <p className="mb-4 inline-flex items-center gap-2 rounded-full border border-border bg-muted/50 px-3 py-1 text-xs font-medium text-muted-foreground">
            <span className="relative flex size-2">
              <span className="absolute inline-flex size-full animate-ping rounded-full bg-primary opacity-75" />
              <span className="relative inline-flex size-2 rounded-full bg-primary" />
            </span>
            Team Stedia — Interactive Studio
          </p>
          <h1 className="text-balance text-4xl font-semibold tracking-tight text-foreground sm:text-5xl lg:text-6xl">
            We design &amp; build fast,{" "}
            <span className="bg-gradient-to-r from-primary to-[oklch(0.55_0.16_255)] bg-clip-text text-transparent">
              interactive
            </span>{" "}
            experiences.
          </h1>
          <p className="mt-5 max-w-xl text-pretty text-base leading-relaxed text-muted-foreground sm:text-lg">
            Stedia is a small team that turns ideas into production-ready web products —
            with a demo you can actually click before you even talk to us.
          </p>
          <div className="mt-8 flex flex-wrap items-center gap-4">
            <Button asChild size="lg" className="h-10 px-6">
              <Link href="/work">See our work</Link>
            </Button>
            <Button asChild variant="outline" size="lg" className="h-10 px-6">
              <Link href="/#contact">Let&apos;s Talk</Link>
            </Button>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 28 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.15, ease: "easeOut" }}
          className="relative"
        >
          <div className="absolute -inset-8 rounded-3xl bg-gradient-to-br from-primary/15 via-transparent to-[oklch(0.55_0.16_255)]/15 blur-2xl" />
          <div className="relative rounded-2xl border border-border bg-card p-6 shadow-xl">
            <div className="mb-5 flex items-center justify-between">
              <div className="flex items-center gap-2">
                <span className="size-2.5 rounded-full bg-[#ff5f57]" />
                <span className="size-2.5 rounded-full bg-[#febc2e]" />
                <span className="size-2.5 rounded-full bg-[#28c840]" />
              </div>
              <span
                className={cn(
                  "inline-flex items-center gap-1.5 rounded-full px-2.5 py-1 text-[10px] font-semibold uppercase tracking-widest",
                  live
                    ? "bg-emerald-500/15 text-emerald-600 dark:text-emerald-400"
                    : "bg-muted text-muted-foreground"
                )}
              >
                <span className="size-1.5 rounded-full bg-current" />
                {live ? "Live" : "Paused"}
              </span>
            </div>

            <div className="flex flex-col gap-5">
              <div className="rounded-xl border border-border bg-background p-5">
                <p className="text-xs font-medium text-muted-foreground">
                  Real-time interactions
                </p>
                <div className="mt-2 flex items-end justify-between gap-4">
                  <span className="font-mono text-5xl font-semibold tabular-nums tracking-tight">
                    {clicked}
                  </span>
                  <button
                    type="button"
                    onClick={() => setClicked((value) => value + 1)}
                    className="h-10 rounded-lg bg-primary px-4 text-sm font-semibold text-primary-foreground transition-transform hover:scale-105 active:scale-95"
                  >
                    Click me +
                  </button>
                </div>
                <div className="mt-4 h-1.5 overflow-hidden rounded-full bg-secondary">
                  <motion.div
                    className="h-full rounded-full bg-primary"
                    animate={{ width: `${Math.min((clicked / 20) * 100, 100)}%` }}
                    transition={{ type: "spring", stiffness: 300, damping: 30 }}
                  />
                </div>
                <p className="mt-2 text-xs text-muted-foreground">
                  {clicked >= 20 ? "Maxed out — no limits, like us." : "Try it, this page interacts."}
                </p>
              </div>

              <div className="flex items-center justify-between rounded-xl border border-border bg-background p-5">
                <div>
                  <p className="text-sm font-medium">Session feed</p>
                  <p className="text-xs text-muted-foreground">Live stream of clicks</p>
                </div>
                <button
                  type="button"
                  role="switch"
                  aria-checked={live}
                  onClick={() => setLive((value) => !value)}
                  className={cn(
                    "relative h-7 w-12 rounded-full transition-colors",
                    live ? "bg-primary" : "bg-input"
                  )}
                >
                  <motion.span
                    className="absolute top-0.5 left-0.5 size-6 rounded-full bg-white shadow"
                    animate={{ x: live ? 20 : 0 }}
                    transition={{ type: "spring", stiffness: 500, damping: 30 }}
                  />
                </button>
              </div>

              <p className="text-center text-xs text-muted-foreground">
                Still here? Precisely what our demos feel like.
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}