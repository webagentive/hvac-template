import type { Metadata } from "next"
import { services } from "@/config/services"
import { ServicePageLayout } from "@/components/sections/ServicePageLayout"

const service = services.find((s) => s.slug === "indoor-air-quality")!

export const metadata: Metadata = {
  title: service.metaTitle,
  description: service.metaDescription,
  openGraph: { title: service.metaTitle, description: service.metaDescription },
}

export default function IndoorAirQualityPage() {
  return <ServicePageLayout service={service} />
}
