import type { Metadata } from "next"
import { ArrowRight } from "lucide-react"
import Link from "next/link"
import { services } from "@/config/services"
import { TrustBar } from "@/components/sections/TrustBar"
import { CTABanner } from "@/components/sections/CTABanner"
import { SectionHeader } from "@/components/ui/SectionHeader"
import { Badge } from "@/components/ui/Badge"
import { generateServiceMetadata } from "@/lib/metadata"

export const metadata: Metadata = generateServiceMetadata({
  title: "HVAC Services Denver | All Services | Summit Climate Solutions",
  description: "Complete HVAC services in Denver, CO. AC repair, heating repair, furnace installation, maintenance, indoor air quality, ductwork, and more. Call (555) 820-4400.",
  path: "/services",
})

const iconMap: Record<string, string> = {
  Thermometer: "🌡️",
  Wind: "💨",
  Wrench: "🔧",
  Settings: "⚙️",
  Shield: "🛡️",
  AirVent: "🌬️",
  GitBranch: "🔀",
  Sliders: "🎚️",
  Zap: "⚡",
}

export default function ServicesPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative pt-32 pb-20 bg-[#0B1629] overflow-hidden">
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-[#2E6DAD]/6 rounded-full blur-3xl -translate-y-1/2 translate-x-1/3" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <SectionHeader
            badge="All Services"
            title={<>Complete HVAC <span className="text-[#4A90D9]">Solutions</span> for Denver</>}
            subtitle="From emergency repairs to complete system installations, Summit Climate Solutions handles every aspect of your home's comfort. Certified technicians, upfront pricing, satisfaction guaranteed."
          />
        </div>
      </section>

      <TrustBar />

      {/* Services grid */}
      <section className="py-24 bg-[#0B1629]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service) => (
              <Link
                key={service.slug}
                href={service.href}
                className="group bg-[#112240] border border-white/8 hover:border-[#2E6DAD]/40 rounded-2xl p-7 transition-all duration-300 hover:shadow-xl hover:shadow-[#2E6DAD]/5 hover:-translate-y-1"
              >
                <div className="flex items-start justify-between mb-5">
                  <div className="w-12 h-12 bg-[#2E6DAD]/15 rounded-xl flex items-center justify-center text-2xl group-hover:bg-[#2E6DAD]/25 transition-colors">
                    {iconMap[service.icon]}
                  </div>
                  <Badge variant="steel">{service.badge}</Badge>
                </div>
                <h2 className="text-white font-bold text-xl mb-3">{service.title}</h2>
                <p className="text-white/50 text-sm leading-relaxed mb-6">{service.description}</p>
                <div className="flex items-center gap-1.5 text-[#4A90D9] text-sm font-semibold group-hover:gap-3 transition-all">
                  Learn More <ArrowRight size={14} />
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <CTABanner
        title="Not Sure What You Need?"
        subtitle="Our team will diagnose your system and recommend the right solution — no pressure, no upsells. Just honest expert advice."
      />
    </>
  )
}
