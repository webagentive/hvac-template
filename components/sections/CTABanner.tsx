"use client"

import { motion } from "framer-motion"
import { Phone, Calendar, ArrowRight } from "lucide-react"
import Link from "next/link"
import { company } from "@/config/company"

interface CTABannerProps {
  title?: string
  subtitle?: string
  primaryLabel?: string
  primaryHref?: string
  secondaryLabel?: string
  secondaryHref?: string
  variant?: "default" | "emergency"
}

export function CTABanner({
  title = "Ready for Total Comfort?",
  subtitle = "Whether you need emergency repair or want to upgrade your system, our team is ready. Same-day service available.",
  primaryLabel,
  primaryHref,
  secondaryLabel = "Book Appointment",
  secondaryHref = "/book",
  variant = "default",
}: CTABannerProps) {
  return (
    <section className={`py-20 ${variant === "emergency" ? "bg-red-950/30" : "bg-[#2E6DAD]/10"} border-y border-white/8`}>
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="space-y-6"
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white">{title}</h2>
          <p className="text-white/55 text-lg max-w-2xl mx-auto">{subtitle}</p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mt-8">
            <a
              href={primaryHref || company.phoneHref}
              className={`inline-flex items-center justify-center gap-2.5 px-8 py-4 rounded-xl font-bold text-lg transition-all duration-200 hover:-translate-y-0.5 shadow-xl ${
                variant === "emergency"
                  ? "bg-red-600 hover:bg-red-700 text-white shadow-red-600/25"
                  : "bg-[#2E6DAD] hover:bg-[#1d5a94] text-white shadow-[#2E6DAD]/25"
              }`}
            >
              <Phone size={20} />
              {primaryLabel || `Call ${company.phone}`}
            </a>
            <Link
              href={secondaryHref}
              className="inline-flex items-center justify-center gap-2.5 px-8 py-4 rounded-xl font-bold text-lg border border-white/15 text-white hover:bg-white/5 transition-all duration-200 hover:-translate-y-0.5"
            >
              <Calendar size={20} />
              {secondaryLabel}
            </Link>
          </div>

          {variant === "emergency" && (
            <p className="text-red-400/70 text-sm mt-4">
              Emergency line answered 24 hours a day, 7 days a week, 365 days a year.
            </p>
          )}
        </motion.div>
      </div>
    </section>
  )
}
