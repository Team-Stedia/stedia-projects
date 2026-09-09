"use client"

import { useEffect, useState } from "react"
import { useLang } from "@/components/lang-provider"
import { demoText } from "@/components/demo/demo-text"
import { cn } from "@/lib/utils"

const WORK = 25 * 60
const SHORT = 5 * 60
const LONG = 15 * 60

function format(total: number) {
  const m = Math.floor(total / 60)
  const s = total % 60
  return `${String(m).padStart(2, "0")}:${String(s).padStart(2, "0")}`
}

export function PomodoroTimer() {
  const { lang } = useLang()
  const { pomodoro: t } = demoText(lang)

  const [seconds, setSeconds] = useState(WORK)
  const [running, setRunning] = useState(false)
  const [sessions, setSessions] = useState(0)
  const [phase, setPhase] = useState<1 | 2 | 3>(1)

  useEffect(() => {
    if (!running) return
    const id = setInterval(() => {
      setSeconds((prev) => {
        if (prev <= 1) {
          // advance phase
          setPhase((current) => {
            if (current === 1) {
              setSessions((s) => s + 1)
              return sessions + 1 >= 4 ? 3 : 2
            }
            if (current === 3) {
              setSessions(0)
              return 1
            }
            return 1
          })
          setRunning(false)
          return phase === 1 ? (sessions + 1 >= 4 ? LONG : SHORT) : WORK
        }
        return prev - 1
      })
    }, 1000)
    return () => clearInterval(id)
  }, [running, phase, sessions])

  const startPhase = (next: 1 | 2 | 3) => {
    setPhase(next)
    setSeconds(next === 1 ? WORK : next === 2 ? SHORT : LONG)
    setRunning(false)
  }

  const reset = () => {
    startPhase(phase)
  }

  const pct = (() => {
    if (phase === 1) return (seconds / WORK) * 100
    if (phase === 2) return (seconds / SHORT) * 100
    return (seconds / LONG) * 100
  })()

  return (
    <div className="mx-auto w-full max-w-xs rounded-xl border border-border bg-card p-6 shadow-sm text-center">
      <div className="mb-5 grid grid-cols-3 gap-1 rounded-lg bg-muted p-1">
        {([1, 2, 3] as const).map((p) => (
          <button
            key={p}
            type="button"
            onClick={() => startPhase(p)}
            className={cn(
              "rounded-md px-2 py-1.5 text-xs font-medium transition-colors",
              phase === p ? "bg-background text-foreground shadow-sm" : "text-muted-foreground"
            )}
          >
            {p === 1 ? t.focus : p === 2 ? t.shortBreak : t.longBreak}
          </button>
        ))}
      </div>

      <div className="relative mx-auto mb-6 size-44">
        <div
          className="absolute inset-0 rounded-full"
          style={{
            background: `conic-gradient(var(--color-primary) ${pct * 3.6}deg, var(--color-muted) ${pct * 3.6}deg)`,
            mask: "radial-gradient(farthest-side, transparent calc(100% - 10px), #000 calc(100% - 9px))",
            WebkitMask:
              "radial-gradient(farthest-side, transparent calc(100% - 10px), #000 calc(100% - 9px))",
          }}
        />
        <div className="absolute inset-0 flex flex-col items-center justify-center">
          <span className="font-mono text-4xl font-semibold tabular-nums">{format(seconds)}</span>
          <span className="mt-1 text-xs text-muted-foreground">{t.phase(phase)}</span>
        </div>
      </div>

      <div className="flex justify-center gap-3">
        <button
          type="button"
          onClick={() => setRunning((v) => !v)}
          className="h-10 rounded-lg bg-primary px-6 text-sm font-semibold text-primary-foreground transition-transform hover:scale-105 active:scale-95"
        >
          {running ? t.pause : t.start}
        </button>
        <button
          type="button"
          onClick={reset}
          className="h-10 rounded-lg bg-secondary px-4 text-sm font-medium transition-transform hover:scale-105 active:scale-95"
        >
          {t.reset}
        </button>
      </div>
      <p className="mt-4 text-xs text-muted-foreground">
        {t.session} {sessions + 1}/4 — {4 - sessions} {t.sessionsUntilLong}
      </p>
    </div>
  )
}