"use client"

import { useMemo, useState } from "react"
import {
  Backpack,
  BatteryCharging,
  Footprints,
  Headphones,
  Minus,
  Plus,
  Search,
  Shirt,
  ShoppingCart,
  Trash2,
  Watch,
  X,
} from "lucide-react"
import { useLang } from "@/components/lang-provider"
import { demoText } from "@/components/demo/demo-text"
import { cn } from "@/lib/utils"

const productIcons = [Shirt, Footprints, Headphones, Watch, Backpack, BatteryCharging]

export function ShopPage() {
  const { lang } = useLang()
  const { shopPage: t } = demoText(lang)

  const [query, setQuery] = useState("")
  const [filter, setFilter] = useState(0)
  const [cart, setCart] = useState<Record<string, number>>({})
  const [drawerOpen, setDrawerOpen] = useState(false)
  const [placed, setPlaced] = useState(false)

  const items = useMemo(() => {
    const q = query.trim().toLowerCase()
    return t.products.filter((product) => {
      const matchesFilter = filter === 0 || product.category === t.filters[filter]
      const matchesQuery =
        q === "" ||
        product.name.toLowerCase().includes(q) ||
        product.category.toLowerCase().includes(q)
      return matchesFilter && matchesQuery
    })
  }, [query, filter, t])

  const cartEntries = Object.entries(cart)
  const count = cartEntries.reduce((sum, [, qty]) => sum + qty, 0)
  const subtotal = cartEntries.reduce((sum, [name, qty]) => {
    const product = t.products.find((p) => p.name === name)
    return sum + (product ? product.price * qty : 0)
  }, 0)

  const add = (name: string) => {
    setCart((c) => ({ ...c, [name]: (c[name] ?? 0) + 1 }))
  }
  const changeQty = (name: string, delta: number) => {
    setCart((c) => {
      const next = { ...c, [name]: (c[name] ?? 0) + delta }
      if (next[name] <= 0) delete next[name]
      return next
    })
  }
  const remove = (name: string) => {
    setCart((c) => {
      const next = { ...c }
      delete next[name]
      return next
    })
  }
  const checkout = () => {
    if (count === 0) return
    setCart({})
    setDrawerOpen(false)
    setPlaced(true)
  }

  const money = (n: number) => `${t.currency}${n}`

  return (
    <div className="relative w-full bg-background text-foreground">
      <header className="border-b border-border">
        <div className="mx-auto flex h-14 w-full max-w-5xl items-center justify-between gap-3 px-5">
          <span className="font-semibold tracking-tight">{t.brand}</span>
          <div className="relative hidden max-w-xs flex-1 sm:block">
            <Search className="absolute left-3 top-1/2 size-4 -translate-y-1/2 text-muted-foreground" />
            <input
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder={t.searchPlaceholder}
              className="h-9 w-full rounded-lg border border-border bg-background pl-9 pr-3 text-sm outline-none transition-colors placeholder:text-muted-foreground focus:border-primary"
            />
          </div>
          <button
            type="button"
            onClick={() => setDrawerOpen(true)}
            className="relative flex items-center gap-2 rounded-lg border border-border px-3 py-1.5 text-sm font-medium transition-colors hover:border-primary/40"
          >
            <ShoppingCart className="size-4" />
            <span className="hidden sm:inline">{t.cart}</span>
            {count > 0 && (
              <span className="absolute -right-1.5 -top-1.5 flex size-5 items-center justify-center rounded-full bg-primary text-[11px] font-bold text-primary-foreground">
                {count}
              </span>
            )}
          </button>
        </div>
        <div className="mx-auto w-full max-w-5xl px-5 pb-3 sm:hidden">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 size-4 -translate-y-1/2 text-muted-foreground" />
            <input
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder={t.searchPlaceholder}
              className="h-9 w-full rounded-lg border border-border bg-background pl-9 pr-3 text-sm outline-none transition-colors placeholder:text-muted-foreground focus:border-primary"
            />
          </div>
        </div>
      </header>

      {placed && (
        <div className="mx-auto mt-4 w-full max-w-5xl px-5">
          <span className="inline-flex items-center gap-1.5 rounded-full border border-emerald-500/30 bg-emerald-500/10 px-3 py-1 text-xs font-semibold text-emerald-600 dark:text-emerald-400">
            <ShoppingCart className="size-3.5" />
            {t.orderPlaced}
          </span>
        </div>
      )}

      <main className="mx-auto w-full max-w-5xl px-5 py-6">
        <div className="flex flex-wrap items-center justify-between gap-2">
          <div className="flex flex-wrap gap-2">
            {t.filters.map((f, i) => (
              <button
                key={f}
                type="button"
                onClick={() => setFilter(i)}
                className={cn(
                  "rounded-full border px-3.5 py-1.5 text-sm font-medium transition-colors",
                  filter === i
                    ? "border-primary bg-primary text-primary-foreground"
                    : "border-border bg-card text-muted-foreground hover:border-primary/40 hover:text-foreground"
                )}
              >
                {f}
              </button>
            ))}
          </div>
          <span className="text-xs text-muted-foreground">{t.freeShipping}</span>
        </div>

        <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {items.map((product, i) => {
            const Icon = productIcons[i % productIcons.length]
            return (
              <div
                key={product.name}
                className="group flex flex-col overflow-hidden rounded-xl border border-border bg-card transition-all duration-300 hover:border-primary/40 hover:shadow-md"
              >
                <div className="flex aspect-[16/10] items-center justify-center bg-gradient-to-br from-primary/20 via-secondary to-secondary/50">
                  <Icon className="size-12 text-muted-foreground transition-transform duration-300 group-hover:scale-110" />
                </div>
                <div className="flex flex-1 flex-col gap-1 p-4">
                  <div className="flex items-start justify-between gap-2">
                    <h3 className="text-sm font-semibold leading-snug">{product.name}</h3>
                    <span className="shrink-0 text-sm font-semibold tabular-nums">{money(product.price)}</span>
                  </div>
                  <span className="text-xs text-muted-foreground">{product.category}</span>
                  <button
                    type="button"
                    onClick={() => add(product.name)}
                    className="mt-3 inline-flex h-9 items-center justify-center gap-1.5 rounded-lg bg-primary text-sm font-semibold text-primary-foreground transition-transform hover:scale-[1.02] active:scale-95"
                  >
                    <Plus className="size-3.5" />
                    {t.cart}
                  </button>
                </div>
              </div>
            )
          })}
        </div>

        {items.length === 0 && (
          <div className="rounded-xl border border-dashed border-border py-14 text-center text-sm text-muted-foreground">
            {t.noResults}
          </div>
        )}
      </main>

      {drawerOpen && (
        <div className="absolute inset-0 z-40 flex justify-end bg-black/40">
          <div className="flex h-full w-full max-w-sm flex-col border-l border-border bg-background shadow-2xl">
            <div className="flex items-center justify-between border-b border-border px-5 py-4">
              <div className="flex items-center gap-2 font-semibold">
                <ShoppingCart className="size-4" />
                {t.cart}
                <span className="text-sm font-normal text-muted-foreground">{t.item(count)}</span>
              </div>
              <button
                type="button"
                onClick={() => setDrawerOpen(false)}
                aria-label="close"
                className="flex size-8 items-center justify-center rounded-lg border border-border text-muted-foreground transition-colors hover:text-foreground"
              >
                <X className="size-4" />
              </button>
            </div>

            {cartEntries.length === 0 ? (
              <div className="flex flex-1 flex-col items-center justify-center gap-3 px-6 text-center">
                <ShoppingCart className="size-10 text-muted-foreground/50" />
                <p className="text-sm text-muted-foreground">{t.cartEmpty}</p>
              </div>
            ) : (
              <>
                <div className="flex-1 overflow-y-auto px-5 py-4">
                  <ul className="flex flex-col gap-4">
                    {cartEntries.map(([name, qty]) => {
                      const product = t.products.find((p) => p.name === name)
                      if (!product) return null
                      return (
                        <li key={name} className="flex items-center gap-3">
                          <div className="flex size-11 shrink-0 items-center justify-center rounded-lg bg-secondary/60">
                            <ShoppingCart className="size-4 text-muted-foreground" />
                          </div>
                          <div className="min-w-0 flex-1">
                            <p className="truncate text-sm font-medium">{name}</p>
                            <p className="text-xs text-muted-foreground">{money(product.price)}</p>
                          </div>
                          <div className="flex items-center gap-1">
                            <button
                              type="button"
                              onClick={() => changeQty(name, -1)}
                              className="flex size-7 items-center justify-center rounded-md border border-border text-muted-foreground transition-colors hover:text-foreground"
                              aria-label="-"
                            >
                              <Minus className="size-3" />
                            </button>
                            <span className="w-6 text-center text-sm font-semibold tabular-nums">{qty}</span>
                            <button
                              type="button"
                              onClick={() => changeQty(name, 1)}
                              className="flex size-7 items-center justify-center rounded-md border border-border text-muted-foreground transition-colors hover:text-foreground"
                              aria-label="+"
                            >
                              <Plus className="size-3" />
                            </button>
                          </div>
                          <button
                            type="button"
                            onClick={() => remove(name)}
                            className="flex size-7 items-center justify-center rounded-md text-muted-foreground transition-colors hover:text-destructive"
                            aria-label="remove"
                          >
                            <Trash2 className="size-3.5" />
                          </button>
                        </li>
                      )
                    })}
                  </ul>
                </div>
                <div className="border-t border-border px-5 py-4">
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-muted-foreground">{t.subtotal}</span>
                    <span className="text-lg font-semibold tabular-nums">{money(subtotal)}</span>
                  </div>
                  <button
                    type="button"
                    onClick={checkout}
                    className="mt-4 h-11 w-full rounded-lg bg-primary text-sm font-semibold text-primary-foreground transition-transform hover:scale-[1.02] active:scale-95"
                  >
                    {t.placeOrder}
                  </button>
                  <button
                    type="button"
                    onClick={() => setCart({})}
                    className="mt-2 w-full text-center text-xs text-muted-foreground transition-colors hover:text-foreground"
                  >
                    {t.clearCart}
                  </button>
                </div>
              </>
            )}
          </div>
        </div>
      )}
    </div>
  )
}