"use client"

import { Phone, AlertTriangle } from "lucide-react"
import { company } from "@/config/company"

export function EmergencyBanner() {
  return (
    <div className="bg-red-950/40 border border-red-500/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
        <div className="flex flex-col sm:flex-row items-center justify-center gap-3 text-center sm:text-left">
          <div className="flex items-center gap-2 text-red-400">
            <AlertTriangle size={18} />
            <span className="font-bold text-sm">HVAC Emergency? We Answer 24/7</span>
          </div>
          <div className="hidden sm:block text-white/20">·</div>
          <a
            href={company.phoneHref}
            className="inline-flex items-center gap-2 px-4 py-1.5 bg-red-600 hover:bg-red-700 text-white text-sm font-bold rounded-lg transition-colors"
          >
            <Phone size={14} />
            {company.phone}
          </a>
        </div>
      </div>
    </div>
  )
}
