"use client"

import { useState } from "react"
import { cn } from "@/lib/utils"

const buttons: Record<number, string> = {
  7: "col-start-1 row-start-1",
  8: "col-start-2 row-start-1",
  9: "col-start-3 row-start-1",
  4: "col-start-1 row-start-2",
  5: "col-start-2 row-start-2",
  6: "col-start-3 row-start-2",
  1: "col-start-1 row-start-3",
  2: "col-start-2 row-start-3",
  3: "col-start-3 row-start-3",
  0: "col-start-2 row-start-4",
}

export function MiniCalculator() {
  const [display, setDisplay] = useState("0")
  const [prev, setPrev] = useState<number | null>(null)
  const [op, setOp] = useState<string | null>(null)
  const [overwrite, setOverwrite] = useState(true)

  const inputDigit = (digit: string) => {
    if (overwrite) {
      setDisplay(digit)
      setOverwrite(false)
    } else {
      setDisplay((current) => (current === "0" ? digit : current + digit))
    }
  }

  const inputDot = () => {
    if (overwrite) {
      setDisplay("0.")
      setOverwrite(false)
      return
    }
    if (!display.includes(".")) setDisplay((current) => current + ".")
  }

  const clearAll = () => {
    setDisplay("0")
    setPrev(null)
    setOp(null)
    setOverwrite(true)
  }

  const chooseOp = (nextOp: string) => {
    const value = parseFloat(display)
    if (prev === null) {
      setPrev(value)
    } else if (op) {
      const result = calculate(prev, value, op)
      setPrev(result)
      setDisplay(String(result))
    }
    setOp(nextOp)
    setOverwrite(true)
  }

  const equals = () => {
    if (prev === null || op === null) return
    const value = parseFloat(display)
    const result = calculate(prev, value, op)
    setDisplay(String(result))
    setPrev(null)
    setOp(null)
    setOverwrite(true)
  }

  return (
    <div className="mx-auto w-full max-w-xs rounded-xl border border-border bg-card p-4 shadow-sm">
      <div
        aria-live="polite"
        className="mb-4 flex h-14 items-center justify-end overflow-hidden rounded-lg bg-muted px-4 font-mono text-3xl tracking-tight"
      >
        <span className="truncate">{display}</span>
      </div>
      <div className="grid grid-cols-4 gap-2">
        <button
          type="button"
          onClick={clearAll}
          className="col-span-2 h-11 rounded-lg bg-accent text-sm font-semibold text-accent-foreground transition-transform hover:scale-105 active:scale-95"
        >
          AC
        </button>
        {["÷", "×"].map((sym) => (
          <button
            key={sym}
            type="button"
            onClick={() => chooseOp(sym)}
            className={cn(
              "h-11 rounded-lg bg-primary/10 text-lg font-semibold text-primary transition-transform hover:scale-105 active:scale-95",
              op === sym && "bg-primary text-primary-foreground"
            )}
          >
            {sym}
          </button>
        ))}
        {Object.entries(buttons).map(([digit, pos]) => (
          <button
            key={digit}
            type="button"
            onClick={() => inputDigit(digit)}
            className={cn(
              "h-11 rounded-lg bg-secondary text-lg font-medium transition-transform hover:scale-105 active:scale-95",
              pos
            )}
          >
            {digit}
          </button>
        ))}
        <button
          type="button"
          onClick={inputDot}
          className="h-11 rounded-lg bg-secondary text-lg font-medium transition-transform hover:scale-105 active:scale-95"
        >
          .
        </button>
        <button
          type="button"
          onClick={equals}
          className="row-start-4 col-start-4 h-11 rounded-lg bg-primary text-lg font-semibold text-primary-foreground transition-transform hover:scale-105 active:scale-95"
        >
          =
        </button>
        <button
          type="button"
          onClick={() => chooseOp("−")}
          className="h-11 rounded-lg bg-primary/10 text-lg font-semibold text-primary transition-transform hover:scale-105 active:scale-95"
        >
          −
        </button>
        <button
          type="button"
          onClick={() => chooseOp("+")}
          className={cn(
            "h-11 rounded-lg bg-primary/10 text-lg font-semibold text-primary transition-transform hover:scale-105 active:scale-95",
            op === "+" && "bg-primary text-primary-foreground"
          )}
        >
          +
        </button>
      </div>
    </div>
  )
}

function calculate(a: number, b: number, operator: string): number {
  switch (operator) {
    case "+":
      return a + b
    case "−":
      return a - b
    case "×":
      return a * b
    case "÷":
      return b === 0 ? NaN : a / b
    default:
      return b
  }
}