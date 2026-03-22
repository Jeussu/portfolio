"use client"

import * as React from "react"

import { cn } from "@/lib/utils"

const sections = [
    { id: "overview", label: "Overview" },
    { id: "business-context", label: "Business Context" },
    { id: "platform", label: "What the Platform Is" },
    { id: "architecture", label: "Architecture Direction" },
    { id: "scope", label: "My Scope" },
    { id: "problems", label: "Key Problems I Worked On" },
    { id: "reconciliation", label: "Representative Contribution" },
    { id: "performance", label: "Performance & Data Handling" },
    { id: "backend-fit", label: "Why This Matters for Backend Roles" },
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
        <nav className="sticky top-24 hidden h-fit max-h-[calc(100vh-6rem)] w-64 overflow-y-auto p-4 pl-8 lg:block">
            <h4 className="mb-4 text-sm font-semibold uppercase tracking-wider text-muted-foreground">Contents</h4>
            <ul className="space-y-3 text-sm">
                {sections.map((section) => (
                    <li key={section.id}>
                        <a
                            href={`#${section.id}`}
                            className={cn(
                                "block border-l-2 py-1 pl-4 transition-colors hover:text-foreground",
                                activeSection === section.id
                                    ? "border-primary font-medium text-primary"
                                    : "border-transparent text-muted-foreground hover:border-muted-foreground"
                            )}
                            onClick={(e) => {
                                e.preventDefault()
                                document.getElementById(section.id)?.scrollIntoView({ behavior: "smooth" })
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
