import React from 'react'
import { Button } from '../ui/button'
import Link from 'next/link'

const Cta = () => {
  return (
      <section className="py-16 md:py-24 px-4 md:px-6">
        <div className="container mx-auto">
          <div className="bg-primary rounded-xl p-8 md:p-12 lg:p-20 text-primary-foreground relative overflow-hidden">
            <div className="absolute top-0 right-0 w-1/3 h-full bg-primary-foreground/5 skew-x-12 transform translate-x-1/2" />
            <div className="max-w-3xl relative z-10">
              <h2 className="text-3xl md:text-4xl lg:text-6xl font-bold mb-6 md:mb-8 tracking-tight text-balance">Start supporting your employees today</h2>
              <p className="text-xl text-primary-foreground/80 mb-12 leading-relaxed">
               Discover how our mortgage and financial planning service can enhance your existing employee approach benefits and support your workforce’s financial wellbeing.
              </p>
              <div className="flex flex-wrap gap-4">
                 <Link href={"/employee-benifits"}>
                <Button size="lg" variant="secondary" className=" px-8 h-14 text-base font-semibold">
                Employee Benifits
                </Button>
                </Link>
                 <Link href={"/contact-us"}>
                <Button
                  size="lg"
                  variant="outline"
                  className=" px-8 h-14 text-base font-semibold bg-transparent border-primary-foreground/30 hover:bg-primary-foreground hover:text-primary"
                >
                  Contact Us
                </Button>
                </Link>
              </div>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8 mt-16 md:mt-20 pt-8 md:pt-12 border-t border-primary-foreground/10 relative z-10">
              {[
                { step: "01", title: "Consult", desc: "Understanding your needs" },
                { step: "02", title: "Plan", desc: "Custom strategy design" },
                { step: "03", title: "Launch", desc: "Seamless implementation" },
                { step: "04", title: "Support", desc: "Ongoing expert advice" },
              ].map((item, i) => (
                <div key={i} className="space-y-2">
                  <span className="text-primary-foreground/40 font-mono text-sm">{item.step}</span>
                  <h4 className="font-bold uppercase tracking-widest">{item.title}</h4>
                  <p className="text-primary-foreground/60 text-sm">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>  )
}

export default Cta