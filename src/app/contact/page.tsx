import type { Metadata } from "next"
import Link from "next/link"
import { Github, Linkedin, Mail, MapPin, Phone } from "lucide-react"

import { Button } from "@/components/ui/button"
import { PROFILE } from "@/lib/data"

export const metadata: Metadata = {
    title: "Contact | Do The Vinh",
    description:
        "Contact Do The Vinh for .NET backend opportunities in ERP/logistics, reporting, data reconciliation, and workflow-heavy enterprise systems.",
}

export default function ContactPage() {
    return (
        <div className="container mx-auto px-4 py-14 md:py-16">
            <div className="mx-auto max-w-6xl space-y-8">
                <section className="rounded-[2rem] border border-border/70 bg-gradient-to-br from-card via-card to-primary/[0.05] p-6 shadow-[0_32px_90px_-58px_hsl(var(--foreground)/0.55)] md:p-10">
                    <div className="grid gap-8 lg:grid-cols-[minmax(0,1.2fr)_minmax(320px,0.8fr)]">
                        <div>
                            <p className="mb-3 text-xs font-semibold uppercase tracking-[0.24em] text-primary">
                                Contact
                            </p>
                            <h1 className="max-w-3xl text-4xl font-black tracking-tight md:text-5xl">
                                Backend roles where workflow-heavy systems matter
                            </h1>
                            <p className="mt-5 max-w-3xl text-lg leading-relaxed text-muted-foreground">
                                Open to .NET backend opportunities where ERP/logistics context, finance/reporting
                                correctness, and maintainable service work are valued.
                            </p>

                            <div className="mt-8 flex flex-wrap gap-3">
                                <Button asChild size="lg" className="w-full sm:w-auto">
                                    <Link href={`mailto:${PROFILE.email}`}>
                                        Email Me <Mail className="ml-2 h-4 w-4" />
                                    </Link>
                                </Button>
                                <Button variant="outline" asChild size="lg" className="w-full sm:w-auto">
                                    <Link href={PROFILE.linkedin} target="_blank" rel="noopener noreferrer">
                                        LinkedIn <Linkedin className="ml-2 h-4 w-4" />
                                    </Link>
                                </Button>
                                <Button variant="ghost" asChild size="lg" className="w-full sm:w-auto">
                                    <Link href={PROFILE.cvLink} target="_blank" rel="noopener noreferrer">
                                        View Resume
                                    </Link>
                                </Button>
                            </div>
                        </div>

                        <div className="rounded-[1.75rem] border border-border/70 bg-background/80 p-6 shadow-[0_24px_60px_-42px_hsl(var(--foreground)/0.4)]">
                            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-muted-foreground">
                                Best first step
                            </p>
                            <h2 className="mt-3 text-2xl font-semibold tracking-tight">Email for recruiter outreach</h2>
                            <Link
                                href={`mailto:${PROFILE.email}`}
                                className="mt-6 block break-all text-xl font-semibold text-primary transition-colors hover:text-primary/80"
                            >
                                {PROFILE.email}
                            </Link>
                            <p className="mt-4 leading-7 text-muted-foreground">
                                Email and LinkedIn are the clearest channels for role discussions, interview coordination,
                                and sharing relevant context around backend opportunities.
                            </p>

                            <div className="mt-6 space-y-4 border-t border-border/70 pt-6">
                                <div className="flex items-start gap-3">
                                    <Phone className="mt-0.5 h-4 w-4 text-primary" />
                                    <div>
                                        <p className="text-sm font-medium text-foreground">Phone</p>
                                        <Link href={`tel:${PROFILE.phone.replace(/\s/g, "")}`} className="text-sm text-muted-foreground hover:text-primary">
                                            {PROFILE.phone}
                                        </Link>
                                    </div>
                                </div>
                                <div className="flex items-start gap-3">
                                    <MapPin className="mt-0.5 h-4 w-4 text-primary" />
                                    <div>
                                        <p className="text-sm font-medium text-foreground">Location</p>
                                        <p className="text-sm text-muted-foreground">{PROFILE.location}</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                <div className="grid gap-6 lg:grid-cols-[minmax(0,1.05fr)_minmax(280px,0.95fr)]">
                    <div className="rounded-[1.75rem] border border-border/70 bg-card/85 p-8 shadow-[0_24px_70px_-46px_hsl(var(--foreground)/0.48)]">
                        <p className="mb-3 text-xs font-semibold uppercase tracking-[0.2em] text-primary">
                            Best Fit Opportunities
                        </p>
                        <h2 className="text-2xl font-semibold tracking-tight">Where this profile fits best</h2>
                        <ul className="mt-6 space-y-3 text-sm leading-7 text-muted-foreground md:text-base">
                            <li>.NET backend roles where ERP/logistics workflows, finance/reporting logic, and data correctness matter.</li>
                            <li>Teams that value SQL-heavy investigation, service integration, and maintainable business-rule implementation.</li>
                            <li>Opportunities that see enterprise WinForms/WPF background as real production depth feeding into backend service work.</li>
                        </ul>
                    </div>

                    <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-1">
                        <ContactMethodCard
                            icon={<Linkedin className="h-5 w-5" />}
                            title="LinkedIn"
                            description="Best secondary channel for recruiter outreach and follow-up."
                            href={PROFILE.linkedin}
                            label="Open LinkedIn"
                        />
                        <ContactMethodCard
                            icon={<Github className="h-5 w-5" />}
                            title="GitHub"
                            description="Supporting public work and project code relevant to the portfolio."
                            href={PROFILE.github}
                            label="View GitHub"
                        />
                    </div>
                </div>
            </div>
        </div>
    )
}

function ContactMethodCard({
    icon,
    title,
    description,
    href,
    label,
}: {
    icon: React.ReactNode
    title: string
    description: string
    href: string
    label: string
}) {
    return (
        <div className="rounded-[1.5rem] border border-border/70 bg-background/80 p-6 shadow-[0_20px_50px_-38px_hsl(var(--foreground)/0.45)]">
            <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-primary/10 text-primary">
                {icon}
            </div>
            <h3 className="mt-4 text-lg font-semibold">{title}</h3>
            <p className="mt-3 text-sm leading-7 text-muted-foreground">{description}</p>
            <Link
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-5 inline-flex items-center text-sm font-medium text-primary hover:text-primary/80"
            >
                {label}
            </Link>
        </div>
    )
}
