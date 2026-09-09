"use client"

import dynamic from "next/dynamic"
import { useMemo, useState } from "react"
import { Loader2, LocateFixed, MapPin, Search } from "lucide-react"
import { useLang } from "@/components/lang-provider"
import { demoText } from "@/components/demo/demo-text"
import type { MapLayer } from "./map-canvas"
import { cn } from "@/lib/utils"

const MapCanvas = dynamic(() => import("./map-canvas").then((m) => m.MapCanvas), {
  ssr: false,
  loading: () => <div className="h-72 w-full animate-pulse rounded-xl bg-muted sm:h-80" />,
})

export function MapExplorer() {
  const { lang } = useLang()
  const { mapExplorer: t } = demoText(lang)

  const [query, setQuery] = useState("")
  const [selected, setSelected] = useState<number | null>(0)
  const [layer, setLayer] = useState<MapLayer>("streets")
  const [userPos, setUserPos] = useState<[number, number] | null>(null)
  const [followMe, setFollowMe] = useState(false)
  const [locating, setLocating] = useState(false)
  const [locError, setLocError] = useState(false)

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase()
    return t.branches
      .map((branch, index) => ({ branch, index }))
      .filter(
        ({ branch }) =>
          q === "" ||
          branch.name.toLowerCase().includes(q) ||
          branch.address.toLowerCase().includes(q)
      )
  }, [query, t])

  const select = (index: number) => {
    setSelected(index)
    setFollowMe(false)
  }

  const locate = () => {
    if (!("geolocation" in navigator)) {
      setLocError(true)
      return
    }
    setLocating(true)
    setLocError(false)
    navigator.geolocation.getCurrentPosition(
      (pos) => {
        setUserPos([pos.coords.latitude, pos.coords.longitude])
        setFollowMe(true)
        setLocating(false)
      },
      () => {
        setLocating(false)
        setLocError(true)
      },
      { timeout: 8000 }
    )
  }

  return (
    <div className="w-full bg-background text-foreground">
      <div className="flex flex-col gap-3 border-b border-border p-4 sm:flex-row sm:items-center">
        <div className="relative flex-1">
          <Search className="absolute left-3 top-1/2 size-4 -translate-y-1/2 text-muted-foreground" />
          <input
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder={t.searchPlaceholder}
            className="h-10 w-full rounded-lg border border-border bg-background pl-9 pr-3 text-sm outline-none transition-colors placeholder:text-muted-foreground focus:border-primary"
          />
        </div>
        <div className="flex items-center gap-2">
          <div className="flex rounded-lg border border-border p-0.5">
            {(["streets", "satellite"] as const).map((l) => (
              <button
                key={l}
                type="button"
                onClick={() => setLayer(l)}
                className={cn(
                  "rounded-md px-3 py-1.5 text-xs font-medium transition-colors",
                  layer === l ? "bg-primary text-primary-foreground" : "text-muted-foreground"
                )}
              >
                {t.layers[l]}
              </button>
            ))}
          </div>
          <button
            type="button"
            onClick={locate}
            disabled={locating}
            className="inline-flex h-10 items-center gap-1.5 rounded-lg border border-border px-3 text-sm font-medium transition-colors hover:border-primary/40 disabled:opacity-60"
          >
            {locating ? <Loader2 className="size-4 animate-spin" /> : <LocateFixed className="size-4" />}
            <span className="hidden sm:inline">{locating ? t.locating : t.myLocation}</span>
          </button>
        </div>
      </div>
      {locError && (
        <p className="border-b border-border/60 px-4 py-2 text-xs font-medium text-destructive">
          {t.locationError}
        </p>
      )}

      <div className="grid gap-0 lg:grid-cols-[280px_1fr]">
        <div className="border-b border-border lg:border-b-0 lg:border-e">
          <h3 className="px-4 pb-1 pt-4 text-sm font-semibold">{t.listTitle}</h3>
          {filtered.length === 0 ? (
            <p className="px-4 py-6 text-sm text-muted-foreground">{t.noResults}</p>
          ) : (
            <ul className="flex max-h-56 flex-col gap-1 overflow-y-auto p-3 lg:max-h-none">
              {filtered.map(({ branch, index }) => (
                <li key={branch.name}>
                  <button
                    type="button"
                    onClick={() => select(index)}
                    className={cn(
                      "flex w-full items-start gap-2.5 rounded-lg px-3 py-2.5 text-left transition-colors",
                      selected === index && !followMe
                        ? "bg-primary/10 text-foreground"
                        : "text-muted-foreground hover:bg-secondary hover:text-foreground"
                    )}
                  >
                    <MapPin
                      className={cn(
                        "mt-0.5 size-4 shrink-0",
                        selected === index && !followMe ? "text-primary" : "text-muted-foreground"
                      )}
                    />
                    <span>
                      <span className="block text-sm font-medium text-foreground">{branch.name}</span>
                      <span className="block text-xs">{branch.address}</span>
                    </span>
                  </button>
                </li>
              ))}
            </ul>
          )}
        </div>
        <div className="isolate min-w-0 p-4">
          <div className="overflow-hidden rounded-xl border border-border">
            <MapCanvas
              branches={t.branches}
              selected={selected}
              followMe={followMe}
              layer={layer}
              userPos={userPos}
              onSelect={select}
            />
          </div>
        </div>
      </div>
    </div>
  )
}
