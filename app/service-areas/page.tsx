import type { Metadata } from "next"
import { MapPin, Phone, CheckCircle } from "lucide-react"
import Link from "next/link"
import { company } from "@/config/company"
import { TrustBar } from "@/components/sections/TrustBar"
import { CTABanner } from "@/components/sections/CTABanner"
import { SectionHeader } from "@/components/ui/SectionHeader"
import { generateServiceMetadata } from "@/lib/metadata"

export const metadata: Metadata = generateServiceMetadata({
  title: "HVAC Service Areas | Denver Metro | Summit Climate Solutions",
  description: "Summit Climate Solutions serves Denver, Aurora, Lakewood, Arvada, Westminster, Thornton, Englewood, Littleton, Highlands Ranch, Parker, and surrounding communities.",
  path: "/service-areas",
})

const areaDetails = [
  { city: "Denver", description: "Our home base. We serve all Denver neighborhoods from Capitol Hill to Stapleton." },
  { city: "Aurora", description: "Full HVAC services across Aurora including Quincy Highlands and Southshore." },
  { city: "Lakewood", description: "Serving Lakewood homeowners with same-day service availability." },
  { city: "Arvada", description: "Complete heating and cooling services throughout the Arvada area." },
  { city: "Westminster", description: "HVAC repair and installation for Westminster residential and commercial customers." },
  { city: "Thornton", description: "Fast, reliable service for Thornton homeowners and businesses." },
  { city: "Englewood", description: "Full service HVAC in Englewood with expert technicians familiar with the area." },
  { city: "Littleton", description: "Premium HVAC service in Littleton with same-day availability most days." },
  { city: "Highlands Ranch", description: "Serving Highlands Ranch's growing community with expert HVAC solutions." },
  { city: "Parker", description: "Making the drive to Parker — serving this growing community with full service." },
]

export default function ServiceAreasPage() {
  return (
    <>
      <section className="relative pt-32 pb-20 bg-[#0B1629] overflow-hidden">
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-[#2E6DAD]/6 rounded-full blur-3xl -translate-y-1/2 translate-x-1/3" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <SectionHeader
            badge="Service Areas"
            title={<>Serving the <span className="text-[#4A90D9]">Greater Denver Metro</span></>}
            subtitle="Summit Climate Solutions provides expert HVAC repair, installation, and maintenance across the Denver metropolitan area and surrounding communities. If you're in the front range, we can help."
          />
        </div>
      </section>

      <TrustBar />

      <section className="py-24 bg-[#0B1629]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Area cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 mb-20">
            {areaDetails.map((area) => (
              <div key={area.city} className="bg-[#112240] border border-white/8 hover:border-[#2E6DAD]/30 rounded-2xl p-6 transition-colors">
                <div className="flex items-center gap-2 mb-3">
                  <MapPin size={16} className="text-[#4A90D9]" />
                  <h3 className="text-white font-bold text-lg">{area.city}</h3>
                </div>
                <p className="text-white/50 text-sm leading-relaxed">{area.description}</p>
              </div>
            ))}
          </div>

          {/* What's available in all areas */}
          <div className="bg-[#112240] border border-white/8 rounded-2xl p-8 mb-12">
            <h3 className="text-white font-bold text-2xl mb-6">All Services Available in Every Area</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
              {[
                "AC Repair & Installation",
                "Heating Repair",
                "Furnace Installation",
                "HVAC Maintenance",
                "Indoor Air Quality",
                "Ductwork",
                "Thermostat Installation",
                "Emergency Service 24/7",
                "Financing Available",
              ].map((s) => (
                <div key={s} className="flex items-center gap-2.5 text-white/65 text-sm">
                  <CheckCircle size={14} className="text-[#4A90D9] shrink-0" />
                  {s}
                </div>
              ))}
            </div>
          </div>

          {/* Not in your area */}
          <div className="max-w-xl mx-auto text-center bg-[#112240] border border-white/8 rounded-2xl p-8">
            <h3 className="text-white font-bold text-xl mb-3">Don't See Your City?</h3>
            <p className="text-white/55 text-sm mb-6">
              We regularly expand our service area. Give us a call — there's a good chance we can help, or we'll point you toward a qualified provider.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <a
                href={company.phoneHref}
                className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-[#2E6DAD] hover:bg-[#1d5a94] text-white font-semibold rounded-xl transition-all"
              >
                <Phone size={16} />
                Call {company.phone}
              </a>
              <Link
                href="/contact"
                className="inline-flex items-center justify-center px-6 py-3 border border-white/10 text-white/70 hover:text-white font-semibold rounded-xl transition-colors"
              >
                Send a Message
              </Link>
            </div>
          </div>
        </div>
      </section>

      <CTABanner
        title="Denver's Most Trusted HVAC Team"
        subtitle="Serving the front range with certified technicians, upfront pricing, and same-day service when you need it most."
      />
    </>
  )
}
