"use client"

import { useState } from "react"
import { useLang } from "@/components/lang-provider"
import { demoText } from "@/components/demo/demo-text"
import { cn } from "@/lib/utils"

const EMOJIS = ["🌸", "🚀", "🎧", "⚡", "🍕", "🎮", "🌈", "🦄"]

function shuffle<T>(array: T[]): T[] {
  const arr = [...array]
  for (let i = arr.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1))
    ;[arr[i], arr[j]] = [arr[j], arr[i]]
  }
  return arr
}

export function MemoryFlip() {
  const { lang } = useLang()
  const { memory: t } = demoText(lang)

  const deal = () => {
    const doubled = shuffle([...EMOJIS, ...EMOJIS]).map((emoji, index) => ({
      id: index,
      emoji,
      open: false,
      matched: false,
    }))
    return { cards: doubled, moves: 0 }
  }

  const [state, setState] = useState(() => deal())
  const [selected, setSelected] = useState<number[]>([])
  const [won, setWon] = useState(false)

  const flip = (id: number) => {
    const card = state.cards[id]
    if (card.matched || card.open) return
    if (selected.length === 2) return

    const nextCards = state.cards.map((c, i) => (i === id ? { ...c, open: true } : c))
    const nextSelected = [...selected, id]

    if (nextSelected.length === 2) {
      const [first, second] = nextSelected
      const matched = state.cards[first].emoji === state.cards[second].emoji
      const moves = state.moves + 1

      setState({
        cards: nextCards,
        moves,
      })

      setTimeout(() => {
        setState((prev) => {
          const closed = prev.cards.map((c, i) => {
            if (i === first || i === second) {
              return { ...c, open: matched, matched: c.matched || matched }
            }
            return c
          })
          const allMatched = closed.every((c) => c.matched)
          if (allMatched) setWon(true)
          return { cards: closed, moves }
        })
        setSelected([])
      }, matched ? 400 : 800)
    } else {
      setState({ cards: nextCards, moves: state.moves })
      setSelected(nextSelected)
    }
  }

  const restart = () => {
    setState(deal())
    setSelected([])
    setWon(false)
  }

  return (
    <div className="mx-auto w-full max-w-xs rounded-xl border border-border bg-card p-6 shadow-sm">
      <div className="mb-4 flex items-center justify-between">
        <div className="text-center">
          <p className="text-xs text-muted-foreground">{t.moves}</p>
          <p className="text-lg font-semibold tabular-nums">{state.moves}</p>
        </div>
        <button
          type="button"
          onClick={restart}
          className="h-9 rounded-lg bg-secondary px-4 text-sm font-medium transition-transform hover:scale-105 active:scale-95"
        >
          {t.restart}
        </button>
        <div className="text-center">
          <p className="text-xs text-muted-foreground">{t.matched}</p>
          <p className="text-lg font-semibold tabular-nums">
            {state.cards.filter((c) => c.matched).length}
          </p>
        </div>
      </div>

      <div className="grid grid-cols-4 gap-2">
        {state.cards.map((card) => (
          <button
            key={card.id}
            type="button"
            onClick={() => flip(card.id)}
            className={cn(
              "flex aspect-square items-center justify-center rounded-lg border text-2xl transition-all duration-300",
              card.open
                ? "border-primary/50 bg-primary/10"
                : "border-border bg-muted hover:bg-muted/70",
              card.matched && "border-emerald-500/40 bg-emerald-500/10"
            )}
          >
            {(card.open || card.matched) ? card.emoji : <span className="text-muted-foreground">?</span>}
          </button>
        ))}
      </div>

      {won && (
        <p className="mt-4 text-center text-sm font-medium text-emerald-600 dark:text-emerald-400">
          {t.win(state.moves)}
        </p>
      )}
    </div>
  )
}