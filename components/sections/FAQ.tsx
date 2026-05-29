"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Plus, Minus } from "lucide-react"
import { SectionHeader } from "@/components/ui/SectionHeader"

interface FAQItem {
  q: string
  a: string
}

interface FAQProps {
  items?: FAQItem[]
  badge?: string
  title?: React.ReactNode
  subtitle?: string
}

const defaultFAQs: FAQItem[] = [
  { q: "How quickly can you respond to a service call?", a: "For standard service calls, we typically schedule same-day or next-day appointments. For emergencies — no heat in winter, no cooling in extreme heat — we aim for a 2-hour response, 24/7/365." },
  { q: "Do you provide upfront pricing?", a: "Always. We diagnose the issue first, then provide a clear written quote before starting any work. The price you approve is the price you pay — no surprise charges on the invoice." },
  { q: "Are your technicians certified?", a: "Yes. All Summit Climate Solutions technicians hold NATE certification — the HVAC industry's most respected credential. We also carry all required state and local licenses." },
  { q: "Do you offer financing for large repairs or installations?", a: "Yes. We offer flexible financing including 0% interest for 12 months on approved credit. Apply online in 5 minutes or ask your technician during the service call." },
  { q: "What brands do you service and install?", a: "We service all major brands including Carrier, Trane, Lennox, Rheem, York, Goodman, American Standard, Daikin, and more. For installations, we carry top-tier equipment from these manufacturers." },
  { q: "How do I know if I should repair or replace my system?", a: "As a general rule, if your system is 10+ years old and a repair costs more than 50% of replacement cost, replacement often makes financial sense. Our technicians will always give you an honest assessment with both options clearly priced." },
  { q: "What is the Summit Comfort Club and is it worth it?", a: "Our annual maintenance plan includes two tune-ups per year, priority scheduling, 15% parts discount, and no after-hours fees. At $199/year, most members recover the cost within their first service call." },
  { q: "Do you offer any guarantees on your work?", a: "Absolutely. All repairs carry a 90-day parts and labor warranty. New installations include a 1-year labor warranty plus the full manufacturer equipment warranty (typically 10 years). We also guarantee your satisfaction on every job." },
]

export function FAQ({ items = defaultFAQs, badge = "FAQ", title, subtitle }: FAQProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  return (
    <section className="py-24 bg-[#0B1629]">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-14"
        >
          <SectionHeader
            badge={badge}
            title={title || <>Frequently Asked <span className="text-[#4A90D9]">Questions</span></>}
            subtitle={subtitle || "Honest answers to the questions Denver homeowners ask most about HVAC service."}
          />
        </motion.div>

        <div className="space-y-3">
          {items.map((faq, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.05 }}
              className="bg-[#112240] border border-white/8 rounded-xl overflow-hidden"
            >
              <button
                onClick={() => setOpenIndex(openIndex === i ? null : i)}
                className="w-full flex items-center justify-between px-6 py-5 text-left hover:bg-white/3 transition-colors"
              >
                <span className="text-white font-semibold text-sm sm:text-base pr-4">{faq.q}</span>
                <div className="shrink-0 w-6 h-6 bg-[#2E6DAD]/20 rounded-full flex items-center justify-center">
                  {openIndex === i
                    ? <Minus size={12} className="text-[#4A90D9]" />
                    : <Plus size={12} className="text-[#4A90D9]" />
                  }
                </div>
              </button>
              <AnimatePresence>
                {openIndex === i && (
                  <motion.div
                    initial={{ height: 0 }}
                    animate={{ height: "auto" }}
                    exit={{ height: 0 }}
                    transition={{ duration: 0.25, ease: "easeInOut" }}
                    className="overflow-hidden"
                  >
                    <div className="px-6 pb-5 border-t border-white/5">
                      <p className="text-white/55 text-sm leading-relaxed pt-4">{faq.a}</p>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
