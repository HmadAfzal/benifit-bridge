import { CheckCircle2 } from 'lucide-react'
import Image from 'next/image'
import React from 'react'

const EmployeeBenifits = () => {
  return (
   <section className="py-24">
        <div className="container px-4 md:px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="relative aspect-square rounded-xl overflow-hidden shadow-xl">
              <Image src="/ladder.jpg" alt="Happy homeowners" fill className="object-cover" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent flex flex-end p-8 items-end">
                <div className="text-white space-y-2">
                  <p className="font-semibold text-lg italic">
                    "TEMBS® saved us thousands in fees and months of stress."
                  </p>
                  <p className="text-white/80 text-sm">— Sarah & Mark, NHS Employees</p>
                </div>
              </div>
            </div>
            <div className="space-y-8">
              <div className="space-y-4">
                <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-balance leading-tight">
                  Supporting Employees on Every Step of the Property Ladder
                </h2>
                <p className="text-muted-foreground text-lg">
                  We turn the stressful process of securing a mortgage into a seamless, expert-guided journey.
                </p>
              </div>
              <ul className="space-y-6">
                {[
                  {
                    title: "No Brokerage Fees",
                    desc: "As a result of your employer's involvement, our standard professional broker fees are completely waived.",
                  },
                  {
                    title: "Dedicated Experts",
                    desc: "Access dedicated mortgage professionals who navigate complex lending criteria and affordability calculations for you.",
                  },
                  {
                    title: "Full Completion Support",
                    desc: "We take responsibility for seeing the mortgage through to completion, liaising with solicitors and lenders on your behalf.",
                  },
                  {
                    title: "Face-to-Face Advice",
                    desc: "Get tailored advice in person, over the phone, or via email at a time that suits your busy schedule.",
                  },
                ].map((item, i) => (
                  <li key={i} className="flex gap-4 group">
                    <div className="flex-shrink-0 w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center text-primary mt-1 group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                      <CheckCircle2 className="w-4 h-4" />
                    </div>
                    <div className="space-y-1">
                      <h4 className="font-bold text-lg">{item.title}</h4>
                      <p className="text-muted-foreground">{item.desc}</p>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>
  )
}

export default EmployeeBenifits