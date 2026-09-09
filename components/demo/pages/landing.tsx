"use client"

import { useState } from "react"
import type { MouseEvent } from "react"
import {
  ArrowRight,
  BarChart3,
  Check,
  ChevronDown,
  Menu,
  Puzzle,
  Search,
  ShieldCheck,
  Sparkles,
  Users,
  X,
  Zap,
} from "lucide-react"
import { useLang } from "@/components/lang-provider"
import { demoText } from "@/components/demo/demo-text"
import { cn } from "@/lib/utils"

const featureIcons = [BarChart3, Zap, Users, Search, ShieldCheck, Puzzle]

export function LandingPage() {
  const { lang } = useLang()
  const { landingPage: t } = demoText(lang)
  const currency = lang === "th" ? "฿" : "$"

  const [mobileOpen, setMobileOpen] = useState(false)
  const [yearly, setYearly] = useState(false)
  const [selected, setSelected] = useState<string | null>(null)
  const [openFaq, setOpenFaq] = useState<number | null>(0)

  const go = (id: string) => (e: MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault()
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth", block: "start" })
    setMobileOpen(false)
  }

  const nav = [
    { label: t.navFeatures, target: "features" },
    { label: t.navPricing, target: "pricing" },
    { label: t.navFaq, target: "faq" },
  ]

  return (
    <div className="w-full bg-background text-foreground">
      <header className="sticky top-0 z-20 border-b border-border bg-background/90 backdrop-blur">
        <div className="mx-auto flex h-14 w-full max-w-5xl items-center justify-between gap-4 px-5">
          <a
            href="#top"
            onClick={go("top")}
            className="flex items-center gap-2 font-semibold tracking-tight"
          >
            <span className="flex size-7 items-center justify-center rounded-lg bg-primary text-primary-foreground">
              <Zap className="size-4" />
            </span>
            Nebula
          </a>
          <nav className="hidden items-center gap-6 text-sm md:flex">
            {nav.map((item) => (
              <a
                key={item.label}
                href={`#${item.target}`}
                onClick={go(item.target)}
                className="font-medium text-muted-foreground transition-colors hover:text-foreground"
              >
                {item.label}
              </a>
            ))}
          </nav>
          <div className="hidden items-center gap-3 md:flex">
            <span className="text-sm text-muted-foreground">{t.navHome}</span>
            <a
              href="#pricing"
              onClick={go("pricing")}
              className="rounded-lg bg-primary px-3.5 py-1.5 text-sm font-semibold text-primary-foreground transition-transform hover:scale-105 active:scale-95"
            >
              {t.navCta}
            </a>
          </div>
          <button
            type="button"
            aria-label="menu"
            onClick={() => setMobileOpen((v) => !v)}
            className="flex size-9 items-center justify-center rounded-lg border border-border text-muted-foreground md:hidden"
          >
            {mobileOpen ? <X className="size-4" /> : <Menu className="size-4" />}
          </button>
        </div>
        {mobileOpen && (
          <div className="border-t border-border px-5 py-3 md:hidden">
            <div className="flex flex-col gap-1">
              {nav.map((item) => (
                <a
                  key={item.label}
                  href={`#${item.target}`}
                  onClick={go(item.target)}
                  className="rounded-lg px-3 py-2 text-sm font-medium text-muted-foreground hover:bg-muted hover:text-foreground"
                >
                  {item.label}
                </a>
              ))}
              <a
                href="#pricing"
                onClick={go("pricing")}
                className="mt-2 rounded-lg bg-primary px-3 py-2 text-center text-sm font-semibold text-primary-foreground"
              >
                {t.navCta}
              </a>
            </div>
          </div>
        )}
      </header>

      <section id="top" className="mx-auto w-full max-w-5xl px-5 pb-14 pt-16 text-center sm:pt-24">
        <span className="inline-flex items-center gap-1.5 rounded-full border border-primary/30 bg-primary/10 px-3 py-1 text-xs font-medium text-primary">
          <Sparkles className="size-3.5" />
          {t.heroBadge}
        </span>
        <h1 className="mx-auto mt-5 max-w-2xl text-balance text-4xl font-semibold tracking-tight sm:text-5xl">
          {t.heroTitle}
        </h1>
        <p className="mx-auto mt-4 max-w-xl text-pretty text-base text-muted-foreground">
          {t.heroSub}
        </p>
        <form
          onSubmit={(e) => e.preventDefault()}
          className="mx-auto mt-8 flex max-w-md flex-col gap-2 sm:flex-row"
        >
          <input
            type="email"
            placeholder={t.heroPlaceholder}
            className="h-11 flex-1 rounded-lg border border-border bg-background px-4 text-sm outline-none transition-colors placeholder:text-muted-foreground focus:border-primary"
          />
          <button
            type="submit"
            className="inline-flex h-11 items-center justify-center gap-1.5 rounded-lg bg-primary px-5 text-sm font-semibold text-primary-foreground transition-transform hover:scale-105 active:scale-95"
          >
            {t.heroCta}
            <ArrowRight className="size-4" />
          </button>
        </form>
        <p className="mt-3 text-xs text-muted-foreground">{t.heroNote}</p>
        <dl className="mx-auto mt-12 grid max-w-lg grid-cols-3 gap-4 border-t border-border pt-8">
          {t.heroStats.map((stat) => (
            <div key={stat.label}>
              <dt className="text-[11px] font-medium uppercase tracking-wide text-muted-foreground">
                {stat.label}
              </dt>
              <dd className="mt-1 text-2xl font-semibold tracking-tight">{stat.value}</dd>
            </div>
          ))}
        </dl>
      </section>

      <section id="features" className="border-t border-border bg-secondary/30 py-14">
        <div className="mx-auto w-full max-w-5xl px-5">
          <h2 className="text-center text-2xl font-semibold tracking-tight sm:text-3xl">
            {t.featuresTitle}
          </h2>
          <p className="mx-auto mt-2 max-w-xl text-center text-sm text-muted-foreground">
            {t.featuresSub}
          </p>
          <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {t.features.map((feature, i) => {
              const Icon = featureIcons[i]
              return (
                <div
                  key={feature.title}
                  className="rounded-xl border border-border bg-card p-5 transition-all duration-300 hover:border-primary/40 hover:shadow-md"
                >
                  <span className="flex size-9 items-center justify-center rounded-lg bg-primary/10 text-primary">
                    <Icon className="size-4.5" />
                  </span>
                  <h3 className="mt-4 font-semibold">{feature.title}</h3>
                  <p className="mt-1.5 text-sm leading-relaxed text-muted-foreground">
                    {feature.desc}
                  </p>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      <section id="pricing" className="border-t border-border py-14">
        <div className="mx-auto w-full max-w-5xl px-5">
          <h2 className="text-center text-2xl font-semibold tracking-tight sm:text-3xl">
            {t.pricingTitle}
          </h2>
          <p className="mx-auto mt-2 max-w-xl text-center text-sm text-muted-foreground">
            {t.pricingSub}
          </p>
          <div className="mt-8 flex items-center justify-center gap-3">
            <span className={cn("text-sm font-medium", !yearly && "text-foreground", "text-muted-foreground")}>
              {t.monthly}
            </span>
            <button
              type="button"
              onClick={() => setYearly((v) => !v)}
              aria-label="billing period"
              className={cn(
                "relative h-6 w-11 rounded-full transition-colors",
                yearly ? "bg-primary" : "bg-muted"
              )}
            >
              <span
                className={cn(
                  "absolute top-0.5 size-5 rounded-full bg-background shadow transition-all",
                  yearly ? "left-5.5" : "left-0.5"
                )}
              />
            </button>
            <span className={cn("text-sm font-medium", yearly && "text-foreground", "text-muted-foreground")}>
              {t.yearly}
            </span>
            <span className="rounded-full bg-emerald-500/15 px-2 py-0.5 text-[11px] font-semibold text-emerald-600 dark:text-emerald-400">
              {t.savePercent}
            </span>
          </div>
          <div className="mt-10 grid gap-4 lg:grid-cols-3">
            {t.plans.map((plan, i) => {
              const active = selected === plan.name
              const featured = i === 1
              return (
                <div
                  key={plan.name}
                  className={cn(
                    "flex flex-col rounded-2xl border bg-card p-6",
                    featured
                      ? "border-primary shadow-lg shadow-primary/10 md:-translate-y-1"
                      : "border-border"
                  )}
                >
                  <div className="flex items-center justify-between">
                    <h3 className="font-semibold">{plan.name}</h3>
                    {featured && (
                      <span className="rounded-full bg-primary px-2 py-0.5 text-[11px] font-semibold text-primary-foreground">
                        {t.navHome}
                      </span>
                    )}
                  </div>
                  <p className="mt-1 text-sm text-muted-foreground">{plan.desc}</p>
                  <p className="mt-5 flex items-baseline gap-1">
                    <span className="text-3xl font-semibold tracking-tight">
                      {currency}
                      {yearly ? plan.price[1] : plan.price[0]}
                    </span>
                    <span className="text-sm text-muted-foreground">{t.perMonth}</span>
                  </p>
                  <ul className="mt-5 flex flex-col gap-2.5">
                    {plan.features.map((f) => (
                      <li key={f} className="flex items-start gap-2 text-sm">
                        <Check
                          className={cn("mt-0.5 size-4 shrink-0", featured ? "text-primary" : "text-muted-foreground")}
                        />
                        {f}
                      </li>
                    ))}
                  </ul>
                  <button
                    type="button"
                    onClick={() => setSelected(plan.name)}
                    disabled={active}
                    className={cn(
                      "mt-6 h-10 rounded-lg text-sm font-semibold transition-all active:scale-95",
                      active
                        ? "cursor-default bg-muted text-muted-foreground"
                        : featured
                          ? "bg-primary text-primary-foreground hover:scale-[1.03]"
                          : "border border-border text-foreground hover:bg-secondary"
                    )}
                  >
                    {active ? t.currentPlan : t.choosePlan}
                  </button>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      <section id="faq" className="border-t border-border bg-secondary/30 py-14">
        <div className="mx-auto w-full max-w-2xl px-5">
          <h2 className="text-center text-2xl font-semibold tracking-tight sm:text-3xl">
            {t.faqTitle}
          </h2>
          <div className="mt-8 flex flex-col gap-3">
            {t.faqItems.map((item, i) => (
              <div key={item.q} className="overflow-hidden rounded-xl border border-border bg-card">
                <button
                  type="button"
                  onClick={() => setOpenFaq((v) => (v === i ? null : i))}
                  className="flex w-full items-center justify-between gap-4 px-5 py-4 text-left text-sm font-medium"
                >
                  {item.q}
                  <ChevronDown
                    className={cn(
                      "size-4 shrink-0 text-muted-foreground transition-transform",
                      openFaq === i && "rotate-180"
                    )}
                  />
                </button>
                {openFaq === i && (
                  <p className="border-t border-border/60 px-5 py-4 text-sm leading-relaxed text-muted-foreground">
                    {item.a}
                  </p>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      <footer className="border-t border-border">
        <div className="mx-auto grid w-full max-w-5xl gap-8 px-5 py-12 sm:grid-cols-2 lg:grid-cols-4">
          <div>
            <div className="flex items-center gap-2 font-semibold tracking-tight">
              <span className="flex size-7 items-center justify-center rounded-lg bg-primary text-primary-foreground">
                <Zap className="size-4" />
              </span>
              Nebula
            </div>
            <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{t.footerTagline}</p>
          </div>
          {[
            { title: t.footerProduct, links: t.footerCol1 },
            { title: t.footerCompany, links: t.footerCol2 },
            { title: t.footerLegal, links: t.footerCol3 },
          ].map((col) => (
            <div key={col.title}>
              <h4 className="text-sm font-semibold">{col.title}</h4>
              <ul className="mt-3 flex flex-col gap-2">
                {col.links.map((link) => (
                  <li key={link}>
                    <span className="cursor-pointer text-sm text-muted-foreground transition-colors hover:text-foreground">
                      {link}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <div className="border-t border-border/60 py-5 text-center text-xs text-muted-foreground">
          {t.copyright}
        </div>
      </footer>
    </div>
  )
}