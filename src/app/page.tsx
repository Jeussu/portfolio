import { Hero } from "@/components/home/hero"
import { ImpactMetrics } from "@/components/home/impact-metrics"
import { FeaturedCaseStudy } from "@/components/home/featured-case-study"
import { Skills } from "@/components/home/skills"
import { FeaturedProjects } from "@/components/home/featured-projects"

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
