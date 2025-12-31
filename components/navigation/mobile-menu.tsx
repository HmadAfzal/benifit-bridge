"use client"

import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from "@/components/ui/sheet"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { Building2, Calculator, ChevronRight, HandHeart, Home, Menu, ShieldCheck } from "lucide-react"
import Link from "next/link"
import { useState } from "react"
import { NAV_LINKS } from "@/constants/nav-links"
import { services } from "@/constants/services"

const MobileMenu = () => {



    const [open, setOpen] = useState(false)

  const mortgageServices = services.filter((s) => s.type === "mortgage")
  const protectionServices = services.filter((s) => s.type === "cover-protection")
  
  return (
    <Sheet  open={open} onOpenChange={setOpen}>
      <SheetTrigger asChild className="block lg:hidden">
        <Button size="icon" variant="ghost">
          <Menu className="w-5 h-5" />
        </Button>
      </SheetTrigger>
      <SheetContent side="right" className="w-full sm:w-[300px] pt-12 md:px-8 px-4">
        <SheetHeader className="mb-2 p-0">
          <SheetTitle className="px-0">Menu</SheetTitle>
        </SheetHeader>
        <nav className="flex flex-col space-y-4">
          {NAV_LINKS.map((link, index) => {
            if (link.name === "Benefit Bridge") {
              return (
                <Accordion key={index} type="single" collapsible className="w-full">
                  <AccordionItem value="calculators" className="border-none">
                    <AccordionTrigger className="text-base font-medium hover:text-primary py-0">
                      Benefit Bridge
                    </AccordionTrigger>
                    <AccordionContent className="pt-2 pb-0">
                      <div className="flex flex-col space-y-3">
                        <Link
                           
                           href={`/partnerships`}
                            className="flex items-start gap-2 rounded-lg p-2 hover:bg-accent transition-colors"
                           onClick={() => setOpen(false)}
                          >
                            <HandHeart className="h-4 w-4 mt-1 flex-shrink-0" />
                            <div className="space-y-1">
                              <div className="text-sm font-medium">Partnerships</div>
                              <p className="text-xs text-muted-foreground line-clamp-2">A Partnership Focused on Your Property Journey</p>
                            </div>
                          </Link>
                          

                          <Link
                           href={`/about`}
                            className="flex items-start gap-2 rounded-lg p-2 hover:bg-accent transition-colors"
                           onClick={() => setOpen(false)}
                          >
                            <Building2 className="h-4 w-4 mt-1 flex-shrink-0" />
                            <div className="space-y-1">
                              <div className="text-sm font-medium">About Us</div>
                              <p className="text-xs text-muted-foreground line-clamp-2">We care about our clients, colleagues, and community</p>
                            </div>
                          </Link>
                      </div>
                    </AccordionContent>
                  </AccordionItem>
                </Accordion>
              )
            }
              if (link.name === "Services") {
              return (
                <Accordion type="single" collapsible key={link.name}>
                  <AccordionItem value="services" className="border-none">
                    <AccordionTrigger className="text-base font-medium py-2 hover:no-underline">
                      Services
                    </AccordionTrigger>
                    <AccordionContent>
                      <div className="flex flex-col gap-2 pl-4">
                        <Accordion type="single" collapsible className="w-full">
                          <AccordionItem value="mortgages" className="border-none">
                            <AccordionTrigger className="text-sm font-semibold py-2 hover:no-underline text-primary flex items-center gap-2">
                              <div className="flex items-center gap-2">
                                <Home className="h-4 w-4" />
                                Mortgages
                              </div>
                            </AccordionTrigger>
                            <AccordionContent>
                              <div className="flex flex-col gap-2 pl-6 pb-2">
                                {mortgageServices.map((service) => (
                                  <Link
                                    key={service.id}
                                    href={`/services/${service.id}`}
                                    onClick={() => setOpen(false)}
                                    className="flex items-center justify-between text-sm text-muted-foreground hover:text-primary transition-colors py-1"
                                  >
                                    <span>{service.title}</span>
                                    <ChevronRight className="h-3 w-3" />
                                  </Link>
                                ))}
                              </div>
                            </AccordionContent>
                          </AccordionItem>

                          <AccordionItem value="protection" className="border-none">
                            <AccordionTrigger className="text-sm font-semibold py-2 hover:no-underline text-primary flex items-center gap-2">
                              <div className="flex items-center gap-2">
                                <ShieldCheck className="h-4 w-4" />
                                Cover & Protection
                              </div>
                            </AccordionTrigger>
                            <AccordionContent>
                              <div className="flex flex-col gap-2 pl-6 pb-2">
                                {protectionServices.map((service) => (
                                  <Link
                                    key={service.id}
                                    href={`/services/${service.id}`}
                                    onClick={() => setOpen(false)}
                                    className="flex items-center justify-between text-sm text-muted-foreground hover:text-primary transition-colors py-1"
                                  >
                                    <span>{service.title}</span>
                                    <ChevronRight className="h-3 w-3" />
                                  </Link>
                                ))}
                              </div>
                            </AccordionContent>
                          </AccordionItem>
                        </Accordion>
                      </div>
                    </AccordionContent>
                  </AccordionItem>
                </Accordion>
              )
            }
            return (
              <Link
                key={index}
                href={link.href}
                className="text-base font-medium transition-colors hover:text-primary"
                onClick={() => setOpen(false)}
              >
                {link.name}
              </Link>
            )
          })}
        </nav>
      </SheetContent>
    </Sheet>
  )
}

export default MobileMenu