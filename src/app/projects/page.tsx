import type { Metadata } from "next"

import { ProjectList } from "@/components/projects/project-list"

export const metadata: Metadata = {
    title: "Projects | Do The Vinh",
    description:
        "Selected supporting projects across backend delivery, portfolio engineering, and transition work alongside enterprise ERP/logistics experience.",
}

export default function ProjectsPage() {
    return (
        <div className="container mx-auto px-4 py-12">
            <h1 className="mb-6 text-center text-4xl font-bold">Selected Supporting Projects</h1>
            <p className="mx-auto mb-16 max-w-3xl text-center text-lg text-muted-foreground">
                A concise public project set that supports backend delivery, portfolio engineering, and iterative
                product thinking. The main enterprise production story remains the H2ALL / FastLink case study.
            </p>
            <ProjectList />
        </div>
    )
}
