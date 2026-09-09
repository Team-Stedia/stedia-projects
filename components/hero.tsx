"use client"

import Link from "next/link"
import { motion } from "motion/react"
import { ArrowUpRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { useLang } from "@/components/lang-provider"

export function Hero() {
  const { dict, lang } = useLang()
  const hero = dict.hero

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
            {hero.badge}
          </p>
          <h1 className="text-balance text-4xl font-semibold tracking-tight text-foreground sm:text-5xl lg:text-6xl">
            {hero.headlineBefore}{" "}
            <span className="bg-gradient-to-r from-primary to-[oklch(0.55_0.16_255)] bg-clip-text text-transparent">
              {hero.headlineAccent}
            </span>{" "}
            {hero.headlineAfter}
          </h1>
          <p className="mt-5 max-w-xl text-pretty text-base leading-relaxed text-muted-foreground sm:text-lg">
            {hero.sub}
          </p>
          <div className="mt-8 flex flex-wrap items-center gap-4">
            <Button asChild size="lg" className="h-10 px-6">
              <Link href={`/${lang}/#work`}>{hero.ctaWork}</Link>
            </Button>
            <Button asChild variant="outline" size="lg" className="h-10 px-6">
              <Link href={`/${lang}/#contact`}>{hero.ctaContact}</Link>
            </Button>
          </div>
          <dl className="mt-10 grid max-w-md grid-cols-3 gap-4 border-t border-border pt-6">
            {hero.stats.map((stat) => (
              <div key={stat.label}>
                <dd className="text-2xl font-semibold tracking-tight text-foreground">
                  {stat.value}
                </dd>
                <dt className="mt-1 text-xs leading-snug text-muted-foreground">{stat.label}</dt>
              </div>
            ))}
          </dl>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 28 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.15, ease: "easeOut" }}
          className="relative"
        >
          <div className="absolute -inset-8 rounded-3xl bg-gradient-to-br from-primary/15 via-transparent to-[oklch(0.55_0.16_255)]/15 blur-2xl" />
          <Link
            href={`/${lang}/work/page-admin-dashboard`}
            className="group relative block overflow-hidden rounded-2xl border border-border bg-card shadow-xl"
          >
            <div className="flex items-center justify-between border-b border-border/60 px-4 py-3">
              <div className="flex gap-1.5">
                <span className="size-2.5 rounded-full bg-[#ff5f57]" />
                <span className="size-2.5 rounded-full bg-[#febc2e]" />
                <span className="size-2.5 rounded-full bg-[#28c840]" />
              </div>
              <span className="inline-flex items-center gap-1 rounded-full bg-emerald-500/15 px-2.5 py-1 text-[10px] font-semibold uppercase tracking-widest text-emerald-600 dark:text-emerald-400">
                <span className="size-1.5 animate-pulse rounded-full bg-current" />
                {hero.visualBadge}
                <ArrowUpRight className="size-3 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </span>
            </div>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/images/projects/user-dashboard.jpg"
              alt={hero.visualCaption}
              className="aspect-[16/10] w-full object-cover object-top transition-transform duration-500 group-hover:scale-[1.02]"
            />
          </Link>
          <p className="mt-3 text-center text-xs text-muted-foreground">{hero.visualCaption}</p>
        </motion.div>
      </div>
    </section>
  )
}
