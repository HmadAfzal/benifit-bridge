import type { Metadata } from "next"

interface MetadataProps {
  title?: string
  description?: string
  keywords?: string[]
  author?: string
}

export const generateMetadata = ({
  title = `Benefit Bridge | Expert Mortgage Advice & Employee Benefits`,
  description = `Benefit Bridge offers expert mortgage advice and comprehensive employee benefit solutions. We simplify the home moving process for your employees, providing peace of mind and expert guidance every step of the way. From first-time buyers to expanding families, we manage the entire mortgage application process to make life easy.`,
  keywords = [
    // Brand specific
    "Benefit Bridge",
    "Benefit Bridge Mortgage",
    "Benefit Bridge Employee Benefits",

    // Core services
    "mortgage advice",
    "employee benefits",
    "home moving support",
    "mortgage application management",
    "first-time buyer mortgage",
    "expert mortgage advisor",

    // Customer benefits
    "home moving made simple",
    "mortgage peace of mind",
    "simplified mortgage process",
    "corporate employee benefits",
    "mortgage advice for employees",
  ],
}: MetadataProps = {}): Metadata => {
  const metadataBase = new URL(process.env.NEXT_PUBLIC_APP_URL || "https://benefitbridge.co.uk/")

  return {
    metadataBase,
    title: {
      template: `%s | Benefit Bridge`,
      default: title,
    },
    description,
    openGraph: {
      title: "Benefit Bridge | Expert Mortgage Advice & Employee Benefits",
      description:
        "Benefit Bridge makes home moving simple with expert mortgage advice and employee benefit solutions. We handle the entire application process for your peace of mind.",
      url: "https://benefitbridge.co.uk/",
      siteName: "Benefit Bridge",
      locale: "en_US",
      type: "website",
    },
    keywords,
    authors: [{ name: "Hmad Afzal" }],
    publisher: "Benefit Bridge",
    formatDetection: {
      email: false,
      address: false,
      telephone: false,
    },
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        "max-video-preview": -1,
        "max-image-preview": "large",
        "max-snippet": -1,
      },
    },
  }
}
