
import Cta from "@/components/home/cta"
import Mission from "@/components/about/mission"
import Values from "@/components/about/values"
import { TrustRating } from "@/components/about/trust-rating"
import  AboutHero  from "@/components/about/about-hero"
import Goals from "@/components/about/goals"
import { generateMetadata } from "@/lib/generate-metadata"

export const metadata=generateMetadata({title:"About Us"})

export default function AboutPage() {

  return (
    <div className="min-h-screen text-foreground">
      {/* <AboutHero /> */}
      <Goals/>
      <TrustRating/>
      <Mission />
      <Values />
      <Cta />
    </div>
  )
}
