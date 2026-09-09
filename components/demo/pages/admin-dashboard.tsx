"use client"

import { useState } from "react"
import { LayoutDashboard, Package, Search, ShieldCheck, Users, TrendingUp, Percent } from "lucide-react"
import { useLang } from "@/components/lang-provider"
import { demoText } from "@/components/demo/demo-text"
import { cn } from "@/lib/utils"

type View = "overview" | "members" | "orders"
type Status = "active" | "blocked" | "pending"
type AdminMember = { name: string; email: string; role: string; status: Status }

const statusStyles: Record<Status, string> = {
  active: "border-emerald-500/30 bg-emerald-500/10 text-emerald-600 dark:text-emerald-400",
  blocked: "border-red-500/30 bg-red-500/10 text-red-600 dark:text-red-400",
  pending: "border-amber-500/30 bg-amber-500/10 text-amber-600 dark:text-amber-400",
}

function Bars({ values, months }: { values: readonly number[]; months: readonly string[] }) {
  const max = Math.max(...values)
  return (
    <div className="flex h-40 items-end gap-2 sm:gap-3">
      {values.map((v, i) => (
        <div key={months[i]} className="flex flex-1 flex-col items-center gap-1.5">
          <span className="text-[11px] font-medium text-muted-foreground">{v}%</span>
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

export function AdminDashboardPage() {
  const { lang } = useLang()
  const { adminDashboardPage: t } = demoText(lang)

  const [view, setView] = useState<View>("overview")
  const [query, setQuery] = useState("")
  const [statusFilter, setStatusFilter] = useState<"all" | Status>("all")
  const [members, setMembers] = useState<AdminMember[]>(() => t.members.map((m) => ({ ...m })))

  const statIcons = [TrendingUp, Users, Package, Percent]

  const filtered = members.filter((m) => {
    const q = query.trim().toLowerCase()
    const matchesQuery = q === "" || m.name.toLowerCase().includes(q) || m.email.toLowerCase().includes(q)
    const matchesStatus = statusFilter === "all" || m.status === statusFilter
    return matchesQuery && matchesStatus
  })

  const toggleStatus = (email: string) => {
    setMembers((ms) =>
      ms.map((m) =>
        m.email === email ? { ...m, status: (m.status === "blocked" ? "active" : "blocked") as Status } : m
      )
    )
  }

  const nav = [
    { id: "overview" as View, label: t.navOverview, Icon: LayoutDashboard },
    { id: "members" as View, label: t.navMembers, Icon: Users },
    { id: "orders" as View, label: t.navOrders, Icon: Package },
  ]

  const statusFilters: { id: "all" | Status; label: string }[] = [
    { id: "all", label: t.filterAll },
    { id: "active", label: t.filterActive },
    { id: "pending", label: t.filterPending },
    { id: "blocked", label: t.filterBlocked },
  ]

  return (
    <div className="flex min-h-full w-full bg-background text-foreground">
      <aside className="sticky top-0 hidden h-svh w-56 shrink-0 flex-col border-r border-border bg-card md:flex">
        <div className="flex items-center gap-2 border-b border-border px-4 py-4 font-semibold tracking-tight">
          <span className="flex size-7 items-center justify-center rounded-lg bg-primary text-primary-foreground">
            <ShieldCheck className="size-4" />
          </span>
          Stedia Admin
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
            </button>
          ))}
        </nav>
        <div className="mt-auto flex items-center gap-3 border-t border-border px-4 py-4">
          <span className="flex size-9 shrink-0 items-center justify-center rounded-full bg-primary/15 text-sm font-semibold text-primary">
            AD
          </span>
          <div className="min-w-0">
            <p className="truncate text-sm font-medium">Admin</p>
            <p className="text-xs text-muted-foreground">ops@stedia.dev</p>
          </div>
        </div>
      </aside>

      <div className="flex min-w-0 flex-1 flex-col">
        <header className="sticky top-0 z-10 border-b border-border bg-background/90 px-5 py-4 backdrop-blur">
          <h1 className="text-lg font-semibold tracking-tight">
            {view === "overview" ? t.overviewLabel : view === "members" ? t.membersLabel : t.ordersLabel}
          </h1>
          <div className="mt-3 flex gap-2 overflow-x-auto md:hidden">
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
        </header>

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
            </div>
          )}

          {view === "members" && (
            <div className="rounded-xl border border-border bg-card">
              <div className="flex flex-col gap-3 border-b border-border p-4 sm:flex-row sm:items-center sm:justify-between">
                <h3 className="text-sm font-semibold">{t.membersTitle}</h3>
                <div className="flex flex-col gap-2 sm:flex-row sm:items-center">
                  <div className="relative">
                    <Search className="absolute left-3 top-1/2 size-4 -translate-y-1/2 text-muted-foreground" />
                    <input
                      value={query}
                      onChange={(e) => setQuery(e.target.value)}
                      placeholder={t.searchPlaceholder}
                      className="h-9 w-full rounded-lg border border-border bg-background pl-9 pr-3 text-sm outline-none transition-colors placeholder:text-muted-foreground focus:border-primary sm:w-56"
                    />
                  </div>
                  <div className="flex gap-1.5">
                    {statusFilters.map((f) => (
                      <button
                        key={f.id}
                        type="button"
                        onClick={() => setStatusFilter(f.id)}
                        className={cn(
                          "rounded-full border px-2.5 py-1 text-xs font-medium transition-colors",
                          statusFilter === f.id
                            ? "border-primary bg-primary text-primary-foreground"
                            : "border-border text-muted-foreground hover:text-foreground"
                        )}
                      >
                        {f.label}
                      </button>
                    ))}
                  </div>
                </div>
              </div>
              <div className="overflow-x-auto">
                <table className="w-full min-w-[560px] text-left text-sm">
                  <thead>
                    <tr className="border-b border-border/60 text-xs uppercase tracking-wide text-muted-foreground">
                      <th className="px-4 py-3 font-medium">{t.colName}</th>
                      <th className="px-4 py-3 font-medium">{t.colEmail}</th>
                      <th className="px-4 py-3 font-medium">{t.colRole}</th>
                      <th className="px-4 py-3 font-medium">{t.colStatus}</th>
                      <th className="px-4 py-3 text-right font-medium">{t.colAction}</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-border/60">
                    {filtered.map((member) => (
                      <tr key={member.email} className="transition-colors hover:bg-secondary/40">
                        <td className="px-4 py-3 font-medium">{member.name}</td>
                        <td className="px-4 py-3 text-muted-foreground">{member.email}</td>
                        <td className="px-4 py-3 text-muted-foreground">
                          {t.roles[member.role as keyof typeof t.roles]}
                        </td>
                        <td className="px-4 py-3">
                          <span
                            className={cn(
                              "inline-flex items-center gap-1.5 rounded-full border px-2.5 py-0.5 text-xs font-medium",
                              statusStyles[member.status as Status]
                            )}
                          >
                            <span
                              className={cn(
                                "size-1.5 rounded-full",
                                member.status === "active"
                                  ? "bg-emerald-500"
                                  : member.status === "blocked"
                                    ? "bg-red-500"
                                    : "bg-amber-500"
                              )}
                            />
                            {t.statuses[member.status as keyof typeof t.statuses]}
                          </span>
                        </td>
                        <td className="px-4 py-3 text-right">
                          <button
                            type="button"
                            onClick={() => toggleStatus(member.email)}
                            className={cn(
                              "rounded-md border px-2.5 py-1 text-xs font-medium transition-colors",
                              member.status === "blocked"
                                ? "border-emerald-500/40 text-emerald-600 hover:bg-emerald-500/10 dark:text-emerald-400"
                                : "border-border text-muted-foreground hover:border-red-500/40 hover:text-red-600 dark:hover:text-red-400"
                            )}
                          >
                            {member.status === "blocked" ? t.unblock : t.block}
                          </button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
                {filtered.length === 0 && (
                  <p className="px-4 py-10 text-center text-sm text-muted-foreground">
                    {t.searchPlaceholder}
                  </p>
                )}
              </div>
            </div>
          )}

          {view === "orders" && (
            <div className="rounded-xl border border-border bg-card">
              <h3 className="border-b border-border p-4 text-sm font-semibold">{t.ordersTitle}</h3>
              <div className="overflow-x-auto">
                <table className="w-full min-w-[480px] text-left text-sm">
                  <thead>
                    <tr className="border-b border-border/60 text-xs uppercase tracking-wide text-muted-foreground">
                      <th className="px-4 py-3 font-medium">{t.colOrder}</th>
                      <th className="px-4 py-3 font-medium">{t.colCustomer}</th>
                      <th className="px-4 py-3 font-medium">{t.colDate}</th>
                      <th className="px-4 py-3 font-medium">{t.colTotal}</th>
                      <th className="px-4 py-3 font-medium">{t.colStatus}</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-border/60">
                    {t.orders.map((order) => (
                      <tr key={order.id} className="transition-colors hover:bg-secondary/40">
                        <td className="px-4 py-3 font-medium text-primary">{order.id}</td>
                        <td className="px-4 py-3">{order.customer}</td>
                        <td className="px-4 py-3 text-muted-foreground">{order.date}</td>
                        <td className="px-4 py-3 font-medium tabular-nums">{order.total}</td>
                        <td className="px-4 py-3">
                          <span
                            className={cn(
                              "inline-flex rounded-full border px-2.5 py-0.5 text-xs font-medium",
                              order.status === "paid"
                                ? "border-emerald-500/30 bg-emerald-500/10 text-emerald-600 dark:text-emerald-400"
                                : order.status === "pending"
                                  ? "border-amber-500/30 bg-amber-500/10 text-amber-600 dark:text-amber-400"
                                  : "border-blue-500/30 bg-blue-500/10 text-blue-600 dark:text-blue-400"
                            )}
                          >
                            {t.orderStatuses[order.status as keyof typeof t.orderStatuses]}
                          </span>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          )}
        </main>
      </div>
    </div>
  )
}