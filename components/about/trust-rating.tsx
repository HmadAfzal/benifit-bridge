import { Star } from "lucide-react"

export function TrustRating() {
  return (
    <section className="w-full bg-white">
      <div className="mx-auto container px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-start justify-start gap-4 md:flex-row md:items-center md:gap-8">
          <div className="flex items-center">
            <span className="text-3xl font-bold tracking-tighter text-[#333333]">feefo</span>
            <div className="ml-1 flex gap-0.5">
              <div className="h-4 w-4 rounded-full bg-[#ffde00]" />
              <div className="h-4 w-4 rounded-full bg-[#ffde00]" />
            </div>
          </div>

          <div className="flex flex-col gap-1">
            <h3 className="text-xl text-brand-dark md:text-2xl">Average Customer Rating</h3>
            <div className="flex flex-col gap-2 md:flex-row md:items-center">
              <span className="text-2xl font-bold text-brand-dark md:text-lg md:font-normal">
                4.9 <span className="font-normal md:font-bold">/ 5</span>
              </span>
              <div className="flex items-center">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="h-5 w-5 fill-[#ffde00] text-[#ffde00]" />
                ))}
              </div>
            </div>
            <p className="max-w-[280px] text-sm text-muted-foreground md:max-w-none">
              Independent feedback based on 32308 verified reviews.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
