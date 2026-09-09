import { NextRequest, NextResponse } from "next/server"

const locales = ["en", "th"] as const
type ProxyLocale = (typeof locales)[number]

function getLocale(request: NextRequest): ProxyLocale {
  const cookieLocale = request.cookies.get("NEXT_LOCALE")?.value
  if (cookieLocale === "en" || cookieLocale === "th") return cookieLocale

  const acceptLanguage = request.headers.get("accept-language") ?? ""
  if (/^th\b|[,;],?\s*th[;,-]/i.test(acceptLanguage)) return "th"
  return "en"
}

export function proxy(request: NextRequest) {
  const { pathname } = request.nextUrl

  const hasLocale = locales.some(
    (locale) => pathname === `/${locale}` || pathname.startsWith(`/${locale}/`)
  )

  if (!hasLocale) {
    const locale = getLocale(request)
    const url = request.nextUrl.clone()
    url.pathname = `/${locale}${pathname === "/" ? "" : pathname}`
    return NextResponse.redirect(url)
  }
}

export const config = {
  matcher: ["/((?!_next|favicon.ico).*)"],
}