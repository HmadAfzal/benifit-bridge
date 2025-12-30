import React from 'react'
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '../ui/accordion'

const faqs = [
              {
                q: "Is this service really free for employees?",
                a: "Yes, the initial advice and consultation are provided as part of your company's benefit package. We are compensated by lenders and providers, just like any other broker, but with the added value of being an integrated workplace partner.",
              },
              {
                q: "Can you help me if I'm a first-time buyer?",
                a: "Absolutely. We specialize in helping first-time buyers navigate the UK market, explaining everything from Stamp Duty to help-to-buy schemes.",
              },
              {
                q: "What kind of protection advice do you offer?",
                a: "We provide comprehensive advice on Life Insurance, Critical Illness Cover, and Income Protection to ensure you and your family are secure.",
              },
              {
                q: "How do I book my first consultation?",
                a: "You can book directly through the 'Employee Portal' link in our navigation or through your internal HR benefits system.",
              },
            ]

const Faqs = () => {
  return (
 <section className="py-16 md:py-24 bg-background">
        <div className="container mx-auto px-4 md:px-6 max-w-4xl">
          <div className="text-center mb-12 md:mb-16">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight mb-4 text-balance">Frequently Asked Questions</h2>
            <p className="text-muted-foreground text-lg">Everything you need to know about your financial benefits.</p>
          </div>
          <Accordion type="single" collapsible className="w-full space-y-4">
            {faqs.map((faq, i) => (
              <AccordionItem key={i} value={`item-${i}`} className="border-none bg-background rounded-2xl px-6 shadow-sm hover:shadow-md transition-shadow">
                <AccordionTrigger className="text-left font-bold py-6 hover:no-underline text-lg">{faq.q}</AccordionTrigger>
                <AccordionContent className="text-muted-foreground pb-6 leading-relaxed text-base">{faq.a}</AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </section>  )
}

export default Faqs