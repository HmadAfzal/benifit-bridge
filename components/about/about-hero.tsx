import React from 'react'
import { Badge } from '../ui/badge'
import { Button } from '../ui/button'
import { ArrowRight } from 'lucide-react'
import Link from 'next/link'

const AboutHero = () => {
  return (
    <section className="lg:pt-28 md:pt-16 pt-12 pb-20 md:pb-28 px-4 md:px-6 relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,hsl(var(--primary)/0.05),transparent_50%)]" />
      <div className="container mx-auto text-center max-w-4xl relative z-10">
        <Badge
          variant="secondary"
          className="mb-6 px-4 py-1.5 rounded-full text-xs font-semibold uppercase tracking-wider shadow-sm"
        >
          Our Story
        </Badge>
        <h1 className="text-3xl font-extrabold lg:text-6xl px-2 text-primary pb-4">
          Bridging the gap to financial security.
        </h1>
        <p className="text-balance text-muted-foreground lg:text-lg pb-4">
          Benefit Bridge was founded with a clear mission: to make expert financial advice more
          accessible.
        </p>
        <p className="text-balance text-muted-foreground lg:text-lg pb-4">
          Benefit Bridge Ltd is trading name of Brook Financial Services which is an appointment
          representative of Mortgage Advice Bureau. Mortgage Advice Bureau are the UK&apos;s
          leading mortgage broker brand, winning over 200 national awards for the quality of
          our advice and services during the last five years.
        </p>

        <p className="text-balance text-muted-foreground lg:text-lg pb-4">
          We handled more than £26 billion worth of loans in 2024 and are currently the only
          mortgage intermediary to have floated on the London Stock Exchange
        </p>

        <p className="text-balance text-muted-foreground lg:text-lg pb-6">
          We have access to over 12,000 mortgage and 90 lenders, including deals which are
          exclusive only to Mortgage Advice Bureau.
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Link href={'/#services'}>
            <Button size="lg">
              View Services <ArrowRight className="ml-2 w-4 h-4" />
            </Button>
          </Link>
          <Link href={'contact-us'}>
            <Button
              size="lg"
              variant="outline"
            >
              Contact Us
            </Button>
          </Link>

        </div>
      </div>
    </section>
  )
}

export default AboutHero