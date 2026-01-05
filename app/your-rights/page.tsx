import { generateMetadata } from "@/lib/generate-metadata"

export const metadata=generateMetadata({title:"Your Rights"})


export default function YourRightsPage() {
  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-brand-blue pt-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl  tracking-tight">Your Rights</h1>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl space-y-8">
            {/* Introduction */}
            <div className="space-y-6 text-gray-800 leading-relaxed">
              <p>
                At Benefit Bridge, our number one priority is to provide customers with the highest level of service.
                However, we know that sometimes things can go wrong. Customer feedback helps us understand where things
                have gone wrong and gives us the opportunity to put them right. It also helps us understand where we
                need to improve our products and services.
              </p>
              <p>If you have a complaint about the service you received please contact us.</p>

              <div className="space-y-1">
                <p>
                  <strong>Post:</strong> Complaints Department, Mortgage Advice Bureau Limited, Capital House, Pride
                  Place, Derby, DE24 8QR.
                </p>
                <p>
                  <strong>Email:</strong>{" "}
                  <a href="mailto:complaints@mab.org.uk" className="text-brand-blue hover:underline">
                    complaints@mab.org.uk
                  </a>
                </p>
                <p>
                  <strong>Phone:</strong> 01332 200020 (Please note: Calls may record and monitor calls.)
                </p>
              </div>

              <p>If your complaint cannot be resolved straightaway we will:</p>
              <p>
                Acknowledge receipt in writing, confirming our understanding of your complaint, who will be handling it
                and giving you the opportunity to provide any further information or documents.
              </p>

              <h2 className="text-2xl   text-brand-dark pt-4">The Financial Ombudsman Service</h2>
              <p>
                If you&apos;re dissatisfied with our response, you can ask the Financial Ombudsman Service for an
                independent review free of charge, but you must do so within six months of the date of our final
                response letter.
              </p>
              <p>
                The Financial Ombudsman Service (FOS) will only consider your complaint once you&apos;ve tried to
                resolve it with us, so please take up your concerns with us first and we&apos;ll do all we can to help.
              </p>
              <p>
                The FOS is also only able to consider certain categories of complaint, for example complaints about Buy
                to Let mortgages, which are not regulated by the Financial Conduct Authority will normally be outside
                the jurisdiction of the FOS.
              </p>
              <p>In addition, the FOS might not be able to consider your complaint if:</p>
              <ul className="list-disc pl-6 space-y-2">
                <li>What you&apos;re complaining about happened more than six years ago, and</li>
                <li>
                  You&apos;re complaining more than three years after you realised (or should have realised) that there
                  was a problem.
                </li>
              </ul>
              <p>
                If your complaint was made outside of these time limits, which is a matter for The Ombudsman to decide,
                The Ombudsman will not have our permission to consider your complaint and so will only be able to do so
                in very limited circumstances. For example, if it believes that the delay was as a result of exceptional
                circumstances.
              </p>
              <p>
                Further information on the services provided by the Financial Ombudsman Service can be found on their
                website:{" "}
                <a href="https://www.financial-ombudsman.org.uk" className="text-brand-blue hover:underline">
                  www.financial-ombudsman.org.uk
                </a>{" "}
                or alternatively,
              </p>

              <div className="space-y-1">
                <p>
                  <strong>Post:</strong> The Financial Ombudsman Service, Exchange Tower, London. E14 9S
                </p>
                <p>
                  <strong>Phone:</strong> 0800 023 4567 or 0300 123 9123
                </p>
                <p>
                  <strong>Email:</strong>{" "}
                  <a
                    href="mailto:complaint.info@financial-ombudsman.org.uk"
                    className="text-brand-blue hover:underline"
                  >
                    complaint.info@financial-ombudsman.org.uk
                  </a>
                </p>
              </div>

              <h2 className="text-2xl   text-brand-dark pt-4">
                Alternative Dispute Resolution (ADR) Directive
              </h2>
              <p>
                The ADR Directive is a European regulation offering other ways to resolve disputes between consumers and
                businesses. In the UK, the Financial Ombudsman Service acts as the official ADR provider for financial
                services.
              </p>
              <p>
                At Benefit Bridge, we choose to deal with complaints directly rather than pass them on under the ADR
                Directive. However, this does not affect your statutory rights to refer your complaint to the FOS as
                explained above.
              </p>

              <h2 className="text-2xl   text-brand-dark pt-4">Online Dispute Resolution Platform (ODR)</h2>
              <p>
                You can also submit complaints via the Online Dispute Resolution (ODR) platform at:{" "}
                <a href="http://ec.europa.eu/consumers/odr" className="text-brand-blue hover:underline">
                  http://ec.europa.eu/consumers/odr
                </a>
              </p>
              <p>
                Any complaints made through the ODR will be passed to the FOS and then on to us. We&apos;ll handle them
                the same way we treat all complaints.
              </p>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
