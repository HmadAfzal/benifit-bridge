import {
  Home,
  RefreshCw,
  Building,
  KeyRound,
  Shield,
  Landmark,
  Umbrella,
  BriefcaseBusiness,
  HeartPulse,
  Activity,
  Stethoscope,
  Building2,
  type LucideIcon,
} from "lucide-react"

export interface Service {
  id: string
  title: string
  description: string
  longDescription: string
  icon: LucideIcon
  features: string[]
  benefits: string[]
  faqs?: { question: string; answer: string }[]
}

export const services: Service[] = [
  {
    id: "mortgage",
    title: "Mortgage Services",
    description: "Expert guidance on residential mortgages tailored to your financial situation.",
    longDescription:
      "At Benefit Bridge, we believe securing a home should be an empowering milestone, not a source of stress. Our expert mortgage advisory team navigates the intricate landscape of the UK property market to find the bespoke lending solutions that align with your long-term financial aspirations and lifestyle goals.",
    icon: Home,
    features: [
      "Bespoke mortgage strategy & assessment",
      "Priority access to 90+ UK lenders",
      "Full end-to-end application management",
      "Proactive long-term financial reviews",
    ],
    benefits: [
      "Stress-free application process",
      "Potential savings on interest rates",
      "Tailored advice for your specific needs",
    ],
    faqs: [
      {
        question: "How much can I borrow?",
        answer:
          "Typically, lenders offer 4-4.5 times your annual income, but this varies based on your credit score, deposit, and outgoings.",
      },
      {
        question: "What documents do I need?",
        answer: "You'll generally need 3 months of payslips, bank statements, proof of ID, and proof of address.",
      },
    ],
  },
  {
    id: "remortgage",
    title: "Remortgage",
    description: "Switch to a better deal and potentially save thousands with our advisory services.",
    longDescription:
      "Remortgaging is often the single most effective way to optimize your household finances. We perform a forensic analysis of the current UK lending market to identify opportunities for significant savings, capital release, or term adjustments that put you back in control of your monthly outgoings.",
    icon: RefreshCw,
    features: [
      "Comprehensive market analysis",
      "Debt consolidation options",
      "Equity release guidance",
      "Fixed-rate switch management",
    ],
    benefits: [
      "Lower monthly payments",
      "Release capital for home improvements",
      "Protection against rising interest rates",
    ],
  },
  {
    id: "buy-to-let",
    title: "Buy to Let",
    description: "Build your property portfolio with specialist buy-to-let mortgage solutions.",
    longDescription:
      "Success in the rental market requires more than just a property; it requires a sophisticated financing strategy. Our buy-to-let specialists partner with both novice and seasoned landlords to secure high-yield lending structures that protect margins and facilitate sustainable portfolio growth.",
    icon: Building,
    features: [
      "Portfolio review services",
      "Specialist lender access",
      "Yield calculation support",
      "Limited company BTL options",
    ],
    benefits: ["Professional investment structure", "Competitive investment rates", "Expert market insights"],
  },
  {
    id: "first-time-buyer",
    title: "First Time Buyer",
    description: "Step onto the property ladder with confidence. We guide you through every step.",
    longDescription:
      "Stepping onto the property ladder is a major life transition that deserves dedicated expert support. We demystify the entire home-buying journey—from decoding complex jargon to navigating government schemes—ensuring you move into your first home with total confidence and clarity.",
    icon: KeyRound,
    features: [
      "Step-by-step buyer's guide",
      "Help to Buy & Shared Ownership expertise",
      "Affordability assessments",
      "Solicitor & surveyor coordination",
    ],
    benefits: [
      "Confidence in your first purchase",
      "Clear understanding of all costs",
      "Priority support throughout the process",
    ],
  },
  {
    id: "residential-protection",
    title: "Residential Protection",
    description: "Safeguard your home and family with comprehensive insurance cover.",
    longDescription:
      "True financial security is built on a foundation of robust protection. Our residential protection planning ensures that your home, your lifestyle, and your family's future remain uncompromised, providing a vital safety net that adapts to your changing circumstances over time.",
    icon: Shield,
    features: [
      "Life insurance consultation",
      "Critical illness cover",
      "Income protection planning",
      "Mortgage payment protection",
    ],
    benefits: ["Financial security for loved ones", "Peace of mind for the future", "Tailored coverage levels"],
  },
  {
    id: "residential-mortgage",
    title: "Residential Mortgage",
    description: "Secure competitive rates on residential mortgages with exclusive deals.",
    longDescription:
      "Our core residential mortgage service focuses on finding the perfect fit for your primary residence. We work with a vast network of lenders to find the most favorable terms for your unique situation.",
    icon: Landmark,
    features: [
      "Standard residential lending",
      "Self-employed mortgage solutions",
      "High net worth advisory",
      "New build specialist advice",
    ],
    benefits: ["Access to high-street & niche lenders", "Competitive term options", "Dedicated case manager"],
  },
  {
    id: "relevant-life",
    title: "Relevant Life Plan",
    description: "Tax-efficient life insurance for business owners and employees.",
    longDescription:
      "A Relevant Life Plan is a cost-effective way for small businesses to provide life insurance for their employees. It offers significant tax advantages for both the employer and the employee while providing essential cover.",
    icon: Umbrella,
    features: [
      "Tax-efficient structure",
      "Director & employee coverage",
      "Small business focused",
      "Trust-based payout system",
    ],
    benefits: ["Corporation tax relief", "No benefit-in-kind tax for employees", "Enhanced employee benefit package"],
  },
  {
    id: "business-mortgage",
    title: "Business Mortgages",
    description: "Commercial property financing for business premises and investments.",
    longDescription:
      "Fuel your business growth with the right commercial financing. We help businesses secure mortgages for their own premises or for commercial investment purposes, navigating the complexities of business lending.",
    icon: BriefcaseBusiness,
    features: [
      "Owner-occupied commercial loans",
      "Commercial investment financing",
      "Development finance access",
      "Bridging loan options",
    ],
    benefits: [
      "Flexible business financing",
      "Support for business expansion",
      "Specialist commercial lending expertise",
    ],
  },
  {
    id: "income-protection",
    title: "Income Protection",
    description: "Secure your monthly income if you're unable to work due to illness or injury.",
    longDescription:
      "Income protection is designed to provide a monthly tax-free payment if you are unable to work due to illness or an accident. It helps you maintain your standard of living and cover essential costs like mortgages and bills until you can return to work.",
    icon: Activity,
    features: [
      "Tax-free monthly payments",
      "Coverage for illness and injury",
      "Flexible deferral periods",
      "Protection until retirement",
    ],
    benefits: [
      "Financial independence during recovery",
      "Maintains your mortgage commitments",
      "Peace of mind for your family",
    ],
    faqs: [
      {
        question: "Does it cover redundancy?",
        answer:
          "Standard income protection usually focuses on health-related inability to work. Separate redundancy cover may be required.",
      },
    ],
  },
  {
    id: "life-insurance",
    title: "Life Insurance",
    description: "Provide a lump sum to your loved ones, ensuring their financial security.",
    longDescription:
      "Life insurance provides a tax-free lump sum to your beneficiaries in the event of your death. It's a fundamental part of financial planning, ensuring that your family can pay off the mortgage and maintain their lifestyle if you're no longer there.",
    icon: HeartPulse,
    features: [
      "Fixed or decreasing term options",
      "Terminal illness cover included",
      "Trust planning advice",
      "Joint or single life policies",
    ],
    benefits: ["Secures your family's home", "Clears outstanding debts", "Provides for children's future"],
    faqs: [
      {
        question: "How much cover do I need?",
        answer: "A common rule of thumb is 10 times your annual salary, plus the value of your outstanding mortgage.",
      },
    ],
  },
  {
    id: "critical-illness",
    title: "Critical Illness",
    description: "Financial support following the diagnosis of a serious health condition.",
    longDescription:
      "Critical Illness cover pays out a tax-free lump sum if you are diagnosed with a specified serious illness. This money can be used to pay off your mortgage, fund private medical treatment, or adapt your home to your needs.",
    icon: Stethoscope,
    features: [
      "Covers 40+ serious conditions",
      "Children's cover often included",
      "Lump sum tax-free payment",
      "Total and permanent disability cover",
    ],
    benefits: ["Focus on recovery, not bills", "Adapts your lifestyle to new needs", "Protects your long-term assets"],
    faqs: [
      {
        question: "Is it different from Life Insurance?",
        answer:
          "Yes, it pays out upon diagnosis of a condition you survive, whereas Life Insurance pays out upon death.",
      },
    ],
  },
  {
    id: "home-insurance",
    title: "Home Insurance",
    description: "Comprehensive buildings and contents cover for your property.",
    longDescription:
      "Protect your most valuable asset and everything inside it. Our home insurance solutions cover buildings and contents against fire, theft, flood, and other unforeseen events, with options for accidental damage and personal possessions cover.",
    icon: Building2,
    features: [
      "Buildings & Contents combined",
      "Accidental damage options",
      "New for old replacement",
      "Legal expenses cover",
    ],
    benefits: ["Complete property protection", "Secure your belongings", "Emergency home assistance"],
    faqs: [
      {
        question: "Is buildings insurance mandatory?",
        answer: "If you have a mortgage, your lender will usually require you to have buildings insurance in place.",
      },
    ],
  },
]
