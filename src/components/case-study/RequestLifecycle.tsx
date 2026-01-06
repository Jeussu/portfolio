"use client";

import { motion } from "framer-motion";
import { ArrowRight, Monitor, Server, Database, ShieldCheck, Code } from "lucide-react";

const steps = [
    { icon: Monitor, label: "WinForms UI", desc: "User Action" },
    { icon: ArrowRight, label: "", desc: "WCF/REST", isConnector: true },
    { icon: ShieldCheck, label: "Handler", desc: "Auth/Policy" },
    { icon: ArrowRight, label: "", desc: "", isConnector: true },
    { icon: Code, label: "Business Logic", desc: "Transaction Scope" },
    { icon: ArrowRight, label: "", desc: "DTO", isConnector: true },
    { icon: Database, label: "Data Logic", desc: "SQL/SP" },
];

export function RequestLifecycle() {
    return (
        <div className="py-8 overflow-x-auto">
            <div className="flex items-center min-w-max gap-4 px-4">
                {steps.map((step, index) => (
                    <motion.div
                        key={index}
                        initial={{ opacity: 0, y: 10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ delay: index * 0.1 }}
                        className="flex items-center"
                    >
                        {step.isConnector ? (
                            <div className="flex flex-col items-center px-2 text-muted-foreground/50">
                                <span className="text-[10px] uppercase tracking-wider mb-1">{step.desc}</span>
                                <ArrowRight className="h-5 w-5" />
                            </div>
                        ) : (
                            <div className="flex flex-col items-center gap-3 p-4 bg-card border border-border rounded-lg shadow-sm min-w-[140px] text-center">
                                <div className="h-10 w-10 full flex items-center justify-center rounded-full bg-primary/10 text-primary">
                                    <step.icon className="h-5 w-5" />
                                </div>
                                <div>
                                    <div className="font-semibold text-sm">{step.label}</div>
                                    <div className="text-xs text-muted-foreground">{step.desc}</div>
                                </div>
                            </div>
                        )}
                    </motion.div>
                ))}
            </div>
        </div>
    );
}
