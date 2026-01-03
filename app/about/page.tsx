
import AboutHero from "@/components/about/about-hero"
import Stats from "@/components/home/stats"
import Cta from "@/components/home/cta"
import Mission from "@/components/about/mission"
import Values from "@/components/about/values"
import { TrustRating } from "@/components/about/trust-rating"

export default function AboutPage() {


  return (
    <div className="min-h-screen text-foreground">
      <AboutHero />
      <TrustRating/>
      <Stats />
      <Mission />
      <Values />
      <Cta />
    </div>
  )
}
