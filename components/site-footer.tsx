"use client"

import Link from "next/link"
import { ArrowUpRight } from "lucide-react"
import { FacebookIcon, InstagramIcon, GithubIcon } from "@/components/icons"
import { useLang } from "@/components/lang-provider"
import { logoMark } from "@/components/logo"
import { FACEBOOK_URL } from "@/lib/social"

export function SiteFooter() {
  const { dict, lang } = useLang()

  const exploreLinks = [
    { label: dict.header.work, href: `/${lang}/work` },
    { label: dict.header.demos, href: `/${lang}/demos` },
  ]
  const studioLinks = [
    { label: dict.header.about, href: `/${lang}/#about` },
    { label: dict.header.services, href: `/${lang}/#services` },
    { label: dict.header.contact, href: `/${lang}/#contact` },
  ]
  const socialLinks = [
    { label: dict.footer.social.facebook, href: FACEBOOK_URL, Icon: FacebookIcon },
    { label: dict.footer.social.instagram, href: "#", Icon: InstagramIcon },
    { label: dict.footer.social.github, href: "#", Icon: GithubIcon },
  ]

  return (
    <footer className="border-t border-white/10 bg-zinc-950 text-zinc-100">
      <div className="mx-auto w-full max-w-6xl px-6 pt-14 pb-8 md:px-8">
        <div className="grid items-center gap-8 rounded-3xl border border-white/10 bg-white/5 p-8 md:p-12 lg:grid-cols-[1.2fr_0.8fr]">
          <div>
            <h2 className="text-balance text-2xl font-semibold tracking-tight text-white sm:text-3xl">
              {dict.footer.ctaTitle}
            </h2>
            <p className="mt-2 max-w-md text-pretty text-sm leading-relaxed text-zinc-400 sm:text-base">
              {dict.footer.ctaSub}
            </p>
          </div>
          <div className="flex lg:justify-end">
            <a
              href={FACEBOOK_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex h-12 items-center gap-2 rounded-xl bg-[#1877F2] px-6 text-base font-semibold text-white shadow-lg shadow-blue-600/30 transition-transform hover:scale-105 active:scale-95"
            >
              <FacebookIcon className="size-5" />
              {dict.footer.ctaButton}
              <ArrowUpRight className="size-4" />
            </a>
          </div>
        </div>

        <div className="mt-12 grid gap-10 md:grid-cols-[1.2fr_0.8fr_0.8fr]">
          <div>
            <div className="flex items-center gap-2">
              {logoMark}
              <span className="text-base font-semibold tracking-tight text-white">Stedia</span>
            </div>
            <p className="mt-3 max-w-xs text-sm leading-relaxed text-zinc-400">
              {dict.hero.badge}
            </p>
          </div>
          <nav aria-label={dict.footer.explore}>
            <h3 className="text-sm font-semibold text-white">{dict.footer.explore}</h3>
            <ul className="mt-4 flex flex-col gap-2.5">
              {exploreLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-zinc-400 transition-colors hover:text-white"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
          <nav aria-label={dict.footer.studio}>
            <h3 className="text-sm font-semibold text-white">{dict.footer.studio}</h3>
            <ul className="mt-4 flex flex-col gap-2.5">
              {studioLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-zinc-400 transition-colors hover:text-white"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        </div>

        <div className="mt-12 flex flex-col gap-5 border-t border-white/10 pt-6 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-sm text-zinc-500">
            © {new Date().getFullYear()} Stedia. {dict.footer.rights}
          </p>
          <nav className="flex items-center gap-3" aria-label="Social links">
            {socialLinks.map(({ label, href, Icon }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={label}
                className="flex size-9 items-center justify-center rounded-full border border-white/15 text-zinc-400 transition-all hover:scale-110 hover:border-white/40 hover:text-white"
              >
                <Icon className="size-4" />
              </a>
            ))}
          </nav>
        </div>
      </div>
    </footer>
  )
}
