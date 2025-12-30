"use client"

import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from "@/components/ui/sheet"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { Calculator, Menu } from "lucide-react"
import Link from "next/link"
import { useState } from "react"
import { NAV_LINKS } from "@/constants/nav-links"
import { services } from "@/constants/services"

const MobileMenu = () => {


  const [isOpen, setIsOpen] = useState(false);

  const handleClose = () => {
    setIsOpen(false);
  };

  
  return (
    <Sheet open={isOpen} onOpenChange={setIsOpen}>
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
            if (link.name === "Services") {
              return (
                <Accordion key={index} type="single" collapsible className="w-full">
                  <AccordionItem value="calculators" className="border-none">
                    <AccordionTrigger className="text-base font-medium hover:text-primary py-0">
                      Services
                    </AccordionTrigger>
                    <AccordionContent className="pt-2 pb-0">
                      <div className="flex flex-col space-y-3">
                        {services.map((item) => (
                          <Link
                            key={item.title}
                           href={`/services/${item.id}`}
                            className="flex items-start gap-2 rounded-lg p-2 hover:bg-accent transition-colors"
                            onClick={handleClose} 
                          >
                            <item.icon className="h-4 w-4 mt-1 flex-shrink-0" />
                            <div className="space-y-1">
                              <div className="text-sm font-medium">{item.title}</div>
                              <p className="text-xs text-muted-foreground line-clamp-2">{item.description}</p>
                            </div>
                          </Link>
                        ))}
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
                onClick={handleClose} 
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