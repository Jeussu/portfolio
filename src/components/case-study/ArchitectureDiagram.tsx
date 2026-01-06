export function ArchitectureDiagram() {
    return (
        <div className="bg-card p-6 rounded-xl border border-border shadow-sm my-8">
            <div className="flex flex-col items-center gap-8">
                {/* Client Layer */}
                <div className="w-full grid grid-cols-2 md:grid-cols-3 gap-4 p-4 bg-muted/20 rounded-lg border border-dashed border-border">
                    <div className="col-span-full text-center text-xs font-mono mb-2 text-muted-foreground">PRESENTATION TIER (WinForms)</div>
                    <div className="h-12 bg-background border border-border rounded flex items-center justify-center text-sm font-medium">Warehouse App</div>
                    <div className="h-12 bg-background border border-border rounded flex items-center justify-center text-sm font-medium">Finance App</div>
                    <div className="h-12 bg-background border border-border rounded flex items-center justify-center text-sm font-medium">Admin Portal</div>
                </div>

                {/* Network & Service Layer */}
                <div className="flex flex-col items-center w-full max-w-2xl relative">
                    <div className="h-8 border-l-2 border-primary/20"></div>
                    <div className="w-full bg-primary/5 border border-primary/20 rounded-lg p-6">
                        <div className="text-center text-xs font-mono mb-4 text-primary font-bold">APPLICATION SERVER</div>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                            <div className="p-3 bg-background rounded shadow-sm text-center border border-border">
                                <div className="text-xs text-muted-foreground mb-1">Entry Point</div>
                                <div className="font-semibold text-sm">WCF / API</div>
                            </div>
                            <div className="p-3 bg-background rounded shadow-sm text-center border border-border">
                                <div className="text-xs text-muted-foreground mb-1">Logic</div>
                                <div className="font-semibold text-sm">Business Tier</div>
                            </div>
                            <div className="p-3 bg-background rounded shadow-sm text-center border border-border">
                                <div className="text-xs text-muted-foreground mb-1">Data Access</div>
                                <div className="font-semibold text-sm">Data Tier</div>
                            </div>
                        </div>
                    </div>
                    <div className="h-8 border-l-2 border-primary/20"></div>
                </div>

                {/* Data Layer */}
                <div className="w-full grid grid-cols-2 gap-4 max-w-xl p-4 bg-muted/20 rounded-lg border border-dashed border-border">
                    <div className="col-span-full text-center text-xs font-mono mb-2 text-muted-foreground">DATA TIER</div>
                    <div className="h-16 bg-background border border-border rounded flex flex-col items-center justify-center text-sm">
                        <span className="font-bold">SQL Server</span>
                        <span className="text-xs text-muted-foreground">Core Data</span>
                    </div>
                    <div className="h-16 bg-background border border-border rounded flex flex-col items-center justify-center text-sm">
                        <span className="font-bold">MySQL / Others</span>
                        <span className="text-xs text-muted-foreground">Integrations</span>
                    </div>
                </div>
            </div>
        </div>
    )
}
