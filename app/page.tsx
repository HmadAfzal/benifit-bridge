// "use client"

import { Benefits } from "@/components/home/benefits";
import { Engagement } from "@/components/home/engagement";
import { Hero } from "@/components/home/hero";
import { CTA } from "@/components/home/home-cta";
import { Specialism } from "@/components/home/specialism";

// import Hero from "@/components/home/hero"
// import Services from "@/components/home/services"
// import Stats from "@/components/home/stats"
// import Process from "@/components/home/process"
// import Featured from "@/components/home/featured"
// import Faqs from "@/components/home/faqs"
// import Testimonials from "@/components/home/testimonials"
// import Cta from "@/components/home/cta"
// import Wrapper from "@/components/global/wrapper"
// import { Hero2 } from "@/components/home/hero2"

// export default function HomePage() {

//   return (
//     <div className="min-h-screen bg-background text-foreground font-sans">
//       <Hero2 />
//       <Services />
//       <Stats />
//       <Process />
//       <Featured />
//       <Faqs />
//       <Testimonials />
//       <Cta />
//     </div>
//   )
// }





export default function Home() {
  return (
    <main className="min-h-screen bg-white font-sans text-brand-dark">
      <Hero />

      <section className="py-20">
        <div className="container px-4 mx-auto max-w-5xl space-y-6">
          <h2 className="text-3xl md:text-4xl font-semibold leading-tight text-brand-dark">
            A Valuable Employee Benefit That Supports Financial Wellbeing
          </h2>
          <div className="space-y-6 text-lg text-muted-foreground leading-relaxed">
            <p>
              In today's economic climate, supporting employees' financial wellbeing is more important than ever. With
              higher interest rates, rising mortgage costs and pressure to protect your assets and finances,
              homeownership can be a major source of stress for some employees.
            </p>
            <p>
              Our mortgage advisory and cover and protection service is designed specifically for employers who want to
              offer meaningful support to their employees. This service seamlessly complements your existing employee
              benefits and wellbeing strategy, adding a crucial financial wellbeing component to help your employees
              successfully navigate homeownership and long-term financial planning.
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
