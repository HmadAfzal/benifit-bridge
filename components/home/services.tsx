import React from 'react'
import { Badge } from '../ui/badge'
import { Card, CardContent } from '../ui/card'
import { ArrowRight } from 'lucide-react'
import { Button } from '../ui/button'
import { services } from '@/constants/services'



const Services = () => {
  return (
    <section id="services" className="py-16 md:py-24 bg-background">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-12 md:mb-16 max-w-3xl mx-auto">
          <Badge variant="secondary" className="mb-4">
            OUR SERVICES
          </Badge>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight mb-4 text-balance">
            Our Areas Of Specialism
          </h2>
          <p className="text-base md:text-lg text-muted-foreground leading-relaxed">
            Our team of dedicated advisers provides expert, independent and tailored advice to your employees. 
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">

          {services.map((service) => (
            <Card
              key={service.id}
              className="bg-white border hover:border-primary/50 transition-all hover:shadow-lg py-0"
            >
              <CardContent className="p-6 md:p-8 flex flex-col h-full">
                <div className="w-12 h-12 md:w-14 md:h-14 bg-primary/10 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-primary/20 transition-colors">
                   <service.icon className="text-primary w-6 h-6 md:w-7 md:h-7" />
                </div>

                <h3 className="text-lg md:text-xl font-bold mb-3 uppercase tracking-wide">
                  {service.title}
                </h3>

                <p className="text-sm md:text-base text-muted-foreground mb-6 grow">
                  {service.description}
                </p>

                <Button
                  variant="outline"
                  className="w-full rounded-full hover:bg-secondary hover:text-secondary-foreground"
                  asChild
                >
                  <a href={`/services/${service.id}`}>
                    Learn More <ArrowRight className="ml-2 w-4 h-4" />
                  </a>
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Services