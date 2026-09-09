import { SectionAnimate } from "@/components/section-animate"
import { SectionHeading } from "@/components/section-heading"
import { logoMark } from "@/components/logo"

const stats = [
  { value: "2+", label: "Live case studies" },
  { value: "100%", label: "Interactive demos" },
  { value: "Zero", label: "Fluff" },
]

export function About() {
  return (
    <section id="about" className="border-y border-border/60 bg-muted/30">
      <div className="mx-auto grid w-full max-w-6xl gap-12 px-6 py-20 md:px-8 md:py-28 lg:grid-cols-2 lg:gap-20">
        <SectionAnimate>
          <SectionHeading
            eyebrow="About Stedia"
            title="A small team with a large bias for doing"
            subtitle="Stedia is a compact, senior studio. We believe the best way to judge a product is to touch it — so we never ship a screen deck when a working demo will do."
          />
        </SectionAnimate>
        <SectionAnimate delay={0.1}>
          <div className="flex flex-col gap-6">
            <div className="flex items-start gap-4 rounded-2xl border border-border bg-card p-6">
              <div className="mt-1 shrink-0">{logoMark}</div>
              <div>
                <h3 className="text-base font-semibold">Product-minded engineers</h3>
                <p className="mt-1.5 text-sm leading-relaxed text-muted-foreground">
                  We sit between design and engineering — obsessing over performance, clean
                  architecture and the small interactions that make software feel alive.
                </p>
              </div>
            </div>
            <dl className="grid grid-cols-3 gap-4">
              {stats.map((stat) => (
                <div key={stat.label} className="rounded-2xl border border-border bg-card p-5 text-center">
                  <dt className="order-2 mt-1 text-xs font-medium text-muted-foreground">
                    {stat.label}
                  </dt>
                  <dd className="order-1 text-2xl font-semibold tracking-tight text-primary">
                    {stat.value}
                  </dd>
                </div>
              ))}
            </dl>
          </div>
        </SectionAnimate>
      </div>
    </section>
  )
}