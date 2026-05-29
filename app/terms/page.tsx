import type { Metadata } from "next"
import { company } from "@/config/company"
import { generateServiceMetadata } from "@/lib/metadata"

export const metadata: Metadata = generateServiceMetadata({
  title: "Terms of Service | Summit Climate Solutions",
  description: "Terms of service for Summit Climate Solutions HVAC services in Denver, CO.",
  path: "/terms",
})

export default function TermsPage() {
  return (
    <section className="pt-32 pb-24 bg-[#0B1629]">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl font-bold text-white mb-2">Terms of Service</h1>
        <p className="text-white/40 text-sm mb-12">Last updated: January 1, 2024</p>

        <div className="space-y-8 text-white/65 leading-relaxed">
          <section>
            <h2 className="text-white font-bold text-xl mb-3">1. Agreement to Terms</h2>
            <p>By scheduling service or using the website of {company.name} ("Summit", "we", "us"), you agree to these Terms of Service. If you do not agree, please do not use our services.</p>
          </section>

          <section>
            <h2 className="text-white font-bold text-xl mb-3">2. Service Agreement</h2>
            <p>All HVAC services are subject to a written service agreement or quote provided before work begins. The agreed price is the total price unless additional work is discovered and authorized by the customer.</p>
            <p className="mt-3">Summit reserves the right to decline service at our discretion.</p>
          </section>

          <section>
            <h2 className="text-white font-bold text-xl mb-3">3. Payment Terms</h2>
            <p>Payment is due upon completion of service unless other arrangements have been made in writing. We accept cash, check, and major credit cards. Financing is available through our approved lending partners.</p>
          </section>

          <section>
            <h2 className="text-white font-bold text-xl mb-3">4. Warranties</h2>
            <p>All repair work is warranted for 90 days on parts and labor. New equipment installations carry manufacturer warranties as specified in the installation agreement. Labor warranty on installations is 1 year.</p>
            <p className="mt-3">Warranties are void if the system is damaged by misuse, unauthorized modifications, failure to maintain, power surges, or acts of nature.</p>
          </section>

          <section>
            <h2 className="text-white font-bold text-xl mb-3">5. Cancellation Policy</h2>
            <p>Appointments may be cancelled or rescheduled with at least 2 hours notice. Cancellations with less than 2 hours notice may be subject to a $50 service call fee.</p>
          </section>

          <section>
            <h2 className="text-white font-bold text-xl mb-3">6. Limitation of Liability</h2>
            <p>Summit's liability for any service is limited to the amount paid for that service. We are not responsible for indirect, incidental, or consequential damages.</p>
          </section>

          <section>
            <h2 className="text-white font-bold text-xl mb-3">7. Membership Plan</h2>
            <p>The Summit Comfort Club membership plan may be cancelled at any time. No refunds are issued for partial membership periods. Benefits apply only to the primary enrolled system.</p>
          </section>

          <section>
            <h2 className="text-white font-bold text-xl mb-3">8. Governing Law</h2>
            <p>These terms are governed by the laws of the State of Colorado. Any disputes shall be resolved in Denver County, Colorado.</p>
          </section>

          <section>
            <h2 className="text-white font-bold text-xl mb-3">9. Contact</h2>
            <div className="p-4 bg-[#112240] border border-white/8 rounded-xl">
              <p className="font-semibold text-white">{company.name}</p>
              <p>{company.address}</p>
              <p>{company.email}</p>
              <p>{company.phone}</p>
            </div>
          </section>
        </div>
      </div>
    </section>
  )
}
