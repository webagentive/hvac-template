"use client"

import { ShieldCheck, CreditCard, Zap, MapPin, Clock } from "lucide-react"

const items = [
  { icon: ShieldCheck, label: "Licensed & Insured" },
  { icon: CreditCard, label: "Financing Available" },
  { icon: Zap, label: "Same-Day Service" },
  { icon: MapPin, label: "Locally Owned" },
  { icon: Clock, label: "24/7 Emergency" },
]

export function TrustBar() {
  return (
    <div className="bg-[#112240] border-y border-white/8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-wrap items-center justify-center lg:justify-between gap-x-8 gap-y-4 py-5">
          {items.map((item, i) => (
            <div key={item.label} className="flex items-center gap-2.5">
              {i > 0 && <div className="hidden lg:block w-px h-4 bg-white/10" />}
              <item.icon size={16} className="text-[#4A90D9] shrink-0" />
              <span className="text-white/70 text-sm font-medium whitespace-nowrap">{item.label}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
