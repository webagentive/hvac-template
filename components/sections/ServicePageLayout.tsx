import { CheckCircle, Phone, Calendar } from "lucide-react"
import Link from "next/link"
import { company } from "@/config/company"
import { TrustBar } from "./TrustBar"
import { ProcessTimeline } from "./ProcessTimeline"
import { Testimonials } from "./Testimonials"
import { FinancingSection } from "./FinancingSection"
import { FAQ } from "./FAQ"
import { CTABanner } from "./CTABanner"
import { ServiceHero } from "./ServiceHero"
import { SectionHeader } from "@/components/ui/SectionHeader"
import { Badge } from "@/components/ui/Badge"
import type { Service } from "@/config/services"

interface ServicePageLayoutProps {
  service: Service
}

export function ServicePageLayout({ service }: ServicePageLayoutProps) {
  return (
    <>
      <ServiceHero
        badge={service.badge}
        title={service.title}
        description={service.longDescription}
        highlights={service.included.slice(0, 4)}
      />

      <TrustBar />

      {/* What's Included */}
      <section className="py-24 bg-[#0B1629]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
            <div>
              <SectionHeader
                badge="What's Included"
                title={<>Everything You Need, <span className="text-[#4A90D9]">Nothing You Don't</span></>}
                subtitle="We scope every job clearly upfront so you know exactly what you're getting."
                align="left"
              />
              <div className="mt-8 space-y-3">
                {service.included.map((item) => (
                  <div key={item} className="flex items-start gap-3 p-3 bg-[#112240] border border-white/6 rounded-xl">
                    <CheckCircle size={16} className="text-[#4A90D9] shrink-0 mt-0.5" />
                    <span className="text-white/70 text-sm">{item}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Contact panel */}
            <div className="lg:sticky lg:top-24 space-y-4">
              <div className="bg-[#112240] border border-white/8 rounded-2xl p-7">
                <h3 className="text-white font-bold text-xl mb-2">Get a Free Quote</h3>
                <p className="text-white/50 text-sm mb-6">Speak with a certified technician about your {service.shortTitle} needs. No pressure, honest advice.</p>
                <div className="space-y-3">
                  <a
                    href={company.phoneHref}
                    className="flex items-center justify-center gap-2.5 w-full py-3.5 bg-[#2E6DAD] hover:bg-[#1d5a94] text-white font-bold rounded-xl transition-all duration-200 hover:-translate-y-0.5"
                  >
                    <Phone size={18} />
                    Call {company.phone}
                  </a>
                  <Link
                    href="/book"
                    className="flex items-center justify-center gap-2.5 w-full py-3.5 border border-white/12 text-white/80 hover:text-white font-semibold rounded-xl transition-colors hover:bg-white/5"
                  >
                    <Calendar size={18} />
                    Book Online
                  </Link>
                </div>
              </div>

              <div className="bg-[#112240] border border-white/8 rounded-2xl p-5">
                <div className="flex items-center gap-2 mb-3">
                  <Badge variant="success">90-Day Warranty</Badge>
                </div>
                <p className="text-white/50 text-sm">All repairs include a 90-day parts and labor warranty. New installations carry a 1-year labor warranty plus full manufacturer coverage.</p>
              </div>

              <div className="bg-amber-500/8 border border-amber-500/20 rounded-2xl p-5">
                <p className="text-amber-400/80 text-sm font-medium">
                  ★ Summit Comfort Club members get priority scheduling and 15% off all parts.
                </p>
                <Link href="/membership" className="text-[#4A90D9] text-xs mt-2 block hover:text-white transition-colors">
                  Learn about membership →
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Process */}
      <ProcessTimeline
        steps={service.process}
        badge={`${service.shortTitle} Process`}
        title={<>How Our <span className="text-[#4A90D9]">{service.shortTitle}</span> Service Works</>}
        subtitle="We've made our service process transparent and straightforward from your first call to final follow-up."
      />

      {/* Reviews */}
      <Testimonials
        limit={3}
        title={<>What Customers Say About Our <span className="text-[#4A90D9]">{service.shortTitle}</span> Service</>}
        subtitle="Real reviews from real Denver homeowners."
      />

      <FinancingSection />

      {/* FAQ */}
      <FAQ
        items={service.faqs}
        badge={`${service.shortTitle} FAQ`}
        title={<>Common Questions About <span className="text-[#4A90D9]">{service.title}</span></>}
      />

      <CTABanner
        title={`Need ${service.shortTitle} in Denver?`}
        subtitle="Certified technicians, upfront pricing, satisfaction guaranteed. Available same-day for urgent needs."
      />
    </>
  )
}
