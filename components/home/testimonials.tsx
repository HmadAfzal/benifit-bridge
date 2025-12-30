import React from 'react'
import { Card, CardContent } from '../ui/card'
import { Quote, Star } from 'lucide-react'

const testimonials=[
              {
                name: "Sarah Jenkins",
                role: "Senior Developer",
                company: "TechPulse UK",
                content:
                  "Benefit Bridge made buying my first home so much easier. Having expert mortgage advice as a work benefit was a game changer.",
              },
              {
                name: "David Chen",
                role: "HR Director",
                company: "Global Logistics",
                content:
                  "Our employees love the financial wellness workshops. It's become one of our most valued benefits since we launched it.",
              },
              {
                name: "Emma Thompson",
                role: "Project Manager",
                company: "Design Studio",
                content:
                  "The protection advice gave me peace of mind for my family. Professional, clear, and incredibly helpful throughout.",
              },
            ]

const Testimonials = () => {
  return (
    
      <section className="py-16 md:py-24 bg-muted/30 overflow-hidden">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center mb-12 md:mb-16">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight mb-4 text-balance">Trusted by employees across the UK</h2>
            <p className="text-muted-foreground text-lg">
              See how we've helped professionals secure their financial future.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {testimonials.map((review, i) => (
              <Card key={i} className="bg-background border-none shadow-sm relative pt-12">
                <CardContent>
                  <Quote className="absolute top-6 left-6 w-8 h-8 text-primary/10" />
                  <div className="flex gap-1 mb-4">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-primary text-primary" />
                    ))}
                  </div>
                  <p className="text-muted-foreground italic mb-6 leading-relaxed">"{review.content}"</p>
                  <div className="flex items-center gap-3 border-t border-border pt-6">
                    <div className="w-10 h-10 rounded-full bg-accent/20 flex items-center justify-center font-bold text-primary">
                      {review.name[0]}
                    </div>
                    <div>
                      <p className="font-bold text-sm uppercase tracking-wide">{review.name}</p>
                      <p className="text-xs text-muted-foreground uppercase">
                        {review.role} • {review.company}
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

  )
}

export default Testimonials