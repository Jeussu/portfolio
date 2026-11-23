import type { Metadata } from "next"

import { ExperienceContent } from "@/components/experience/experience-content"
import { pageMetadata } from "@/lib/metadata"

export const metadata: Metadata = pageMetadata({
    title: "Experience",
    description:
        "Freelance full-stack production delivery and enterprise ERP/logistics experience, plus education and certifications supporting a backend-focused full-stack .NET profile.",
    path: "/experience",
})

export default function ExperiencePage() {
    return <ExperienceContent />
}
