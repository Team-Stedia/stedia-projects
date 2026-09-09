"use client"

import { useRef, useState } from "react"
import { useLang } from "@/components/lang-provider"
import { demoText } from "@/components/demo/demo-text"

const PHRASE =
  "the quick brown fox jumps over the lazy dog while the sun sets behind the mountains"

export function TypingSpeed() {
  const { lang } = useLang()
  const { typing: t } = demoText(lang)
  const { wpm, accuracy, done, pressStart, typeHere, start, reset: resetLabel } = t

  const [status, setStatus] = useState<"idle" | "typing" | "done">("idle")
  const [typed, setTyped] = useState("")
  const [results, setResults] = useState<{ wpm: number; accuracy: number } | null>(null)
  const startTimeRef = useRef<number>(0)

  const begin = () => {
    setStatus("typing")
    setTyped("")
    startTimeRef.current = Date.now()
  }

  const onChange = (value: string) => {
    if (status === "idle") return
    if (value.length > PHRASE.length) return
    setTyped(value)

    if (value.length === PHRASE.length) {
      const elapsedMin = (Date.now() - startTimeRef.current) / 60000
      const words = PHRASE.split(" ").length
      const correct = value
        .split("")
        .filter((char, i) => char === PHRASE[i]).length
      const acc = (correct / value.length) * 100
      setResults({ wpm: Math.round(words / elapsedMin), accuracy: Math.round(acc) })
      setStatus("done")
    }
  }

  const reset = () => {
    setStatus("idle")
    setTyped("")
    setResults(null)
  }

  const renderText = () => {
    return PHRASE.split("").map((char, i) => {
      if (i < typed.length) return <span key={i}>{char}</span>
      return (
        <span key={i} className="text-muted-foreground opacity-40">
          {char}
        </span>
      )
    })
  }

  return (
    <div className="mx-auto w-full max-w-md rounded-xl border border-border bg-card p-6 shadow-sm">
      <div className="mb-5 grid grid-cols-2 gap-3">
        <div className="rounded-lg bg-muted px-4 py-3 text-center">
          <p className="text-xs text-muted-foreground">{wpm}</p>
          <p className="text-2xl font-semibold tabular-nums">
            {results ? results.wpm : status === "idle" ? 0 : "…"}
          </p>
        </div>
        <div className="rounded-lg bg-muted px-4 py-3 text-center">
          <p className="text-xs text-muted-foreground">{accuracy}</p>
          <p className="text-2xl font-semibold tabular-nums">
            {results ? `${results.accuracy}%` : status === "idle" ? "0%" : "…"}
          </p>
        </div>
      </div>

      <div className="mb-4 rounded-lg border border-border bg-background px-4 py-4 font-mono text-lg leading-loose">
        {status === "idle" ? (
          <p className="text-center text-sm text-muted-foreground">{pressStart}</p>
        ) : (
          renderText()
        )}
      </div>

      <input
        value={typed}
        onChange={(e) => onChange(e.target.value)}
        disabled={status === "idle" || status === "done"}
        placeholder={typeHere}
        className="mb-4 h-10 w-full rounded-lg border border-input bg-background px-3 text-sm outline-none placeholder:text-muted-foreground focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/50 disabled:opacity-60"
      />

      <div className="flex justify-center gap-3">
        {status === "idle" && (
          <button
            type="button"
            onClick={begin}
            className="h-10 rounded-lg bg-primary px-6 text-sm font-semibold text-primary-foreground transition-transform hover:scale-105 active:scale-95"
          >
            {start}
          </button>
        )}
        {status === "done" && (
          <button
            type="button"
            onClick={reset}
            className="h-10 rounded-lg bg-primary px-6 text-sm font-semibold text-primary-foreground transition-transform hover:scale-105 active:scale-95"
          >
            {resetLabel}
          </button>
        )}
      </div>

      {status === "done" && (
        <p className="mt-3 text-center text-sm font-medium text-emerald-600 dark:text-emerald-400">
          {done} {typed.length === PHRASE.length ? "✓" : ""}
        </p>
      )}
    </div>
  )
}