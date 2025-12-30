import { ShieldCheck } from "lucide-react"

export function Footer() {
  return (
    <footer className="py-12 border-t border-border/50 bg-background">
      <div className="container mx-auto px-4 md:px-6 text-center">
        <div className="flex items-center justify-center gap-2 mb-8">
          <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center">
            <ShieldCheck className="text-primary-foreground w-5 h-5" />
          </div>
          <span className="text-lg font-bold tracking-tight uppercase">Benefit Bridge</span>
        </div>
        <p className="text-sm text-muted-foreground max-w-md mx-auto mb-8">
          Connecting UK employees to their financial future through expert mortgage and protection advice.
        </p>
        <div className="flex justify-center gap-8 mb-8 text-sm font-medium flex-wrap">
          <a href="/" className="hover:text-primary transition-colors">
            Home
          </a>
          <a href="/about" className="hover:text-primary transition-colors">
            About
          </a>
          <a href="/#services" className="hover:text-primary transition-colors">
            Services
          </a>
          <a href="#" className="hover:text-primary transition-colors">
            Privacy
          </a>
          <a href="#" className="hover:text-primary transition-colors">
            Terms
          </a>
          <a href="#" className="hover:text-primary transition-colors">
            Contact
          </a>
        </div>
        <div className="pt-8 border-t border-border/50">
          <p className="text-xs text-muted-foreground leading-relaxed max-w-4xl mx-auto">
            Benefit Bridge is a trading name of Benefit Bridge Ltd. Authorized and regulated by the Financial Conduct
            Authority. Your home may be repossessed if you do not keep up repayments on your mortgage.
          </p>
          <p className="text-xs text-muted-foreground mt-4">
            © 2025 Benefit Bridge Ltd. All rights reserved. Registered in England & Wales.
          </p>
        </div>
      </div>
    </footer>
  )
}
