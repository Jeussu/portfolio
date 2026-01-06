"use client"

import { useState, useEffect } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Check } from "lucide-react"

const upskillPlan = [
    {
        week: "Week 1",
        title: ".NET 7 WebAPI + EF Core",
        items: [
            "Setup .NET 7 WebAPI with PostgreSQL",
            "Implement Docker Compose for DB",
            "Setup Swagger & Health Checks",
            "Basic CRUD with EF Core"
        ]
    },
    {
        week: "Week 2",
        title: "Testing & Architecture",
        items: [
            "Implement Clean Architecture Layers",
            "Write 40+ xUnit Tests",
            "Mock dependencies with Moq",
            "Add MongoDB Read Model"
        ]
    },
    {
        week: "Week 3",
        title: "Microservices & Messaging",
        items: [
            "Setup RabbitMQ with MassTransit",
            "Implement Approval Workflow",
            "Handle Idempotency",
            "Add CorrelationId tracing"
        ]
    },
    {
        week: "Week 4",
        title: "Deployment & CI/CD",
        items: [
            "Implement YARP Gateway",
            "Configure GitHub Actions CI",
            "Deploy to Azure App Service (Simulated)",
            "Final Integration Testing"
        ]
    }
]

export function ProgressTracker() {
    const [progress, setProgress] = useState<Record<string, boolean>>({})
    const [mounted, setMounted] = useState(false)

    useEffect(() => {
        setMounted(true)
        const saved = localStorage.getItem("upskill-progress")
        if (saved) {
            setProgress(JSON.parse(saved))
        }
    }, [])

    const toggleItem = (week: string, item: string) => {
        const key = `${week}-${item}`
        const newProgress = { ...progress, [key]: !progress[key] }
        setProgress(newProgress)
        // localStorage is handled in effect or immediate? handled here.
        localStorage.setItem("upskill-progress", JSON.stringify(newProgress))
    }

    if (!mounted) return null

    const totalItems = upskillPlan.reduce((acc, week) => acc + week.items.length, 0)
    const completedItems = Object.values(progress).filter(Boolean).length
    const percentage = Math.round((completedItems / totalItems) * 100)

    return (
        <div className="space-y-8 max-w-4xl mx-auto">
            <div className="bg-card border p-6 rounded-xl flex items-center justify-between shadow-sm">
                <div>
                    <h2 className="text-xl font-bold mb-1">4-Week Upskill Plan</h2>
                    <p className="text-muted-foreground">Track my journey mastering Modern .NET microservices.</p>
                </div>
                <div className="flex flex-col items-end">
                    <span className="text-3xl font-bold text-primary">{percentage}%</span>
                    <span className="text-xs text-muted-foreground">Completed</span>
                </div>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
                {upskillPlan.map((week, index) => (
                    <Card key={week.week} className="border-l-4 border-l-primary/50 hover:border-l-primary transition-colors">
                        <CardHeader className="pb-2">
                            <div className="flex justify-between items-center">
                                <CardTitle className="text-lg">{week.week}</CardTitle>
                                <Badge variant="outline" className="font-normal">{week.title}</Badge>
                            </div>
                        </CardHeader>
                        <CardContent>
                            <div className="space-y-3">
                                {week.items.map(item => {
                                    const key = `${week.week}-${item}`
                                    const isChecked = !!progress[key]
                                    return (
                                        <div
                                            key={item}
                                            onClick={() => toggleItem(week.week, item)}
                                            className="flex items-start space-x-3 cursor-pointer group p-2 hover:bg-muted/50 rounded-md transition-colors"
                                        >
                                            <div className={`mt-0.5 h-4 w-4 rounded border flex items-center justify-center transition-colors ${isChecked ? 'bg-primary border-primary text-primary-foreground' : 'border-muted-foreground'}`}>
                                                {isChecked && <Check className="h-3 w-3" />}
                                            </div>
                                            <label
                                                className={`text-sm leading-normal cursor-pointer flex-1 ${isChecked ? 'line-through text-muted-foreground' : 'text-foreground'}`}
                                            >
                                                {item}
                                            </label>
                                        </div>
                                    )
                                })}
                            </div>
                        </CardContent>
                    </Card>
                ))}
            </div>
        </div>
    )
}
