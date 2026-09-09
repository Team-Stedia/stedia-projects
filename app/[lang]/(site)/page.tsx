import { Hero } from "@/components/hero"
import { Showcase } from "@/components/showcase"
import { About } from "@/components/about"
import { Services } from "@/components/services"
import { Contact } from "@/components/contact"

export default function Home() {
  return (
    <>
      <Hero />
      <Showcase />
      <About />
      <Services />
      <Contact />
    </>
  )
}