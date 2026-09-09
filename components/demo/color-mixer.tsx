"use client"

import { useState } from "react"
import { useLang } from "@/components/lang-provider"
import { demoText } from "@/components/demo/demo-text"

function hex(r: number, g: number, b: number) {
  const toHex = (n: number) => n.toString(16).padStart(2, "0")
  return `#${toHex(r)}${toHex(g)}${toHex(b)}`
}

export function ColorMixer() {
  const { lang } = useLang()
  const { colorMixer: t } = demoText(lang)

  const [r, setR] = useState(80)
  const [g, setG] = useState(120)
  const [b, setB] = useState(255)

  const bg = hex(r, g, b)
  const luminance = (r * 299 + g * 587 + b * 114) / 255000
  const fg = luminance > 0.6 ? "#111827" : "#ffffff"

  const sliders: { label: string; value: number; onChange: (n: number) => void; accent: string }[] = [
    { label: t.r, value: r, onChange: setR, accent: "bg-[#ef4444]" },
    { label: t.g, value: g, onChange: setG, accent: "bg-[#22c55e]" },
    { label: t.b, value: b, onChange: setB, accent: "bg-[#3b82f6]" },
  ]

  return (
    <div className="mx-auto w-full max-w-xs rounded-xl border border-border bg-card p-6 shadow-sm">
      <div
        className="mb-5 flex h-28 items-end justify-between rounded-lg p-4"
        style={{ backgroundColor: bg, color: fg }}
      >
        <div>
          <p className="text-xs opacity-80">{t.title}</p>
          <p className="font-mono text-lg font-semibold">{bg}</p>
        </div>
      </div>

      <div className="flex flex-col gap-4">
        {sliders.map((slider) => (
          <label key={slider.label} className="flex items-center gap-3">
            <span className="w-4 text-sm font-medium">{slider.label}</span>
            <input
              type="range"
              min={0}
              max={255}
              value={slider.value}
              onChange={(e) => slider.onChange(Number(e.target.value))}
              className={`h-1.5 w-full cursor-pointer appearance-none rounded-full bg-muted ${slider.accent} [&::-webkit-slider-thumb]:size-4 [&::-webkit-slider-thumb]:cursor-grab [&::-webkit-slider-thumb]:appearance-none [&::-webkit-slider-thumb]:rounded-full [&::-webkit-slider-thumb]:border-2 [&::-webkit-slider-thumb]:border-white [&::-webkit-slider-thumb]:bg-current [&::-webkit-slider-thumb]:shadow`}
              style={{ accentColor: slider.accent }}
            />
            <span className="w-9 text-right font-mono text-sm tabular-nums">
              {slider.value}
            </span>
          </label>
        ))}
      </div>
    </div>
  )
}