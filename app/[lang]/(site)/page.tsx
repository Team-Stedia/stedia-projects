import { Hero } from "@/components/hero"
import { StackStrip } from "@/components/stack-strip"
import { SelectedWork } from "@/components/selected-work"
import { Process } from "@/components/process"
import { Services } from "@/components/services"
import { Principles } from "@/components/principles"
import { About } from "@/components/about"
import { Contact } from "@/components/contact"

export default function Home() {
  return (
    <>
      <Hero />
      <StackStrip />
      <SelectedWork />
      <Process />
      <Services />
      <Principles />
      <About />
      <Contact />
    </>
  )
}
