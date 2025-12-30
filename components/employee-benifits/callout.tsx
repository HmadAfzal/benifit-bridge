import { ArrowRight, UserCheck } from 'lucide-react'
import { Button } from '../ui/button'
import Image from 'next/image'
import Link from 'next/link'

const Callout = () => {
  return (
    <section className="py-20">
      <div className="container">
        <div className=" mx-auto bg-background rounded-xl p-8 md:p-16 shadow-lg border border-border/50 relative overflow-hidden">
          <div className="grid lg:grid-cols-2 gap-12 items-center relative z-10">
            <div className="space-y-6">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/5 text-primary text-xs font-bold uppercase tracking-wider">
                <UserCheck className="w-3 h-3" />
                For Business Owners
              </div>
              <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-pretty">
                Desire Peace-of-Mind While You Grow?
              </h2>
              <p className="text-muted-foreground text-lg leading-relaxed">
                Business protection, employee life assurance, and business finance products help provide freedom from
                the stress of running your business while achieving further success.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link href={"/contact-us"}>
                  <Button size="lg" className="rounded-full h-12 px-8 font-semibold">
                    Speak to an Expert <ArrowRight className="ml-2 w-4 h-4" />
                  </Button>
                </Link>
              </div>
              <p className="text-xs text-muted-foreground italic">
                *This service is offered through a third party referral only.
              </p>
            </div>
            <div className="relative aspect-square lg:aspect-auto lg:h-full rounded-xl overflow-hidden min-h-[300px]">
              <Image src="/buisness.jpg" alt="Business owner success" fill className="object-cover" />
            </div>
          </div>
          <div className="absolute -top-24 -right-24 w-64 h-64 bg-primary/5 rounded-full blur-3xl pointer-events-none" />
        </div>
      </div>
    </section>
  )
}

export default Callout