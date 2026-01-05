import { Benefits } from "@/components/home/benefits";
import { Engagement } from "@/components/home/engagement";
import { Hero } from "@/components/home/hero";
import { CTA } from "@/components/home/home-cta";
import { Specialism } from "@/components/home/specialism";


export default function Home() {
  return (
    <main className="min-h-screen bg-white font-sans text-brand-dark">
      <Hero />

      <section className="py-20">
        <div className="container px-4 mx-auto max-w-5xl space-y-6">
          <h2 className="text-3xl md:text-4xl font-semibold leading-tight text-brand-dark">
            An Employee Benefit That Enhances Financial Security
          </h2>
          <div className="space-y-6 text-lg text-muted-foreground leading-relaxed">
            <p>
              Supporting your employees' financial health has never been more critical. With
              elevated interest rates, increasing mortgage payments, and the ongoing
              challenge of safeguarding personal finances and assets, homeownership can
              create significant anxiety for many staff members.
            </p>
            <p>
              Our mortgage advisory and cover and protection service is tailored for
              employers looking to provide substantial support to their workforce. This
              offering integrates smoothly with your current employee benefits and wellbeing
              programs, introducing an essential financial wellness element that helps
              employees confidently manage homeownership and plan for their financial
              future.
            </p>
            <p>
              We offer a dedicated employee benefit service to ensure your employees not
              only have access to fee-free mortgage and cover and protection advice but also
              educate and support them with their overall financial wellbeing.
            </p>
          </div>
        </div>
      </section>

      <Benefits />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 my-12">
        <div className="w-full h-[400px] rounded-xl overflow-hidden shadow-sm">
          <img
            src="/happy-family.jpg"
            alt="Couple cooking together"
            className="w-full h-full object-cover"
          />
        </div>
      </div>

      <Specialism />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 my-12">
        <div className="w-full h-[400px] rounded-xl overflow-hidden shadow-sm">
          <img
            src="/young-couple.jpg"
            alt="Family in garden"
            className="w-full h-full object-cover"
          />
        </div>
      </div>

      <Engagement />

      <CTA />
    </main>
  )
}
