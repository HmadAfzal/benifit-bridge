import React from 'react'
import { Badge } from '../ui/badge'

const Process = () => {
  return (
       <section className="py-16 md:py-24 px-4 md:px-6">
        <div className="container mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-end mb-12 md:mb-16 gap-6">
            <div className="max-w-2xl">
              <Badge variant="secondary" className="mb-4">
                Value
              </Badge>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight mb-6 text-balance">Why extend your benefits offering?</h2>
               <p className="text-muted-foreground max-w-sm">
              Extending your benefits offering helps you create a more supportive, competitive, and future-ready workplace.
            </p>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12 relative">
            <div className="hidden md:block absolute top-12 left-0 w-full h-px bg-border -z-10" />
            {[
              { title: "Reduce Financial Stress", desc: "Employees who are financially secure are proven to be more engaged, focused, and productive at work. When financial stress is reduced, employees can concentrate better on their responsibilities, make clearer decisions, and contribute more effectively to their teams." },
              { title: "Improve retention", desc: "Offering mortgage and financial planning support as a benefit makes your company more attractive to both current and prospective employees. These benefits demonstrate a genuine commitment to employees’ long-term financial well-being, not just their day-to-day needs." },
              { title: "Enhance wellbeing", desc: "A home is one of life’s biggest investments; supporting employees through this process – whatever stage they are at - strengthens your overall wellbeing strategy and helps them to make big financial decisions with confidence." },
            ].map((step, i) => (
              <div key={i} className="space-y-6 bg-background p-8 rounded-xl border border-border shadow-sm">
                <div className="w-10 h-10 bg-primary text-primary-foreground rounded-full flex items-center justify-center font-bold">
                  {i + 1}
                </div>
                <h3 className="text-xl font-bold uppercase tracking-wide">{step.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
  )
}

export default Process
