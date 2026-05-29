"use client"

import { useForm, ValidationError } from "@formspree/react"
import { CheckCircle, Loader2, Send } from "lucide-react"
import { company } from "@/config/company"

const serviceOptions = [
  "AC Repair",
  "AC Installation",
  "Heating Repair",
  "Furnace Installation",
  "HVAC Maintenance",
  "Indoor Air Quality",
  "Ductwork",
  "Thermostat Installation",
  "Emergency Service",
  "Other",
]

const contactTimes = [
  "Morning (8am–12pm)",
  "Afternoon (12pm–5pm)",
  "Evening (5pm–8pm)",
  "Anytime",
]

export function ContactForm() {
  const [state, handleSubmit] = useForm(company.formspreeId)

  if (state.succeeded) {
    return (
      <div className="bg-[#112240] border border-[#2E6DAD]/30 rounded-2xl p-10 text-center">
        <div className="w-16 h-16 bg-[#2E6DAD]/15 rounded-full flex items-center justify-center mx-auto mb-5">
          <CheckCircle size={32} className="text-[#4A90D9]" />
        </div>
        <h3 className="text-white font-bold text-2xl mb-3">Message Received</h3>
        <p className="text-white/55 text-base leading-relaxed">
          Thank you for contacting Summit Climate Solutions. Our team will follow up within 2 business hours during normal hours, or first thing the next business day.
        </p>
      </div>
    )
  }

  return (
    <form onSubmit={handleSubmit} className="bg-[#112240] border border-white/8 rounded-2xl p-8 space-y-5">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        <div>
          <label className="block text-white/70 text-sm font-medium mb-2" htmlFor="name">Full Name *</label>
          <input
            id="name"
            name="name"
            type="text"
            required
            placeholder="John Smith"
            className="w-full px-4 py-3 bg-[#0B1629] border border-white/10 focus:border-[#2E6DAD] text-white placeholder-white/25 rounded-xl text-sm outline-none transition-colors"
          />
          <ValidationError field="name" prefix="Name" errors={state.errors} className="text-red-400 text-xs mt-1" />
        </div>

        <div>
          <label className="block text-white/70 text-sm font-medium mb-2" htmlFor="phone">Phone Number *</label>
          <input
            id="phone"
            name="phone"
            type="tel"
            required
            placeholder="(720) 555-0100"
            className="w-full px-4 py-3 bg-[#0B1629] border border-white/10 focus:border-[#2E6DAD] text-white placeholder-white/25 rounded-xl text-sm outline-none transition-colors"
          />
          <ValidationError field="phone" prefix="Phone" errors={state.errors} className="text-red-400 text-xs mt-1" />
        </div>
      </div>

      <div>
        <label className="block text-white/70 text-sm font-medium mb-2" htmlFor="email">Email Address</label>
        <input
          id="email"
          name="email"
          type="email"
          placeholder="john@example.com"
          className="w-full px-4 py-3 bg-[#0B1629] border border-white/10 focus:border-[#2E6DAD] text-white placeholder-white/25 rounded-xl text-sm outline-none transition-colors"
        />
        <ValidationError field="email" prefix="Email" errors={state.errors} className="text-red-400 text-xs mt-1" />
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        <div>
          <label className="block text-white/70 text-sm font-medium mb-2" htmlFor="service">Service Needed</label>
          <select
            id="service"
            name="service"
            className="w-full px-4 py-3 bg-[#0B1629] border border-white/10 focus:border-[#2E6DAD] text-white/80 rounded-xl text-sm outline-none transition-colors appearance-none"
          >
            <option value="">Select a service...</option>
            {serviceOptions.map((opt) => (
              <option key={opt} value={opt}>{opt}</option>
            ))}
          </select>
        </div>

        <div>
          <label className="block text-white/70 text-sm font-medium mb-2" htmlFor="contactTime">Preferred Contact Time</label>
          <select
            id="contactTime"
            name="contactTime"
            className="w-full px-4 py-3 bg-[#0B1629] border border-white/10 focus:border-[#2E6DAD] text-white/80 rounded-xl text-sm outline-none transition-colors appearance-none"
          >
            <option value="">Select a time...</option>
            {contactTimes.map((t) => (
              <option key={t} value={t}>{t}</option>
            ))}
          </select>
        </div>
      </div>

      <div>
        <label className="block text-white/70 text-sm font-medium mb-2" htmlFor="message">Message</label>
        <textarea
          id="message"
          name="message"
          rows={4}
          placeholder="Tell us about your HVAC needs or describe the issue you're experiencing..."
          className="w-full px-4 py-3 bg-[#0B1629] border border-white/10 focus:border-[#2E6DAD] text-white placeholder-white/25 rounded-xl text-sm outline-none transition-colors resize-none"
        />
        <ValidationError field="message" prefix="Message" errors={state.errors} className="text-red-400 text-xs mt-1" />
      </div>

      <ValidationError errors={state.errors} className="text-red-400 text-sm" />

      <button
        type="submit"
        disabled={state.submitting}
        className="w-full flex items-center justify-center gap-2.5 py-4 bg-[#2E6DAD] hover:bg-[#1d5a94] text-white font-bold rounded-xl transition-all duration-200 disabled:opacity-60 disabled:cursor-not-allowed hover:-translate-y-0.5 shadow-lg shadow-[#2E6DAD]/20"
      >
        {state.submitting ? (
          <>
            <Loader2 size={18} className="animate-spin" />
            Sending...
          </>
        ) : (
          <>
            <Send size={18} />
            Send Message
          </>
        )}
      </button>

      <p className="text-center text-white/30 text-xs">
        We respond within 2 business hours. For emergencies, call {company.phone}.
      </p>
    </form>
  )
}
