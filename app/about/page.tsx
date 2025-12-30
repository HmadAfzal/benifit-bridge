
import AboutHero from "@/components/about/about-hero"
import Stats from "@/components/home/stats"
import Cta from "@/components/home/cta"
import Mission from "@/components/about/mission"
import Values from "@/components/about/values"

export default function AboutPage() {


  return (
    <div className="min-h-screen text-foreground">
      <AboutHero />
      <Stats />
      <Mission />
      <Values />
      <Cta />
    </div>
  )
}
