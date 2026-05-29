"use client"

import { useForm, ValidationError } from "@formspree/react"
import { CheckCircle, Loader2, Users, DollarSign, Clock, Award, Send } from "lucide-react"
import { company } from "@/config/company"
import { TrustBar } from "@/components/sections/TrustBar"
import { SectionHeader } from "@/components/ui/SectionHeader"

const benefits = [
  { icon: DollarSign, title: "Competitive Pay", description: "Above-market wages with performance bonuses. We believe in paying people what they're worth." },
  { icon: Award, title: "NATE Training Support", description: "Full support for NATE certification, including paid study time and exam reimbursement." },
  { icon: Clock, title: "Work-Life Balance", description: "Predictable schedules, fair rotation for after-hours calls, and real time off." },
  { icon: Users, title: "Team Culture", description: "No toxic competition. We support each other and celebrate wins together." },
]

const positions = [
  {
    title: "HVAC Service Technician",
    type: "Full-Time",
    location: "Denver, CO",
    requirements: ["NATE certification or equivalent experience", "Valid CO driver's license", "2+ years residential HVAC service experience", "Strong customer communication skills"],
    description: "Perform diagnostic and repair services on residential HVAC equipment. You'll have a fully stocked service van, direct scheduling support, and a manager who listens.",
  },
  {
    title: "HVAC Installation Technician",
    type: "Full-Time",
    location: "Denver, CO",
    requirements: ["3+ years installation experience", "Ability to pull and read blueprints", "Sheet metal and ductwork experience preferred", "EPA 608 certification required"],
    description: "Lead residential and light commercial HVAC installations. Work on quality equipment with a team that takes pride in getting the job done right.",
  },
  {
    title: "Customer Service Coordinator",
    type: "Full-Time",
    location: "Denver, CO (hybrid)",
    requirements: ["2+ years in customer service or scheduling", "Excellent phone and communication skills", "Basic HVAC knowledge a plus but not required", "Detail-oriented and calm under pressure"],
    description: "Be the first voice our customers hear. Schedule service calls, support technicians in the field, and ensure every customer has a seamless experience.",
  },
]

function ApplicationForm() {
  const [state, handleSubmit] = useForm(company.formspreeId)

  if (state.succeeded) {
    return (
      <div className="bg-[#112240] border border-[#2E6DAD]/30 rounded-2xl p-10 text-center">
        <div className="w-16 h-16 bg-[#2E6DAD]/15 rounded-full flex items-center justify-center mx-auto mb-5">
          <CheckCircle size={32} className="text-[#4A90D9]" />
        </div>
        <h3 className="text-white font-bold text-2xl mb-3">Application Received</h3>
        <p className="text-white/55">We'll review your application and reach out within 3-5 business days. Thank you for your interest in joining Summit Climate Solutions.</p>
      </div>
    )
  }

  return (
    <form onSubmit={handleSubmit} className="bg-[#112240] border border-white/8 rounded-2xl p-8 space-y-5">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        <div>
          <label className="block text-white/70 text-sm font-medium mb-2" htmlFor="name">Full Name *</label>
          <input id="name" name="name" type="text" required placeholder="John Smith"
            className="w-full px-4 py-3 bg-[#0B1629] border border-white/10 focus:border-[#2E6DAD] text-white placeholder-white/25 rounded-xl text-sm outline-none transition-colors" />
          <ValidationError field="name" prefix="Name" errors={state.errors} className="text-red-400 text-xs mt-1" />
        </div>
        <div>
          <label className="block text-white/70 text-sm font-medium mb-2" htmlFor="phone">Phone *</label>
          <input id="phone" name="phone" type="tel" required placeholder="(720) 555-0100"
            className="w-full px-4 py-3 bg-[#0B1629] border border-white/10 focus:border-[#2E6DAD] text-white placeholder-white/25 rounded-xl text-sm outline-none transition-colors" />
          <ValidationError field="phone" prefix="Phone" errors={state.errors} className="text-red-400 text-xs mt-1" />
        </div>
      </div>
      <div>
        <label className="block text-white/70 text-sm font-medium mb-2" htmlFor="email">Email *</label>
        <input id="email" name="email" type="email" required placeholder="john@example.com"
          className="w-full px-4 py-3 bg-[#0B1629] border border-white/10 focus:border-[#2E6DAD] text-white placeholder-white/25 rounded-xl text-sm outline-none transition-colors" />
        <ValidationError field="email" prefix="Email" errors={state.errors} className="text-red-400 text-xs mt-1" />
      </div>
      <div>
        <label className="block text-white/70 text-sm font-medium mb-2" htmlFor="position">Position Applying For *</label>
        <select id="position" name="position" required
          className="w-full px-4 py-3 bg-[#0B1629] border border-white/10 focus:border-[#2E6DAD] text-white/80 rounded-xl text-sm outline-none transition-colors appearance-none">
          <option value="">Select a position...</option>
          {positions.map((p) => <option key={p.title}>{p.title}</option>)}
          <option>Other / General Inquiry</option>
        </select>
      </div>
      <div>
        <label className="block text-white/70 text-sm font-medium mb-2" htmlFor="experience">Years of HVAC Experience</label>
        <select id="experience" name="experience"
          className="w-full px-4 py-3 bg-[#0B1629] border border-white/10 focus:border-[#2E6DAD] text-white/80 rounded-xl text-sm outline-none transition-colors appearance-none">
          <option value="">Select...</option>
          <option>Less than 1 year</option>
          <option>1–3 years</option>
          <option>3–7 years</option>
          <option>7–15 years</option>
          <option>15+ years</option>
        </select>
      </div>
      <div>
        <label className="block text-white/70 text-sm font-medium mb-2" htmlFor="message">Tell Us About Yourself</label>
        <textarea id="message" name="message" rows={4}
          placeholder="Share your experience, certifications, and why you want to join the Summit team..."
          className="w-full px-4 py-3 bg-[#0B1629] border border-white/10 focus:border-[#2E6DAD] text-white placeholder-white/25 rounded-xl text-sm outline-none transition-colors resize-none" />
      </div>
      <ValidationError errors={state.errors} className="text-red-400 text-sm" />
      <button type="submit" disabled={state.submitting}
        className="w-full flex items-center justify-center gap-2.5 py-4 bg-[#2E6DAD] hover:bg-[#1d5a94] text-white font-bold rounded-xl transition-all disabled:opacity-60 hover:-translate-y-0.5">
        {state.submitting ? <><Loader2 size={18} className="animate-spin" /> Submitting...</> : <><Send size={18} /> Submit Application</>}
      </button>
    </form>
  )
}

