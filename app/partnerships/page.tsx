import { ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Separator } from "@/components/ui/separator"
import Link from "next/link"

const PARTNERS = [
  { name: "Partner 1", logo: "/1.jpeg" },
  { name: "Partner 2", logo: "/2.jpeg" },
  { name: "Partner 3", logo: "/3.jpeg" },
  { name: "Partner 4", logo: "/4.jpeg" },
  { name: "Partner 5", logo: "/5.jpeg" },
  { name: "Partner 6", logo: "/6.jpeg" },
  { name: "Partner 7", logo: "/7.webp" },
]

export default function PartnershipsPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <main className="flex-grow">
        {/* Hero Section */}
        <section className="bg-primary text-white py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Our Partnerships</h1>
            <p className="text-xl max-w-3xl opacity-90">
              At Benefit Bridge, we're proud to be working in partnership with leading employers to provide tailored
              mortgage advice and financial support to their employees.
            </p>
          </div>
        </section>

        {/* Partners Grid */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <p className="text-lg text-brand-dark mb-12 max-w-3xl">
              We collaborate with a wide range of employers across various sectors, helping their workforce navigate
              homeownership and financial planning with confidence.
            </p>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12 items-center">
              {PARTNERS.map((partner, index) => (
                <div
                  key={index}
                  className="flex items-center justify-center p-6"
                >
                  <img
                    src={partner.logo || "/placeholder.svg"}
                    alt={partner.name}
                    className="max-h-16 w-auto object-contain"
                  />
                </div>
              ))}
            </div>
          </div>
        </section>
        <Separator />
        {/* Start Supporting Employees Section (bottom) */}
        <section className=" py-24">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className=" gap-16 items-center">
              <div className="space-y-8">
                <h2 className="text-4xl md:text-5xl font-semibold text-brand-dark leading-tight">
                  Start supporting your employees today
                </h2>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  Discover how our mortgage and cover and protection service can enhance your existing employee approach
                  benefits and support your workforce's financial wellbeing.
                </p>
                <Link href={'/contact-us'}>
                <Button variant={'outline'} className="px-8 py-4 text-lg h-auto rounded-md group font-medium">
                  Contact Us today to learn more
                  <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                </Button>
                 </Link>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  )
}
