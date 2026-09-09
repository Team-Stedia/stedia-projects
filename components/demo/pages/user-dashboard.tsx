"use client"

import { useState } from "react"
import {
  BarChart3,
  Bell,
  Check,
  LayoutDashboard,
  MessageSquare,
  Package,
  Percent,
  Settings,
  TrendingUp,
  Users,
} from "lucide-react"
import { useLang } from "@/components/lang-provider"
import { demoText } from "@/components/demo/demo-text"
import { cn } from "@/lib/utils"

type View = "overview" | "analytics" | "messages" | "settings"
type ChatMessage = { from: string; text: string; time: string; unread: boolean }

function Bars({ values, months }: { values: readonly number[]; months: readonly string[] }) {
  const max = Math.max(...values)
  return (
    <div className="flex h-40 items-end gap-2 sm:gap-3">
      {values.map((v, i) => (
        <div key={months[i]} className="flex flex-1 flex-col items-center gap-1.5">
          <span className="text-[11px] font-medium text-muted-foreground">{v}</span>
          <div
            className={cn("w-full rounded-t-md", i === values.length - 1 ? "bg-primary" : "bg-primary/40")}
            style={{ height: `${(v / max) * 100}%`, minHeight: 12 }}
          />
          <span className="text-[11px] text-muted-foreground">{months[i]}</span>
        </div>
      ))}
    </div>
  )
}

function Toggle({ on, onClick }: { on: boolean; onClick: () => void }) {
  return (
    <button
      type="button"
      onClick={onClick}
      aria-label="toggle"
      className={cn(
        "relative h-6 w-11 shrink-0 rounded-full transition-colors",
        on ? "bg-primary" : "bg-muted"
      )}
    >
      <span
        className={cn(
          "absolute top-0.5 size-5 rounded-full bg-background shadow transition-all",
          on ? "left-5.5" : "left-0.5"
        )}
      />
    </button>
  )
}

