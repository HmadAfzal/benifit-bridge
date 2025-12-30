import type React from "react"
import { Geist, Geist_Mono } from "next/font/google"
import "./globals.css"
import  Navbar  from "@/components/navigation/navbar"
import { Footer } from "@/components/navigation/footer"

const geist = Geist({ subsets: ["latin"], variable: "--font-sans" })
const geistMono = Geist_Mono({ subsets: ["latin"], variable: "--font-mono" })

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={`${geist.variable} ${geistMono.variable} font-sans antialiased`}>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  )
}
