import { ProjectList } from "@/components/projects/project-list"

export default function ProjectsPage() {
    return (
        <div className="container mx-auto px-4 py-12">
            <h1 className="text-4xl font-bold mb-6 text-center">Projects</h1>
            <p className="text-muted-foreground text-center mb-16 max-w-2xl mx-auto text-lg">
                A collection of professional, academic, and personal projects showcasing my journey in the .NET ecosystem.
            </p>
            <ProjectList />
        </div>
    )
}
