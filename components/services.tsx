import { Code2, MonitorSmartphone, Rocket, PenTool } from "lucide-react"
import { SectionAnimate } from "@/components/section-animate"
import { SectionHeading } from "@/components/section-heading"

const services = [
  {
    icon: MonitorSmartphone,
    title: "Web Development",
    description:
      "Fast, accessible Next.js applications built with type-safe, maintainable code.",
  },
  {
    icon: PenTool,
    title: "UI Engineering",
    description:
      "Design systems, component libraries and motion that make interfaces feel considered.",
  },
  {
    icon: Code2,
    title: "Interactive Prototypes",
    description:
      "Clickable, production-grade demos that validate ideas before a single line of backend.",
  },
  {
    icon: Rocket,
    title: "Product Launch",
    description:
      "From repo setup to CI/CD, monitoring and analytics — we take it across the finish line.",
  },
]

export function Services() {
  return (
    <section id="services" className="mx-auto w-full max-w-6xl px-6 py-20 md:px-8 md:py-28">
      <SectionAnimate>
        <SectionHeading
          eyebrow="Services"
          title="What we can do for you"
          subtitle="Four ways we can help — each one starts with a conversation and ends with something real."
        />
      </SectionAnimate>
      <div className="mt-12 grid gap-6 sm:grid-cols-2">
        {services.map((service, index) => (
          <SectionAnimate key={service.title} delay={index * 0.08}>
            <div className="group h-full rounded-2xl border border-border bg-card p-6 transition-all duration-300 hover:-translate-y-1 hover:border-primary/40 hover:shadow-lg">
              <div className="mb-5 flex size-12 items-center justify-center rounded-xl bg-primary/10 text-primary transition-colors group-hover:bg-primary group-hover:text-primary-foreground">
                <service.icon className="size-6" />
              </div>
              <h3 className="text-lg font-semibold tracking-tight">{service.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                {service.description}
              </p>
            </div>
          </SectionAnimate>
        ))}
      </div>
    </section>
  )
}