// import { ShieldCheck } from "lucide-react"

// export function Footer() {
//   return (
//     <footer className="py-12 border-t border-border/50 bg-background">
//       <div className="container mx-auto px-4 md:px-6 text-center">
//         <div className="flex items-center justify-center gap-2 mb-8">
//           <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center">
//             <ShieldCheck className="text-primary-foreground w-5 h-5" />
//           </div>
//           <span className="text-lg font-bold tracking-tight uppercase">Benefit Bridge</span>
//         </div>
//         <p className="text-sm text-muted-foreground max-w-md mx-auto mb-8">
//           Connecting UK employees to their financial future through expert mortgage and protection advice.
//         </p>
//         <div className="flex justify-center gap-8 mb-8 text-sm font-medium flex-wrap">
//           <a href="/" className="hover:text-primary transition-colors">
//             Home
//           </a>
//           <a href="/about" className="hover:text-primary transition-colors">
//             About
//           </a>
//           <a href="/#services" className="hover:text-primary transition-colors">
//             Services
//           </a>
//           <a href="#" className="hover:text-primary transition-colors">
//             Privacy
//           </a>
//           <a href="#" className="hover:text-primary transition-colors">
//             Terms
//           </a>
//           <a href="#" className="hover:text-primary transition-colors">
//             Contact
//           </a>
//         </div>
//         <div className="pt-8 border-t border-border/50">
//           <p className="text-xs text-muted-foreground leading-relaxed max-w-4xl mx-auto">
//             Benefit Bridge is a trading name of Benefit Bridge Ltd. Authorized and regulated by the Financial Conduct
//             Authority. Your home may be repossessed if you do not keep up repayments on your mortgage.
//           </p>
//           <p className="text-xs text-muted-foreground mt-4">
//             © 2025 Benefit Bridge Ltd. All rights reserved. Registered in England & Wales.
//           </p>
//         </div>
//       </div>
//     </footer>
//   )
// }



import { Facebook, Instagram, Linkedin, MessageCircle } from "lucide-react"
import Image from "next/image"

export function Footer() {
  return (
    <footer className="bg-primary text-white py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          <div className="space-y-6">
            <div className="flex items-center gap-3">
               <Image src={'/brand.jpeg'} height={130} width={130} alt="horizonn" />
            </div>
          </div>

          <div className="space-y-6">
            <h3 className="text-lg font-bold">Useful information</h3>
            <ul className="space-y-2 text-sm text-gray-300">
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  Your Rights
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  Privacy Policy
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  Cookie Policy
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  Site Links
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  Investor Relations
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  Modern Slavery and Human Trafficking
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  My Mortgage Account
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  Gender Pay Gap
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  Whistleblowing Policy
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  Anti-Bribery and Corruption
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  Help and Support
                </a>
              </li>
            </ul>
          </div>

          <div className="space-y-6">
            <h3 className="text-lg font-bold">Contact</h3>
            <ul className="space-y-2 text-sm text-gray-300">
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  Contact us
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  Media and press
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  Refer a Friend
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  Careers
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  Data Request
                </a>
              </li>
            </ul>
          </div>

          <div className="space-y-8">
            <div className="space-y-4">
              <h3 className="text-lg font-bold">Follow us</h3>
              <div className="flex gap-4">
                <a
                  href="#"
                  className="w-10 h-10 rounded-full border border-gray-500 flex items-center justify-center hover:bg-white hover:text-footer-bg transition-all"
                >
                  <Facebook size={20} />
                </a>
                <a
                  href="#"
                  className="w-10 h-10 rounded-full border border-gray-500 flex items-center justify-center hover:bg-white hover:text-footer-bg transition-all"
                >
                  <Instagram size={20} />
                </a>
                <a
                  href="#"
                  className="w-10 h-10 rounded-full border border-gray-500 flex items-center justify-center hover:bg-white hover:text-footer-bg transition-all"
                >
                  <Linkedin size={20} />
                </a>
              </div>
            </div>

            {/* <div className="space-y-4">
              <h3 className="text-lg font-bold">Download our app</h3>
              <div className="flex flex-col gap-3">
                <a href="#" className="inline-block">
                  <img
                    src="https://upload.wikimedia.org/wikipedia/commons/3/3c/Download_on_the_App_Store_Badge.svg"
                    alt="App Store"
                    className="h-10"
                  />
                </a>
                <a href="#" className="inline-block">
                  <img
                    src="https://upload.wikimedia.org/wikipedia/commons/7/78/Google_Play_Store_badge_EN.svg"
                    alt="Google Play"
                    className="h-10"
                  />
                </a>
              </div>
            </div> */}
          </div>
        </div>

        <div className="border-t border-gray-600 pt-8 space-y-4 text-xs text-gray-400">
          <p>©2026 Benefit Bridge. All rights reserved.</p>
          <p>
            Benefit Bridge Limited is authorised and regulated by the Financial Conduct Authority.
          </p>
        </div>
      </div>
    </footer>
  )
}
