"use client"

import { Badge } from "@/components/ui/badge"
import { SKILLS } from "@/lib/data"

export function Skills() {
    return (
        <section className="border-y bg-muted/30 py-20">
            <div className="container mx-auto px-4">
                <div className="mx-auto mb-12 max-w-3xl text-center">
                    <h2 className="text-3xl font-bold">Backend-Focused Skill Set</h2>
                    <p className="mt-3 text-muted-foreground">
                        Strong production depth in enterprise desktop systems, with deliberate positioning toward backend .NET and service-oriented work.
                    </p>
                    <p className="mt-3 text-sm text-muted-foreground">
                        Production-proven strengths are shown first. Any current backend-growth areas are labeled explicitly.
                    </p>
                </div>

                <div className="mx-auto grid max-w-6xl grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
                    <SkillCategory title="Backend & APIs" skills={SKILLS.backend} />
                    <SkillCategory title="Data & Persistence" skills={SKILLS.data} />
                    <SkillCategory title="Messaging / Integration / DevOps" skills={SKILLS.integration} />
                    <SkillCategory title="Enterprise Desktop Background" skills={SKILLS.desktop} />
                    <SkillCategory title="Business Domain Knowledge" skills={SKILLS.domain} />
                </div>
            </div>
        </section>
    )
}

function SkillCategory({ title, skills }: { title: string, skills: string[] }) {
    return (
        <div className="rounded-lg border bg-background p-6 shadow-sm transition-colors hover:border-primary/50">
            <h3 className="mb-4 text-lg font-semibold text-primary">{title}</h3>
            <div className="flex flex-wrap gap-2">
                {skills.map((skill) => (
                    <Badge key={skill} variant="secondary" className="px-3 py-1 text-sm font-normal">
                        {skill}
                    </Badge>
                ))}
            </div>
        </div>
    )
}
