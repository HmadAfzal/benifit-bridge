import React from 'react'
import { Badge } from '../ui/badge'
import { Button } from '../ui/button'
import Image from 'next/image'
import Link from 'next/link'

const EmployeeBenifitsHero = () => {
  return (
        <section className="relative py-20 lg:py-24 overflow-hidden bg-primary text-primary-foreground lg:px-20 md:px-12 px-6 rounded-xl">
        <div className="container px-4 md:px-6 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <Badge variant="secondary" className="bg-white/10 text-white border-none px-4 py-1">
                The TEMBS® Program
              </Badge>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-balance">
                Elevate Your Workforce with Mortgage Benefits
              </h1>
              <p className="text-lg md:text-xl text-primary-foreground/80 max-w-[600px] text-pretty">
                Benefit Bridge introduces TEMBS®, a zero-cost mortgage assistance program that helps you attract,
                retain, and support your most valuable asset your people.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 pt-4">
                     <Link href={"/contact-us"}>

                <Button
                  size="lg"
                  className="bg-white text-primary hover:bg-white/90 rounded-xl h-12 px-8 font-semibold"
                >
                  Contact Us for Details
                </Button>
                </Link>
                <Link href={"/employee-benifits/#process"}>

                <Button
                  size="lg"
                  variant="secondary"
                  className=" rounded-xl h-12 px-8"
                >
                  Learn How it Works
                </Button>
                </Link>
              </div>
            </div>
            <div className="relative aspect-video lg:aspect-square rounded-xl overflow-hidden shadow-2xl border border-white/10">
              <Image src="/employee.jpg" alt="Professional team meeting" fill className="object-cover" />
            </div>
          </div>
        </div>
        <div className="absolute top-0 right-0 w-1/3 h-full bg-gradient-to-l from-white/5 to-transparent pointer-events-none" />
      </section>
  )
}

export default EmployeeBenifitsHero