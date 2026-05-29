import type { Metadata } from "next"
import { company } from "@/config/company"
import { generateServiceMetadata } from "@/lib/metadata"

export const metadata: Metadata = generateServiceMetadata({
  title: "Privacy Policy | Summit Climate Solutions",
  description: "Privacy policy for Summit Climate Solutions. Learn how we collect, use, and protect your personal information.",
  path: "/privacy",
})

export default function PrivacyPage() {
  return (
    <section className="pt-32 pb-24 bg-[#0B1629]">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl font-bold text-white mb-2">Privacy Policy</h1>
        <p className="text-white/40 text-sm mb-12">Last updated: January 1, 2024</p>

        <div className="prose prose-invert prose-sm max-w-none space-y-8 text-white/65 leading-relaxed">
          <section>
            <h2 className="text-white font-bold text-xl mb-3">1. Information We Collect</h2>
            <p>Summit Climate Solutions collects information you provide directly to us when you request service, book appointments, or contact us. This includes your name, phone number, email address, service address, and details about your HVAC needs.</p>
            <p className="mt-3">We may also collect information automatically when you visit our website, including IP address, browser type, pages visited, and referring URL through standard web analytics tools.</p>
          </section>

          <section>
            <h2 className="text-white font-bold text-xl mb-3">2. How We Use Your Information</h2>
            <p>We use the information we collect to:</p>
            <ul className="list-disc pl-5 space-y-1.5 mt-2">
              <li>Schedule and confirm service appointments</li>
              <li>Communicate about your service requests and account</li>
              <li>Send appointment reminders and follow-up communications</li>
              <li>Process financing applications (shared with our financing partners)</li>
              <li>Improve our services and website</li>
              <li>Comply with legal obligations</li>
            </ul>
          </section>

          <section>
            <h2 className="text-white font-bold text-xl mb-3">3. Information Sharing</h2>
            <p>We do not sell, trade, or rent your personal information to third parties for marketing purposes. We may share your information with:</p>
            <ul className="list-disc pl-5 space-y-1.5 mt-2">
              <li>Financing partners when you request financing options</li>
              <li>Service providers who assist in our operations (scheduling, payments)</li>
              <li>Legal authorities when required by law</li>
            </ul>
          </section>

          <section>
            <h2 className="text-white font-bold text-xl mb-3">4. Data Security</h2>
            <p>We implement appropriate security measures to protect your personal information from unauthorized access, alteration, disclosure, or destruction. However, no method of transmission over the internet is 100% secure.</p>
          </section>

          <section>
            <h2 className="text-white font-bold text-xl mb-3">5. Cookies</h2>
            <p>Our website uses cookies to improve your browsing experience and analyze site traffic. You can set your browser to refuse cookies, though some features may not function properly as a result.</p>
          </section>

          <section>
            <h2 className="text-white font-bold text-xl mb-3">6. Your Rights</h2>
            <p>You have the right to access, correct, or delete your personal information. To exercise these rights, contact us at {company.email}.</p>
          </section>

          <section>
            <h2 className="text-white font-bold text-xl mb-3">7. Contact Us</h2>
            <p>If you have questions about this Privacy Policy, contact us at:</p>
            <div className="mt-3 p-4 bg-[#112240] border border-white/8 rounded-xl">
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
