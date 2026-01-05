import { ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import Link from "next/link"

export function CTA() {
  return (
    <section className=" py-20 overflow-hidden">
    <div className="container px-4 mx-auto max-w-6xl space-y-6">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <h2 className="text-4xl md:text-5xl font-semibold text-brand-dark leading-tight">
              Start supporting your employees today
            </h2>
            <p className="text-lg text-muted-foreground">
              Discover how our mortgage and cover and protection service can enhance your existing employee
              benefits and support your workforce's financial wellbeing.
            </p>
            <Link href={'/contact-us'}>
            <Button variant={'outline'} className=" px-10 py-4 text-lg h-auto rounded-md group">
              Contact us today to learn more
              <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </Button>
            </Link>
          </div>
          <div className="relative h-[220px] md:h-[500px] lg:h-[320px]">
            <img
              src="/couch-couple.jpg"
              alt="People with boxes moving house"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  )
}
