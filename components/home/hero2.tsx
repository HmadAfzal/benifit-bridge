import { Button } from "@/components/ui/button"
import { ArrowBigRight, ArrowRight } from "lucide-react"
import Image from "next/image"

export function Hero2() {
    return (
        <section className="relative min-h-[100vh] flex items-center justify-center overflow-hidden pt-20">
            {/* Background Image with Overlay */}
            <div className="absolute inset-0 z-0">
                <Image
                    src="/hero.jpg"
                    alt="Hero Background"
                    fill
                    className="object-cover opacity-70"
                    priority
                />
            </div>

            <div className="container relative z-20 px-4 md:px-6">
                <div className="container text-center">
                    <div className="mx-auto flex max-w-screen-lg flex-col gap-4">
                        <h1 className="text-3xl font-bold lg:text-6xl text-primary">Connecting employees to their financial future</h1>
                        <p className="text-balance text-primary md:text-xl text:lg lg:text-2xl">
                           Boost your employees&apos; financial wellbeing with <br /> expert mortgage & financial planning advice
                        </p>
                    </div>
                    <div className="space-x-3">
                        <Button className="mt-5 bg-white text-primary hover:bg-white/80 p-6 text-lg" variant={'default'}>
                            <a href={'/contact-us'} className="flex items-center gap-4">Contact us <ArrowRight/></a>
                        </Button>
                    </div>
                </div>
            </div>

        </section>
    )
}
