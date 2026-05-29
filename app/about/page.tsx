import type { Metadata } from "next"
import { motion } from "framer-motion"
import { Award, Users, MapPin, Heart, ShieldCheck, Star } from "lucide-react"
import { company } from "@/config/company"
import { TrustBar } from "@/components/sections/TrustBar"
import { Testimonials } from "@/components/sections/Testimonials"
import { CTABanner } from "@/components/sections/CTABanner"
import { SectionHeader } from "@/components/ui/SectionHeader"
import { generateServiceMetadata } from "@/lib/metadata"

export const metadata: Metadata = generateServiceMetadata({
  title: `About Summit Climate Solutions | Denver HVAC Company`,
  description: `Meet the team behind Denver's most trusted HVAC company. 15+ years serving Colorado homeowners with honest, expert service. Licensed, insured, 4.9★ rated.`,
  path: "/about",
})

const values = [
  { icon: ShieldCheck, title: "Honesty First", description: "We never recommend work you don't need. Our business is built on trust, not upsells." },
  { icon: Award, title: "Certified Excellence", description: "Every technician holds NATE certification. We invest in ongoing training to stay ahead." },
  { icon: Heart, title: "Community Rooted", description: "We're a Denver company serving Denver families. We reinvest in the community we call home." },
  { icon: Users, title: "Team Culture", description: "Our technicians are compensated fairly and treated with respect — it shows in their work." },
]

const milestones = [
  { year: "2009", event: "Founded in Denver by Mark Sullivan, a 20-year HVAC veteran" },
  { year: "2012", event: "Expanded service area to include all Denver metro suburbs" },
  { year: "2015", event: "Launched the Summit Comfort Club maintenance program" },
  { year: "2018", event: "Reached 500 five-star Google reviews" },
  { year: "2021", event: "Added indoor air quality and smart home services" },
  { year: "2024", event: "Surpassed 847 verified reviews and 4.9★ rating" },
]

export default function AboutPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative pt-32 pb-20 bg-[#0B1629] overflow-hidden">
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-[#2E6DAD]/6 rounded-full blur-3xl -translate-y-1/2 translate-x-1/3" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#2E6DAD]/15 border border-[#2E6DAD]/30 text-[#4A90D9] text-sm font-semibold mb-8">
              Est. {company.founded} · Denver, Colorado
            </span>
            <h1 className="text-5xl sm:text-6xl font-bold text-white leading-tight mb-6">
              Built on Trust.<br />
              <span className="text-[#4A90D9]">Driven by Excellence.</span>
            </h1>
            <p className="text-xl text-white/55 leading-relaxed">
              Summit Climate Solutions was founded with a simple belief: that HVAC service should be honest, expert, and done right the first time. Fifteen years and {company.reviewCount} five-star reviews later, that belief still drives every decision we make.
            </p>
          </div>
        </div>
      </section>

      <TrustBar />

      {/* Story */}
      <section className="py-24 bg-[#0B1629]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
            <div>
              <SectionHeader
                badge="Our Story"
                title={<>A Company <span className="text-[#4A90D9]">Built Differently</span></>}
                align="left"
              />
              <div className="mt-8 space-y-5 text-white/60 text-base leading-relaxed">
                <p>
                  Summit Climate Solutions was founded in 2009 by Mark Sullivan, a Denver native and 20-year HVAC veteran who grew frustrated watching his industry prioritize profits over people. Mark had seen too many homeowners sold systems they didn't need, charged inflated prices in moments of desperation, and left without follow-up after installation.
                </p>
                <p>
                  He built Summit around a different model: upfront pricing, certified technicians, and a 100% satisfaction guarantee that wasn't fine print — it was a real promise. The company grew not through advertising, but through referrals from customers who couldn't believe how different the experience was.
                </p>
                <p>
                  Today, Summit Climate Solutions employs a team of NATE-certified technicians serving the entire Denver metro area. We've completed thousands of installations and tens of thousands of service calls, maintaining a 4.9-star rating that reflects the standard we hold ourselves to every day.
                </p>
                <p>
                  We're a Denver company. We live here. Our kids go to school here. When we work on your home, we treat it like we're working on a neighbor's house — because we are.
                </p>
              </div>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-2 gap-5">
              {[
                { label: "Years in Business", value: company.yearsExperience },
                { label: "Verified Reviews", value: company.reviewCount + "+" },
                { label: "Star Rating", value: company.rating + "★" },
                { label: "Service Areas", value: company.serviceAreas.length + "+" },
              ].map((stat) => (
                <div key={stat.label} className="bg-[#112240] border border-white/8 rounded-2xl p-6 text-center">
                  <div className="text-4xl font-bold text-white mb-2">{stat.value}</div>
                  <div className="text-white/40 text-sm">{stat.label}</div>
                </div>
              ))}

              <div className="col-span-2 bg-[#2E6DAD]/10 border border-[#2E6DAD]/20 rounded-2xl p-6">
                <div className="flex gap-1 mb-3">
                  {[1,2,3,4,5].map((i) => <Star key={i} size={16} className="text-amber-400 fill-amber-400" />)}
                </div>
                <p className="text-white/60 text-sm italic">
                  "Summit is the only HVAC company I've ever used that I would trust to tell me what I actually need. In 15 years, they've never steered me wrong."
                </p>
                <p className="text-[#4A90D9] text-sm font-semibold mt-3">— Angela R., Englewood · 5 years</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-24 bg-[#0d1f3c]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader
            badge="Our Values"
            title={<>What We <span className="text-[#4A90D9]">Stand For</span></>}
            subtitle="These aren't words on a wall. They're the standards we hold ourselves to on every single call."
            className="mb-14"
          />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((v) => (
              <div key={v.title} className="bg-[#112240] border border-white/8 rounded-2xl p-6">
                <div className="w-11 h-11 bg-[#2E6DAD]/15 rounded-xl flex items-center justify-center mb-5">
                  <v.icon size={20} className="text-[#4A90D9]" />
                </div>
                <h3 className="text-white font-bold text-lg mb-2">{v.title}</h3>
                <p className="text-white/50 text-sm leading-relaxed">{v.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-24 bg-[#0B1629]">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader
            badge="Milestones"
            title={<><span className="text-[#4A90D9]">15 Years</span> in the Making</>}
            subtitle="Our journey from a one-truck operation to Denver's most trusted HVAC team."
            className="mb-14"
          />
          <div className="relative">
            <div className="absolute left-4 top-0 bottom-0 w-px bg-white/8" />
            <div className="space-y-8">
              {milestones.map((m, i) => (
                <div key={m.year} className="pl-12 relative">
                  <div className="absolute left-0 w-8 h-8 bg-[#2E6DAD] rounded-full flex items-center justify-center text-white text-xs font-bold">
                    {i + 1}
                  </div>
                  <div className="text-[#4A90D9] text-sm font-bold mb-1">{m.year}</div>
                  <div className="text-white/65 text-sm">{m.event}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <Testimonials limit={3} subtitle="A small sample of what our customers say." />

      <CTABanner
        title="Experience the Summit Difference"
        subtitle="Ready to work with Denver's most trusted HVAC team? We're ready for you."
      />
    </>
  )
}
