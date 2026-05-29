import type { Metadata } from "next"
import { CheckCircle, CreditCard, Clock, DollarSign, Shield } from "lucide-react"
import { company } from "@/config/company"
import { TrustBar } from "@/components/sections/TrustBar"
import { CTABanner } from "@/components/sections/CTABanner"
import { SectionHeader } from "@/components/ui/SectionHeader"
import { generateServiceMetadata } from "@/lib/metadata"
import { ContactForm } from "@/components/sections/ContactForm"

export const metadata: Metadata = generateServiceMetadata({
  title: "HVAC Financing Denver | 0% Interest Options | Summit Climate Solutions",
  description: "Flexible HVAC financing in Denver, CO. 0% interest for 12 months, low monthly payments, quick approval. Don't let budget delay your comfort. Call (555) 820-4400.",
  path: "/financing",
})

const options = [
  {
    title: "0% Interest — 12 Months",
    description: "Pay nothing in interest when you pay the full balance within 12 months. Best for larger installations.",
    highlight: true,
  },
  {
    title: "Low Monthly Payments",
    description: "Extended terms from 24 to 84 months with competitive rates. Keep your monthly costs manageable.",
    highlight: false,
  },
  {
    title: "No Prepayment Penalties",
    description: "Pay off your balance at any time with no fees. Flexibility to pay early when it works for you.",
    highlight: false,
  },
]

const steps = [
  { icon: CreditCard, title: "Apply Online", description: "Complete the 5-minute application on your phone, tablet, or computer." },
  { icon: Clock, title: "Instant Decision", description: "Receive an approval decision in seconds with no impact to your credit score for pre-qualification." },
  { icon: DollarSign, title: "Choose Your Terms", description: "Select the payment plan that fits your budget — from 0% for 12 months to extended low-payment plans." },
  { icon: Shield, title: "Service Begins", description: "We schedule your service and get to work. No need to wait until you've saved the full amount." },
]

export default function FinancingPage() {
  return (
    <>
      <section className="relative pt-32 pb-20 bg-[#0B1629] overflow-hidden">
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-[#2E6DAD]/6 rounded-full blur-3xl -translate-y-1/2 translate-x-1/3" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <SectionHeader
            badge="Financing"
            title={<>Comfort Financing That <span className="text-[#4A90D9]">Works For You</span></>}
            subtitle="A broken furnace or failing AC doesn't wait for your budget to be ready. Neither should your comfort. Our flexible financing options make premium HVAC service accessible for every Denver homeowner."
          />
        </div>
      </section>

      <TrustBar />

      {/* Options */}
      <section className="py-24 bg-[#0B1629]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-20">
            {options.map((opt) => (
              <div
                key={opt.title}
                className={`rounded-2xl p-7 ${opt.highlight ? "bg-[#2E6DAD]/15 border border-[#2E6DAD]/30" : "bg-[#112240] border border-white/8"}`}
              >
                {opt.highlight && <div className="text-[#4A90D9] text-xs font-bold uppercase tracking-wider mb-3">Most Popular</div>}
                <h3 className="text-white font-bold text-xl mb-3">{opt.title}</h3>
                <p className="text-white/55 text-sm leading-relaxed">{opt.description}</p>
              </div>
            ))}
          </div>

          {/* How it works */}
          <SectionHeader
            badge="How It Works"
            title={<>Apply in <span className="text-[#4A90D9]">5 Minutes</span></>}
            subtitle="Our financing application is fast, simple, and doesn't require you to be on-site."
            className="mb-14"
          />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-20">
            {steps.map((step, i) => (
              <div key={step.title} className="bg-[#112240] border border-white/8 rounded-2xl p-6">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-8 h-8 bg-[#2E6DAD]/15 rounded-full flex items-center justify-center text-[#4A90D9] text-sm font-bold">
                    {i + 1}
                  </div>
                  <step.icon size={18} className="text-[#4A90D9]" />
                </div>
                <h3 className="text-white font-bold text-base mb-2">{step.title}</h3>
                <p className="text-white/50 text-sm leading-relaxed">{step.description}</p>
              </div>
            ))}
          </div>

          {/* Eligible services */}
          <div className="bg-[#112240] border border-white/8 rounded-2xl p-8 mb-12">
            <h3 className="text-white font-bold text-xl mb-6">Financing Available For All Services</h3>
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3">
              {["AC Repair", "AC Installation", "Heating Repair", "Furnace Installation", "Ductwork", "Indoor Air Quality", "Thermostat", "Maintenance Plans"].map((s) => (
                <div key={s} className="flex items-center gap-2 text-white/65 text-sm">
                  <CheckCircle size={14} className="text-[#4A90D9] shrink-0" />
                  {s}
                </div>
              ))}
            </div>
          </div>

          {/* Application form */}
          <div className="max-w-2xl mx-auto">
            <h3 className="text-white font-bold text-2xl text-center mb-3">Start Your Application</h3>
            <p className="text-white/50 text-center text-sm mb-8">Send us your information and we'll connect you with our financing partner or schedule a call to discuss your options.</p>
            <ContactForm />
          </div>
        </div>
      </section>

      <CTABanner
        title="Questions About Financing?"
        subtitle="Our team is happy to walk you through all available options. There's no obligation and no pressure."
      />
    </>
  )
}
