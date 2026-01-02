import { Check } from "lucide-react"
import { Separator } from "../ui/separator"

const benefits = [
  {
    title: "Reduce financial stress",
    description: "Employees who are financially secure are proven to be more engaged, focused and productive at work.",
  },
  {
    title: "Improve retention & recruitment",
    description:
      "Offering mortgage and financial planning support as a benefit makes your company more attractive to current and prospective employees.",
  },
  {
    title: "Enhance wellbeing initiatives",
    description:
      "A home is one of life's biggest investments; supporting employees through this process – whatever stage they are at - strengthens your overall wellbeing strategy and helps them to make big financial decisions with confidence.",
  },
]

export function Benefits() {
  return (
    <section className="py-20">
      <div className="container px-4 mx-auto max-w-5xl space-y-6">
        <h2 className="text-3xl md:text-4xl mb-12 text-brand-dark">Why extend your benefits offering?</h2>
        <Separator/>
        <div className="grid md:grid-cols-3 gap-12">
          {benefits.map((benefit, i) => (
            <div key={i} className="space-y-4">
              <div className="w-10 h-10 rounded-full bg-brand-tan flex items-center justify-center">
                <Check className="h-5 w-5 text-brand-dark" />
              </div>
              <h3 className="text-xl font-bold text-brand-dark">{benefit.title}</h3>
              <p className="text-muted-foreground leading-relaxed">{benefit.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
