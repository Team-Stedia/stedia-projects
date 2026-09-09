"use client"

import { FacebookIcon, InstagramIcon, GithubIcon } from "@/components/icons"
import { useLang } from "@/components/lang-provider"
import { logoMark } from "@/components/logo"

export function SiteFooter() {
  const { dict } = useLang()

  const socialLinks = [
    {
      label: dict.footer.social.facebook,
      href: "https://www.facebook.com/people/Team-Stedia/61573570074191/",
      Icon: FacebookIcon,
    },
    { label: dict.footer.social.instagram, href: "#", Icon: InstagramIcon },
    { label: dict.footer.social.github, href: "#", Icon: GithubIcon },
  ]

  return (
    <footer className="border-t border-border/60 bg-muted/30">
      <div className="mx-auto flex w-full max-w-6xl flex-col gap-6 px-6 py-12 md:flex-row md:items-center md:justify-between md:px-8">
        <div className="flex items-center gap-2">
          {logoMark}
          <span className="text-base font-semibold tracking-tight">Stedia</span>
        </div>

        <nav className="flex items-center gap-5" aria-label="Social links">
          {socialLinks.map(({ label, href, Icon }) => (
            <a
              key={label}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={label}
              className="flex size-9 items-center justify-center rounded-full border border-border text-muted-foreground transition-all hover:scale-110 hover:border-primary hover:text-primary"
            >
              <Icon className="size-4" />
            </a>
          ))}
        </nav>

        <p className="text-sm text-muted-foreground">
          © {new Date().getFullYear()} Stedia. {dict.footer.rights}
        </p>
      </div>
    </footer>
  )
}