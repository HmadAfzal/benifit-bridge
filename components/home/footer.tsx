import { ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"

export function Footer() {
  return (
    <footer className="bg-brand-blue text-white py-16">
      <div className="container px-4 mx-auto">
        <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-12">
          <div className="lg:col-span-2 space-y-8">
            <h2 className="text-4xl font-semibold">Let's connect</h2>
            <Button
              variant="outline"
              className="border-white text-white hover:bg-white hover:text-brand-blue px-8 py-6 text-lg h-auto rounded-md group bg-transparent"
            >
              Contact us now
              <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </Button>
          </div>

          <div className="space-y-4">
            <h3 className="font-bold text-lg mb-6">About Howden</h3>
            <ul className="space-y-4 text-white/80">
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  About Howden
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  Careers
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  Contact
                </a>
              </li>
            </ul>
          </div>

          <div className="space-y-4">
            <h3 className="font-bold text-lg mb-6">Explore</h3>
            <ul className="space-y-4 text-white/80">
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  Find us
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  Group site
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  Terms & conditions
                </a>
              </li>
            </ul>
          </div>

          <div className="space-y-4">
            <h3 className="font-bold text-lg mb-6">Policy</h3>
            <ul className="space-y-4 text-white/80">
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  Privacy policy
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  Cookie Policy
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  Our entities
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  )
}
