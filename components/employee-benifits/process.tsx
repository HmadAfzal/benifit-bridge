import React from 'react'

const Process = () => {
  return (
       <section id='process' className="py-24 bg-primary text-primary-foreground overflow-hidden relative rounded-xl">
        <div className="container px-4 md:px-6 relative z-10">
          <div className="flex flex-col items-center text-center space-y-4 mb-16">
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight">How TEMBS® Works</h2>
            <p className="text-primary-foreground/80 max-w-[800px] text-lg">
              Implementing the program is simple, energetic, and designed to yield high engagement from day one.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8 relative">
            <div className="hidden md:block absolute top-1/2 left-0 w-full h-px bg-white/20 -translate-y-1/2 z-0" />
            {[
              {
                step: "01",
                title: "Introduction",
                desc: "Introduced via HR departments through initial remuneration packages, global emails, and in-house bulletins.",
              },
              {
                step: "02",
                title: "Engagement",
                desc: "Promoted energetically through notice boards and office spaces to achieve the best visibility for staff.",
              },
              {
                step: "03",
                title: "Consultation",
                desc: "Employers can provide a dedicated room for employees to meet mortgage advisers during lunch breaks.",
              },
            ].map((item, i) => (
              <div
                key={i}
                className="relative z-10 bg-primary p-8 rounded-3xl border border-white/10 space-y-4 text-center"
              >
                <div className="text-5xl font-black text-white/10 absolute top-4 right-8 select-none">{item.step}</div>
                <div className="w-12 h-12 rounded-full bg-white text-primary flex items-center justify-center font-bold mx-auto">
                  {i + 1}
                </div>
                <h3 className="text-xl font-bold tracking-tight">{item.title}</h3>
                <p className="text-primary-foreground/70">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
  )
}

export default Process