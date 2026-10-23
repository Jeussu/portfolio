import type { Metadata } from "next"
import Link from "next/link"
import {
    CalendarDays,
    Check,
    FileText,
    FlaskConical,
    GitBranch,
    Globe,
    Inbox,
    KeyRound,
    Layers,
    Link as LinkIcon,
    Mail,
    ReceiptText,
    Rocket,
    ShieldCheck,
    Wallet,
    Workflow,
} from "lucide-react"

import { ThuyNgaArchitectureDiagram } from "@/components/case-study/thuynga-architecture"
import { TOC } from "@/components/case-study/toc"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { THUY_NGA_LINKS } from "@/lib/data"

export const metadata: Metadata = {
    title: "Thuý Nga Wedding & Event Case Study | Do The Vinh",
    description:
        "End-to-end client production delivery: an ASP.NET Core 10 and Next.js 16 platform with CMS, CRM, appointments, quotations with PDF, payment tracking, two-factor authentication, and CI-tested delivery to go-live.",
}

const sections = [
    { id: "overview", label: "Overview" },
    { id: "objectives", label: "Project Objectives" },
    { id: "capabilities", label: "Business Capabilities" },
    { id: "architecture", label: "Architecture" },
    { id: "stack", label: "Technology Stack" },
    { id: "engineering", label: "Backend Engineering" },
    { id: "decisions", label: "Decisions & Trade-offs" },
    { id: "security", label: "Security & Reliability" },
    { id: "testing", label: "Testing & CI/CD" },
    { id: "delivery", label: "Delivery & Milestones" },
    { id: "lessons", label: "Lessons Learned" },
]

const objectives = [
    "Present the business's services and completed work in a fast, mobile-first Vietnamese website the business can maintain itself.",
    "Capture quote and consultation requests safely and route them into one admin workflow.",
    "Follow every deal from lead to customer, event, appointments, quotation, and payments, with an audit trail.",
    "Go live with a system that is secure by default, tested end to end, and operable by a very small team.",
]

const capabilities = [
    {
        icon: <Globe className="h-5 w-5 text-primary" />,
        title: "Public Website & CMS",
        description:
            "Services, completed projects with photo albums, guides, testimonials with recorded consent, contact, privacy policy, and SEO with structured data. Services, projects, guides, testimonials, and site content are managed from the CMS.",
    },
    {
        icon: <Inbox className="h-5 w-5 text-primary" />,
        title: "Lead CRM",
        description:
            "Quote and consultation requests land in one inbox with a status workflow, an append-only activity timeline, duplicate-phone warnings, and notifications.",
    },
    {
        icon: <CalendarDays className="h-5 w-5 text-primary" />,
        title: "Customers, Events & Appointments",
        description:
            "Explicit lead-to-customer conversion, an event lifecycle, consultations and site surveys, and a month calendar of scheduled work.",
    },
    {
        icon: <FileText className="h-5 w-5 text-primary" />,
        title: "Quotations & PDF",
        description:
            "Line items, discount, and an optional required deposit, with yearly numbering, a status workflow, and an on-demand PDF with Vietnamese typography.",
    },
    {
        icon: <Wallet className="h-5 w-5 text-primary" />,
        title: "Payment Tracking",
        description:
            "Records payments already received against an accepted quotation. The remaining balance is always derived, never stored.",
    },
    {
        icon: <KeyRound className="h-5 w-5 text-primary" />,
        title: "Administration & Audit",
        description:
            "System and business admin roles, authenticator-app two-factor authentication, account management, and an audit log.",
    },
]

const stack = [
    { title: "Backend", items: ["ASP.NET Core 10 Web API", "EF Core 10", "ASP.NET Core Identity + 2FA", "QuestPDF", "MailKit"] },
    { title: "Frontend", items: ["Next.js 16 (App Router)", "React 19", "TypeScript", "Tailwind CSS"] },
    { title: "Data & Services", items: ["SQL Server", "Cloudinary (media)", "Cloudflare Turnstile", "GA4 (consent-gated, off at launch)"] },
    { title: "Quality & Delivery", items: ["xUnit", "Node.js test runner", "Playwright", "GitHub Actions", "Docker Compose", "nginx"] },
]

