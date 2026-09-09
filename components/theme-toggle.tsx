"use client"

import { useSyncExternalStore } from "react"
import { useTheme } from "@/components/theme-provider"
import { Sun, Moon } from "lucide-react"

const subscribe = () => () => {}

function useHydrated() {
  return useSyncExternalStore(
    subscribe,
    () => true,
    () => false
  )
}

export function ThemeToggle() {
  const isHydrated = useHydrated()
  const { resolvedTheme, setTheme } = useTheme()

  if (!isHydrated) {
    return <span className="size-9 rounded-md" aria-hidden="true" />
  }

  const toggle = () => setTheme(resolvedTheme === "dark" ? "light" : "dark")

  return (
    <button
      type="button"
      onClick={toggle}
      aria-label={resolvedTheme === "dark" ? "Switch to light mode" : "Switch to dark mode"}
      className="flex size-9 items-center justify-center rounded-md text-muted-foreground transition-colors hover:bg-muted hover:text-foreground"
    >
      {resolvedTheme === "dark" ? <Sun className="size-[18px]" /> : <Moon className="size-[18px]" />}
    </button>
  )
}