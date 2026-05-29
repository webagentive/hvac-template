"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { Menu, X, Phone, ChevronDown } from "lucide-react"
import { company } from "@/config/company"
import { clsx } from "clsx"

const navLinks = [
  {
    label: "Services",
    href: "/services",
    dropdown: [
      { label: "AC Repair", href: "/services/ac-repair" },
      { label: "AC Installation", href: "/services/ac-installation" },
      { label: "Heating Repair", href: "/services/heating-repair" },
      { label: "Furnace Installation", href: "/services/furnace-installation" },
      { label: "HVAC Maintenance", href: "/services/hvac-maintenance" },
      { label: "Indoor Air Quality", href: "/services/indoor-air-quality" },
      { label: "Ductwork", href: "/services/ductwork" },
      { label: "Thermostat Installation", href: "/services/thermostat-installation" },
      { label: "Emergency HVAC", href: "/services/emergency-hvac" },
    ],
  },
  { label: "About", href: "/about" },
  { label: "Service Areas", href: "/service-areas" },
  { label: "Financing", href: "/financing" },
  { label: "Reviews", href: "/reviews" },
  { label: "Contact", href: "/contact" },
]

export function Navigation() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)
  const [servicesOpen, setServicesOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener("scroll", onScroll, { passive: true })
    return () => window.removeEventListener("scroll", onScroll)
  }, [])

  useEffect(() => {
    if (mobileOpen) {
      document.body.style.overflow = "hidden"
    } else {
      document.body.style.overflow = ""
    }
    return () => { document.body.style.overflow = "" }
  }, [mobileOpen])

  return (
    <>
      <header
        className={clsx(
          "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
          scrolled
            ? "bg-[#0B1629]/95 backdrop-blur-md border-b border-white/8 shadow-xl"
            : "bg-transparent"
        )}
      >
        <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 lg:h-20">
            {/* Logo */}
            <Link href="/" className="flex items-center gap-3 group">
              <div className="w-9 h-9 bg-[#2E6DAD] rounded-lg flex items-center justify-center shrink-0 group-hover:bg-[#1d5a94] transition-colors">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/>
                  <polyline points="9 22 9 12 15 12 15 22"/>
                </svg>
              </div>
              <div className="hidden sm:block">
                <div className="text-white font-bold text-lg leading-none">{company.name}</div>
                <div className="text-white/40 text-xs">{company.tagline}</div>
              </div>
            </Link>

            {/* Desktop Nav */}
            <div className="hidden lg:flex items-center gap-1">
              {navLinks.map((link) =>
                link.dropdown ? (
                  <div key={link.label} className="relative group">
                    <button
                      className="flex items-center gap-1 px-3 py-2 text-sm text-white/75 hover:text-white transition-colors rounded-lg hover:bg-white/5"
                      onMouseEnter={() => setServicesOpen(true)}
                      onMouseLeave={() => setServicesOpen(false)}
                    >
                      {link.label}
                      <ChevronDown size={14} className="group-hover:rotate-180 transition-transform duration-200" />
                    </button>
                    <div
                      className="absolute top-full left-0 w-56 pt-2 opacity-0 group-hover:opacity-100 pointer-events-none group-hover:pointer-events-auto transition-all duration-200 translate-y-1 group-hover:translate-y-0"
                      onMouseEnter={() => setServicesOpen(true)}
                      onMouseLeave={() => setServicesOpen(false)}
                    >
                      <div className="bg-[#112240] border border-white/10 rounded-xl shadow-2xl overflow-hidden">
                        {link.dropdown.map((item) => (
                          <Link
                            key={item.href}
                            href={item.href}
                            className="block px-4 py-2.5 text-sm text-white/70 hover:text-white hover:bg-[#2E6DAD]/20 transition-colors"
                          >
                            {item.label}
                          </Link>
                        ))}
                      </div>
                    </div>
                  </div>
                ) : (
                  <Link
                    key={link.href}
                    href={link.href}
                    className="px-3 py-2 text-sm text-white/75 hover:text-white transition-colors rounded-lg hover:bg-white/5"
                  >
                    {link.label}
                  </Link>
                )
              )}
            </div>

            {/* Desktop CTAs */}
            <div className="hidden lg:flex items-center gap-3">
              <a
                href={company.phoneHref}
                className="flex items-center gap-2 px-4 py-2 text-sm font-semibold text-white/80 hover:text-white transition-colors"
              >
                <Phone size={15} />
                {company.phone}
              </a>
              <Link
                href="/book"
                className="px-5 py-2.5 bg-[#2E6DAD] hover:bg-[#1d5a94] text-white text-sm font-semibold rounded-lg transition-all duration-200 shadow-lg shadow-[#2E6DAD]/20"
              >
                Book Now
              </Link>
            </div>

            {/* Mobile menu button */}
            <button
              className="lg:hidden p-2 rounded-lg text-white/70 hover:text-white hover:bg-white/5 transition-colors"
              onClick={() => setMobileOpen(!mobileOpen)}
              aria-label="Toggle menu"
            >
              {mobileOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </nav>
      </header>

      {/* Mobile Menu Overlay */}
      <div
        className={clsx(
          "fixed inset-0 z-40 lg:hidden transition-all duration-300",
          mobileOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        )}
      >
        <div className="absolute inset-0 bg-[#0B1629]/98 backdrop-blur-md" onClick={() => setMobileOpen(false)} />
        <div className={clsx(
          "relative h-full flex flex-col pt-20 px-6 pb-8 transition-transform duration-300",
          mobileOpen ? "translate-x-0" : "-translate-x-full"
        )}>
          {/* Call CTA prominent in mobile */}
          <a
            href={company.phoneHref}
            className="flex items-center justify-center gap-3 w-full py-4 bg-[#2E6DAD] hover:bg-[#1d5a94] text-white text-lg font-bold rounded-xl mb-6 transition-colors"
            onClick={() => setMobileOpen(false)}
          >
            <Phone size={20} />
            Call Now — {company.phone}
          </a>

          <div className="space-y-1 flex-1 overflow-y-auto">
            {navLinks.map((link) =>
              link.dropdown ? (
                <div key={link.label}>
                  <div className="px-3 py-2 text-xs font-semibold uppercase tracking-wider text-white/30 mt-4">
                    Services
                  </div>
                  {link.dropdown.map((item) => (
                    <Link
                      key={item.href}
                      href={item.href}
                      className="block px-4 py-3 text-white/70 hover:text-white hover:bg-white/5 rounded-lg transition-colors text-base"
                      onClick={() => setMobileOpen(false)}
                    >
                      {item.label}
                    </Link>
                  ))}
                </div>
              ) : (
                <Link
                  key={link.href}
                  href={link.href}
                  className="block px-4 py-3 text-white/80 hover:text-white hover:bg-white/5 rounded-lg transition-colors text-base font-medium"
                  onClick={() => setMobileOpen(false)}
                >
                  {link.label}
                </Link>
              )
            )}
          </div>

          <Link
            href="/book"
            className="block text-center py-4 bg-[#112240] border border-white/10 text-white font-semibold rounded-xl mt-6 transition-colors hover:bg-[#1E3A5F]"
            onClick={() => setMobileOpen(false)}
          >
            Book Appointment
          </Link>
        </div>
      </div>
    </>
  )
}
