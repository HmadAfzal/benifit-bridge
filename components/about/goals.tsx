import Image from "next/image"

export default function Goals() {
  return (
    <section className="container mx-auto  md:px-6 bg-white">
      <div className="mx-auto grid grid-cols-1 lg:grid-cols-2">

        {/* LEFT CONTENT */}
        <div className="px-8 pb-16 pt-24">
          <h2 className="text-4xl md:text-5xl font-bold text-primary">
            Bridging the gap to financial security
          </h2>

          <p className="mt-6 text-slate-600 leading-relaxed max-w-xl">
            Benefit Bridge was founded with a clear mission: to make expert financial advice more
            accessible.
          </p>

          <p className="mt-4 text-slate-600 leading-relaxed max-w-xl">
            Benefit Bridge Ltd is trading name of Brook Financial Services which is an appointment
            representative of Mortgage Advice Bureau. Mortgage Advice Bureau are the UK&apos;s
            leading mortgage broker brand, winning over 200 national awards for the quality of
            our advice and services during the last five years.
          </p>

          <p className="mt-4 text-slate-600 leading-relaxed max-w-xl">
            We handled more than £26 billion worth of loans in 2024 and are currently the only
            mortgage intermediary to have floated on the London Stock Exchange
          </p>
          <p className="mt-4 text-slate-600 leading-relaxed max-w-xl">
            We have access to over 12,000 mortgage and 90 lenders, including deals which are
            exclusive only to Mortgage Advice Bureau.
          </p>
        </div>

        {/* RIGHT IMAGE */}
        <div className="relative flex items-center justify-center md:pt-32">
          <Image
            src="/cart.png" // replace with your asset
            alt="Home moving illustration"
            width={420}
            height={420}
            className="object-contain"
            priority
          />
        </div>

      </div>
    </section>
  )
}
