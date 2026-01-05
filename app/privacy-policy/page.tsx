import { generateMetadata } from "@/lib/generate-metadata"

export const metadata=generateMetadata({title:"Privacy Policy"})

export default function PrivacyPolicyPage() {
  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-brand-blue pt-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl tracking-tight">Privacy Policy</h1>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl space-y-8 text-gray-800 leading-relaxed">
            <p>
              At Benefit Bridge, we are committed to protecting your personal data and respecting your privacy. This
              Privacy Policy explains how we collect, use, store, and disclose your employees personal information in
              line with the UK General Data Protection Regulation (UK GDPR) and the Data Protection Act 2018.
            </p>

            <div className="space-y-4">
              <h2 className="text-2xl   text-brand-dark">1. Who We Are</h2>
              <p>
                Benefit Bridge is a provider of mortgage advice and brokerage services. We act as a data controller for
                the personal data we collect and process. If you have any questions about how we handle your
                information, please contact us at:
              </p>
              <div className="space-y-1">
                <p>
                  <strong>Address:</strong> (Address to be confirmed)
                </p>
                <p>
                  <strong>Email:</strong>{" "}
                  <a href="mailto:hello@themortgageexperts.co.uk" className="text-brand-blue hover:underline">
                    hello@themortgageexperts.co.uk
                  </a>
                </p>
                <p>
                  <strong>Telephone:</strong> 07555 632705
                </p>
              </div>
            </div>

            <div className="space-y-4">
              <h2 className="text-2xl   text-brand-dark">2. What Information We Collect</h2>
              <p>We collect and process the following types of personal data:</p>
              <div className="space-y-2">
                <h3 className="font-bold">a. Personal Data You Provide</h3>
                <ul className="list-disc pl-6 space-y-1">
                  <li>Full name</li>
                  <li>Email address</li>
                  <li>Telephone number</li>
                  <li>Residential address</li>
                  <li>Employment and financial information (e.g., income, credit history)</li>
                  <li>Mortgage preferences and property details</li>
                </ul>
              </div>
              <div className="space-y-2">
                <h3 className="font-bold">b. Technical Data</h3>
                <ul className="list-disc pl-6 space-y-1">
                  <li>IP address</li>
                  <li>Browser type and version</li>
                  <li>Pages visited on our website</li>
                  <li>Device type</li>
                  <li>Cookies and similar tracking technologies</li>
                </ul>
              </div>
            </div>

            <div className="space-y-4">
              <h2 className="text-2xl   text-brand-dark">3. Lawful Basis for Processing</h2>
              <p>We will only process your personal data when we have a lawful basis to do so, including:</p>
              <ul className="list-disc pl-6 space-y-1">
                <li>
                  <strong>Consent</strong> – where you have given us explicit permission (e.g. to receive marketing
                  emails)
                </li>
                <li>
                  <strong>Contract</strong> – to fulfil our obligations in providing mortgage-related services
                </li>
                <li>
                  <strong>Legal obligation</strong> – to comply with regulatory requirements
                </li>
                <li>
                  <strong>Legitimate interests</strong> – such as improving our services, fraud prevention, and securing
                  our systems
                </li>
              </ul>
            </div>

            <div className="space-y-4">
              <h2 className="text-2xl   text-brand-dark">4. How We Use Your Information</h2>
              <p>We use your information to:</p>
              <ul className="list-disc pl-6 space-y-1">
                <li>Provide you with tailored mortgage advice</li>
                <li>Process applications on your behalf</li>
                <li>Communicate with you regarding services or enquiries</li>
                <li>Meet our regulatory and legal obligations</li>
                <li>Improve our website and customer experience</li>
                <li>Send promotional material (if you have opted in)</li>
              </ul>
            </div>

            <div className="space-y-4">
              <h2 className="text-2xl   text-brand-dark">5. Data Sharing</h2>
              <p>We may share your personal data with:</p>
              <ul className="list-disc pl-6 space-y-1">
                <li>Mortgage lenders and financial institutions</li>
                <li>Credit reference agencies (with your consent)</li>
                <li>Professional service providers (e.g., IT, legal, compliance)</li>
                <li>Regulatory bodies such as the Financial Conduct Authority (FCA), if required</li>
                <li>
                  Third-party service providers under contract, bound by confidentiality and data protection obligations
                </li>
              </ul>
              <p>We do not sell or rent your personal data to third parties.</p>
            </div>

            <div className="space-y-4">
              <h2 className="text-2xl   text-brand-dark">6. International Transfers</h2>
              <p>
                We do not routinely transfer your personal data outside the UK. If it becomes necessary, we will ensure
                that appropriate safeguards (such as Standard Contractual Clauses) are in place to protect your
                information.
              </p>
            </div>

            <div className="space-y-4">
              <h2 className="text-2xl   text-brand-dark">7. Data Retention</h2>
              <p>
                We retain your personal data only for as long as necessary to fulfil the purposes outlined in this
                policy, or to comply with legal, regulatory, and contractual obligations. Typically, this means:
              </p>
              <ul className="list-disc pl-6 space-y-1">
                <li>Enquiry data: retained for up to 12 months</li>
                <li>Client files: retained for a minimum of 6 years in line with FCA requirements</li>
              </ul>
            </div>

            <div className="space-y-4">
              <h2 className="text-2xl   text-brand-dark">8. Your Rights</h2>
              <p>Under the UK GDPR, you have the right to:</p>
              <ul className="list-disc pl-6 space-y-1">
                <li>Access the personal data we hold about you</li>
                <li>Request rectification of inaccurate or incomplete data</li>
                <li>Request erasure of your personal data (in certain circumstances)</li>
                <li>Restrict or object to the processing of your data</li>
                <li>Data portability (to receive your data in a structured, commonly used format)</li>
                <li>Withdraw consent where processing is based on consent</li>
                <li>
                  Lodge a complaint with the Information Commissioner’s Office (ICO) if you are concerned about how your
                  data is handled
                </li>
              </ul>
              <p>
                To exercise your rights, please contact us at:{" "}
                <a href="mailto:hello@themortgageexperts.co.uk" className="text-brand-blue hover:underline">
                  hello@themortgageexperts.co.uk
                </a>
              </p>
              <p>
                For further information, you may contact the ICO at{" "}
                <a href="https://www.ico.org.uk" className="text-brand-blue hover:underline">
                  www.ico.org.uk
                </a>
              </p>
            </div>

            <div className="space-y-4">
              <h2 className="text-2xl   text-brand-dark">9. Cookies</h2>
              <p>
                Our website uses cookies to improve functionality and gather analytics. You can control or disable
                cookies through your browser settings. For more information, please refer to our Cookie Policy.
              </p>
            </div>

            <div className="space-y-4">
              <h2 className="text-2xl   text-brand-dark">10. Security</h2>
              <p>
                We take appropriate technical and organisational measures to protect your data, including encryption,
                secure servers, and access controls. While we strive to protect your information, no internet
                transmission can be guaranteed as 100% secure.
              </p>
            </div>

            <div className="space-y-4">
              <h2 className="text-2xl   text-brand-dark">11. Changes to This Policy</h2>
              <p>
                We may update this Privacy Policy from time to time. Any significant changes will be communicated via
                our website or direct contact, and the “Effective Date” at the top will be updated.
              </p>
            </div>

            <div className="space-y-4">
              <h2 className="text-2xl   text-brand-dark">12. Contact Us</h2>
              <p>If you have any questions, concerns, or wish to exercise your rights, please contact:</p>
              <div className="space-y-1">
                <p>
                  <strong>Address:</strong> (Address to be confirmed)
                </p>
                <p>
                  <strong>Email:</strong>{" "}
                  <a href="mailto:hello@themortgageexperts.co.uk" className="text-brand-blue hover:underline">
                    hello@themortgageexperts.co.uk
                  </a>
                </p>
                <p>
                  <strong>Telephone:</strong> 07555 632705
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
