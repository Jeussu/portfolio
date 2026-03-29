import type { Metadata } from "next"

import { ExperienceContent } from "@/components/experience/experience-content"

export const metadata: Metadata = {
    title: "Experience | Do The Vinh",
    description:
        "Enterprise ERP/logistics experience across finance workflows, reporting accuracy, hybrid service environments, and selected credentials supporting a .NET backend profile.",
}

export default function ExperiencePage() {
    return <ExperienceContent />
}
