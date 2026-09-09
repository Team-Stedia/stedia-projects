"use client"

import { createContext, useContext } from "react"
import { getDictionary } from "@/lib/i18n/dictionaries"
import type { Dictionary, Locale } from "@/lib/i18n/dictionaries"

type LangContextValue = { lang: Locale; dict: Dictionary }

const LangContext = createContext<LangContextValue | null>(null)

export function LangProvider({
  lang,
  children,
}: {
  lang: Locale
  children: React.ReactNode
}) {
  const dict = getDictionary(lang)
  return <LangContext.Provider value={{ lang, dict }}>{children}</LangContext.Provider>
}

export function useLang(): LangContextValue {
  const context = useContext(LangContext)
  if (!context) {
    throw new Error("useLang must be used within a LangProvider")
  }
  return context
}