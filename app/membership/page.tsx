import type { Metadata } from "next"
import { CheckCircle, X, Star, ArrowRight, Phone } from "lucide-react"
import Link from "next/link"
import { company } from "@/config/company"
import { TrustBar } from "@/components/sections/TrustBar"
import { Testimonials } from "@/components/sections/Testimonials"
import { CTABanner } from "@/components/sections/CTABanner"
import { SectionHeader } from "@/components/ui/SectionHeader"
import { generateServiceMetadata } from "@/lib/metadata"

export const metadata: Metadata = generateServiceMetadata({
  title: "Summit Comfort Club | HVAC Membership Plan Denver | Summit Climate Solutions",
  description: "Join the Summit Comfort Club maintenance plan. $199/year includes annual tune-up, priority scheduling, 15% parts discount, and no after-hours fees. Call (555) 820-4400.",
  path: "/membership",
})

const included = [
  { item: "Annual heating + cooling tune-up", value: "$149" },
  { item: "Priority scheduling — move to the front of the line", value: "Priceless" },
  { item: "15% discount on all parts and repairs", value: "Avg. $85/year" },
  { item: "No after-hours or emergency service fees", value: "Up to $150/call" },
  { item: "Annual filter replacement (standard sizes)", value: "$30" },
  { item: "Free diagnostic on covered visits", value: "$89" },
  { item: "Annual system health report", value: "Included" },
  { item: "Exclusive member promotions", value: "Varies" },
]

const comparison = [
  { feature: "Annual tune-up included", member: true, standard: false },
  { feature: "Priority scheduling", member: true, standard: false },
  { feature: "15% discount on parts", member: true, standard: false },
  { feature: "No after-hours fees", member: true, standard: false },
  { feature: "Free diagnostic on covered calls", member: true, standard: false },
  { feature: "Filter replacement included", member: true, standard: false },
  { feature: "System health report", member: true, standard: false },
]

