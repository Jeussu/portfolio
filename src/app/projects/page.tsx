import type { Metadata } from "next"

import { ProjectList } from "@/components/projects/project-list"

export const metadata: Metadata = {
    title: "Projects | Do The Vinh",
    description:
        "Selected supporting projects across backend delivery, portfolio engineering, and transition work alongside enterprise ERP/logistics experience.",
}

export default function ProjectsPage() {
    return (
        <div className="container mx-auto px-4 py-14 md:py-16">
            <div className="mx-auto mb-14 max-w-4xl text-center">
                <p className="mb-3 text-xs font-semibold uppercase tracking-[0.24em] text-primary">
                    Supporting Public Work
                </p>
                <h1 className="text-4xl font-black tracking-tight md:text-5xl">Selected Projects</h1>
                <p className="mx-auto mt-5 max-w-3xl text-lg leading-relaxed text-muted-foreground">
                    A curated public project set that supports backend delivery, portfolio engineering, and transition work.
                    The H2ALL / FastLink case study remains the primary enterprise proof point.
                </p>
            </div>
            <ProjectList />
        </div>
    )
}
