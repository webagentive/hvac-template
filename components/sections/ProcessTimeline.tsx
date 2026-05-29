"use client"

import { motion } from "framer-motion"
import { SectionHeader } from "@/components/ui/SectionHeader"

interface Step {
  step: string
  title: string
  description: string
}

interface ProcessTimelineProps {
  steps?: Step[]
  badge?: string
  title?: React.ReactNode
  subtitle?: string
}

const defaultSteps: Step[] = [
  { step: "01", title: "Schedule Your Appointment", description: "Call us or book online in under 2 minutes. We'll confirm your appointment and send a technician profile so you know exactly who's coming." },
  { step: "02", title: "Thorough Diagnosis", description: "Your NATE-certified technician performs a comprehensive system assessment and explains exactly what they find — in plain language, not technical jargon." },
  { step: "03", title: "Upfront Pricing", description: "Before we touch anything, you receive a clear written quote. Approve it and we get to work. No hidden fees, no surprises on the invoice." },
  { step: "04", title: "Expert Service", description: "We complete the repair or installation to the highest standard, clean up completely, and walk you through what was done." },
  { step: "05", title: "Quality Follow-Up", description: "We check in 24-48 hours after every service call to confirm your system is performing perfectly and you're fully satisfied." },
]

export function ProcessTimeline({ steps = defaultSteps, badge = "Our Process", title, subtitle }: ProcessTimelineProps) {
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
            badge={badge}
            title={title || <><span className="text-[#4A90D9]">How It Works</span> — Simple, Transparent Service</>}
            subtitle={subtitle || "We've refined our process over 15 years to make your experience as smooth and stress-free as possible."}
          />
        </motion.div>

        <div className="relative">
          {/* Vertical line on desktop */}
          <div className="hidden lg:block absolute left-1/2 top-0 bottom-0 w-px bg-white/8 -translate-x-1/2" />

          <div className="space-y-8 lg:space-y-0">
            {steps.map((step, i) => (
              <motion.div
                key={step.step}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className={`relative lg:flex lg:items-center lg:mb-16 ${i % 2 === 0 ? "lg:flex-row" : "lg:flex-row-reverse"}`}
              >
                {/* Content */}
                <div className={`lg:w-5/12 ${i % 2 === 0 ? "lg:pr-16 lg:text-right" : "lg:pl-16"}`}>
                  <div className={`bg-[#112240] border border-white/8 rounded-2xl p-6 lg:p-8 ${i % 2 === 0 ? "" : ""}`}>
                    <div className="text-[#2E6DAD]/50 text-xs font-bold uppercase tracking-widest mb-2">Step {step.step}</div>
                    <h3 className="text-white font-bold text-xl mb-3">{step.title}</h3>
                    <p className="text-white/55 text-sm leading-relaxed">{step.description}</p>
                  </div>
                </div>

                {/* Center dot */}
                <div className="hidden lg:flex lg:w-2/12 items-center justify-center">
                  <div className="w-12 h-12 bg-[#2E6DAD] rounded-full flex items-center justify-center text-white font-bold text-sm shadow-lg shadow-[#2E6DAD]/30 z-10">
                    {step.step}
                  </div>
                </div>

                {/* Spacer */}
                <div className="lg:w-5/12" />
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
