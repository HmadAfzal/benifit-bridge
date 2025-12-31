"use client"

import Hero from "@/components/home/hero"
import Services from "@/components/home/services"
import Stats from "@/components/home/stats"
import Process from "@/components/home/process"
import Featured from "@/components/home/featured"
import Faqs from "@/components/home/faqs"
import Testimonials from "@/components/home/testimonials"
import Cta from "@/components/home/cta"
import Wrapper from "@/components/global/wrapper"
import { Hero2 } from "@/components/home/hero2"

export default function HomePage() {

  return (
    <div className="min-h-screen bg-background text-foreground font-sans">
      <Hero2 />
      <Services />
      <Stats />
      <Process />
      <Featured />
      <Faqs />
      <Testimonials />
      <Cta />
    </div>
  )
}
