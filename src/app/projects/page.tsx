import type { Metadata } from "next"

import { ProjectList } from "@/components/projects/project-list"

export const metadata: Metadata = {
    title: "Projects | Do The Vinh",
    description:
        "Supporting backend-oriented projects in ASP.NET Core, reporting, persistence, and transition work alongside enterprise ERP/logistics experience.",
}

export default function ProjectsPage() {
    return (
        <div className="container mx-auto px-4 py-12">
            <h1 className="mb-6 text-center text-4xl font-bold">Supporting Backend Projects</h1>
            <p className="mx-auto mb-16 max-w-3xl text-center text-lg text-muted-foreground">
                A small public project set that reinforces backend delivery, persistence, and workflow thinking. The
                main enterprise production story remains the H2ALL / FastLink case study.
            </p>
            <ProjectList />
        </div>
    )
}
