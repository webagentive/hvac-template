import type { Metadata } from "next"
import { services } from "@/config/services"
import { ServicePageLayout } from "@/components/sections/ServicePageLayout"

const service = services.find((s) => s.slug === "emergency-hvac")!

export const metadata: Metadata = {
  title: service.metaTitle,
  description: service.metaDescription,
  openGraph: { title: service.metaTitle, description: service.metaDescription },
}

export default function EmergencyHVACPage() {
  return <ServicePageLayout service={service} />
}
