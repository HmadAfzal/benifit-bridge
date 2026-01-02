import { ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import Link from "next/link"

export function Hero() {
  return (
    <section className="relative h-[600px] w-full overflow-hidden">
      <img
        src="/hero.jpg"
        alt="Family in new home"
        className="absolute inset-0 h-full w-full object-cover"
      />
      <div className="absolute inset-0 bg-black/40" />
      <div className="max-w-7xl mx-auto h-full px-4 sm:px-6 lg:px-8 relative z-10 flex items-center">
        <div className="max-w-6xl space-y-6">
          <h1 className="text-4xl  font-semibold tracking-tight text-white sm:text-5xl md:text-6xl">
           Connecting employees to their financial future
          </h1>
          <p className="text-xl text-white/90">Boost your employees&apos; financial wellbeing with expert mortgage & financial planning advice</p>
          <Link href={'/contact-us'}>
          <Button className="bg-white text-brand-dark hover:bg-white/90 px-8 py-2 text-lg h-auto rounded-md group">
            Contact us
            <ArrowRight className="ml-2 h-5 w-5 text-brand-blue group-hover:translate-x-1 transition-transform" />
          </Button>
          </Link>
        </div>
      </div>
    </section>
  )
}