const decisions = [
    {
        title: "Modular monolith, not microservices",
        why: "One business, related workflows, and transactions that span modules.",
        tradeOff: "No per-module scaling; clear Api / Core / Infrastructure boundaries keep a later split possible.",
    },
    {
        title: "Same-origin cookie authentication",
        why: "HttpOnly cookies, antiforgery tokens, and no cross-origin access to configure.",
        tradeOff: "Clients must handle antiforgery tokens, and the reverse proxy must route the API path.",
    },
    {
        title: "Server-side money, derived balances",
        why: "Whole-đồng amounts computed by the server; balances calculated on read, so they cannot drift.",
        tradeOff: "A small amount of computation on every read.",
    },
    {
        title: "Append-only payments",
        why: "Payments are cancelled and re-recorded instead of edited or deleted, keeping a complete history.",
        tradeOff: "Corrections take two steps.",
    },
    {
        title: "Transactional outbox, no broker",
        why: "Notification e-mails are staged with the request and delivered in the background without operating a broker.",
        tradeOff: "At-least-once delivery; a stable message identifier mitigates duplicates.",
    },
    {
        title: "Fail-closed configuration",
        why: "Outside development the API refuses to start with development switches or missing settings, and the web app refuses to build without its required settings.",
        tradeOff: "Stricter, more explicit deployments.",
    },
]

const securityPractices = [
    "Authenticator-app two-factor authentication, mandatory for the system administrator",
    "Deny-by-default authorization, verified by an automated sweep of every endpoint",
    "Antiforgery tokens, bot protection on public forms, and rate limiting",
    "Content-Security-Policy with a per-request nonce and a stricter admin policy",
    "Private images streamed only to signed-in administrators",
    "Consent-gated analytics (off at launch), click-to-load video, and a privacy policy",
]

const reliabilityPractices = [
    "Idempotent public submissions and version checks on quotations and payments",
    "CI check that database migrations match the model",
    "Pinned toolchain, locked restores, and NuGet / npm vulnerability audits",
    "Migration and backup/restore procedures rehearsed before go-live",
    "Staging with user acceptance testing and a protected production preview",
    "Releases identified by exact commit, with the previous release kept for rollback",
]

const testInventory = [
    { value: "265", label: "Backend test-project files", detail: "96 unit and 169 integration C# files, including shared test infrastructure" },
    { value: "~1,950", label: "xUnit test methods", detail: "Facts and theories; theories run several cases" },
    { value: "57", label: "Frontend unit-test files", detail: "Run with the Node.js test runner" },
    { value: "60", label: "Playwright specs", detail: "Desktop 1440 px and phone 375 / 360 px journeys" },
]

const ciSteps = [
    "Locked restore, build, migration check, and vulnerability audit",
    "Unit and integration tests on a throwaway SQL Server",
    "Lint, typecheck, unit tests, and production build",
    "Playwright journeys against the real API",
    "Merge only on green CI for the exact commit",
]

const milestones = [
    { id: "M0", title: "Platform foundation and technical spikes" },
    { id: "M1", title: "Authentication, 2FA, and admin shell" },
    { id: "M2", title: "Services and basic CMS" },
    { id: "M3", title: "Portfolio and media" },
    { id: "M4", title: "Public website and SEO foundations" },
    { id: "M5", title: "Quote requests and lead CRM" },
    { id: "M6", title: "Customers, events, appointments, and calendar" },
    { id: "M7", title: "Quotations, pricing, and PDF" },
    { id: "M8", title: "Payment tracking and remaining balance" },
    { id: "M9", title: "Notifications, e-mail, and SEO completion" },
    { id: "M10", title: "Security hardening, staging, and UAT" },
    { id: "M11", title: "Production readiness and go-live" },
]

const lessons = [
    "Out-of-scope lists matter as much as scope: writing down what each milestone would not do (for example, no payment gateway) kept delivery focused.",
    "An application that refuses to start without its required settings turns a configuration checklist into an automated gate.",
    "Concurrency, idempotency, and money rules are best proven against a real database rather than mocks.",
    "Privacy work needs lead time: consent, data-protection procedures, and the privacy policy had to be ready before launch.",
    "Development was supported by Claude Code, with independent AI-assisted technical reviews. Project decisions, manual QA, release approvals, and final acceptance remained under human ownership.",
]

