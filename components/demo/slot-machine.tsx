"use client"

import { useState } from "react"
import { useLang } from "@/components/lang-provider"
import { demoText } from "@/components/demo/demo-text"

const SYMBOLS = ["🍒", "🍋", "🍇", "🔔", "⭐", "💎"]

export function SlotMachine() {
  const { lang } = useLang()
  const { slot: t } = demoText(lang)

  const [reels, setReels] = useState<string[]>(["⭐", "⭐", "⭐"])
  const [spinning, setSpinning] = useState(false)
  const [score, setScore] = useState(0)

  const spin = () => {
    if (spinning) return
    setSpinning(true)

    let completed = 0
    setScore((s) => s - 10)

    reels.forEach((_, index) => {
      const interval = setInterval(() => {
        setReels((prev) => {
          const next = [...prev]
          next[index] = SYMBOLS[Math.floor(Math.random() * SYMBOLS.length)]
          return next
        })
      }, 90)

      setTimeout(() => {
        clearInterval(interval)
        completed++
        if (completed === 3) {
          setSpinning(false)
          setReels((prev) => {
            const [a, b, c] = prev
            if (a === b && b === c) {
              const bonus = a === "⭐" ? 150 : a === "💎" ? 100 : 50
              setScore((s) => s + bonus)
            }
            return prev
          })
        }
      }, 600 + index * 300)
    })
  }

  return (
    <div className="mx-auto w-full max-w-xs rounded-xl border border-border bg-card p-6 shadow-sm">
      <div className="mb-4 flex items-center justify-between">
        <p className="text-sm font-medium">
          {t.score}:{" "}
          <span className="font-semibold tabular-nums">{Math.max(score, 0)}</span>
        </p>
        <span
          className={`text-xs font-medium ${spinning ? "text-amber-600 dark:text-amber-400" : "text-emerald-600 dark:text-emerald-400"}`}
        >
          {spinning ? "…" : "ready"}
        </span>
      </div>

      <div className="mb-6 flex items-center justify-center gap-3 rounded-xl border border-border bg-background py-6">
        {reels.map((symbol, index) => (
          <div
            key={index}
            className={`flex size-16 items-center justify-center rounded-lg border border-border bg-card text-4xl ${spinning ? "animate-pulse" : ""}`}
          >
            {symbol}
          </div>
        ))}
      </div>

      <button
        type="button"
        onClick={spin}
        disabled={spinning}
        className="w-full rounded-lg bg-primary py-3 text-sm font-semibold text-primary-foreground transition-transform hover:scale-[1.02] active:scale-95 disabled:opacity-60"
      >
        {t.spin}
      </button>
    </div>
  )
}