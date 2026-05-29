"use client"

import { Phone } from "lucide-react"
import Link from "next/link"
import { company } from "@/config/company"

export function StickyMobileCTA() {
  return (
    <div className="fixed bottom-0 left-0 right-0 z-40 lg:hidden">
      <div className="flex h-16 shadow-2xl">
        <a
          href={company.phoneHref}
          className="flex-1 flex items-center justify-center gap-2 bg-[#0B1629] border-t border-r border-white/10 text-white font-semibold text-sm hover:bg-[#112240] transition-colors active:scale-95"
        >
          <Phone size={16} />
          Call Now
        </a>
        <Link
          href="/book"
          className="flex-1 flex items-center justify-center gap-2 bg-[#2E6DAD] border-t border-white/10 text-white font-semibold text-sm hover:bg-[#1d5a94] transition-colors active:scale-95"
        >
          Book Online
        </Link>
      </div>
    </div>
  )
}
