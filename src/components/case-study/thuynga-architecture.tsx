import {
    ArrowDown,
    ArrowRight,
    Bot,
    ChartColumn,
    Cloud,
    Database,
    LayoutDashboard,
    Mail,
    Monitor,
    Send,
    Server,
    ShieldCheck,
    Users,
} from "lucide-react"

export function ThuyNgaArchitectureDiagram() {
    return (
        <figure className="my-10 rounded-xl border bg-muted/20 p-5 md:p-8">
            <div className="flex flex-col items-stretch gap-4 xl:flex-row xl:items-center">
                <div className="grid gap-3 rounded-xl border-2 border-dashed border-muted-foreground/20 bg-card p-5 shadow-sm sm:grid-cols-2 xl:w-48 xl:grid-cols-1">
                    <Node icon={<Users className="h-5 w-5 text-primary" />} title="Visitors" detail="Public website" />
                    <Node icon={<LayoutDashboard className="h-5 w-5 text-primary" />} title="Administrators" detail="CMS and CRM" />
                </div>

                <FlowArrow label="HTTPS" />

                <div className="flex-1 rounded-xl border-2 border-primary/20 bg-primary/5 p-5">
                    <div className="mb-4 text-center font-bold text-primary">Containerized Platform</div>
                    <div className="space-y-3">
                        <Block
                            icon={<ShieldCheck className="h-4 w-4 text-green-500" />}
                            title="Reverse Proxy"
                            detail="TLS termination and security headers"
                        />
                        <div className="grid gap-3 sm:grid-cols-2">
                            <Block
                                icon={<Monitor className="h-4 w-4 text-blue-500" />}
                                title="Next.js 16 Web App"
                                detail="Public site and admin UI, per-request CSP nonce"
                            />
                            <Block
                                icon={<Server className="h-4 w-4 text-blue-500" />}
                                title="ASP.NET Core 10 API"
                                detail="Modular monolith on the same origin, Identity and 2FA"
                            />
                        </div>
                        <div className="grid gap-3 sm:grid-cols-2">
                            <Block
                                icon={<Database className="h-4 w-4 text-amber-500" />}
                                title="SQL Server"
                                detail="EF Core 10 with versioned migrations"
                            />
                            <Block
                                icon={<Send className="h-4 w-4 text-primary" />}
                                title="E-mail Dispatcher"
                                detail="Transactional outbox, in-process background delivery"
                            />
                        </div>
                    </div>
                </div>
            </div>

            <div className="my-4 xl:ml-auto xl:w-[calc(100%-16rem)]">
                <FlowArrow label="Integrations" vertical />
            </div>

            <div className="grid gap-3 rounded-xl border-2 border-dashed border-muted-foreground/20 bg-card p-5 shadow-sm sm:grid-cols-2 xl:ml-auto xl:w-[calc(100%-16rem)] xl:grid-cols-4">
                <Node icon={<Cloud className="h-5 w-5 text-amber-500" />} title="Media CDN" detail="Public images and video" />
                <Node icon={<Bot className="h-5 w-5 text-amber-500" />} title="Bot Protection" detail="Public forms" />
                <Node icon={<Mail className="h-5 w-5 text-amber-500" />} title="SMTP Relay" detail="Notification e-mail" />
                <Node icon={<ChartColumn className="h-5 w-5 text-amber-500" />} title="Analytics" detail="Consent-gated, off at launch" />
            </div>
            <figcaption className="mt-6 text-center text-xs leading-relaxed text-muted-foreground">
                Abstracted view. Hostnames, network layout, hosting provider, and operational details are intentionally omitted.
            </figcaption>
        </figure>
    )
}

function Node({ icon, title, detail }: { icon: React.ReactNode; title: string; detail: string }) {
    return (
        <div className="flex items-center gap-3 xl:flex-col xl:text-center">
            {icon}
            <div>
                <div className="text-sm font-bold">{title}</div>
                <div className="text-xs text-muted-foreground">{detail}</div>
            </div>
        </div>
    )
}

function Block({ icon, title, detail }: { icon: React.ReactNode; title: string; detail: string }) {
    return (
        <div className="rounded border bg-card p-3 text-center shadow-sm">
            <div className="flex items-center justify-center gap-2 text-sm font-semibold">
                {icon}
                {title}
            </div>
            <div className="mt-1 text-xs text-muted-foreground">{detail}</div>
        </div>
    )
}

function FlowArrow({ label, vertical = false }: { label: string; vertical?: boolean }) {
    return (
        <div className="flex flex-col items-center gap-1" aria-hidden="true">
            <span className="font-mono text-xs text-muted-foreground">{label}</span>
            <ArrowDown className={vertical ? "h-6 w-6 text-muted-foreground" : "h-6 w-6 text-muted-foreground xl:hidden"} />
            {!vertical && <ArrowRight className="hidden h-6 w-6 text-muted-foreground xl:block" />}
        </div>
    )
}
