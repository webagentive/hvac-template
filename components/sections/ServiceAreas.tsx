"use client"

import { motion } from "framer-motion"
import { MapPin, ArrowRight } from "lucide-react"
import Link from "next/link"
import { company } from "@/config/company"
import { SectionHeader } from "@/components/ui/SectionHeader"

export function ServiceAreas() {
  return (
    <section className="py-24 bg-[#0B1629]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-14"
        >
          <SectionHeader
            badge="Service Areas"
            title={<>Serving <span className="text-[#4A90D9]">Greater Denver</span> & Beyond</>}
            subtitle="Summit Climate Solutions proudly serves homeowners and businesses across the Denver metro area and surrounding communities."
          />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="flex flex-wrap justify-center gap-3 mb-10"
        >
          {company.serviceAreas.map((area, i) => (
            <motion.div
              key={area}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.05 }}
            >
              <div className="flex items-center gap-2 px-5 py-2.5 bg-[#112240] border border-white/8 hover:border-[#2E6DAD]/40 rounded-full text-white/70 hover:text-white text-sm font-medium transition-all duration-200 cursor-default">
                <MapPin size={12} className="text-[#4A90D9]" />
                {area}
              </div>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
          className="text-center"
        >
          <p className="text-white/40 text-sm mb-4">Not sure if we serve your area?</p>
          <Link
            href="/service-areas"
            className="inline-flex items-center gap-2 text-[#4A90D9] hover:text-white font-semibold text-sm transition-colors"
          >
            View all service areas <ArrowRight size={14} />
          </Link>
        </motion.div>
      </div>
    </section>
  )
}
