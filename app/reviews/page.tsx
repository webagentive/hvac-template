import type { Metadata } from "next"
import { Star, Quote } from "lucide-react"
import { testimonials } from "@/config/testimonials"
import { company } from "@/config/company"
import { TrustBar } from "@/components/sections/TrustBar"
import { CTABanner } from "@/components/sections/CTABanner"
import { SectionHeader } from "@/components/ui/SectionHeader"
import { generateServiceMetadata } from "@/lib/metadata"

export const metadata: Metadata = generateServiceMetadata({
  title: `Reviews | ${company.rating}★ Denver HVAC Company | Summit Climate Solutions`,
  description: `Read ${company.reviewCount}+ verified reviews from Denver homeowners. Summit Climate Solutions maintains a ${company.rating}-star rating across hundreds of HVAC service calls and installations.`,
  path: "/reviews",
})

export default function ReviewsPage() {
  return (
    <>
      <section className="relative pt-32 pb-20 bg-[#0B1629] overflow-hidden">
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-[#2E6DAD]/6 rounded-full blur-3xl -translate-y-1/2 translate-x-1/3" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <SectionHeader
            badge="Reviews"
            title={<><span className="text-[#4A90D9]">{company.rating}★</span> · {company.reviewCount}+ Verified Reviews</>}
            subtitle="We don't ask for reviews — we earn them. Read what Denver homeowners say about their Summit Climate Solutions experience."
          />

          {/* Rating summary */}
          <div className="flex items-center justify-center gap-6 mt-10 flex-wrap">
            <div className="flex flex-col items-center bg-[#112240] border border-white/8 rounded-2xl px-8 py-5">
              <div className="text-5xl font-bold text-white mb-2">{company.rating}</div>
              <div className="flex gap-0.5 mb-1">
                {[1,2,3,4,5].map((i) => <Star key={i} size={16} className="text-amber-400 fill-amber-400" />)}
              </div>
              <div className="text-white/40 text-sm">Overall Rating</div>
            </div>
            <div className="flex flex-col items-center bg-[#112240] border border-white/8 rounded-2xl px-8 py-5">
              <div className="text-5xl font-bold text-white mb-2">{company.reviewCount}+</div>
              <div className="text-white/40 text-sm mt-3">Verified Reviews</div>
              <div className="text-white/30 text-xs">on Google</div>
            </div>
            <div className="flex flex-col items-center bg-[#112240] border border-white/8 rounded-2xl px-8 py-5">
              <div className="text-5xl font-bold text-white mb-2">{company.yearsExperience}</div>
              <div className="text-white/40 text-sm mt-3">Years Serving</div>
              <div className="text-white/30 text-xs">Denver, CO</div>
            </div>
          </div>
        </div>
      </section>

      <TrustBar />

      <section className="py-24 bg-[#0B1629]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {testimonials.map((review) => (
              <div key={review.id} className="bg-[#112240] border border-white/8 rounded-2xl p-6 flex flex-col">
                <div className="flex items-start justify-between mb-4">
                  <div className="flex gap-0.5">
                    {Array.from({ length: review.rating }).map((_, j) => (
                      <Star key={j} size={14} className="text-amber-400 fill-amber-400" />
                    ))}
                  </div>
                  <Quote size={18} className="text-[#2E6DAD]/40 shrink-0" />
                </div>
                <p className="text-white/65 text-sm leading-relaxed flex-1 mb-5">"{review.text}"</p>
                <div className="border-t border-white/8 pt-4 flex items-center justify-between">
                  <div>
                    <div className="text-white text-sm font-semibold">{review.name}</div>
                    <div className="text-white/35 text-xs">{review.location}</div>
                  </div>
                  <div className="text-right">
                    <div className="text-[#4A90D9] text-xs">{review.service}</div>
                    <div className="text-white/25 text-xs">{review.date}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CTABanner
        title="Join Hundreds of Satisfied Customers"
        subtitle="Experience the Summit difference for yourself. Same-day service available."
      />
    </>
  )
}
