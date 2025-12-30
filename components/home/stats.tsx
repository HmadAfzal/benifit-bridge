import { BarChart3, Building2, Landmark, Users2 } from 'lucide-react'

const stats=[
              { label: "UK Lenders", value: "90k+", icon: Users2 },
              { label: "Mortgage Lending Secured", value: "£850m+", icon: Landmark },
              { label: "Corporate Partners", value: "150+", icon: Building2 },
              { label: "Protection Policies", value: "12k+", icon: BarChart3 },
            ]
            
const Stats = () => {
  return (
          <section className="py-16 md:py-24 bg-primary">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12">
            {stats.map((stat, i) => (
              <div key={i} className="text-center space-y-4">
                <div className=" bg-primary/5 rounded-full flex items-center justify-center mx-auto">
                  <stat.icon className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h4 className=" text-xl md:text-2xl lg:text-4xl text-white font-bold tracking-tight mb-1">{stat.value}</h4>
                  <p className="text-xs text-white  uppercase tracking-widest">{stat.label}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
  )
}

export default Stats
