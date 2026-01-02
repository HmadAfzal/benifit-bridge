import Cta from "@/components/home/cta"
import { ServiceCard } from "@/components/services/service-card"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent } from "@/components/ui/card"
import { benefits, features } from "@/constants/benifits"
import { coverprotection } from "@/constants/cover-protection"
import { mortgageservices } from "@/constants/mortgage-services"
import { ArrowRight, CheckCircle2, TrendingUp, Users } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

export default function Page() {


    return (
        <div className="flex flex-col min-h-screen font-sans">
            {/* Hero Section */}
            <section className="relative h-[40vh] md:h-[50vh] min-h-[300px] w-full">
                <Image
                    src="/houses.jpg"
                    alt="Mortgage Services Hero"
                    fill
                    className="object-cover"
                    priority
                />
                <div className="absolute inset-0 bg-black/40 flex flex-col items-center justify-center text-center px-4">
                    <div className="bg-primary rounded-lg text-white px-6 py-1 text-sm font-bold tracking-widest mb-4">EXPERT</div>
                    <h1 className="text-white text-4xl md:text-5xl lg:text-6xl">Cover & Protection Services</h1>
                </div>
            </section>

            {/* Intro Section */}
            <section className="py-16 md:py-24 bg-white">
                <div className="max-w-7xl mx-auto px-4 md:px-8 text-center">
                    <h2 className="text-3xl md:text-4xl font-semibold text-primary mb-6">Tailored Cover and Protection Advice</h2>
                    <p className="max-w-3xl mx-auto text-gray-600 leading-relaxed text-sm md:text-base">
                        At Benef it Bridge, we understand how important it is to safeguard your family&apos;s future.
                        We also understand how devasting a serious health diagnosis can be. Having the right
                        insurance in place gives you peace of mind. Our experienced advisers are here to help
                        you f ind the right cover and protection to meet your individual needs. We of fer expert
                        advice and access to a wide panel of trusted insurers, so you can choose the right cover
                        with conf idence.
                    </p>
                </div>
            </section>

            {/* Services Grid */}
            <section className="pb-24">
                <div className="max-w-7xl mx-auto px-4 md:px-8">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
                        {coverprotection.map((service, index) => (
                            <ServiceCard key={index} {...service} />
                        ))}
                    </div>
                </div>
            </section>
            <section className="py-24 px-4">
                <div className="container mx-auto max-w-7xl">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl md:text-4xl font-semibold mb-4 text-balance">What's Included</h2>
                        <p className="text-base md:text-lg text-muted-foreground leading-relaxed mx-auto text-pretty">
                            Comprehensive support designed to make your financial journey seamless and stress-free.
                        </p>
                    </div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {benefits.map((benefit, index) => (
                            <Card
                                key={index}
                                className="bg-white rounded-lg shadow-sm overflow-hidden border border-gray-100 group hover:shadow-xl hover:border-primary/50 transition-all duration-300 hover:-translate-y-1"
                            >
                                <CardContent className="p-8">
                                    <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-6 group-hover:bg-primary/20 transition-colors">
                                        <CheckCircle2 className="w-6 h-6 text-primary" />
                                    </div>
                                    <h3 className="text-lg font-bold mb-3">{benefit.title}</h3>
                                    <p className="text-sm text-muted-foreground leading-relaxed">
                                        {benefit.description}
                                    </p>
                                </CardContent>
                            </Card>
                        ))}
                    </div>
                </div>
            </section>

            <section className="py-24 px-4">
                <div className="container mx-auto max-w-7xl">
                    <div className="grid lg:grid-cols-1 gap-16 items-center">
                        {/* Left: Benefits List */}
                        <div className="space-y-8">
                            <div>
                                <Badge variant={'secondary'} className="mb-4">Why Choose Us</Badge>
                                <h2 className="text-3xl md:text-4xl font-semibold mb-4 ">
                                    Benefits That Matter
                                </h2>
                                <p className="text-lg text-muted-foreground text-pretty w-full">
                                    We're committed to delivering exceptional value and peace of mind throughout your financial journey.
                                </p>
                            </div>
                            <div className="space-y-6">
                                {features.map((feature, index) => (
                                    <div key={index} className="flex items-start gap-4 group">
                                        <div className="w-10 h-10 rounded-xl flex items-center justify-center shrink-0 group-hover:bg-primary/20 transition-colors">
                                            <TrendingUp className="w-5 h-5 text-primary" />
                                        </div>
                                        <div>
                                            <h3 className="font-bold text-lg mb-1">{feature.title}</h3>
                                            <p className="text-sm text-muted-foreground">
                                                {feature.description}
                                            </p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </section>


            <section className="py-24 px-4 bg-gradient-to-b from-background to-muted/20">
                <div className="container mx-auto max-w-7xl">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl md:text-4xl font-bold mb-4">Mortgage Services</h2>
                        <p className="text-muted-foreground text-lg">Discover our full range of Mortgage Services </p>
                    </div>

                    <div className="grid md:grid-cols-3 gap-6">
                        {mortgageservices
                            .map((s, index) => {
                                return (
                                    <Link key={index} href={`/services/${index}`}>
                                        <Card className="bg-white rounded-lg shadow-sm overflow-hidden border border-gray-100 group hover:shadow-xl hover:border-primary/50 transition-all duration-300 hover:-translate-y-1">
                                            <CardContent className="p-8">
                                                <h3 className="text-xl font-bold mb-3 group-hover:text-primary transition-colors">
                                                    {s.title}
                                                </h3>
                                                <p className="text-sm text-muted-foreground mb-6 leading-relaxed">
                                                    {s.shortDescription}
                                                </p>
                                                <div className="flex items-center text-primary font-semibold text-sm group-hover:gap-3 gap-2 transition-all">
                                                    Learn More
                                                    <ArrowRight className="w-4 h-4" />
                                                </div>
                                            </CardContent>
                                        </Card>
                                    </Link>
                                )
                            })}
                    </div>
                </div>
            </section>
            <Cta />

        </div>
    )
}
