"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { CheckCircle2, Circle } from "lucide-react";
import { UPSKILL_PLAN } from "@/lib/data";
import { cn } from "@/lib/utils";

export default function UpskillPage() {
    const [completedItems, setCompletedItems] = useState<string[]>([]);
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        setMounted(true);
        const saved = localStorage.getItem("upskill-progress");
        if (saved) {
            setCompletedItems(JSON.parse(saved));
        }
    }, []);

    const toggleItem = (id: string) => {
        const newItems = completedItems.includes(id)
            ? completedItems.filter(item => item !== id)
            : [...completedItems, id];

        setCompletedItems(newItems);
        localStorage.setItem("upskill-progress", JSON.stringify(newItems));
    };

    const calculateProgress = () => {
        const totalItems = UPSKILL_PLAN.reduce((acc, week) => acc + week.topics.length, 0);
        const completedCount = completedItems.length;
        return Math.round((completedCount / totalItems) * 100);
    };

    if (!mounted) return null;

    return (
        <div className="container mx-auto px-4 py-12">
            <div className="max-w-3xl mx-auto">
                <div className="mb-12 text-center">
                    <h1 className="text-4xl font-bold mb-4">4-Week Upskill Roadmap</h1>
                    <p className="text-muted-foreground">My journey to mastering Modern .NET Microservices Architecture.</p>
                </div>

                {/* Overall Progress */}
                <div className="mb-12 bg-card p-6 rounded-xl border border-border">
                    <div className="flex justify-between mb-2 text-sm font-medium">
                        <span>Total Progress</span>
                        <span>{calculateProgress()}%</span>
                    </div>
                    <div className="h-3 bg-muted rounded-full overflow-hidden">
                        <div
                            className="h-full bg-primary transition-all duration-500 ease-out"
                            style={{ width: `${calculateProgress()}%` }}
                        />
                    </div>
                </div>

                <div className="space-y-8">
                    {UPSKILL_PLAN.map((week, weekIndex) => (
                        <motion.div
                            key={week.week}
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: weekIndex * 0.1 }}
                            className={cn(
                                "relative border border-border rounded-xl overflow-hidden",
                                weekIndex === 0 ? "bg-card shadow-lg ring-1 ring-primary/20" : "bg-card/50"
                            )}
                        >
                            <div className="bg-muted/50 p-4 border-b border-border flex justify-between items-center">
                                <h2 className="font-bold text-lg">Week {week.week}: {week.title}</h2>
                                <span className="text-xs font-mono px-2 py-1 bg-background border border-border rounded">
                                    {completedItems.filter(id => id.startsWith(`w${week.week}-`)).length}/{week.topics.length} Done
                                </span>
                            </div>

                            <div className="p-4">
                                <ul className="space-y-3">
                                    {week.topics.map((topic, topicIndex) => {
                                        const id = `w${week.week}-t${topicIndex}`;
                                        const isChecked = completedItems.includes(id);

                                        return (
                                            <li
                                                key={id}
                                                className={cn(
                                                    "flex items-center p-3 rounded-lg cursor-pointer transition-colors",
                                                    isChecked ? "bg-primary/5" : "hover:bg-muted"
                                                )}
                                                onClick={() => toggleItem(id)}
                                            >
                                                <div className={cn(
                                                    "mr-3 h-5 w-5 rounded-full border flex items-center justify-center transition-colors",
                                                    isChecked ? "bg-primary border-primary text-primary-foreground" : "border-muted-foreground"
                                                )}>
                                                    {isChecked && <CheckCircle2 className="h-3.5 w-3.5" />}
                                                </div>
                                                <span className={cn(
                                                    "flex-1",
                                                    isChecked && "line-through text-muted-foreground"
                                                )}>
                                                    {topic}
                                                </span>
                                            </li>
                                        )
                                    })}
                                </ul>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </div>
    );
}