export default function MembershipPage() {
  return (
    <>
      <section className="relative pt-32 pb-20 bg-[#0B1629] overflow-hidden">
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-[#2E6DAD]/6 rounded-full blur-3xl -translate-y-1/2 translate-x-1/3" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="flex justify-center mb-6">
            <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-amber-500/10 border border-amber-500/20 text-amber-400 text-sm font-semibold">
              <Star size={14} className="fill-amber-400" />
              Summit Comfort Club
            </span>
          </div>
          <h1 className="text-5xl sm:text-6xl font-bold text-white leading-tight mb-5">
            Your HVAC. <span className="text-[#4A90D9]">Protected All Year.</span>
          </h1>
          <p className="text-xl text-white/55 max-w-2xl mx-auto leading-relaxed">
            Join hundreds of Denver homeowners who enjoy peace of mind, priority service, and real savings with the Summit Comfort Club.
          </p>
        </div>
      </section>

      <TrustBar />

      {/* Plans */}
      <section className="py-24 bg-[#0B1629]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-20">
            {/* Main plan */}
            <div className="lg:col-span-2 bg-gradient-to-br from-[#2E6DAD]/20 to-[#112240] border border-[#2E6DAD]/30 rounded-3xl p-8">
              <div className="flex items-center gap-2 mb-5">
                <Star size={18} className="text-amber-400 fill-amber-400" />
                <span className="text-amber-400 font-bold text-sm">Most Popular</span>
              </div>
              <h2 className="text-white font-bold text-3xl mb-1">Summit Comfort Club</h2>
              <p className="text-white/50 text-sm mb-6">Annual HVAC maintenance membership</p>

              <div className="flex items-end gap-3 mb-2">
                <div className="text-6xl font-bold text-white">$199</div>
                <div className="text-white/40 mb-2">/year</div>
              </div>
              <div className="text-white/35 text-sm mb-8">or $19/month — no contracts, cancel anytime</div>

              <div className="space-y-3 mb-8">
                {included.map(({ item, value }) => (
                  <div key={item} className="flex items-center justify-between py-2 border-b border-white/5">
                    <div className="flex items-center gap-3">
                      <CheckCircle size={15} className="text-[#4A90D9] shrink-0" />
                      <span className="text-white/70 text-sm">{item}</span>
                    </div>
                    <span className="text-[#4A90D9] text-xs font-semibold shrink-0 ml-4">{value}</span>
                  </div>
                ))}
              </div>

              <div className="bg-[#2E6DAD]/10 border border-[#2E6DAD]/20 rounded-xl p-4 mb-6">
                <div className="text-white font-bold">Total value: $503+</div>
                <div className="text-white/50 text-sm">You pay only $199/year. Average savings: $304.</div>
              </div>

              <div className="flex flex-col sm:flex-row gap-3">
                <Link
                  href="/book"
                  className="flex-1 flex items-center justify-center gap-2 py-4 bg-[#2E6DAD] hover:bg-[#1d5a94] text-white font-bold rounded-xl transition-all hover:-translate-y-0.5 shadow-lg shadow-[#2E6DAD]/20"
                >
                  Join Now — $199/year <ArrowRight size={16} />
                </Link>
                <a
                  href={company.phoneHref}
                  className="flex-1 flex items-center justify-center gap-2 py-4 border border-white/12 text-white/80 hover:text-white font-semibold rounded-xl transition-colors hover:bg-white/5"
                >
                  <Phone size={16} />
                  Call to Enroll
                </a>
              </div>
            </div>

            {/* Comparison */}
            <div className="bg-[#112240] border border-white/8 rounded-3xl p-8">
              <h3 className="text-white font-bold text-xl mb-6">Member vs. Standard</h3>
              <div className="space-y-4">
                <div className="grid grid-cols-3 pb-3 border-b border-white/8">
                  <div className="text-white/30 text-xs">Feature</div>
                  <div className="text-center text-[#4A90D9] text-xs font-bold">Member</div>
                  <div className="text-center text-white/30 text-xs">Standard</div>
                </div>
                {comparison.map((row) => (
                  <div key={row.feature} className="grid grid-cols-3 items-center">
                    <div className="text-white/60 text-xs pr-2">{row.feature}</div>
                    <div className="flex justify-center">
                      <CheckCircle size={14} className="text-[#4A90D9]" />
                    </div>
                    <div className="flex justify-center">
                      <X size={14} className="text-white/20" />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* FAQ */}
          <SectionHeader
            badge="FAQ"
            title={<>Membership <span className="text-[#4A90D9]">Questions</span></>}
            className="mb-10"
          />
          <div className="max-w-3xl mx-auto space-y-4">
            {[
              { q: "Can I cancel anytime?", a: "Yes. There are no contracts. Cancel your annual or monthly membership at any time with no penalty." },
              { q: "When does my tune-up get scheduled?", a: "After enrolling, we'll reach out to schedule your first tune-up at a convenient time. Members get priority scheduling, so your preferred slot is more likely to be available." },
              { q: "Does the plan cover multiple systems?", a: "The base plan covers one complete HVAC system. We offer multi-system discounts — call us for details if you have more than one unit." },
              { q: "Does the 15% discount apply immediately?", a: "Yes. Your discount applies to all parts and repairs from the moment your membership is active." },
            ].map((faq) => (
              <div key={faq.q} className="bg-[#112240] border border-white/8 rounded-xl p-6">
                <h4 className="text-white font-semibold text-base mb-2">{faq.q}</h4>
                <p className="text-white/55 text-sm">{faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Testimonials limit={3} subtitle="What Comfort Club members say about their experience." />

      <CTABanner
        title="Ready to Join the Comfort Club?"
        subtitle="Protect your HVAC system, save money every year, and get priority service when you need it most."
        primaryLabel="Join Now — $199/year"
        primaryHref="/book"
        secondaryLabel="Call to Enroll"
      />
    </>
  )
}
