"use client"

import * as React from "react"
import { cn } from "@/lib/utils"

const sections = [
    { id: "overview", label: "Overview" },
    { id: "architecture", label: "Architecture" },
    { id: "lifecycle", label: "Request Lifecycle" },
    { id: "contexts", label: "Bounded Contexts" },
    { id: "flows", label: "Business Flows" },
    { id: "contributions", label: "Engineering Impact" },
    { id: "security", label: "Security" },
    { id: "outcomes", label: "Outcomes" },
]

export function TOC() {
    const [activeSection, setActiveSection] = React.useState("overview")

    React.useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        setActiveSection(entry.target.id)
                    }
                })
            },
            { rootMargin: "-20% 0px -35% 0px" }
        )

        sections.forEach(({ id }) => {
            const element = document.getElementById(id)
            if (element) observer.observe(element)
        })

        return () => observer.disconnect()
    }, [])

    return (
        <nav className="sticky top-24 hidden lg:block w-64 p-4 h-fit max-h-[calc(100vh-6rem)] overflow-y-auto pl-8">
            <h4 className="font-semibold mb-4 text-sm uppercase tracking-wider text-muted-foreground">Contents</h4>
            <ul className="space-y-3 text-sm">
                {sections.map((section) => (
                    <li key={section.id}>
                        <a
                            href={`#${section.id}`}
                            className={cn(
                                "block py-1 pl-4 border-l-2 transition-colors hover:text-foreground",
                                activeSection === section.id
                                    ? "border-primary text-primary font-medium"
                                    : "border-transparent text-muted-foreground hover:border-muted-foreground"
                            )}
                            onClick={(e) => {
                                e.preventDefault()
                                document.getElementById(section.id)?.scrollIntoView({ behavior: 'smooth' })
                                setActiveSection(section.id)
                            }}
                        >
                            {section.label}
                        </a>
                    </li>
                ))}
            </ul>
        </nav>
    )
}
