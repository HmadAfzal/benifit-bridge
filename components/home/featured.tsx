import React from 'react'
import { Button } from '../ui/button'
import { ArrowRight } from 'lucide-react'
import Link from 'next/link'

const Featured = () => {
  return (
      <section className="py-16 md:py-24 px-4 md:px-6">
        <div className="container mx-auto">
          <div className="flex flex-col lg:flex-row items-center gap-12 md:gap-16">
            <div className="flex-1 space-y-8">
              <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-balance">
                Why this matters for your business
              </h2>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Your employees are your greatest asset and how they feel about their money and financial future can directly impact their focus, performance, and overall wellbeing. Plus Including this benefit can also help drive employee engagement, productivity and retention.
              </p>
              <div className="grid grid-cols-2 gap-6 pt-4">
                <div className="space-y-2">
                  <h4 className="text-3xl font-bold">100+</h4>
                  <p className="text-sm text-muted-foreground uppercase font-semibold">Partner Companies</p>
                </div>
                <div className="space-y-2">
                  <h4 className="text-3xl font-bold">£500m+</h4>
                  <p className="text-sm text-muted-foreground uppercase font-semibold">Mortgages Secured</p>
                </div>
              </div>
              <Button variant="ghost" className="p-0 hover:bg-transparent text-secondary font-bold group">
                <Link href={"/employee-benifits"} className='flex items-center justify-center'>
                 LEARN MORE ABOUT EMPLOYEE BENIFITS{" "}
                <ArrowRight className="ml-2 w-4 h-4 transition-transform group-hover:translate-x-1" />
                </Link>
              </Button>
            </div>
            <div className="flex-1 w-full max-w-xl">
              <div className="aspect-square bg-muted rounded-xl overflow-hidden relative group">
                <img
                  src="/home.jpg"
                  alt="Benefit Bridge Workplace"
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-primary/5 mix-blend-multiply" />
              </div>
            </div>
          </div>
        </div>
      </section>
  )
}

export default Featured