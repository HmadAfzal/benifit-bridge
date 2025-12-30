"use client"

import { Badge } from "@/components/ui/badge"
import ContactForm from "@/components/contact/form"
import ContactDetails from "@/components/contact/contact-details"


export default function ContactPage() {


  return (
    <div className="w-full flex flex-col items-center">
      {/* Hero Header */}
      <section className="lg:pt-28 md:pt-16 pt-12 pb-16 px-4 md:px-6 w-full max-w-7xl mx-auto">
        <div className="text-center max-w-3xl mx-auto">
          <Badge variant="secondary" className="mb-4">
            CONTACT US
          </Badge>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-6">
            We're here to help you bridge the gap.
          </h1>
          <p className="text-lg text-muted-foreground leading-relaxed">
            Have questions about our employee benefits or mortgage advice? Reach out to our UK-based experts today.
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="pb-24 px-4 md:px-6 w-full max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          {/* Contact Details */}
          <ContactDetails />

          {/* Contact Form */}
          <ContactForm />
        </div>
      </section>
    </div>
  )
}
