"use client"

import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useState,
  useSyncExternalStore,
  type ReactNode,
} from "react"

export const THEME_STORAGE_KEY = "theme"
export const THEME_COOKIE_KEY = "theme"

export type Theme = "light" | "dark" | "system"
export type ResolvedTheme = "light" | "dark"

type ThemeContextValue = {
  theme: Theme
  resolvedTheme: ResolvedTheme
  setTheme: (theme: Theme) => void
}

const ThemeContext = createContext<ThemeContextValue | null>(null)

function subscribeSystemTheme(onChange: () => void) {
  const mq = window.matchMedia("(prefers-color-scheme: dark)")
  mq.addEventListener("change", onChange)
  return () => mq.removeEventListener("change", onChange)
}

function getSystemTheme(): ResolvedTheme {
  return window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light"
}

function readStoredTheme(): Theme {
  if (typeof window === "undefined") return "system"
  try {
    const stored = window.localStorage.getItem(THEME_STORAGE_KEY)
    return stored === "light" || stored === "dark" || stored === "system" ? stored : "system"
  } catch {
    return "system"
  }
}

function applyResolvedTheme(resolved: ResolvedTheme) {
  const root = document.documentElement
  root.classList.remove("light", "dark")
  root.classList.add(resolved)
  root.style.colorScheme = resolved
}

function resolveTheme(theme: Theme, system: ResolvedTheme): ResolvedTheme {
  if (theme === "system") {
    return system
  }
  return theme
}

export function ThemeProvider({ children }: { children: ReactNode }) {
  const [theme, setThemeState] = useState<Theme>(readStoredTheme)
  const systemTheme = useSyncExternalStore(
    subscribeSystemTheme,
    getSystemTheme,
    (): ResolvedTheme => "light"
  )

  const resolvedTheme: ResolvedTheme = resolveTheme(theme, systemTheme)

  useEffect(() => {
    applyResolvedTheme(resolvedTheme)
  }, [resolvedTheme])

  useEffect(() => {
    const onStorage = (event: StorageEvent) => {
      if (event.key !== THEME_STORAGE_KEY) return
      const next =
        event.newValue === "light" || event.newValue === "dark" || event.newValue === "system"
          ? event.newValue
          : null
      if (next) {
        setThemeState(next)
      }
    }
    window.addEventListener("storage", onStorage)
    return () => window.removeEventListener("storage", onStorage)
  }, [])

  const setTheme = useCallback((next: Theme) => {
    setThemeState(next)
    try {
      window.localStorage.setItem(THEME_STORAGE_KEY, next)
    } catch {
      // ignore
    }
    document.cookie = `${THEME_COOKIE_KEY}=${next}; path=/; max-age=31536000; samesite=lax`
  }, [])

  return (
    <ThemeContext.Provider value={{ theme, resolvedTheme, setTheme }}>
      {children}
    </ThemeContext.Provider>
  )
}

export function useTheme(): ThemeContextValue {
  const context = useContext(ThemeContext)
  if (!context) {
    throw new Error("useTheme must be used within a ThemeProvider")
  }
  return context
}