import { notFound } from "next/navigation"
import { services } from "@/constants/services"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent } from "@/components/ui/card"
import { ArrowLeft, CheckCircle2, ArrowRight, Shield, Phone, Calendar, Star, TrendingUp, Users, Award, Send } from "lucide-react"
import Link from "next/link"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import Cta from "@/components/home/cta"

interface ServicePageProps {
  params: Promise<{ id: string }>
}

export default async function ServicePage({ params }: ServicePageProps) {
  const { id } = await params
  const service = services.find((s) => s.id === id)

  if (!service) {
    notFound()
  }

  const Icon = service.icon

  return (
    <div className="min-h-screen">
      <section className="relative lg:pt-28 md:pt-16 pt-12 pb-20 px-4 overflow-hidden">
        <div className="absolute inset-0 bg-grid-pattern opacity-[0.02]"></div>

        <div className="container mx-auto max-w-7xl relative">
          {/* Breadcrumb */}
          <Link
            href="/#services"
            className="inline-flex items-center text-sm font-medium text-muted-foreground hover:text-primary mb-4 transition-colors group"
          >
            <ArrowLeft className="mr-2 w-4 h-4 group-hover:-translate-x-1 transition-transform" />
            Back to All Services
          </Link>

          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Left: Content */}
            <div className="space-y-4">

              <Badge variant="secondary" className="mb-4">
                <Icon className="w-5 h-5 text-white" />
                <span className="text-sm">
                  Professional Service
                </span>
              </Badge>

              <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight leading-[1.1] text-balance">
                {service.title}
              </h1>

              <p className="text-lg text-muted-foreground leading-relaxed text-pretty max-w-2xl">
                {service.longDescription}
              </p>

              <div className="flex flex-wrap gap-4 pt-4">
                <Link href={'/contact-us'}>
                <Button size="lg" className="text-base font-semibold shadow-lg hover:shadow-xl transition-all">
                  <Send className="mr-2 w-5 h-5" />
                  Contact US
                </Button>
                </Link>
                <Button
                  variant="outline"
                  size="lg"
                  className="text-base font-semibold border-2"
                >
                  <Phone className="mr-2 w-5 h-5" />
                  020 XXXX XXXX
                </Button>
              </div>
            </div>

            {/* Right: Image or Visual */}
            <div className="relative lg:h-[600px] h-[400px] rounded-3xl overflow-hidden shadow-2xl">
              <img
                src="/mortgage.jpg"
                alt={service.title}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/0 to-black/0"></div>

              {/* Floating Stats Card */}
              <div className="absolute bottom-8 left-8 right-8 bg-background/95 backdrop-blur-md rounded-2xl p-6 shadow-xl border border-border/50">
                <div className="grid grid-cols-3 gap-6">
                  <div className="text-center">
                    <p className="text-3xl font-bold text-primary">90+</p>
                    <p className="text-xs text-muted-foreground mt-1">UK Lenders</p>
                  </div>
                  <div className="text-center border-x border-border/50">
                    <p className="text-3xl font-bold text-primary">£2.5B+</p>
                    <p className="text-xs text-muted-foreground mt-1">Arranged</p>
                  </div>
                  <div className="text-center">
                    <p className="text-3xl font-bold text-primary">15k+</p>
                    <p className="text-xs text-muted-foreground mt-1">Happy Clients</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features & Benefits Section */}
      <section className="py-24 px-4">
        <div className="container mx-auto max-w-7xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 text-balance">What's Included</h2>
            <p className="text-base md:text-lg text-muted-foreground leading-relaxed mx-auto text-pretty">
              Comprehensive support designed to make your financial journey seamless and stress-free.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {service.features.map((feature, index) => (
              <Card
                key={index}
                className="group hover:shadow-xl hover:border-primary/50 transition-all duration-300 hover:-translate-y-1"
              >
                <CardContent className="p-8">
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-6 group-hover:bg-primary/20 transition-colors">
                    <CheckCircle2 className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="text-lg font-bold mb-3">{feature}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    Expert guidance and support throughout your entire journey.
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Highlight Section */}
      <section className="py-24 px-4 bg-gradient-to-b from-muted/30 to-background">
        <div className="container mx-auto max-w-7xl">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Left: Benefits List */}
            <div className="space-y-8">
              <div>
                <Badge variant={'secondary'} className="mb-4">Why Choose Us</Badge>
                <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 text-balance">
                  Benefits That Matter
                </h2>
                <p className="text-lg text-muted-foreground text-pretty">
                  We're committed to delivering exceptional value and peace of mind throughout your financial journey.
                </p>
              </div>

              <div className="space-y-6">
                {service.benefits.map((benefit, index) => (
                  <div key={index} className="flex items-start gap-4 group">
                    <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center shrink-0 group-hover:bg-primary/20 transition-colors">
                      <TrendingUp className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-bold text-lg mb-1">{benefit}</h3>
                      <p className="text-sm text-muted-foreground">
                        Designed with your financial wellbeing at the forefront of everything we do.
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Right: Comparison Card */}
            <Card className="shadow-2xl border-2">
              <CardContent className="p-10">
                <h3 className="text-2xl font-bold mb-8 text-center">The Benefit Bridge Difference</h3>

                <div className="space-y-6">
                  <div className="flex items-center justify-between p-4 rounded-xl bg-primary/5 border border-primary/20">
                    <span className="font-semibold">No Upfront Fees</span>
                    <CheckCircle2 className="w-6 h-6 text-primary" />
                  </div>
                  <div className="flex items-center justify-between p-4 rounded-xl bg-primary/5 border border-primary/20">
                    <span className="font-semibold">90+ Lender Access</span>
                    <CheckCircle2 className="w-6 h-6 text-primary" />
                  </div>
                  <div className="flex items-center justify-between p-4 rounded-xl bg-primary/5 border border-primary/20">
                    <span className="font-semibold">Dedicated Advisor</span>
                    <CheckCircle2 className="w-6 h-6 text-primary" />
                  </div>
                  <div className="flex items-center justify-between p-4 rounded-xl bg-primary/5 border border-primary/20">
                    <span className="font-semibold">End-to-End Support</span>
                    <CheckCircle2 className="w-6 h-6 text-primary" />
                  </div>
                </div>

                <div className="mt-8 pt-8 border-t border-border text-center">
                  <p className="text-sm text-muted-foreground mb-4">Join thousands of satisfied clients</p>
                  <div className="flex items-center justify-center gap-2">
                    <Users className="w-5 h-5 text-primary" />
                    <span className="font-bold text-lg">15,000+ Clients Served</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Process Timeline */}
      <section className="py-24 px-4">
        <div className="container mx-auto max-w-7xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 text-balance">How It Works</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-pretty">
              A simple, transparent process designed around your needs.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                step: "01",
                title: "Initial Consultation",
                desc: "Book a free, no-obligation consultation with one of our expert advisors."
              },
              {
                step: "02",
                title: "Market Analysis",
                desc: "We search across 90+ lenders to find the perfect solution for your needs."
              },
              {
                step: "03",
                title: "Application Support",
                desc: "We handle all the paperwork and liaise with lenders on your behalf."
              },
              {
                step: "04",
                title: "Completion",
                desc: "Celebrate your success with ongoing support whenever you need it."
              },
            ].map((item) => (
              <Card key={item.step} className="relative overflow-hidden group hover:shadow-lg transition-all">
                <CardContent className="p-8">
                  <div className="text-7xl font-black text-primary/10 mb-4 group-hover:text-primary/20 transition-colors">
                    {item.step}
                  </div>
                  <h4 className="font-bold text-xl mb-3">{item.title}</h4>
                  <p className="text-sm text-muted-foreground leading-relaxed">{item.desc}</p>
                </CardContent>
                <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-primary/50 to-primary transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left"></div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      {service.faqs && service.faqs.length > 0 && (
        <section className="py-24 px-4 bg-muted/30">
          <div className="container mx-auto max-w-4xl">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 text-balance">Frequently Asked Questions</h2>
              <p className="text-lg text-muted-foreground text-pretty">
                Get answers to common questions about {service.title.toLowerCase()}.
              </p>
            </div>

            <Accordion type="single" collapsible className="space-y-4">
              {service.faqs.map((faq, index) => (
                <AccordionItem
                  key={index}
                  value={`faq-${index}`}
                  className="border-none bg-background rounded-2xl px-6 shadow-sm hover:shadow-md transition-shadow"
                >
                  <AccordionTrigger className="text-left font-bold py-6 hover:no-underline text-lg">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground pb-6 leading-relaxed text-base">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </section>
      )}
      {/* Related Services */}
      <section className="py-24 px-4 bg-gradient-to-b from-background to-muted/20">
        <div className="container mx-auto max-w-7xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Explore Other Services</h2>
            <p className="text-muted-foreground text-lg">Discover our full range of financial solutions</p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {services
              .filter((s) => s.id !== id)
              .slice(0, 3)
              .map((s) => {
                const ServiceIcon = s.icon
                return (
                  <Link key={s.id} href={`/services/${s.id}`}>
                    <Card className="h-full group hover:shadow-xl hover:border-primary/50 transition-all duration-300 hover:-translate-y-1">
                      <CardContent className="p-8">
                        <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center mb-6 group-hover:bg-primary/20 transition-colors">
                          <ServiceIcon className="w-7 h-7 text-primary" />
                        </div>
                        <h3 className="text-xl font-bold mb-3 group-hover:text-primary transition-colors">
                          {s.title}
                        </h3>
                        <p className="text-sm text-muted-foreground mb-6 leading-relaxed">
                          {s.description}
                        </p>
                        <div className="flex items-center text-primary font-semibold text-sm group-hover:gap-3 gap-2 transition-all">
                          Learn More
                          <ArrowRight className="w-4 h-4" />
                        </div>
                      </CardContent>
                    </Card>
                  </Link>
                )
              })}
          </div>
        </div>
      </section>
      <Cta/>
    </div>
  )
}
