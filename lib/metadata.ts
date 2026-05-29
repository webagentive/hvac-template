import { Metadata } from "next"
import { company } from "@/config/company"

export function generateServiceMetadata(params: {
  title: string
  description: string
  path: string
}): Metadata {
  return {
    title: params.title,
    description: params.description,
    openGraph: {
      title: params.title,
      description: params.description,
      url: `https://summitclimate.com${params.path}`,
      siteName: company.name,
      type: "website",
      locale: "en_US",
    },
    twitter: {
      card: "summary_large_image",
      title: params.title,
      description: params.description,
    },
    alternates: {
      canonical: `https://summitclimate.com${params.path}`,
    },
  }
}

export const defaultMetadata: Metadata = {
  title: {
    default: `${company.name} | ${company.tagline}`,
    template: `%s | ${company.name}`,
  },
  description: `${company.name} provides expert HVAC installation, repair, and maintenance across Denver and surrounding communities. Licensed, insured, 4.9★ rated with 847+ reviews.`,
  openGraph: {
    siteName: company.name,
    type: "website",
    locale: "en_US",
  },
  robots: {
    index: true,
    follow: true,
  },
}
