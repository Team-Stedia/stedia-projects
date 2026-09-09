"use client"

import { useEffect, useRef, useState } from "react"
import { useLang } from "@/components/lang-provider"
import { demoText } from "@/components/demo/demo-text"

export function Stopwatch() {
  const { lang } = useLang()
  const { stopwatch: t } = demoText(lang)

  const [ms, setMs] = useState(0)
  const [running, setRunning] = useState(false)
  const [laps, setLaps] = useState<number[]>([])
  const baseRef = useRef(0)
  const startRef = useRef(0)

  useEffect(() => {
    if (!running) return
    startRef.current = Date.now()
    const id = setInterval(() => {
      setMs(baseRef.current + (Date.now() - startRef.current))
    }, 16)
    return () => {
      clearInterval(id)
    }
  }, [running])

  const format = (value: number) => {
    const minutes = Math.floor(value / 60000)
    const seconds = Math.floor((value % 60000) / 1000)
    const csec = Math.floor((value % 1000) / 10)
    return `${String(minutes).padStart(2, "0")}:${String(seconds).padStart(2, "0")}.${String(csec).padStart(2, "0")}`
  }

  const pause = () => {
    baseRef.current = ms
    setRunning(false)
  }

  const toggle = () => {
    if (running) pause()
    else setRunning(true)
  }

  const reset = () => {
    setRunning(false)
    baseRef.current = 0
    setMs(0)
    setLaps([])
  }

  const lap = () => {
    if (running) setLaps((prev) => [...prev, ms])
  }

  return (
    <div className="mx-auto w-full max-w-xs rounded-xl border border-border bg-card p-6 shadow-sm">
      <div className="mb-5 rounded-lg bg-muted px-4 py-5 text-center">
        <span className="font-mono text-4xl font-semibold tabular-nums tracking-tighter">
          {format(ms)}
        </span>
      </div>
      <div className="flex justify-center gap-2">
        <button
          type="button"
          onClick={lap}
          disabled={!running}
          className="h-10 rounded-lg bg-secondary px-4 text-sm font-medium transition-transform hover:scale-105 active:scale-95 disabled:opacity-40"
        >
          {t.lap}
        </button>
        <button
          type="button"
          onClick={toggle}
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
      {laps.length > 0 && (
        <>
          <div className="mt-4 flex items-center justify-between">
            <p className="text-sm font-medium">{laps.length} laps</p>
            <button
              type="button"
              onClick={() => setLaps([])}
              className="text-xs font-medium text-muted-foreground hover:underline"
            >
              {t.clear}
            </button>
          </div>
          <ul className="mt-2 flex max-h-36 flex-col gap-1 overflow-y-auto">
            {laps.map((value, index) => (
              <li
                key={index}
                className="flex items-center justify-between rounded-md bg-muted px-3 py-1.5 text-sm font-mono"
              >
                <span className="text-muted-foreground">Lap {laps.length - index}</span>
                <span className="tabular-nums">{format(value)}</span>
              </li>
            ))}
          </ul>
        </>
      )}
    </div>
  )
}