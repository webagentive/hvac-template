import type { Metadata } from "next"
import { Phone, Clock, CheckCircle } from "lucide-react"
import { company } from "@/config/company"
import { TrustBar } from "@/components/sections/TrustBar"
import { BookingSection } from "@/components/sections/BookingSection"
import { SectionHeader } from "@/components/ui/SectionHeader"
import { generateServiceMetadata } from "@/lib/metadata"

export const metadata: Metadata = generateServiceMetadata({
  title: "Book HVAC Appointment Denver | Summit Climate Solutions",
  description: "Book an HVAC service appointment with Summit Climate Solutions in Denver, CO. Same-day availability, certified technicians, upfront pricing. Call (555) 820-4400.",
  path: "/book",
})

export default function BookPage() {
  return (
    <>
      <section className="relative pt-32 pb-20 bg-[#0B1629] overflow-hidden">
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-[#2E6DAD]/6 rounded-full blur-3xl -translate-y-1/2 translate-x-1/3" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <SectionHeader
            badge="Book a Service"
            title={<>Schedule Your <span className="text-[#4A90D9]">Appointment</span></>}
            subtitle="Book online or call us directly. We'll confirm your appointment within 30 minutes during business hours and send you a technician profile before they arrive."
          />
        </div>
      </section>

      <TrustBar />

      <section className="py-24 bg-[#0B1629]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
            {/* Info panel */}
            <div className="space-y-5">
              <div className="bg-[#112240] border border-white/8 rounded-2xl p-6">
                <h3 className="text-white font-bold text-lg mb-4">Prefer to Call?</h3>
                <p className="text-white/50 text-sm mb-4">Our team is available to book your appointment directly by phone.</p>
                <a
                  href={company.phoneHref}
                  className="flex items-center justify-center gap-2.5 w-full py-3.5 bg-[#2E6DAD] hover:bg-[#1d5a94] text-white font-bold rounded-xl transition-all"
                >
                  <Phone size={18} />
                  {company.phone}
                </a>
              </div>

              <div className="bg-[#112240] border border-white/8 rounded-2xl p-6">
                <div className="flex items-center gap-2 mb-4">
                  <Clock size={16} className="text-[#4A90D9]" />
                  <h3 className="text-white font-bold">Service Hours</h3>
                </div>
                <div className="space-y-2 text-sm">
                  <div className="flex justify-between">
                    <span className="text-white/50">Mon – Fri</span>
                    <span className="text-white">8am – 6pm</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-white/50">Saturday</span>
                    <span className="text-white">8am – 4pm</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-white/50">Emergency</span>
                    <span className="text-red-400 font-semibold">24/7/365</span>
                  </div>
                </div>
              </div>

              <div className="bg-[#112240] border border-white/8 rounded-2xl p-6">
                <h3 className="text-white font-bold mb-4">What to Expect</h3>
                <div className="space-y-3">
                  {[
                    "Confirmation within 30 minutes",
                    "Technician profile sent before arrival",
                    "Upfront pricing before any work begins",
                    "90-day warranty on all repairs",
                  ].map((item) => (
                    <div key={item} className="flex items-start gap-2.5">
                      <CheckCircle size={14} className="text-[#4A90D9] shrink-0 mt-0.5" />
                      <span className="text-white/60 text-sm">{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Booking form */}
            <div className="lg:col-span-2">
              <h3 className="text-white font-bold text-xl mb-6">Request Your Appointment</h3>
              <BookingSection />
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
