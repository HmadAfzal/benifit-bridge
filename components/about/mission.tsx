import { ArrowRight, Users } from 'lucide-react'
import { Button } from '../ui/button'
import { Badge } from '../ui/badge'
import Link from 'next/link'

const Mission = () => {
  return (
    <section className="py-20 md:py-32 px-4 md:px-6">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          <div className="space-y-6 order-2 lg:order-1">
            <Badge variant="secondary">
              OUR MISSION
            </Badge>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight leading-tight text-balance">
              Founded on Trust, Driven by Purpose
            </h2>
            <p className="text-muted-foreground leading-relaxed text-base md:text-lg">
              In 2015, we noticed that many employees were struggling to navigate the complexities of the UK mortgage
              market and protection planning. Despite having great careers, their financial wellness was often
              overlooked.
            </p>
            <p className="text-muted-foreground leading-relaxed text-base md:text-lg">
              Benefit Bridge was created to partner with forward-thinking employers, bringing professional, impartial
              financial advice directly to the workplace. We believe that a financially secure employee is a more
              engaged and empowered professional.
            </p>
            <div className="pt-8">
              <Link href={'/partnerships'}>
                <Button size="lg" variant="outline" className=" px-8 bg-transparent">
                  Partnerships <ArrowRight className="ml-2 w-4 h-4" />
                </Button>
              </Link>
            </div>
          </div>
          <div className="relative order-1 lg:order-2">
            <div className="aspect-[4/3] rounded-3xl overflow-hidden bg-accent/20 shadow-2xl">
              <img
                src="/trust.jpg"
                alt="Modern UK Office"
                className="object-cover w-full h-full"
              />
            </div>
            <div className="absolute -bottom-8 -left-4 lg:-left-8 bg-background p-6 md:p-8 rounded-2xl shadow-xl border border-border max-w-[280px]">
              <Users className="w-10 h-10 text-primary mb-4" />
              <p className="font-bold text-lg mb-2">Empowering Employees</p>
              <p className="text-sm text-muted-foreground leading-relaxed">
                We've helped thousands of professionals across the UK secure their homes and futures.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Mission