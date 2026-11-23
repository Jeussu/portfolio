import type { Metadata } from "next"

import { Hero } from "@/components/home/hero"
import { ImpactMetrics } from "@/components/home/impact-metrics"
import { FeaturedCaseStudy } from "@/components/home/featured-case-study"
import { Skills } from "@/components/home/skills"
import { FeaturedProjects } from "@/components/home/featured-projects"
import { pageMetadata } from "@/lib/metadata"

export const metadata: Metadata = pageMetadata({
    description:
        "Portfolio of Do The Vinh, a Fullstack .NET Developer (backend-focused) with 3+ years of ERP/logistics experience and end-to-end delivery of a production ASP.NET Core + Next.js platform.",
    path: "/",
})

export default function Home() {
  return (
    <>
      <Hero />
      <ImpactMetrics />
      <FeaturedCaseStudy />
      <Skills />
      <FeaturedProjects />
    </>
  )
}
