"use client"

import { motion } from "framer-motion"
import { Phone, Calendar, Star, ShieldCheck, Clock } from "lucide-react"
import Link from "next/link"
import { company } from "@/config/company"

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0 },
}

export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden bg-[#0B1629]">
      {/* Background gradient */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-br from-[#0B1629] via-[#0d1f3c] to-[#0B1629]" />
        <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-[#2E6DAD]/8 rounded-full blur-3xl -translate-y-1/3 translate-x-1/3" />
        <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-[#2E6DAD]/5 rounded-full blur-3xl translate-y-1/3 -translate-x-1/3" />
        {/* Grid overlay */}
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage: "linear-gradient(rgba(255,255,255,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.5) 1px, transparent 1px)",
            backgroundSize: "60px 60px",
          }}
        />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32 lg:py-40">
        <motion.div
          variants={{ show: { transition: { staggerChildren: 0.12 } } }}
          initial="hidden"
          animate="show"
          className="max-w-4xl"
        >
          {/* Badge */}
          <motion.div variants={fadeUp}>
            <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#2E6DAD]/15 border border-[#2E6DAD]/30 text-[#4A90D9] text-sm font-semibold mb-8">
              <span className="w-2 h-2 rounded-full bg-[#4A90D9] animate-pulse" />
              Denver's Premier HVAC Specialists · Est. {company.founded}
            </span>
          </motion.div>

          {/* Headline */}
          <motion.h1 variants={fadeUp} className="text-5xl sm:text-6xl lg:text-7xl font-bold text-white leading-[1.05] mb-6">
            Denver's Premier{" "}
            <span className="text-[#4A90D9]">HVAC</span>{" "}
            Specialists
          </motion.h1>

          {/* Subheadline */}
          <motion.p variants={fadeUp} className="text-xl text-white/60 leading-relaxed mb-10 max-w-2xl">
            Precision installation, expert repair, and preventative maintenance for every heating and cooling system in the Denver metro area. Licensed, insured, and trusted by thousands of Colorado homeowners.
          </motion.p>

          {/* CTAs */}
          <motion.div variants={fadeUp} className="flex flex-col sm:flex-row gap-4 mb-14">
            <a
              href={company.phoneHref}
              className="inline-flex items-center justify-center gap-3 px-8 py-4 bg-[#2E6DAD] hover:bg-[#1d5a94] text-white text-lg font-bold rounded-xl transition-all duration-200 shadow-2xl shadow-[#2E6DAD]/25 hover:shadow-[#2E6DAD]/35 hover:-translate-y-0.5"
            >
              <Phone size={20} />
              Call {company.phone}
            </a>
            <Link
              href="/book"
              className="inline-flex items-center justify-center gap-3 px-8 py-4 bg-white/8 hover:bg-white/12 border border-white/12 text-white text-lg font-semibold rounded-xl transition-all duration-200 hover:-translate-y-0.5"
            >
              <Calendar size={20} />
              Book Appointment
            </Link>
          </motion.div>

          {/* Trust indicators */}
          <motion.div variants={fadeUp} className="flex flex-wrap items-center gap-6">
            <div className="flex items-center gap-2">
              <div className="flex">
                {[1,2,3,4,5].map((i) => (
                  <Star key={i} size={16} className="text-amber-400 fill-amber-400" />
                ))}
              </div>
              <span className="text-white/70 text-sm font-medium">{company.rating} · {company.reviewCount} Reviews</span>
            </div>
            <div className="w-px h-4 bg-white/15 hidden sm:block" />
            <div className="flex items-center gap-2 text-white/60 text-sm">
              <ShieldCheck size={16} className="text-[#4A90D9]" />
              Licensed &amp; Insured
            </div>
            <div className="w-px h-4 bg-white/15 hidden sm:block" />
            <div className="flex items-center gap-2 text-white/60 text-sm">
              <Clock size={16} className="text-[#4A90D9]" />
              {company.yearsExperience} Years Experience
            </div>
          </motion.div>
        </motion.div>
      </div>

      {/* Bottom fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-[#0B1629] to-transparent" />
    </section>
  )
}
