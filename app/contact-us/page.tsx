import { ContactForm } from "@/components/contact/form";

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
              Let&apos;s talk employee benefits
            </h2>
            <p className="text-lg text-gray-700 leading-relaxed">
              Have questions about how to build, optimise or manage your employee benefits programme? Fill out the form
              below and one of our experts will reach out to you to:
            </p>
            <ul className="list-disc pl-5 space-y-4 text-brand-dark">
              <li>
                
                Explore tailored solutions to support your team
              </li>
              <li>
                Help with benefits design, benchmarking or administration
              </li>
              <li>
                Discuss how we can align benefits with your business goals
              </li>
            </ul>
            <p className="text-lg text-gray-700 leading-relaxed">
              We look forward to helping you deliver a benefits offering that works - for your people and for your
              organisation.
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
