"use client"

import { ArrowRight, Database, Monitor, Network, Shield } from "lucide-react"

export function ArchitectureDiagram() {
    return (
        <div className="my-10 overflow-x-auto rounded-xl border bg-muted/20 p-8">
            <div className="relative flex min-w-[820px] items-center justify-between gap-4">
                <div className="flex w-48 flex-col items-center gap-4 rounded-xl border-2 border-dashed border-muted-foreground/20 bg-card p-6 shadow-sm">
                    <Monitor className="h-10 w-10 text-primary" />
                    <div className="text-center">
                        <div className="text-sm font-bold">Client Tier</div>
                        <div className="mt-1 text-xs text-muted-foreground">WinForms / WPF</div>
                        <div className="text-xs text-muted-foreground">Operational UI & Reporting</div>
                    </div>
                </div>

                <div className="flex flex-col items-center gap-1">
                    <span className="font-mono text-xs text-muted-foreground">Request Flow</span>
                    <ArrowRight className="h-6 w-6 text-muted-foreground" />
                </div>

                <div className="flex-1 rounded-xl border-2 border-primary/20 bg-primary/5 p-6">
                    <div className="mb-6 text-center font-bold text-primary">Service / Network / Business Flow</div>
                    <div className="space-y-4">
                        <div className="flex items-center justify-center gap-2 rounded border bg-card p-3 text-center shadow-sm">
                            <Network className="h-4 w-4 text-blue-500" />
                            <div className="text-sm font-semibold">WCF + Web API + Internal Wrappers</div>
                        </div>
                        <div className="rounded border bg-card p-3 text-center shadow-sm">
                            <div className="text-sm font-semibold">Handler / Business Logic</div>
                            <div className="text-xs text-muted-foreground">Validation, workflow rules, DTO/request handling</div>
                        </div>
                        <div className="rounded border bg-card p-3 text-center shadow-sm">
                            <div className="text-sm font-semibold">Data Layer</div>
                            <div className="text-xs text-muted-foreground">Reporting queries, reconciliation logic, and SQL-heavy business flows</div>
                        </div>
                        <div className="flex items-center justify-center gap-2 rounded border bg-card p-3 text-center shadow-sm">
                            <Shield className="h-4 w-4 text-green-500" />
                            <div className="text-sm font-semibold">Audit / Workflow / History-Aware Modules</div>
                        </div>
                    </div>
                </div>

                <div className="flex flex-col items-center gap-1">
                    <span className="font-mono text-xs text-muted-foreground">Data Access</span>
                    <ArrowRight className="h-6 w-6 text-muted-foreground" />
                </div>

                <div className="flex w-48 flex-col items-center gap-4 rounded-xl border-2 border-dashed border-muted-foreground/20 bg-card p-6 shadow-sm">
                    <Database className="h-10 w-10 text-amber-500" />
                    <div className="text-center">
                        <div className="text-sm font-bold">Data Tier</div>
                        <div className="mt-1 text-xs text-muted-foreground">SQL Server</div>
                        <div className="text-xs text-muted-foreground">MySQL / Integration Data</div>
                    </div>
                </div>
            </div>
        </div>
    )
}
