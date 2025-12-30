import React from 'react'
import { Card, CardContent } from '../ui/card'
import { CheckCircle2, ShieldCheck, Heart, Zap, Clock, Users } from "lucide-react"


const benifits = [
              {
                title: "Zero Cost Implementation",
                desc: "Offer premium mortgage assistance to your staff as part of their benefit package at no cost to your organization.",
                icon: Zap,
              },
              {
                title: "Recruitment Edge",
                desc: "Get the pick of top talent at the recruitment stage by offering a benefit that stands out from competitors.",
                icon: Users,
              },
              {
                title: "Staff Retention",
                desc: "Improve employee satisfaction and retain happy, committed workers by supporting their long-term financial goals.",
                icon: Heart,
              },
              {
                title: "Increased Productivity",
                desc: "Reduce the time employees spend trawling comparison sites during working hours by providing a dedicated solution.",
                icon: Clock,
              },
              {
                title: "Professional Handling",
                desc: "Our brokerage fees are waived for employees, making this a highly valued and tangible perk.",
                icon: ShieldCheck,
              },
              {
                title: "Zero Liability",
                desc: "Employers carry no accountability or responsibility for the advice provided by our financial professionals.",
                icon: CheckCircle2,
              },
            ]
const EmployerBenifits = () => {
  return (
        <section className="py-24">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center text-center space-y-4 mb-16">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight">Benefits for Employers</h2>
            <p className="text-muted-foreground max-w-[800px] text-lg">
              Empower your recruitment and retention strategy with a unique financial benefit that costs your business
              absolutely nothing.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {benifits.map((benefit, i) => (
              <Card
                key={i}
                className="py-0 border-none shadow-sm bg-background hover:shadow-md transition-shadow duration-300 rounded-2xl overflow-hidden"
              >
                <CardContent className="p-8 space-y-4">
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center text-primary">
                    <benefit.icon className="w-6 h-6" />
                  </div>
                  <h3 className="text-xl font-bold tracking-tight">{benefit.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">{benefit.desc}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

  )
}

export default EmployerBenifits