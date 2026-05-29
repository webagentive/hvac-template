"use client"

import { motion } from "framer-motion"
import { ArrowRight, Thermometer, Wind, Wrench, Settings, Shield, AirVent, GitBranch, Sliders, Zap } from "lucide-react"
import Link from "next/link"
import { SectionHeader } from "@/components/ui/SectionHeader"
import { Badge } from "@/components/ui/Badge"

const iconMap: Record<string, React.ComponentType<{ size?: number; className?: string }>> = {
  Thermometer, Wind, Wrench, Settings, Shield, AirVent, GitBranch, Sliders, Zap
}

const services = [
  { slug: "ac-repair", title: "AC Repair", icon: "Thermometer", description: "Fast, reliable air conditioner repair for all makes and models. Same-day service available.", badge: "Same-Day" },
  { slug: "ac-installation", title: "AC Installation", icon: "Wind", description: "Expert sizing and installation of new AC systems with manufacturer warranty support.", badge: "Free Estimate" },
  { slug: "heating-repair", title: "Heating Repair", icon: "Wrench", description: "Keep warm through Denver winters. Emergency heating repair available 24/7.", badge: "24/7" },
  { slug: "furnace-installation", title: "Furnace Installation", icon: "Settings", description: "High-efficiency furnace replacement and new installation with full permits.", badge: "Up to 98% AFUE" },
  { slug: "hvac-maintenance", title: "HVAC Maintenance", icon: "Shield", description: "Spring and fall tune-ups to maximize efficiency and prevent costly breakdowns.", badge: "Save 30%" },
  { slug: "indoor-air-quality", title: "Indoor Air Quality", icon: "AirVent", description: "Air purifiers, UV systems, humidifiers, and whole-home filtration solutions.", badge: "Healthier Air" },
  { slug: "ductwork", title: "Ductwork", icon: "GitBranch", description: "Duct inspection, sealing, cleaning, and replacement to stop efficiency losses.", badge: "Aeroseal Available" },
  { slug: "thermostat-installation", title: "Thermostat Installation", icon: "Sliders", description: "Smart thermostat installation and programming. Nest, Ecobee, Honeywell.", badge: "Save $180/yr" },
  { slug: "emergency-hvac", title: "Emergency HVAC", icon: "Zap", description: "24/7/365 emergency response. Real technicians answering every call.", badge: "Always Open" },
]

const containerVariants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.08 } },
}

const cardVariants = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" as const } },
}

export function ServicesGrid() {
  return (
    <section className="py-24 bg-[#0B1629]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-14"
        >
          <SectionHeader
            badge="Our Services"
            title={<>Complete HVAC <span className="text-[#4A90D9]">Solutions</span></>}
            subtitle="From emergency repairs to new system installations, our certified technicians handle every aspect of your home comfort."
          />
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-50px" }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5"
        >
          {services.map((service) => {
            const Icon = iconMap[service.icon]
            return (
              <motion.div key={service.slug} variants={cardVariants}>
                <Link
                  href={`/services/${service.slug}`}
                  className="group flex flex-col h-full bg-[#112240] border border-white/8 hover:border-[#2E6DAD]/40 rounded-2xl p-6 transition-all duration-300 hover:shadow-xl hover:shadow-[#2E6DAD]/5 hover:-translate-y-1"
                >
                  <div className="flex items-start justify-between mb-4">
                    <div className="w-11 h-11 bg-[#2E6DAD]/15 rounded-xl flex items-center justify-center group-hover:bg-[#2E6DAD]/25 transition-colors">
                      <Icon size={20} className="text-[#4A90D9]" />
                    </div>
                    <Badge variant="steel" className="text-xs">{service.badge}</Badge>
                  </div>
                  <h3 className="text-white font-bold text-lg mb-2">{service.title}</h3>
                  <p className="text-white/50 text-sm leading-relaxed flex-1">{service.description}</p>
                  <div className="flex items-center gap-1 mt-5 text-[#4A90D9] text-sm font-semibold group-hover:gap-2 transition-all">
                    Learn More <ArrowRight size={14} />
                  </div>
                </Link>
              </motion.div>
            )
          })}
        </motion.div>
      </div>
    </section>
  )
}
