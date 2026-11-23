import { Badge } from "@/components/ui/badge"
import { SKILLS } from "@/lib/data"

const coreCategories = [
    { title: "Backend/Services", skills: SKILLS.backend },
    { title: "Data", skills: SKILLS.data },
    { title: "Frontend", skills: SKILLS.frontend },
]

const supportingCategories = [
    { title: "Integration & Delivery", skills: SKILLS.integration },
    { title: "Testing & Tooling", skills: SKILLS.testing },
    { title: "AI-Assisted Development", skills: SKILLS.ai },
    { title: "Legacy Desktop", skills: SKILLS.desktop },
    { title: "Business Domain Knowledge", skills: SKILLS.domain },
]

export function Skills() {
    return (
        <section className="border-y border-border/60 bg-muted/20 py-20 md:py-24">
            <div className="container mx-auto px-4">
                <div className="mx-auto mb-12 max-w-3xl text-center">
                    <p className="mb-3 text-xs font-semibold uppercase tracking-[0.24em] text-primary">
                        Backend-Focused, Full-Stack Capable
                    </p>
                    <h2 className="text-3xl font-black tracking-tight md:text-4xl">Backend depth first, full-stack delivery proven</h2>
                    <p className="mt-4 text-base leading-relaxed text-muted-foreground md:text-lg">
                        Core .NET backend and data skills from enterprise ERP/logistics work, plus the frontend, testing, and
                        delivery tools used to ship a production full-stack platform.
                    </p>
                </div>

                <div className="mx-auto space-y-10">
                    <div>
                        <p className="mb-4 text-sm font-semibold uppercase tracking-[0.2em] text-foreground/60">
                            Core Strengths
                        </p>
                        <div className="grid grid-cols-1 gap-6 lg:grid-cols-3">
                            {coreCategories.map((category) => (
                                <SkillCategory key={category.title} title={category.title} skills={category.skills} emphasis="core" />
                            ))}
                        </div>
                    </div>

                    <div>
                        <p className="mb-4 text-sm font-semibold uppercase tracking-[0.2em] text-foreground/60">
                            Delivery, Tooling & Background
                        </p>
                        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 xl:grid-cols-3">
                            {supportingCategories.map((category) => (
                                <SkillCategory key={category.title} title={category.title} skills={category.skills} emphasis="supporting" />
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

function SkillCategory({
    title,
    skills,
    emphasis,
}: {
    title: string
    skills: string[]
    emphasis: "core" | "supporting"
}) {
    return (
        <div
            className={`rounded-[1.75rem] border p-6 shadow-[0_24px_60px_-42px_hsl(var(--foreground)/0.35)] ${
                emphasis === "core"
                    ? "border-primary/15 bg-gradient-to-br from-card via-card to-primary/[0.05]"
                    : "border-border/70 bg-background/80"
            }`}
        >
            <p className="mb-3 text-xs font-semibold uppercase tracking-[0.2em] text-muted-foreground">
                {emphasis === "core" ? "Core" : "Supporting"}
            </p>
            <h3 className="mb-5 text-xl font-semibold text-foreground">{title}</h3>
            <div className="flex flex-wrap gap-2">
                {skills.map((skill) => (
                    <Badge
                        key={skill}
                        variant="secondary"
                        className="border-transparent bg-primary/[0.08] px-3 py-1.5 text-sm font-normal text-foreground"
                    >
                        {skill}
                    </Badge>
                ))}
            </div>
        </div>
    )
}