export function UserDashboardPage() {
  const { lang } = useLang()
  const { userDashboardPage: t } = demoText(lang)

  const [view, setView] = useState<View>("overview")
  const [messages, setMessages] = useState<ChatMessage[]>(() => t.messages.map((m) => ({ ...m })))
  const [notifications, setNotifications] = useState(true)
  const [weekly, setWeekly] = useState(true)
  const [twoFactor, setTwoFactor] = useState(false)

  const unread = messages.filter((m) => m.unread).length
  const statIcons = [TrendingUp, Users, Package, Percent]

  const nav = [
    { id: "overview" as View, label: t.navOverview, Icon: LayoutDashboard },
    { id: "analytics" as View, label: t.navAnalytics, Icon: BarChart3 },
    { id: "messages" as View, label: t.navMessages, Icon: MessageSquare },
    { id: "settings" as View, label: t.navSettings, Icon: Settings },
  ]

  return (
    <div className="flex min-h-full w-full bg-background text-foreground">
      <aside className="sticky top-0 hidden h-svh w-56 shrink-0 flex-col border-r border-border bg-card md:flex">
        <div className="flex items-center gap-2 border-b border-border px-4 py-4 font-semibold tracking-tight">
          <span className="flex size-7 items-center justify-center rounded-lg bg-primary text-primary-foreground">
            <LayoutDashboard className="size-4" />
          </span>
          Stedia Panel
        </div>
        <nav className="flex flex-col gap-1 px-3 py-4">
          {nav.map(({ id, label, Icon }) => (
            <button
              key={id}
              type="button"
              onClick={() => setView(id)}
              className={cn(
                "flex items-center gap-2.5 rounded-lg px-3 py-2 text-sm font-medium transition-colors",
                view === id
                  ? "bg-primary text-primary-foreground"
                  : "text-muted-foreground hover:bg-secondary hover:text-foreground"
              )}
            >
              <Icon className="size-4" />
              {label}
              {id === "messages" && unread > 0 && (
                <span className="ms-auto flex size-5 items-center justify-center rounded-full bg-primary/15 text-[11px] font-bold text-muted-foreground">
                  {unread}
                </span>
              )}
            </button>
          ))}
        </nav>
        <div className="mt-auto flex items-center gap-3 border-t border-border px-4 py-4">
          <span className="flex size-9 shrink-0 items-center justify-center rounded-full bg-primary/15 text-sm font-semibold text-primary">
            AC
          </span>
          <div className="min-w-0">
            <p className="truncate text-sm font-medium">{t.youName}</p>
            <p className="text-xs text-muted-foreground">alex@stedia.dev</p>
          </div>
        </div>
      </aside>

      <div className="flex min-w-0 flex-1 flex-col">
        <header className="sticky top-0 z-10 flex items-center justify-between gap-3 border-b border-border bg-background/90 px-5 py-3 backdrop-blur">
          <div>
            <p className="text-xs text-muted-foreground">
              {t.greeting} <span className="font-semibold text-foreground">{t.youName}</span>
            </p>
            <p className="text-lg font-semibold tracking-tight">
              {view === "overview" ? t.overviewLabel : view === "analytics" ? t.analyticsLabel : view === "messages" ? t.messagesLabel : t.settingsLabel}
            </p>
          </div>
          <button
            type="button"
            className="relative flex size-9 items-center justify-center rounded-lg border border-border text-muted-foreground transition-colors hover:text-foreground"
            aria-label="notifications"
          >
            <Bell className="size-4" />
            <span className="absolute right-2 top-2 size-2 rounded-full bg-primary" />
          </button>
        </header>

        <div className="flex gap-2 overflow-x-auto border-b border-border px-5 py-2 md:hidden">
          {nav.map(({ id, label, Icon }) => (
            <button
              key={id}
              type="button"
              onClick={() => setView(id)}
              className={cn(
                "flex shrink-0 items-center gap-1.5 rounded-full border px-3 py-1 text-xs font-medium transition-colors",
                view === id
                  ? "border-primary bg-primary text-primary-foreground"
                  : "border-border bg-card text-muted-foreground"
              )}
            >
              <Icon className="size-3.5" />
              {label}
            </button>
          ))}
        </div>

        <main className="flex-1 p-5">
          {view === "overview" && (
            <div className="flex flex-col gap-4">
              <div className="grid grid-cols-2 gap-3 lg:grid-cols-4">
                {t.stats.map((stat, i) => {
                  const Icon = statIcons[i]
                  return (
                    <div key={stat.label} className="rounded-xl border border-border bg-card p-4">
                      <span className="flex size-8 items-center justify-center rounded-lg bg-primary/10 text-primary">
                        <Icon className="size-4" />
                      </span>
                      <p className="mt-3 text-xl font-semibold tabular-nums tracking-tight">{stat.value}</p>
                      <p className="text-xs text-muted-foreground">{stat.label}</p>
                    </div>
                  )
                })}
              </div>
              <div className="rounded-xl border border-border bg-card p-5">
                <h3 className="text-sm font-semibold">{t.chartTitle}</h3>
                <div className="mt-4">
                  <Bars values={t.chartValues} months={t.chartMonths} />
                </div>
              </div>
              <div className="rounded-xl border border-border bg-card p-5">
                <h3 className="text-sm font-semibold">{t.activityTitle}</h3>
                <ul className="mt-3 flex flex-col divide-y divide-border/60">
                  {t.activity.map((item) => (
                    <li key={item.text} className="flex items-center justify-between gap-3 py-2.5 text-sm">
                      <span className="min-w-0 truncate">{item.text}</span>
                      <span className="shrink-0 text-xs text-muted-foreground">{item.time}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          )}

          {view === "analytics" && (
            <div className="flex flex-col gap-4">
              <div className="rounded-xl border border-border bg-card p-5">
                <h3 className="text-sm font-semibold">{t.chartTitle}</h3>
                <div className="mt-4">
                  <Bars values={t.chartValues} months={t.chartMonths} />
                </div>
              </div>
              <div className="grid grid-cols-2 gap-3">
                {t.stats.map((stat) => (
                  <div key={stat.label} className="rounded-xl border border-border bg-card p-4">
                    <p className="text-2xl font-semibold tabular-nums tracking-tight">{stat.value}</p>
                    <p className="text-xs text-muted-foreground">{stat.label}</p>
                  </div>
                ))}
              </div>
            </div>
          )}

          {view === "messages" && (
            <div className="rounded-xl border border-border bg-card p-5">
              <div className="flex items-center justify-between">
                <h3 className="text-sm font-semibold">{t.messagesTitle}</h3>
                <button
                  type="button"
                  onClick={() => setMessages((ms) => ms.map((m) => ({ ...m, unread: false })))}
                  disabled={unread === 0}
                  className="text-xs font-medium text-primary transition-opacity disabled:opacity-50"
                >
                  {t.markAllRead}
                </button>
              </div>
              {unread === 0 && t.messages.length > 0 && (
                <div className="mt-3 flex items-center gap-1.5 rounded-lg bg-emerald-500/10 px-3 py-2 text-xs font-medium text-emerald-600 dark:text-emerald-400">
                  <Check className="size-3.5" />
                  {t.allRead}
                </div>
              )}
              <ul className="mt-4 flex flex-col divide-y divide-border/60">
                {messages.map((msg, i) => (
                  <li
                    key={msg.from + i}
                    className="flex items-center gap-3 py-3"
                    onClick={() =>
                      setMessages((ms) => ms.map((m, idx) => (idx === i ? { ...m, unread: false } : m)))
                    }
                  >
                    <span className="flex size-9 shrink-0 items-center justify-center rounded-full bg-primary/15 text-xs font-semibold text-primary">
                      {msg.from
                        .split(" ")
                        .map((w) => w[0])
                        .slice(0, 2)
                        .join("")}
                    </span>
                    <div className="min-w-0 flex-1">
                      <div className="flex items-center gap-2">
                        <p className="text-sm font-semibold">{msg.from}</p>
                        {msg.unread && <span className="size-1.5 shrink-0 rounded-full bg-primary" />}
                      </div>
                      <p className="truncate text-sm text-muted-foreground">{msg.text}</p>
                    </div>
                    <span className="shrink-0 text-xs text-muted-foreground">{msg.time}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}

          {view === "settings" && (
            <div className="rounded-xl border border-border bg-card p-5">
              <h3 className="text-sm font-semibold">{t.settingsTitle}</h3>
              <ul className="mt-4 flex flex-col divide-y divide-border/60">
                {[
                  { label: t.notifications, desc: t.notificationsDesc, value: notifications, set: () => setNotifications((v) => !v) },
                  { label: t.weeklyReport, desc: t.weeklyReportDesc, value: weekly, set: () => setWeekly((v) => !v) },
                  { label: t.twoFactor, desc: t.twoFactorDesc, value: twoFactor, set: () => setTwoFactor((v) => !v) },
                ].map((row) => (
                  <li key={row.label} className="flex items-center justify-between gap-4 py-3.5">
                    <div>
                      <p className="text-sm font-medium">{row.label}</p>
                      <p className="text-xs text-muted-foreground">{row.desc}</p>
                    </div>
                    <Toggle on={row.value} onClick={row.set} />
                  </li>
                ))}
              </ul>
            </div>
          )}
        </main>
      </div>
    </div>
  )
}