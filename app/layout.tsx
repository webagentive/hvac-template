import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import { Navigation } from "@/components/layout/Navigation"
import { Footer } from "@/components/layout/Footer"
import { StickyMobileCTA } from "@/components/layout/StickyMobileCTA"
import { company } from "@/config/company"

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
})

export const metadata: Metadata = {
  title: {
    default: `${company.name} | ${company.tagline}`,
    template: `%s | ${company.name}`,
  },
  description: `${company.name} provides expert HVAC installation, repair, and maintenance across Denver and surrounding communities. Licensed, insured, ${company.rating}★ rated with ${company.reviewCount}+ reviews.`,
  openGraph: {
    siteName: company.name,
    type: "website",
    locale: "en_US",
  },
  robots: { index: true, follow: true },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={inter.className}>
      <body className="bg-[#0B1629] text-white antialiased pb-16 lg:pb-0">
        <Navigation />
        <main className="min-h-screen">
          {children}
        </main>
        <Footer />
        <StickyMobileCTA />
      </body>
    </html>
  )
}
