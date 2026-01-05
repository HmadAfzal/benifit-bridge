import { Button } from "@/components/ui/button"
import { Wrench, ArrowLeft } from "lucide-react"
import Link from "next/link"

export default function ServiceNotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-background">
          <div className="text-center">
            <h1 className="text-4xl lg:text-5xl font-bold text-foreground mb-4">Page Not Found</h1>
            <p className="text-muted-foreground text-lg mb-8 max-w-2xl mx-auto">
              The page you&apos;re looking for doesn&apos;t exist or may have been moved. Check out our available services or
              contact us for assistance.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg">
                <Link href="/contact-us">
                  Contact Us
                </Link>
              </Button>
              <Button variant="outline" asChild size="lg">
                <Link href="/">
                  <ArrowLeft className="w-4 h-4 mr-2" />
                  Back to Home
                </Link>
              </Button>
            </div>
          </div>
    </div>
  )
}