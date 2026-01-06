"use client"

import { SKILLS } from "@/lib/data"
import { Badge } from "@/components/ui/badge"

export function Skills() {
    return (
        <section className="py-20 bg-muted/30 border-y">
            <div className="container px-4 mx-auto">
                <h2 className="text-3xl font-bold mb-12 text-center">Technical Expertise</h2>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
                    <SkillCategory title="Languages & Frameworks" skills={SKILLS.languages} />
                    <SkillCategory title="Data & Storage" skills={SKILLS.data} />
                    <SkillCategory title="Architecture" skills={SKILLS.architecture} />
                    <SkillCategory title="Domain Knowledge" skills={SKILLS.domain} />
                    <SkillCategory title="Tools & Delivery" skills={SKILLS.tools} />
                </div>
            </div>
        </section>
    )
}

function SkillCategory({ title, skills }: { title: string, skills: string[] }) {
    return (
        <div className="bg-background rounded-lg p-6 border shadow-sm hover:border-primary/50 transition-colors">
            <h3 className="font-semibold text-lg mb-4 text-primary">{title}</h3>
            <div className="flex flex-wrap gap-2">
                {skills.map(skill => (
                    <Badge key={skill} variant="secondary" className="px-3 py-1 text-sm font-normal">
                        {skill}
                    </Badge>
                ))}
            </div>
        </div>
    )
}
