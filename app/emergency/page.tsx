import type { Metadata } from "next"
import { Phone, AlertTriangle, Clock, CheckCircle, Zap } from "lucide-react"
import { company } from "@/config/company"
import { generateServiceMetadata } from "@/lib/metadata"
import { ContactForm } from "@/components/sections/ContactForm"

export const metadata: Metadata = generateServiceMetadata({
  title: "24/7 Emergency HVAC Service Denver | Summit Climate Solutions",
  description: "HVAC emergency in Denver? We answer 24/7/365. No heat, no AC, gas smell — call Summit Climate Solutions now at (555) 820-4400. Same-night dispatch available.",
  path: "/emergency",
})

const emergencies = [
  "No heat in below-freezing temperatures",
  "No air conditioning in extreme heat",
  "Gas smell or suspected gas leak",
  "Carbon monoxide alarm triggered",
  "Refrigerant leak",
  "Electrical burning smell from HVAC",
  "System making loud grinding or banging noises",
  "Complete system failure",
]

export default function EmergencyPage() {
  return (
    <>
      {/* Hero — urgent, red accents */}
      <section className="relative pt-28 pb-20 bg-[#0B1629] overflow-hidden border-b border-red-500/20">
        <div className="absolute top-0 left-0 right-0 h-1 bg-red-600" />
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-red-500/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/3" />

        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="flex justify-center mb-5">
            <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-red-600/15 border border-red-500/30 text-red-400 text-sm font-bold animate-pulse">
              <AlertTriangle size={14} />
              24/7 Emergency Service
            </span>
          </div>

          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-white leading-tight mb-6">
            HVAC Emergency?<br />
            <span className="text-red-400">We Answer Now.</span>
          </h1>

          <p className="text-xl text-white/60 leading-relaxed mb-10 max-w-2xl mx-auto">
            Real technicians answering real calls — day, night, weekends, and holidays. When your comfort or safety is at risk, Summit Climate Solutions is ready to respond.
          </p>

          {/* Massive phone CTA */}
          <a
            href={company.phoneHref}
            className="inline-flex items-center justify-center gap-4 px-10 py-6 bg-red-600 hover:bg-red-700 text-white text-2xl font-black rounded-2xl transition-all duration-200 shadow-2xl shadow-red-600/30 hover:-translate-y-1 mb-6"
          >
            <Phone size={28} />
            {company.phone}
          </a>

          <div className="flex flex-wrap items-center justify-center gap-6 text-white/50 text-sm">
            <div className="flex items-center gap-2">
              <Clock size={14} className="text-red-400" />
              2-hour response target
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle size={14} className="text-red-400" />
              No after-hours fees for members
            </div>
            <div className="flex items-center gap-2">
              <Zap size={14} className="text-red-400" />
              Fully stocked service vehicles
            </div>
          </div>
        </div>
      </section>

      {/* Common emergencies */}
      <section className="py-20 bg-[#0B1629]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            <div>
              <div className="text-red-400 font-bold text-sm uppercase tracking-wider mb-4">Common HVAC Emergencies</div>
              <h2 className="text-white font-bold text-3xl mb-6">When to Call Our Emergency Line</h2>
              <div className="space-y-3">
                {emergencies.map((e) => (
                  <div key={e} className="flex items-start gap-3 p-3 bg-red-950/20 border border-red-500/15 rounded-xl">
                    <AlertTriangle size={15} className="text-red-400 shrink-0 mt-0.5" />
                    <span className="text-white/70 text-sm">{e}</span>
                  </div>
                ))}
              </div>

              <div className="mt-8 p-5 bg-amber-500/8 border border-amber-500/20 rounded-xl">
                <p className="text-amber-400/80 text-sm font-medium">
                  If you suspect a gas leak or CO emergency, leave the building immediately and call 911, then call us.
                </p>
              </div>
            </div>

            {/* What to expect + form */}
            <div className="space-y-6">
              <div className="bg-[#112240] border border-white/8 rounded-2xl p-6">
                <h3 className="text-white font-bold text-lg mb-4">What to Expect When You Call</h3>
                <div className="space-y-4">
                  {[
                    { step: "1", title: "Immediate Answer", desc: "A live Summit technician answers within 2 rings — no voicemail, no hold music." },
                    { step: "2", title: "Rapid Dispatch", desc: "We locate the nearest available technician and dispatch them to your address." },
                    { step: "3", title: "2-Hour Target", desc: "Our target is to have a technician at your door within 2 hours for genuine emergencies." },
                    { step: "4", title: "Upfront Pricing", desc: "We quote clearly before starting any repair — even at 2am." },
                  ].map((item) => (
                    <div key={item.step} className="flex gap-3">
                      <div className="w-7 h-7 bg-red-600/20 rounded-full flex items-center justify-center text-red-400 text-xs font-bold shrink-0">
                        {item.step}
                      </div>
                      <div>
                        <div className="text-white font-semibold text-sm">{item.title}</div>
                        <div className="text-white/45 text-xs mt-0.5">{item.desc}</div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="bg-[#112240] border border-white/8 rounded-2xl p-6">
                <h3 className="text-white font-bold text-lg mb-4">Emergency Contact Form</h3>
                <p className="text-white/50 text-sm mb-5">For non-life-threatening situations, submit here and we'll call you back immediately. For true emergencies, please call.</p>
                <ContactForm />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
