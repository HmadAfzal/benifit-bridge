'use client'
import { Badge } from '../ui/badge'
import { features } from '@/constants/benifits'
import { TrendingUp } from 'lucide-react'
import { Button } from '../ui/button'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

const Benifits = () => {
  const pathname=usePathname()
  const link= pathname == '/mortgage-services' ? 'cover-protection-services' : 'mortgage-services'
  return (
   <section className="py-24 px-4">
        <div className="container mx-auto max-w-7xl">
          <div className="grid lg:grid-cols-1 gap-16 items-center">
            {/* Left: Benefits List */}
            <div className="space-y-8">
              <div>
                <Badge variant={'secondary'} className="mb-4">Why Choose Us</Badge>
                <h2 className="text-3xl md:text-4xl font-semibold mb-4 ">
                  Benefits That Matter
                </h2>
                <p className="text-lg text-muted-foreground text-pretty w-full">
                  We're committed to delivering exceptional value and peace of mind throughout your financial journey.
                </p>
              </div>
              <div className="grid md:grid-cols-3 gap-12">
                {features.map((feature, i) => (
                  <div key={i} className="space-y-4">
                    <div className="w-10 h-10 rounded-full bg-brand-tan flex items-center justify-center">
                      <TrendingUp className="h-5 w-5 text-brand-dark" />
                    </div>
                    <h3 className="text-xl font-bold text-brand-dark">{feature.title}</h3>
                    <p className="text-muted-foreground leading-relaxed">{feature.description}</p>
                  </div>
                ))}
              </div>
              <Link href={link}>
              <Button size={'lg'}>Explore other services</Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

  )
}

export default Benifits