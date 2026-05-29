"use client"

import { motion } from "framer-motion"
import { CreditCard, CheckCircle, ArrowRight } from "lucide-react"
import Link from "next/link"
import { SectionHeader } from "@/components/ui/SectionHeader"

const benefits = [
  "0% interest for 12 months on approved credit",
  "Low monthly payment options",
  "Quick 5-minute online application",
  "No prepayment penalties",
  "Flexible terms up to 84 months",
  "Finance any HVAC installation or repair",
]

export function FinancingSection() {
  return (
    <section className="py-24 bg-[#0B1629]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-gradient-to-br from-[#112240] to-[#0d1f3c] border border-white/8 rounded-3xl overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-0">
            {/* Left */}
            <div className="p-10 lg:p-16">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
              >
                <SectionHeader
                  badge="Financing"
                  title={<>Comfort Shouldn't Wait <span className="text-[#4A90D9]">for Payday</span></>}
                  subtitle="Don't let budget concerns delay the comfort and safety of your home. Our flexible financing options make premium HVAC service accessible to every homeowner."
                  align="left"
                />

                <div className="mt-8 space-y-3">
                  {benefits.map((benefit, i) => (
                    <motion.div
                      key={benefit}
                      initial={{ opacity: 0, x: -12 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: i * 0.06 }}
                      className="flex items-center gap-3"
                    >
                      <CheckCircle size={16} className="text-[#4A90D9] shrink-0" />
                      <span className="text-white/70 text-sm">{benefit}</span>
                    </motion.div>
                  ))}
                </div>

                <div className="mt-10 flex flex-col sm:flex-row gap-3">
                  <Link
                    href="/financing"
                    className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-[#2E6DAD] hover:bg-[#1d5a94] text-white font-semibold rounded-xl transition-all duration-200 hover:-translate-y-0.5"
                  >
                    Explore Financing <ArrowRight size={16} />
                  </Link>
                  <Link
                    href="/contact"
                    className="inline-flex items-center justify-center gap-2 px-6 py-3 border border-white/10 text-white/70 hover:text-white font-semibold rounded-xl transition-colors hover:bg-white/5"
                  >
                    Talk to Us First
                  </Link>
                </div>
              </motion.div>
            </div>

            {/* Right — stats */}
            <div className="bg-[#2E6DAD]/10 border-l border-white/8 p-10 lg:p-16 flex items-center">
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="w-full space-y-8"
              >
                <div className="text-center p-8 bg-[#2E6DAD]/10 border border-[#2E6DAD]/20 rounded-2xl">
                  <div className="text-5xl font-bold text-white mb-1">0%</div>
                  <div className="text-[#4A90D9] font-semibold">Interest for 12 Months</div>
                  <div className="text-white/40 text-sm mt-1">On approved credit</div>
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div className="text-center p-5 bg-white/3 border border-white/8 rounded-xl">
                    <div className="text-3xl font-bold text-white mb-1">5 min</div>
                    <div className="text-white/50 text-xs">Application time</div>
                  </div>
                  <div className="text-center p-5 bg-white/3 border border-white/8 rounded-xl">
                    <div className="text-3xl font-bold text-white mb-1">$0</div>
                    <div className="text-white/50 text-xs">Down payment options</div>
                  </div>
                </div>
                <div className="flex items-center gap-3 p-4 bg-white/3 border border-white/8 rounded-xl">
                  <CreditCard size={24} className="text-[#4A90D9] shrink-0" />
                  <div>
                    <div className="text-white text-sm font-semibold">Instant Decision</div>
                    <div className="text-white/40 text-xs">Know your approval status immediately</div>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
