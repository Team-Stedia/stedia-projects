"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { SectionAnimate } from "@/components/section-animate"
import { SectionHeading } from "@/components/section-heading"
import { useLang } from "@/components/lang-provider"

type FieldProps = React.InputHTMLAttributes<HTMLInputElement> & {
  label: string
}

function Field({ label, id, ...props }: FieldProps) {
  return (
    <div className="flex flex-col gap-1.5">
      <label htmlFor={id} className="text-sm font-medium">
        {label}
      </label>
      <input
        id={id}
        {...props}
        className="h-11 rounded-lg border border-input bg-background px-3 text-sm outline-none transition-colors placeholder:text-muted-foreground focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/50"
      />
    </div>
  )
}

export function Contact() {
  const { dict } = useLang()
  const contact = dict.contact
  const [sent, setSent] = useState(false)
  const [errors, setErrors] = useState<string[]>([])

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    const form = e.currentTarget
    const formData = new FormData(form)
    const name = String(formData.get("name") ?? "").trim()
    const email = String(formData.get("email") ?? "").trim()
    const message = String(formData.get("message") ?? "").trim()

    const nextErrors: string[] = []
    if (!name) nextErrors.push("name")
    if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) nextErrors.push("email")
    if (!message) nextErrors.push("message")
    setErrors(nextErrors)
    if (nextErrors.length > 0) return

    setSent(true)
  }

  return (
    <section id="contact" className="border-t border-border/60 bg-muted/30">
      <div className="mx-auto grid w-full max-w-6xl gap-12 px-6 py-20 md:px-8 md:py-28 lg:grid-cols-[0.9fr_1.1fr] lg:gap-20">
        <SectionAnimate>
          <SectionHeading
            eyebrow={contact.eyebrow}
            title={contact.title}
            subtitle={contact.subtitle}
          />
        </SectionAnimate>

        <SectionAnimate delay={0.1}>
          {sent ? (
            <div className="flex h-full min-h-72 flex-col items-center justify-center rounded-2xl border border-border bg-card p-8 text-center">
              <div className="mb-4 flex size-12 items-center justify-center rounded-full bg-emerald-500/15 text-emerald-600 dark:text-emerald-400">
                ✓
              </div>
              <h3 className="text-xl font-semibold">{contact.successTitle}</h3>
              <p className="mt-2 max-w-sm text-sm text-muted-foreground">{contact.successBody}</p>
              <Button variant="outline" className="mt-6" onClick={() => setSent(false)}>
                {contact.successAgain}
              </Button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} noValidate className="flex flex-col gap-5">
              <div className="grid gap-5 sm:grid-cols-2">
                <Field
                  label={contact.name}
                  id="contact-name"
                  name="name"
                  placeholder={contact.namePlaceholder}
                  autoComplete="name"
                  aria-invalid={errors.includes("name")}
                />
                <Field
                  label={contact.email}
                  id="contact-email"
                  name="email"
                  type="email"
                  placeholder={contact.emailPlaceholder}
                  autoComplete="email"
                  aria-invalid={errors.includes("email")}
                />
              </div>
              <div className="flex flex-col gap-1.5">
                <label htmlFor="contact-message" className="text-sm font-medium">
                  {contact.message}
                </label>
                <textarea
                  id="contact-message"
                  name="message"
                  rows={5}
                  placeholder={contact.messagePlaceholder}
                  className="resize-none rounded-lg border border-input bg-background px-3 py-2.5 text-sm outline-none transition-colors placeholder:text-muted-foreground focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/50"
                  aria-invalid={errors.includes("message")}
                />
              </div>
              {errors.length > 0 && (
                <p className="text-sm font-medium text-destructive">{contact.errorText}</p>
              )}
              <Button type="submit" size="lg" className="h-10 w-full px-6 sm:w-auto">
                {contact.send}
              </Button>
              <p className="text-xs text-muted-foreground">{contact.note}</p>
            </form>
          )}
        </SectionAnimate>
      </div>
    </section>
  )
}