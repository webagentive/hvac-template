"use client"

import { motion } from "framer-motion"
import { Award, DollarSign, Clock, ThumbsUp, MapPin, Users } from "lucide-react"
import { SectionHeader } from "@/components/ui/SectionHeader"

const differentiators = [
  {
    icon: Award,
    title: "NATE-Certified Technicians",
    description: "Every technician on our team holds NATE certification — the industry's highest standard. No trainees, no shortcuts. Just expert service every time.",
  },
  {
    icon: DollarSign,
    title: "Upfront, Flat-Rate Pricing",
    description: "You receive a clear written quote before we touch anything. The price we quote is the price you pay — no surprises, no inflated invoices.",
  },
  {
    icon: Clock,
    title: "Same-Day Service Available",
    description: "We maintain daily same-day availability for urgent repairs. When your system fails in Denver's heat or cold, we respond fast.",
  },
  {
    icon: ThumbsUp,
    title: "100% Satisfaction Guarantee",
    description: "If you're not completely satisfied with our work, we make it right — no questions, no hassle. That's our commitment on every job.",
  },
  {
    icon: MapPin,
    title: "Locally Owned & Operated",
    description: "We're a Denver company serving Denver families. We live in the same communities we serve and take personal pride in every installation.",
  },
  {
    icon: Users,
    title: "15+ Years of Experience",
    description: "Since 2009, we've built our reputation one satisfied customer at a time. Over 847 five-star reviews reflect our commitment to excellence.",
  },
]

export function WhyChooseUs() {
  return (
    <section className="py-24 bg-[#0d1f3c]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <SectionHeader
            badge="Why Summit"
            title={<>The Standard Other Companies <span className="text-[#4A90D9]">Aspire To</span></>}
            subtitle="We didn't build our reputation by being average. Here's what separates Summit Climate Solutions from every other HVAC company in Denver."
          />
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {differentiators.map((item, i) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className="bg-[#112240] border border-white/8 rounded-2xl p-7"
            >
              <div className="w-12 h-12 bg-[#2E6DAD]/15 rounded-xl flex items-center justify-center mb-5">
                <item.icon size={22} className="text-[#4A90D9]" />
              </div>
              <h3 className="text-white font-bold text-lg mb-3">{item.title}</h3>
              <p className="text-white/50 text-sm leading-relaxed">{item.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
