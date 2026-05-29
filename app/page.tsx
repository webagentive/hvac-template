import type { Metadata } from "next"
import { Hero } from "@/components/sections/Hero"
import { TrustBar } from "@/components/sections/TrustBar"
import { ServicesGrid } from "@/components/sections/ServicesGrid"
import { WhyChooseUs } from "@/components/sections/WhyChooseUs"
import { FinancingSection } from "@/components/sections/FinancingSection"
import { MembershipSection } from "@/components/sections/MembershipSection"
import { Testimonials } from "@/components/sections/Testimonials"
import { ProcessTimeline } from "@/components/sections/ProcessTimeline"
import { ServiceAreas } from "@/components/sections/ServiceAreas"
import { FAQ } from "@/components/sections/FAQ"
import { CTABanner } from "@/components/sections/CTABanner"
import { company } from "@/config/company"

export const metadata: Metadata = {
  title: `${company.name} | Denver's Premier HVAC Specialists`,
  description: `Denver's most trusted HVAC company. Expert AC repair, heating repair, furnace installation, and maintenance. ${company.rating}★ rated, ${company.yearsExperience} experience. Call ${company.phone}.`,
  openGraph: {
    title: `${company.name} | Denver's Premier HVAC Specialists`,
    description: `Denver's most trusted HVAC company. Expert AC repair, heating repair, furnace installation, and maintenance.`,
    url: "https://summitclimate.com",
    siteName: company.name,
  },
}

export default function HomePage() {
  return (
    <>
      <Hero />
      <TrustBar />
      <ServicesGrid />
      <WhyChooseUs />
      <FinancingSection />
      <MembershipSection />
      <Testimonials limit={6} />
      <ProcessTimeline />
      <ServiceAreas />
      <FAQ />
      <CTABanner
        title="Ready for Total Comfort?"
        subtitle="Same-day service available. Our certified technicians are ready to diagnose, repair, or install your perfect comfort system."
      />
    </>
  )
}
