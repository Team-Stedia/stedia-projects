import type { Metadata } from "next";
import { cookies } from "next/headers";
import { Geist_Mono, IBM_Plex_Sans_Thai, Inter } from "next/font/google";
import "../globals.css";
import { getDictionary, locales } from "@/lib/i18n/dictionaries";
import type { Locale } from "@/lib/i18n/dictionaries";
import { ThemeProvider } from "@/components/theme-provider";
import { LangProvider } from "@/components/lang-provider";
import { FloatingFacebook } from "@/components/floating-facebook";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const ibmPlexSansThai = IBM_Plex_Sans_Thai({
  variable: "--font-ibm-plex-thai",
  weight: ["300", "400", "500", "600", "700"],
  subsets: ["thai", "latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const dynamic = "force-dynamic";
export const dynamicParams = false;

export function generateStaticParams() {
  return locales.map((lang) => ({ lang }));
}

export async function generateMetadata({ params }: LayoutProps<"/[lang]">): Promise<Metadata> {
  const { lang } = await params;
  const dict = getDictionary(lang as Locale);
  return {
    title: "Stedia — Interactive Studio",
    description: dict.hero.badge,
  };
}

export default async function LangLayout({ children, params }: LayoutProps<"/[lang]">) {
  const { lang } = await params;
  const locale = lang as Locale;

  const cookieStore = await cookies();
  const themeCookie = cookieStore.get("theme")?.value;
  const initialThemeClass = themeCookie === "light" || themeCookie === "dark" ? themeCookie : null;

  return (
    <html
      lang={lang}
      suppressHydrationWarning
      className={[inter.variable, ibmPlexSansThai.variable, geistMono.variable, initialThemeClass].filter(Boolean).join(" ") + " h-full antialiased"}
    >
      <body className="min-h-full">
        <ThemeProvider>
          <LangProvider lang={locale}>{children}</LangProvider>
          <FloatingFacebook />
        </ThemeProvider>
      </body>
    </html>
  );
}