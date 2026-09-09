"use client"

import { useState } from "react"
import Link from "next/link"
import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import { useLang } from "@/components/lang-provider"
import { LanguageToggle } from "@/components/language-toggle"
import { ThemeToggle } from "@/components/theme-toggle"
import { logoMark } from "@/components/logo"

export function SiteHeader() {
  const { dict, lang } = useLang()
  const [open, setOpen] = useState(false)

  const navLinks = [
    { label: dict.header.work, href: `/${lang}/work` },
    { label: dict.header.demos, href: `/${lang}/demos` },
    { label: dict.header.about, href: `/${lang}/#about` },
    { label: dict.header.services, href: `/${lang}/#services` },
    { label: dict.header.contact, href: `/${lang}/#contact` },
  ]

  return (
    <header className="sticky top-0 z-50 border-b border-border/60 bg-background/80 backdrop-blur-md">
      <div className="mx-auto flex h-16 w-full max-w-6xl items-center justify-between px-6 md:px-8">
        <Link
          href={`/${lang}`}
          onClick={() => setOpen(false)}
          className="group flex items-center gap-2"
          aria-label="Stedia home"
        >
          {logoMark}
          <span className="text-lg font-semibold tracking-tight">Stedia</span>
        </Link>

        <nav className="hidden items-center gap-6 md:flex" aria-label="Main navigation">
          {navLinks.map((link) => (
            <Link
              key={link.label}
              href={link.href}
              className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
            >
              {link.label}
            </Link>
          ))}
          <div className="flex items-center gap-1 border-l border-border/60 ps-4">
            <LanguageToggle />
            <ThemeToggle />
          </div>
          <Button asChild>
            <Link href={`/${lang}/#contact`}>{dict.header.letsTalk}</Link>
          </Button>
        </nav>

        <button
          type="button"
          className="flex size-10 items-center justify-center rounded-md text-foreground md:hidden"
          onClick={() => setOpen((value) => !value)}
          aria-expanded={open}
          aria-label="Toggle menu"
        >
          <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
            {open ? (
              <path d="M18 6 6 18M6 6l12 12" />
            ) : (
              <path d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>
      </div>

      <div
        className={cn(
          "grid overflow-hidden transition-[grid-template-rows] duration-300 md:hidden",
          open ? "[grid-template-rows:1fr]" : "[grid-template-rows:0fr]"
        )}
      >
        <div className="min-h-0">
          <nav
            className="flex flex-col gap-1 border-t border-border/60 px-6 py-4"
            aria-label="Mobile navigation"
          >
            {navLinks.map((link) => (
              <Link
                key={link.label}
                href={link.href}
                onClick={() => setOpen(false)}
                className="rounded-md px-3 py-2.5 text-sm font-medium text-muted-foreground transition-colors hover:bg-muted hover:text-foreground"
              >
                {link.label}
              </Link>
            ))}
            <div className="mt-2 flex items-center gap-1 px-3">
              <LanguageToggle />
              <ThemeToggle />
            </div>
            <Button asChild className="mt-2">
              <Link href={`/${lang}/#contact`} onClick={() => setOpen(false)}>
                {dict.header.letsTalk}
              </Link>
            </Button>
          </nav>
        </div>
      </div>
    </header>
  )
}