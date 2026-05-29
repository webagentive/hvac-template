"use client"

import { motion } from "framer-motion"
import { CheckCircle, X, ArrowRight, Star } from "lucide-react"
import Link from "next/link"
import { SectionHeader } from "@/components/ui/SectionHeader"

const included = [
  "Annual system tune-up (heating + cooling)",
  "Priority scheduling — jump to the front of the line",
  "15% discount on all parts and repairs",
  "No after-hours or emergency service fees",
  "Annual filter replacement (standard sizes)",
  "Free diagnostic on covered calls",
  "Annual system health report",
  "Exclusive member-only promotions",
]

const comparison = [
  { feature: "Annual tune-up", member: true, nonMember: false },
  { feature: "Priority scheduling", member: true, nonMember: false },
  { feature: "15% parts discount", member: true, nonMember: false },
  { feature: "No after-hours fees", member: true, nonMember: false },
  { feature: "Free diagnostic fee", member: true, nonMember: false },
]

export function MembershipSection() {
  return (
    <section className="py-24 bg-[#0d1f3c]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <SectionHeader
            badge="Summit Comfort Club"
            title={<>Your System. <span className="text-[#4A90D9]">Protected.</span></>}
            subtitle="Join hundreds of Denver homeowners who enjoy peace of mind, priority service, and significant savings year-round."
          />
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
          {/* Membership card */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="bg-gradient-to-br from-[#2E6DAD]/20 to-[#112240] border border-[#2E6DAD]/30 rounded-3xl p-8 lg:p-10"
          >
            <div className="flex items-center gap-2 mb-6">
              <Star size={18} className="text-amber-400 fill-amber-400" />
              <span className="text-[#4A90D9] font-bold text-sm uppercase tracking-wider">Summit Comfort Club</span>
            </div>

            <div className="flex items-end gap-3 mb-2">
              <div className="text-5xl font-bold text-white">$199</div>
              <div className="text-white/50 mb-1.5">/year</div>
            </div>
            <div className="text-white/40 text-sm mb-8">or just $19/month — cancel anytime</div>

            <div className="space-y-3 mb-8">
              {included.map((item) => (
                <div key={item} className="flex items-start gap-3">
                  <CheckCircle size={16} className="text-[#4A90D9] shrink-0 mt-0.5" />
                  <span className="text-white/70 text-sm">{item}</span>
                </div>
              ))}
            </div>

            <Link
              href="/membership"
              className="flex items-center justify-center gap-2 w-full py-4 bg-[#2E6DAD] hover:bg-[#1d5a94] text-white font-bold rounded-xl transition-all duration-200 hover:-translate-y-0.5 shadow-lg shadow-[#2E6DAD]/20"
            >
              Join Now — $199/year <ArrowRight size={16} />
            </Link>
            <p className="text-center text-white/30 text-xs mt-3">No contracts. Cancel anytime.</p>
          </motion.div>

          {/* Comparison */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <div>
              <h3 className="text-white font-bold text-xl mb-6">Member vs. Non-Member</h3>
              <div className="bg-[#112240] border border-white/8 rounded-2xl overflow-hidden">
                <div className="grid grid-cols-3 px-6 py-3 border-b border-white/8">
                  <div className="text-white/40 text-xs font-semibold uppercase tracking-wider">Feature</div>
                  <div className="text-center text-[#4A90D9] text-xs font-bold uppercase tracking-wider">Member</div>
                  <div className="text-center text-white/30 text-xs font-semibold uppercase tracking-wider">Standard</div>
                </div>
                {comparison.map((row, i) => (
                  <div
                    key={row.feature}
                    className={`grid grid-cols-3 px-6 py-4 ${i < comparison.length - 1 ? "border-b border-white/5" : ""}`}
                  >
                    <div className="text-white/70 text-sm">{row.feature}</div>
                    <div className="flex justify-center">
                      {row.member ? <CheckCircle size={16} className="text-[#4A90D9]" /> : <X size={16} className="text-white/20" />}
                    </div>
                    <div className="flex justify-center">
                      {row.nonMember ? <CheckCircle size={16} className="text-[#4A90D9]" /> : <X size={16} className="text-white/20" />}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-[#112240] border border-white/8 rounded-2xl p-6">
              <div className="text-white font-bold text-lg mb-2">Average member saves $340/year</div>
              <p className="text-white/50 text-sm leading-relaxed">
                Between the included tune-up ($149 value), parts discounts, and waived emergency fees, most members recover their annual fee within the first service call — and then some.
              </p>
            </div>

            <div className="p-4 bg-amber-500/8 border border-amber-500/20 rounded-xl">
              <p className="text-amber-400/80 text-sm font-medium">
                ★ Most popular: Join before summer to get your AC tune-up included at no extra charge.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
