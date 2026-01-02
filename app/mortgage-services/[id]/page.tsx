import { notFound } from "next/navigation"
import Image from "next/image"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { Button } from "@/components/ui/button"
import { ArrowLeft } from "lucide-react"
import Link from "next/link"
import { mortgageservices } from "@/constants/mortgage-services"
import Faqs from "@/components/home/faqs"
import Cta from "@/components/home/cta"

interface ServicePageProps {
  params: Promise<{ id: string }>
}

export default async function ServicePage({ params }: ServicePageProps) {
  const { id } = await params
const service = mortgageservices.find((item) => item.id === id);

  if (!service) {
    notFound()
  }

  return (
   <div className="flex flex-col min-h-screen font-sans">
<section className="relative h-[40vh] md:h-[50vh] min-h-[300px] w-full">
        <Image
          src={service.imageUrl}
          alt="Mortgage Services Hero"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-black/40 flex flex-col items-center justify-center text-center px-4">
          <h1 className="text-white text-4xl md:text-5xl lg:text-6xl pb-4">{service.title}</h1>
          <p className="max-w-3xl mx-auto text-white leading-relaxed text-md md:text-lg">
            {service.description}
          </p>
        </div>
      </section>
      <Faqs faqs={service.faqs}/>
      <Cta/>
    </div>
  )
}
