"use client"

import { motion } from "framer-motion"
import { Star, Quote } from "lucide-react"
import { testimonials } from "@/config/testimonials"
import { SectionHeader } from "@/components/ui/SectionHeader"
import { company } from "@/config/company"

interface TestimonialsProps {
  limit?: number
  title?: React.ReactNode
  subtitle?: string
}

export function Testimonials({ limit, title, subtitle }: TestimonialsProps) {
  const items = limit ? testimonials.slice(0, limit) : testimonials

  return (
    <section className="py-24 bg-[#0B1629]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-6"
        >
          <SectionHeader
            badge="Reviews"
            title={title || <>{company.rating}★ · {company.reviewCount} <span className="text-[#4A90D9]">Verified Reviews</span></>}
            subtitle={subtitle || "Real customers. Real results. Read what Denver homeowners say about Summit Climate Solutions."}
          />
        </motion.div>

        {/* Overall rating display */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="flex justify-center mb-14"
        >
          <div className="flex items-center gap-3 px-6 py-3 bg-[#112240] border border-white/8 rounded-full">
            <div className="flex">
              {[1,2,3,4,5].map((i) => (
                <Star key={i} size={16} className="text-amber-400 fill-amber-400" />
              ))}
            </div>
            <span className="text-white font-bold">{company.rating}</span>
            <span className="text-white/40">·</span>
            <span className="text-white/60 text-sm">{company.reviewCount} reviews on Google</span>
          </div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {items.map((review, i) => (
            <motion.div
              key={review.id}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.07, duration: 0.5 }}
              className="bg-[#112240] border border-white/8 rounded-2xl p-6 flex flex-col"
            >
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
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
