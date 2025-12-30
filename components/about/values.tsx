import React from 'react'
import { Badge } from '../ui/badge'
import { Card, CardContent } from '../ui/card'
import {
    HeartHandshake,
    Target,
    Award,
    Shield,
} from "lucide-react"
const values = [
    {
        title: "Trust & Integrity",
        description: "We handle your financial future with the utmost care, transparency, and professional ethics.",
        icon: Shield,
    },
    {
        title: "Employee Centric",
        description: "Our services are designed to put the employee's needs at the heart of everything we do.",
        icon: HeartHandshake,
    },
    {
        title: "Expertise",
        description: "Our advisors are fully qualified and experienced in the complex UK mortgage market.",
        icon: Award,
    },
    {
        title: "Innovation",
        description: "We use modern tools to make financial planning simple and accessible for everyone.",
        icon: Target,
    },
]

const Values = () => {
    return (
        <section className="py-20 md:py-32 px-4 md:px-6 bg-muted/20">
            <div className="container mx-auto">
                <div className="text-center mb-16 md:mb-20 max-w-3xl mx-auto">
                    <Badge variant="secondary" className=" mb-6">
                        OUR VALUES
                    </Badge>
                    <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight mb-6 text-balance leading-tight">
                        The Values that Guide Us
                    </h2>
                    <p className="text-muted-foreground leading-relaxed text-base md:text-lg">
                        Our principles ensure that every employee we advise receives the highest standard of care and professional
                        expertise.
                    </p>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
                    {values.map((value, idx) => (
                        <Card
                            key={idx}
                            className="bg-background border border-border hover:border-primary/50 hover:shadow-xl transition-all group"
                        >
                            <CardContent className="pt-10 pb-8 px-6 text-center">
                                <div className="w-14 h-14 bg-primary/10 rounded-2xl flex items-center justify-center mb-6 mx-auto group-hover:bg-primary/20 transition-colors">
                                    <value.icon className="text-primary w-7 h-7" />
                                </div>
                                <h3 className="text-xl font-bold mb-4 uppercase tracking-wide">{value.title}</h3>
                                <p className="text-muted-foreground text-sm leading-relaxed">{value.description}</p>
                            </CardContent>
                        </Card>
                    ))}
                </div>
            </div>
        </section>

    )
}

export default Values