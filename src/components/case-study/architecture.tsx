"use client"

import { Database, Monitor, Shield, ArrowRight } from "lucide-react"

export function ArchitectureDiagram() {
    return (
        <div className="my-10 p-8 border rounded-xl bg-muted/20 overflow-x-auto">
            <div className="min-w-[800px] flex justify-between items-center gap-4 relative">
                {/* Client Tier */}
                <div className="flex flex-col items-center gap-4 p-6 border-2 border-dashed border-muted-foreground/20 rounded-xl bg-card w-48 shadow-sm">
                    <Monitor className="h-10 w-10 text-primary" />
                    <div className="text-center">
                        <div className="font-bold text-sm">Client Tier</div>
                        <div className="text-xs text-muted-foreground mt-1">WinForms App</div>
                        <div className="text-xs text-muted-foreground">Devexpress UI</div>
                    </div>
                </div>

                <div className="flex flex-col items-center gap-1">
                    <span className="text-xs font-mono text-muted-foreground">TCP/IP</span>
                    <ArrowRight className="h-6 w-6 text-muted-foreground" />
                </div>

                {/* Load Balancer / Gateway (Optional implication) */}

                {/* Application Tier */}
                <div className="flex-1 p-6 border-2 border-primary/20 rounded-xl bg-primary/5">
                    <div className="font-bold text-center mb-6 text-primary">Application Server (.NET)</div>
                    <div className="space-y-4">
                        <div className="bg-card p-3 rounded border text-center shadow-sm flex items-center justify-center gap-2">
                            <Shield className="h-4 w-4 text-green-500" />
                            <div className="font-semibold text-sm">Handler Layer (Auth/Policy)</div>
                        </div>
                        <div className="bg-card p-3 rounded border text-center shadow-sm">
                            <div className="font-semibold text-sm">Business Logic (BL)</div>
                            <div className="text-xs text-muted-foreground">TransactionScope / DTO Mapping</div>
                        </div>
                        <div className="bg-card p-3 rounded border text-center shadow-sm">
                            <div className="font-semibold text-sm">Data Layer (DL)</div>
                            <div className="text-xs text-muted-foreground">ADO.NET / Stored Procs / BulkCopy</div>
                        </div>
                    </div>
                </div>

                <div className="flex flex-col items-center gap-1">
                    <span className="text-xs font-mono text-muted-foreground">TDS</span>
                    <ArrowRight className="h-6 w-6 text-muted-foreground" />
                </div>

                {/* Data Tier */}
                <div className="flex flex-col items-center gap-4 p-6 border-2 border-dashed border-muted-foreground/20 rounded-xl bg-card w-48 shadow-sm">
                    <Database className="h-10 w-10 text-amber-500" />
                    <div className="text-center">
                        <div className="font-bold text-sm">Data Tier</div>
                        <div className="text-xs text-muted-foreground mt-1">SQL Server</div>
                        <div className="text-xs text-muted-foreground">MySQL (Read Repl)</div>
                    </div>
                </div>
            </div>
        </div>
    )
}
