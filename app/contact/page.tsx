import type { Metadata } from "next"
import { Phone, Mail, MapPin, Clock } from "lucide-react"
import { company } from "@/config/company"
import { TrustBar } from "@/components/sections/TrustBar"
import { ContactForm } from "@/components/sections/ContactForm"
import { SectionHeader } from "@/components/ui/SectionHeader"
import { generateServiceMetadata } from "@/lib/metadata"

export const metadata: Metadata = generateServiceMetadata({
  title: "Contact Summit Climate Solutions | Denver HVAC",
  description: "Contact Summit Climate Solutions for HVAC repair, installation, and maintenance in Denver, CO. Call (555) 820-4400 or book online. We respond within 2 hours.",
  path: "/contact",
})

const hours = [
  { day: "Monday – Friday", hours: "8:00 AM – 6:00 PM" },
  { day: "Saturday", hours: "8:00 AM – 4:00 PM" },
  { day: "Sunday", hours: "By appointment" },
  { day: "Emergency Service", hours: "24 / 7 / 365" },
]

export default function ContactPage() {
  return (
    <>
      <section className="relative pt-32 pb-20 bg-[#0B1629] overflow-hidden">
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-[#2E6DAD]/6 rounded-full blur-3xl -translate-y-1/2 translate-x-1/3" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <SectionHeader
            badge="Contact Us"
            title={<>Let's Talk <span className="text-[#4A90D9]">About Your Comfort</span></>}
            subtitle="Whether you have a question, need a quote, or want to book a service, we're here and ready to help. Real people answer our phones — no bots, no runaround."
          />
        </div>
      </section>

      <TrustBar />

      <section className="py-24 bg-[#0B1629]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
            {/* Contact info */}
            <div className="space-y-6">
              <div className="bg-[#112240] border border-white/8 rounded-2xl p-7">
                <h3 className="text-white font-bold text-lg mb-5">Contact Information</h3>
                <div className="space-y-5">
                  <a href={company.phoneHref} className="flex items-start gap-3 group">
                    <div className="w-9 h-9 bg-[#2E6DAD]/15 rounded-lg flex items-center justify-center shrink-0 group-hover:bg-[#2E6DAD]/25 transition-colors">
                      <Phone size={16} className="text-[#4A90D9]" />
                    </div>
                    <div>
                      <div className="text-white/40 text-xs mb-0.5">Phone</div>
                      <div className="text-white font-semibold">{company.phone}</div>
                    </div>
                  </a>
                  <a href={`mailto:${company.email}`} className="flex items-start gap-3 group">
                    <div className="w-9 h-9 bg-[#2E6DAD]/15 rounded-lg flex items-center justify-center shrink-0 group-hover:bg-[#2E6DAD]/25 transition-colors">
                      <Mail size={16} className="text-[#4A90D9]" />
                    </div>
                    <div>
                      <div className="text-white/40 text-xs mb-0.5">Email</div>
                      <div className="text-white font-semibold">{company.email}</div>
                    </div>
                  </a>
                  <div className="flex items-start gap-3">
                    <div className="w-9 h-9 bg-[#2E6DAD]/15 rounded-lg flex items-center justify-center shrink-0">
                      <MapPin size={16} className="text-[#4A90D9]" />
                    </div>
                    <div>
                      <div className="text-white/40 text-xs mb-0.5">Address</div>
                      <div className="text-white font-semibold">{company.address}</div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-[#112240] border border-white/8 rounded-2xl p-7">
                <div className="flex items-center gap-2 mb-4">
                  <Clock size={16} className="text-[#4A90D9]" />
                  <h3 className="text-white font-bold text-lg">Hours</h3>
                </div>
                <div className="space-y-3">
                  {hours.map((h) => (
                    <div key={h.day} className="flex items-center justify-between">
                      <span className="text-white/55 text-sm">{h.day}</span>
                      <span className={`text-sm font-medium ${h.day === "Emergency Service" ? "text-red-400" : "text-white"}`}>
                        {h.hours}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="bg-red-950/30 border border-red-500/20 rounded-2xl p-5">
                <div className="text-red-400 font-bold text-sm mb-1">HVAC Emergency?</div>
                <p className="text-white/50 text-xs mb-3">No heat, no AC, or safety concern? Call now — we answer 24/7.</p>
                <a
                  href={company.phoneHref}
                  className="inline-flex items-center gap-2 px-4 py-2 bg-red-600 hover:bg-red-700 text-white text-sm font-bold rounded-lg transition-colors"
                >
                  <Phone size={14} />
                  Emergency Line
                </a>
              </div>
            </div>

            {/* Form */}
            <div className="lg:col-span-2">
              <h3 className="text-white font-bold text-xl mb-6">Send Us a Message</h3>
              <ContactForm />
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
