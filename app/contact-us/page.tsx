import { ContactForm } from "@/components/contact/form";
import { generateMetadata } from "@/lib/generate-metadata";
export const metadata=generateMetadata({title:"Contact Us"})

export default function ContactPage() {
  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-primary py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl md:text-5xl lg:text-6xl text-white   tracking-tight mb-12">
            Benifit Bridge – get in touch
          </h1>
          <div className="relative aspect-[21/9] w-full overflow-hidden rounded-sm">
            <img
              src="/collegues.jpg"
              alt="Colleagues discussing documents"
              className="object-cover w-full h-full object-top"
            />
          </div>
        </div>
      </section>

      {/* Intro Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl space-y-8">
            <h2 className="text-4xl md:text-5xl text-brand-dark   leading-tight">
              Have questions about our employee benefits programme?
            </h2>
            <p className="text-lg text-gray-700 leading-relaxed">
              We'd love to discuss how our services can add value to your employee benefits
              package. Whether you're looking to introduce this benefit for the first time, need more
              information about how the service works, or want to explore tailored solutions for your
              workforce, our team is here to help. We understand that every organisation is different,
              so we'll work with you to create a programme that fits your company's needs and
              supports your employees' financial wellbeing. Simply fill out the form below and one of
              our experts will be in touch.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed">
              We look forward to helping you deliver a benefits offering that works - for your people
              and for your organisation.
            </p>
          </div>

          <div className="mt-16 max-w-4xl">
            <ContactForm />
          </div>
        </div>
      </section>
    </main>
  )
}
