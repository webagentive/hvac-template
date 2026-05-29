import Link from "next/link"
import { Phone, Mail, MapPin, Star } from "lucide-react"
import { company } from "@/config/company"

const serviceLinks = [
  { label: "AC Repair", href: "/services/ac-repair" },
  { label: "AC Installation", href: "/services/ac-installation" },
  { label: "Heating Repair", href: "/services/heating-repair" },
  { label: "Furnace Installation", href: "/services/furnace-installation" },
  { label: "HVAC Maintenance", href: "/services/hvac-maintenance" },
  { label: "Indoor Air Quality", href: "/services/indoor-air-quality" },
  { label: "Ductwork", href: "/services/ductwork" },
  { label: "Thermostat Installation", href: "/services/thermostat-installation" },
  { label: "Emergency HVAC", href: "/services/emergency-hvac" },
]

const companyLinks = [
  { label: "About Us", href: "/about" },
  { label: "Reviews", href: "/reviews" },
  { label: "Financing", href: "/financing" },
  { label: "Membership", href: "/membership" },
  { label: "Careers", href: "/careers" },
  { label: "Contact", href: "/contact" },
  { label: "Book Appointment", href: "/book" },
  { label: "Emergency Service", href: "/emergency" },
]

export function Footer() {
  return (
    <footer className="bg-[#070E1A] border-t border-white/8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main footer */}
        <div className="py-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Brand */}
          <div className="lg:col-span-1">
            <div className="flex items-center gap-3 mb-5">
              <div className="w-9 h-9 bg-[#2E6DAD] rounded-lg flex items-center justify-center shrink-0">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/>
                  <polyline points="9 22 9 12 15 12 15 22"/>
                </svg>
              </div>
              <div>
                <div className="text-white font-bold text-lg leading-none">{company.name}</div>
                <div className="text-white/40 text-xs mt-0.5">{company.tagline}</div>
              </div>
            </div>
            <p className="text-white/45 text-sm leading-relaxed mb-6">
              Denver's most trusted HVAC specialists since {company.founded}. Precision service, honest pricing, total comfort.
            </p>
            {/* Rating */}
            <div className="flex items-center gap-2">
              <div className="flex">
                {[1,2,3,4,5].map((i) => (
                  <Star key={i} size={14} className="text-amber-400 fill-amber-400" />
                ))}
              </div>
              <span className="text-white/60 text-sm">{company.rating} · {company.reviewCount} reviews</span>
            </div>
            <div className="mt-3 text-xs text-white/30">{company.license}</div>
            <div className="mt-1 text-xs text-white/30">Est. {company.founded} · Denver, Colorado</div>
          </div>

          {/* Services */}
          <div>
            <div className="text-white font-semibold text-sm uppercase tracking-wider mb-5">Services</div>
            <ul className="space-y-2.5">
              {serviceLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-white/50 hover:text-white text-sm transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <div className="text-white font-semibold text-sm uppercase tracking-wider mb-5">Company</div>
            <ul className="space-y-2.5">
              {companyLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-white/50 hover:text-white text-sm transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact & Service Areas */}
          <div>
            <div className="text-white font-semibold text-sm uppercase tracking-wider mb-5">Contact</div>
            <div className="space-y-4 mb-8">
              <a href={company.phoneHref} className="flex items-start gap-3 text-sm text-white/50 hover:text-white transition-colors group">
                <Phone size={15} className="mt-0.5 shrink-0 text-[#4A90D9]" />
                <span>{company.phone}</span>
              </a>
              <a href={`mailto:${company.email}`} className="flex items-start gap-3 text-sm text-white/50 hover:text-white transition-colors">
                <Mail size={15} className="mt-0.5 shrink-0 text-[#4A90D9]" />
                <span>{company.email}</span>
              </a>
              <div className="flex items-start gap-3 text-sm text-white/50">
                <MapPin size={15} className="mt-0.5 shrink-0 text-[#4A90D9]" />
                <span>{company.address}</span>
              </div>
            </div>

            <div className="text-white font-semibold text-sm uppercase tracking-wider mb-3">Service Areas</div>
            <div className="flex flex-wrap gap-1.5">
              {company.serviceAreas.slice(0, 6).map((area) => (
                <span key={area} className="text-xs text-white/40 bg-white/5 px-2 py-1 rounded">
                  {area}
                </span>
              ))}
              <Link href="/service-areas" className="text-xs text-[#4A90D9] hover:text-white px-2 py-1 transition-colors">
                +{company.serviceAreas.length - 6} more
              </Link>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="py-6 border-t border-white/8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-white/30 text-xs text-center sm:text-left">
            © {new Date().getFullYear()} {company.name}. All rights reserved. {company.license}
          </p>
          <div className="flex items-center gap-6">
            <Link href="/privacy" className="text-white/30 hover:text-white/60 text-xs transition-colors">Privacy Policy</Link>
            <Link href="/terms" className="text-white/30 hover:text-white/60 text-xs transition-colors">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
