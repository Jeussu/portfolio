import type { Metadata } from "next"
import Link from "next/link"
import { Github, Mail, MapPin, Phone } from "lucide-react"

import { Button } from "@/components/ui/button"
import { PROFILE } from "@/lib/data"

export const metadata: Metadata = {
    title: "Contact | Do The Vinh",
    description:
        "Contact Do The Vinh for .NET backend opportunities in ERP/logistics, reporting, data reconciliation, and workflow-heavy enterprise systems.",
}

export default function ContactPage() {
    return (
        <div className="container mx-auto px-4 py-12">
            <div className="mx-auto max-w-5xl">
                <div className="mx-auto mb-12 max-w-3xl text-center">
                    <h1 className="mb-4 text-4xl font-bold">Contact</h1>
                    <p className="text-lg text-muted-foreground">
                        Open to .NET backend opportunities where enterprise workflows, reporting, data correctness,
                        and ERP/logistics context are valued.
                    </p>
                </div>

                <div className="mb-12 grid grid-cols-1 gap-6 md:grid-cols-2 xl:grid-cols-4">
                    <ContactCard icon={<Mail className="h-6 w-6" />} title="Email">
                        <Link href={`mailto:${PROFILE.email}`} className="text-muted-foreground transition-colors hover:text-primary">
                            {PROFILE.email}
                        </Link>
                    </ContactCard>

                    <ContactCard icon={<Phone className="h-6 w-6" />} title="Phone">
                        <Link href={`tel:${PROFILE.phone.replace(/\s/g, "")}`} className="text-muted-foreground transition-colors hover:text-primary">
                            {PROFILE.phone}
                        </Link>
                    </ContactCard>

                    <ContactCard icon={<MapPin className="h-6 w-6" />} title="Location">
                        <p className="text-muted-foreground">{PROFILE.location}</p>
                    </ContactCard>

                    <ContactCard icon={<Github className="h-6 w-6" />} title="GitHub">
                        <Link href={PROFILE.github} target="_blank" rel="noopener noreferrer" className="text-muted-foreground transition-colors hover:text-primary">
                            View supporting work
                        </Link>
                    </ContactCard>
                </div>

                <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
                    <div className="rounded-xl border border-border bg-card p-8 shadow-sm">
                        <h2 className="mb-4 text-2xl font-bold">Best Ways to Reach Me</h2>
                        <p className="mb-6 leading-relaxed text-muted-foreground">
                            Email and LinkedIn are the best channels for recruiter outreach, role discussions, and interview coordination.
                        </p>
                        <div className="flex flex-wrap gap-4">
                            <Button asChild>
                                <Link href={`mailto:${PROFILE.email}`}>Email Me</Link>
                            </Button>
                            <Button variant="outline" asChild>
                                <Link href={PROFILE.linkedin} target="_blank" rel="noopener noreferrer">
                                    LinkedIn
                                </Link>
                            </Button>
                            <Button variant="ghost" asChild>
                                <Link href={PROFILE.cvLink} target="_blank" rel="noopener noreferrer">
                                    View Resume
                                </Link>
                            </Button>
                        </div>
                    </div>

                    <div className="rounded-xl border border-border bg-card p-8 shadow-sm">
                        <h2 className="mb-4 text-2xl font-bold">Best Fit Opportunities</h2>
                        <ul className="space-y-3 text-sm leading-relaxed text-muted-foreground md:text-base">
                            <li>.NET backend roles where ERP/logistics workflows, finance/reporting logic, and data correctness matter.</li>
                            <li>Teams that value SQL-heavy investigation, service integration, and maintainable business-rule implementation.</li>
                            <li>Opportunities that see enterprise WinForms/WPF background as real production depth feeding into backend service work.</li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    )
}

function ContactCard({
    icon,
    title,
    children,
}: {
    icon: React.ReactNode
    title: string
    children: React.ReactNode
}) {
    return (
        <div className="flex flex-col items-center justify-center space-y-4 rounded-xl border border-border bg-card p-6 text-center transition-shadow hover:shadow-md">
            <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary/10 text-primary">
                {icon}
            </div>
            <h3 className="text-lg font-semibold">{title}</h3>
            {children}
        </div>
    )
}