export default function ThuyNgaCaseStudy() {
    return (
        <div className="container mx-auto px-4 py-12 lg:py-24">
            <div className="flex flex-col gap-12 lg:flex-row">
                <aside className="hidden w-64 flex-shrink-0 lg:block">
                    <TOC sections={sections} />
                </aside>

                <div className="min-w-0 flex-1">
                    <div className="mb-12">
                        <Badge className="mb-4" variant="secondary">
                            Client Production Delivery
                        </Badge>
                        <h1 className="mb-6 text-4xl font-extrabold tracking-tight lg:text-5xl">Thuý Nga Wedding & Event</h1>
                        <p className="text-xl leading-relaxed text-muted-foreground">
                            End-to-end delivery of a production platform for a wedding and event decoration business in Hanoi:
                            a public Vietnamese website plus an internal CMS and CRM that follows each deal from first enquiry
                            to a completed event.
                        </p>
                        <div className="mt-6 flex flex-wrap gap-2">
                            <Badge variant="outline">ASP.NET Core 10</Badge>
                            <Badge variant="outline">EF Core 10 / SQL Server</Badge>
                            <Badge variant="outline">Next.js 16 / React 19</Badge>
                            <Badge variant="outline">TypeScript</Badge>
                            <Badge variant="outline">Identity + 2FA</Badge>
                            <Badge variant="outline">xUnit / Playwright</Badge>
                            <Badge variant="outline">GitHub Actions</Badge>
                        </div>
                        <p className="mt-6 max-w-4xl text-sm leading-relaxed text-foreground/80">
                            Milestones M0–M11 delivered between September and October 2026, with public go-live on 22 October 2026.
                        </p>
                        <div className="mt-6 flex flex-col gap-3 sm:flex-row sm:flex-wrap sm:items-center">
                            <Button size="sm" asChild className="w-full sm:w-auto">
                                <a href={THUY_NGA_LINKS.live} target="_blank" rel="noopener noreferrer">
                                    <LinkIcon className="mr-2 h-4 w-4" /> Live Site
                                    <span className="sr-only"> (opens in a new tab)</span>
                                </a>
                            </Button>
                            {THUY_NGA_LINKS.showcaseRepo ? (
                                <>
                                    <Button variant="outline" size="sm" asChild className="w-full sm:w-auto">
                                        <a href={THUY_NGA_LINKS.showcaseRepo} target="_blank" rel="noopener noreferrer">
                                            <GitBranch className="mr-2 h-4 w-4" /> Showcase Repository
                                            <span className="sr-only"> (opens in a new tab)</span>
                                        </a>
                                    </Button>
                                    <p className="text-sm leading-relaxed text-muted-foreground">
                                        Production source code is private; the showcase repository is a documentation-only case study.
                                    </p>
                                </>
                            ) : (
                                <p className="text-sm leading-relaxed text-muted-foreground">
                                    Production source code is private. A public showcase repository is in preparation.
                                </p>
                            )}
                        </div>
                    </div>

                    <div className="space-y-24">
                        <section id="overview" className="scroll-mt-24">
                            <h2 className="mb-4 text-2xl font-bold">Overview</h2>
                            <p className="mb-6 text-lg leading-relaxed">
                                I delivered this platform end to end for a real client: product scope, architecture, backend and
                                frontend implementation, security, testing, deployment, and go-live, starting from an empty
                                repository and ending in a public production release.
                            </p>
                            <div className="mb-6 grid gap-4 md:grid-cols-3">
                                <Card>
                                    <CardHeader className="pb-2">
                                        <CardTitle className="text-base">My Role</CardTitle>
                                    </CardHeader>
                                    <CardContent>
                                        <p className="text-sm leading-relaxed text-muted-foreground">
                                            Sole engineer, from requirements and architecture through implementation, testing, deployment, and go-live.
                                        </p>
                                    </CardContent>
                                </Card>
                                <Card>
                                    <CardHeader className="pb-2">
                                        <CardTitle className="text-base">Product Scope</CardTitle>
                                    </CardHeader>
                                    <CardContent>
                                        <p className="text-sm leading-relaxed text-muted-foreground">
                                            Public website and CMS, lead CRM, customers, events, appointments, quotations with PDF, and payment tracking.
                                        </p>
                                    </CardContent>
                                </Card>
                                <Card>
                                    <CardHeader className="pb-2">
                                        <CardTitle className="text-base">Delivery</CardTitle>
                                    </CardHeader>
                                    <CardContent>
                                        <p className="text-sm leading-relaxed text-muted-foreground">
                                            A foundation milestone and eleven delivery milestones, ending with security hardening, staging and user acceptance testing, business acceptance, and go-live.
                                        </p>
                                    </CardContent>
                                </Card>
                            </div>
                            <div className="rounded-lg border-l-4 border-primary bg-muted/50 p-6">
                                <h3 className="mb-2 font-semibold">How this complements H2ALL / FastLink</h3>
                                <p className="leading-relaxed text-muted-foreground">
                                    <Link href="/case-studies/h2all-fastlink" className="font-medium text-primary underline-offset-4 hover:underline">
                                        H2ALL / FastLink
                                    </Link>{" "}
                                    shows assigned work inside a large enterprise platform. Thuý Nga shows full ownership of a
                                    smaller system: scope, architecture, security, testing, deployment, and production delivery.
                                </p>
                            </div>
                        </section>

                        <section id="objectives" className="scroll-mt-24">
                            <h2 className="mb-6 text-2xl font-bold">Project Objectives</h2>
                            <ul className="space-y-4">
                                {objectives.map((item) => (
                                    <li key={item} className="flex items-start gap-4 rounded-lg border bg-background/50 p-4">
                                        <div className="rounded-full bg-green-100 p-1 dark:bg-green-900/30">
                                            <Check className="h-4 w-4 text-green-600 dark:text-green-400" />
                                        </div>
                                        <span className="text-foreground">{item}</span>
                                    </li>
                                ))}
                            </ul>
                        </section>

                        <section id="capabilities" className="scroll-mt-24">
                            <h2 className="mb-6 text-2xl font-bold">Business Capabilities</h2>
                            <div className="grid gap-6 md:grid-cols-2">
                                {capabilities.map((capability) => (
                                    <IconCard
                                        key={capability.title}
                                        icon={capability.icon}
                                        title={capability.title}
                                        description={capability.description}
                                    />
                                ))}
                            </div>
                            <p className="mt-6 text-sm leading-relaxed text-muted-foreground">
                                Deliberately out of scope: online payments, invoicing and accounting, a customer portal, and messages to customers.
                            </p>
                        </section>

                        <section id="architecture" className="scroll-mt-24">
                            <h2 className="mb-6 text-2xl font-bold">Architecture</h2>
                            <p className="mb-6 text-muted-foreground">
                                A modular monolith: one ASP.NET Core API split into Api, Core, and Infrastructure projects with a strict
                                dependency direction, and a Next.js application serving both the public website and the admin UI. The
                                API is served on the same origin as the web app, and notification e-mail flows through a transactional outbox.
                            </p>
                            <ThuyNgaArchitectureDiagram />
                            <div className="mt-8 grid gap-4 md:grid-cols-3">
                                {[
                                    { title: "Api", text: "HTTP host, controllers, authentication, and authorization" },
                                    { title: "Core", text: "Domain models and business rules, with no project dependencies" },
                                    { title: "Infrastructure", text: "EF Core persistence, media, PDF, bot protection, and e-mail" },
                                ].map((layer) => (
                                    <div key={layer.title} className="rounded-lg border bg-card p-4 text-center">
                                        <div className="mb-2 text-sm font-semibold text-primary">{layer.title}</div>
                                        <p className="text-sm text-muted-foreground">{layer.text}</p>
                                    </div>
                                ))}
                            </div>
                        </section>

                        <section id="stack" className="scroll-mt-24">
                            <h2 className="mb-6 text-2xl font-bold">Technology Stack</h2>
                            <div className="grid gap-6 md:grid-cols-2">
                                {stack.map((group) => (
                                    <Card key={group.title}>
                                        <CardHeader className="pb-2">
                                            <CardTitle className="text-lg">{group.title}</CardTitle>
                                        </CardHeader>
                                        <CardContent className="flex flex-wrap gap-2">
                                            {group.items.map((item) => (
                                                <Badge key={item} variant="secondary" className="px-3 py-1 text-sm font-normal">
                                                    {item}
                                                </Badge>
                                            ))}
                                        </CardContent>
                                    </Card>
                                ))}
                            </div>
                        </section>

                        <section id="engineering" className="scroll-mt-24">
                            <h2 className="mb-6 text-2xl font-bold">Backend Engineering Highlights</h2>
                            <div className="grid gap-6 md:grid-cols-2">
                                <IconCard
                                    icon={<Workflow className="h-5 w-5 text-primary" />}
                                    title="Correct Workflows Under Concurrency"
                                    description="Exactly-once lead conversion with a race-safe duplicate check, idempotent public submissions, and version checks on quotations and payments."
                                />
                                <IconCard
                                    icon={<ReceiptText className="h-5 w-5 text-primary" />}
                                    title="Money Rules on the Server"
                                    description="Totals, discounts, and deposits in whole đồng; payments only against an accepted quotation and never beyond its total."
                                />
                                <IconCard
                                    icon={<Layers className="h-5 w-5 text-primary" />}
                                    title="Append-only History"
                                    description="Lead activity timelines, cancel-and-re-record payments, and an audit log with sanitized metadata."
                                />
                                <IconCard
                                    icon={<Mail className="h-5 w-5 text-primary" />}
                                    title="Reliable Notifications"
                                    description="E-mails staged in the same transaction and delivered in the background, at least once, carrying no customer data."
                                />
                                <IconCard
                                    icon={<FileText className="h-5 w-5 text-primary" />}
                                    title="Documents and Media"
                                    description="On-demand quotation PDFs with embedded Vietnamese fonts; public media stored without embedded metadata."
                                />
                                <IconCard
                                    icon={<FlaskConical className="h-5 w-5 text-primary" />}
                                    title="Safe Test Infrastructure"
                                    description="A generated database per test run behind a guard that fails closed before touching any other database."
                                />
                            </div>
                        </section>

                        <section id="decisions" className="scroll-mt-24">
                            <h2 className="mb-6 text-2xl font-bold">Decisions & Trade-offs</h2>
                            <div className="grid gap-6 md:grid-cols-2">
                                {decisions.map((decision) => (
                                    <Card key={decision.title} className="h-full">
                                        <CardHeader className="pb-2">
                                            <CardTitle className="text-lg">{decision.title}</CardTitle>
                                        </CardHeader>
                                        <CardContent className="space-y-3 text-sm leading-relaxed">
                                            <p className="text-muted-foreground">
                                                <span className="font-semibold text-foreground">Why: </span>
                                                {decision.why}
                                            </p>
                                            <p className="text-muted-foreground">
                                                <span className="font-semibold text-foreground">Trade-off: </span>
                                                {decision.tradeOff}
                                            </p>
                                        </CardContent>
                                    </Card>
                                ))}
                            </div>
                        </section>

                        <section id="security" className="scroll-mt-24">
                            <h2 className="mb-6 text-2xl font-bold">Security & Reliability</h2>
                            <div className="grid gap-6 md:grid-cols-2">
                                <PracticeList
                                    icon={<ShieldCheck className="h-5 w-5 text-primary" />}
                                    title="Security & Privacy"
                                    items={securityPractices}
                                />
                                <PracticeList
                                    icon={<Rocket className="h-5 w-5 text-primary" />}
                                    title="Reliability & Delivery"
                                    items={reliabilityPractices}
                                />
                            </div>
                            <div className="mt-6 rounded-lg border-l-4 border-amber-500 bg-muted p-6 text-sm text-foreground/80">
                                <strong>Scope of this section:</strong> it describes practices, not configuration. Thresholds,
                                allow-lists, hostnames, and operational procedures are intentionally left out.
                            </div>
                        </section>

                        <section id="testing" className="scroll-mt-24">
                            <h2 className="mb-6 text-2xl font-bold">Testing & CI/CD</h2>
                            <div className="grid gap-6 sm:grid-cols-2 xl:grid-cols-4">
                                {testInventory.map((item) => (
                                    <Card key={item.label}>
                                        <CardHeader className="pb-2">
                                            <CardTitle className="text-lg">
                                                {item.value} <span className="font-medium">{item.label}</span>
                                            </CardTitle>
                                        </CardHeader>
                                        <CardContent>
                                            <p className="text-sm leading-relaxed text-muted-foreground">{item.detail}</p>
                                        </CardContent>
                                    </Card>
                                ))}
                            </div>
                            <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
                                Test inventory at the production release: counts of test files and test methods, not executions.
                            </p>
                            <ol className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5">
                                {ciSteps.map((step, index) => (
                                    <li key={step} className="rounded-lg border bg-card p-4 text-center">
                                        <div className="mb-2 text-sm font-semibold text-primary">Step {index + 1}</div>
                                        <p className="text-sm text-muted-foreground">{step}</p>
                                    </li>
                                ))}
                            </ol>
                            <p className="mt-6 leading-relaxed text-muted-foreground">
                                GitHub Actions runs on every pull request, with actions pinned to full commit SHAs and a read-only
                                token. CI stores no secrets and performs no deployment; releasing is a separate, approved step.
                            </p>
                        </section>

                        <section id="delivery" className="scroll-mt-24">
                            <h2 className="mb-6 text-2xl font-bold">Delivery & Milestones</h2>
                            <ol className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
                                {milestones.map((milestone) => (
                                    <li key={milestone.id} className="flex items-start gap-3 rounded-lg border bg-card p-4">
                                        <span className="font-mono text-sm font-semibold text-primary">{milestone.id}</span>
                                        <span className="text-sm text-muted-foreground">{milestone.title}</span>
                                    </li>
                                ))}
                            </ol>
                            <div className="mt-6 rounded-xl border border-primary/20 bg-primary/5 p-6">
                                <h3 className="mb-3 font-semibold">Path to production</h3>
                                <p className="leading-relaxed text-foreground/80">
                                    Security hardening, then a production-like staging environment with user acceptance testing,
                                    business acceptance by the client, and a protected preview of the production site. The public
                                    go-live followed on 22 October 2026, and a Next.js security update shipped to production the next day.
                                </p>
                            </div>
                        </section>

                        <section id="lessons" className="scroll-mt-24">
                            <h2 className="mb-6 text-2xl font-bold">Lessons Learned</h2>
                            <ul className="space-y-4">
                                {lessons.map((item) => (
                                    <li key={item} className="flex items-start gap-4 rounded-lg border bg-background/50 p-4">
                                        <div className="rounded-full bg-green-100 p-1 dark:bg-green-900/30">
                                            <Check className="h-4 w-4 text-green-600 dark:text-green-400" />
                                        </div>
                                        <span className="text-foreground">{item}</span>
                                    </li>
                                ))}
                            </ul>
                        </section>

                        <div className="mt-12 mb-12 rounded-lg border-l-4 border-amber-500 bg-muted p-6 text-sm text-foreground/80">
                            <strong>Confidentiality:</strong> the production source code is private. This case study describes
                            product scope, architecture, and engineering practice without exposing source code, client data,
                            credentials, or infrastructure details. The business name, brand, and website belong to the client.
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

function IconCard({
    icon,
    title,
    description,
}: {
    icon: React.ReactNode
    title: string
    description: string
}) {
    return (
        <Card className="h-full">
            <CardHeader className="pb-2">
                <CardTitle className="flex items-center gap-2 text-lg">
                    {icon}
                    {title}
                </CardTitle>
            </CardHeader>
            <CardContent>
                <p className="leading-relaxed text-muted-foreground">{description}</p>
            </CardContent>
        </Card>
    )
}

function PracticeList({ icon, title, items }: { icon: React.ReactNode; title: string; items: string[] }) {
    return (
        <Card className="h-full">
            <CardHeader className="pb-2">
                <CardTitle className="flex items-center gap-2 text-lg">
                    {icon}
                    {title}
                </CardTitle>
            </CardHeader>
            <CardContent>
                <ul className="space-y-3">
                    {items.map((item) => (
                        <li key={item} className="flex items-start gap-3 text-sm leading-relaxed text-muted-foreground">
                            <Check className="mt-0.5 h-4 w-4 shrink-0 text-green-600" />
                            <span>{item}</span>
                        </li>
                    ))}
                </ul>
            </CardContent>
        </Card>
    )
}