export default function CareersPage() {
  return (
    <>
      <section className="relative pt-32 pb-20 bg-[#0B1629] overflow-hidden">
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-[#2E6DAD]/6 rounded-full blur-3xl -translate-y-1/2 translate-x-1/3" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#2E6DAD]/15 border border-[#2E6DAD]/30 text-[#4A90D9] text-sm font-semibold mb-8">
              We're Hiring · Denver, CO
            </span>
            <h1 className="text-5xl sm:text-6xl font-bold text-white leading-tight mb-6">
              Join a Team That <span className="text-[#4A90D9]">Does It Right</span>
            </h1>
            <p className="text-xl text-white/55 leading-relaxed">
              Summit Climate Solutions is built on the belief that great technicians deserve great working conditions. If you take pride in your craft and want to work somewhere that notices, let's talk.
            </p>
          </div>
        </div>
      </section>

      <TrustBar />

      {/* Benefits */}
      <section className="py-24 bg-[#0B1629]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader badge="Why Summit" title={<>What Makes Us <span className="text-[#4A90D9]">Different</span></>}
            subtitle="We've built the kind of company we'd want to work for." className="mb-14" />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-20">
            {benefits.map((b) => (
              <div key={b.title} className="bg-[#112240] border border-white/8 rounded-2xl p-6">
                <div className="w-11 h-11 bg-[#2E6DAD]/15 rounded-xl flex items-center justify-center mb-4">
                  <b.icon size={20} className="text-[#4A90D9]" />
                </div>
                <h3 className="text-white font-bold text-base mb-2">{b.title}</h3>
                <p className="text-white/50 text-sm leading-relaxed">{b.description}</p>
              </div>
            ))}
          </div>

          {/* Open positions */}
          <SectionHeader badge="Open Positions" title={<>Current <span className="text-[#4A90D9]">Openings</span></>} className="mb-10" />
          <div className="space-y-5 mb-20">
            {positions.map((pos) => (
              <div key={pos.title} className="bg-[#112240] border border-white/8 rounded-2xl p-7">
                <div className="flex flex-wrap items-start justify-between gap-4 mb-4">
                  <div>
                    <h3 className="text-white font-bold text-xl">{pos.title}</h3>
                    <div className="flex items-center gap-3 mt-1">
                      <span className="text-[#4A90D9] text-sm">{pos.type}</span>
                      <span className="text-white/30 text-sm">·</span>
                      <span className="text-white/50 text-sm">{pos.location}</span>
                    </div>
                  </div>
                  <span className="px-3 py-1 bg-green-500/10 border border-green-500/20 text-green-400 text-xs font-semibold rounded-full">Open</span>
                </div>
                <p className="text-white/55 text-sm mb-4">{pos.description}</p>
                <div className="space-y-1.5">
                  {pos.requirements.map((r) => (
                    <div key={r} className="flex items-center gap-2 text-white/55 text-sm">
                      <CheckCircle size={13} className="text-[#4A90D9] shrink-0" />
                      {r}
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>

          {/* Application form */}
          <div className="max-w-2xl mx-auto">
            <h2 className="text-white font-bold text-2xl text-center mb-3">Apply Now</h2>
            <p className="text-white/50 text-center text-sm mb-8">Complete the form below and we'll be in touch within 3-5 business days.</p>
            <ApplicationForm />
          </div>
        </div>
      </section>
    </>
  )
}
