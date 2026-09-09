"use client"

import { usePathname, useRouter } from "next/navigation"
import { Languages } from "lucide-react"
import { useLang } from "@/components/lang-provider"

export function LanguageToggle() {
  const { lang } = useLang()
  const router = useRouter()
  const pathname = usePathname()

  const switchTo = lang === "en" ? "th" : "en"

  const onClick = () => {
    document.cookie = `NEXT_LOCALE=${switchTo}; path=/; max-age=31536000; samesite=lax`
    const segments = pathname.split("/").filter(Boolean)
    if (segments[0] === "en" || segments[0] === "th") segments.shift()
    const target = `/${switchTo}${segments.length ? `/${segments.join("/")}` : ""}`
    router.push(target)
    router.refresh()
  }

  return (
    <button
      type="button"
      onClick={onClick}
      aria-label={`Switch language to ${switchTo.toUpperCase()}`}
      className="flex h-9 items-center gap-1.5 rounded-md px-2 text-muted-foreground transition-colors hover:bg-muted hover:text-foreground"
    >
      <Languages className="size-[18px]" />
      <span className="text-xs font-semibold">{switchTo.toUpperCase()}</span>
    </button>
  )
}