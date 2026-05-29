"use client"

import { motion } from "framer-motion"
import { Phone, Calendar, CheckCircle } from "lucide-react"
import Link from "next/link"
import { company } from "@/config/company"
import { Badge } from "@/components/ui/Badge"
import { ReactNode } from "react"

interface ServiceHeroProps {
  badge?: string
  title: string
  description: string
  highlights?: string[]
  accentColor?: string
  icon?: ReactNode
}

export function ServiceHero({ badge, title, description, highlights, icon }: ServiceHeroProps) {
  return (
    <section className="relative pt-28 pb-20 bg-[#0B1629] overflow-hidden">
      <div className="absolute inset-0">
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-[#2E6DAD]/6 rounded-full blur-3xl -translate-y-1/2 translate-x-1/3" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            {badge && <Badge className="mb-6">{badge}</Badge>}

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-tight mb-5">
              {title}
            </h1>

            <p className="text-xl text-white/55 leading-relaxed mb-8">{description}</p>

            {highlights && (
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 mb-10">
                {highlights.map((h) => (
                  <div key={h} className="flex items-center gap-2.5">
                    <CheckCircle size={16} className="text-[#4A90D9] shrink-0" />
                    <span className="text-white/65 text-sm">{h}</span>
                  </div>
                ))}
              </div>
            )}

            <div className="flex flex-col sm:flex-row gap-3">
              <a
                href={company.phoneHref}
                className="inline-flex items-center justify-center gap-2.5 px-7 py-3.5 bg-[#2E6DAD] hover:bg-[#1d5a94] text-white font-bold rounded-xl transition-all duration-200 shadow-lg shadow-[#2E6DAD]/20 hover:-translate-y-0.5"
              >
                <Phone size={18} />
                Call {company.phone}
              </a>
              <Link
                href="/book"
                className="inline-flex items-center justify-center gap-2.5 px-7 py-3.5 border border-white/12 text-white font-semibold rounded-xl transition-all duration-200 hover:bg-white/5"
              >
                <Calendar size={18} />
                Book Online
              </Link>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
