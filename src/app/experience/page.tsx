"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { EXPERIENCE, CERTIFICATES } from "@/lib/data";
import { Briefcase, Calendar, Award, X } from "lucide-react";
import Image from "next/image";

export default function ExperiencePage() {
    const [selectedCert, setSelectedCert] = useState<typeof CERTIFICATES[number] | null>(null);
    return (
        <div className="container mx-auto px-4 py-12">
            <div className="max-w-2xl mx-auto mb-20">
                <h1 className="text-4xl font-bold mb-12 text-center">Work Experience</h1>

                <div className="relative border-l border-border ml-3 md:ml-6 space-y-12 pb-12">
                    {EXPERIENCE.map((exp, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: index * 0.2 }}
                            className="relative pl-8 md:pl-12"
                        >
                            {/* Timeline Dot */}
                            <div className="absolute -left-1.5 top-1.5 h-3 w-3 rounded-full border border-primary bg-background ring-4 ring-background" />

                            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-2">
                                <h3 className="text-xl font-bold text-foreground">{exp.company}</h3>
                                <div className="flex items-center text-sm text-muted-foreground mt-1 sm:mt-0">
                                    <Calendar className="h-3 w-3 mr-1" />
                                    {exp.period}
                                </div>
                            </div>

                            <div className="flex items-center text-primary font-medium mb-4">
                                <Briefcase className="h-4 w-4 mr-2" />
                                {exp.role}
                            </div>

                            <p className="text-muted-foreground mb-4 italic">
                                {exp.description}
                            </p>

                            <ul className="space-y-2">
                                {exp.achievements.map((item, i) => (
                                    <li key={i} className="flex items-start text-sm md:text-base text-foreground/90">
                                        <span className="mr-2 mt-1.5 h-1.5 w-1.5 rounded-full bg-primary/50 shrink-0" />
                                        <span>{item}</span>
                                    </li>
                                ))}
                            </ul>
                        </motion.div>
                    ))}
                </div>
            </div>

            <div className="max-w-4xl mx-auto">
                <motion.h2
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.4 }}
                    className="text-3xl font-bold mb-12 text-center"
                >
                    Certificates & Awards
                </motion.h2>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {CERTIFICATES.map((cert, index) => (
                        <motion.div
                            layoutId={`cert-${cert.title}`}
                            key={index}
                            onClick={() => setSelectedCert(cert)}
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.5 + index * 0.1 }}
                            className="bg-card border border-border rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-shadow cursor-pointer group"
                        >
                            <div className="relative h-48 w-full bg-muted">
                                <motion.div layoutId={`image-${cert.title}`} className="relative h-full w-full">
                                    <Image
                                        src={cert.image}
                                        alt={cert.title}
                                        fill
                                        className="object-contain p-2 transition-transform group-hover:scale-105"
                                    />
                                </motion.div>
                            </div>
                            <div className="p-6">
                                <div className="flex items-start justify-between mb-2">
                                    <Award className="h-5 w-5 text-primary shrink-0 mt-1" />
                                    <span className="text-xs text-muted-foreground bg-muted px-2 py-1 rounded-full border border-border">
                                        {cert.date}
                                    </span>
                                </div>
                                <motion.h3 layoutId={`title-${cert.title}`} className="font-bold text-lg mb-1 leading-tight">{cert.title}</motion.h3>
                                <p className="text-sm text-primary font-medium mb-3">{cert.issuer}</p>
                                <p className="text-sm text-muted-foreground">
                                    {cert.description}
                                </p>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>

            <AnimatePresence>
                {selectedCert && (
                    <div className="fixed inset-0 z-50 flex items-center justify-center px-4" style={{ perspective: "1000px" }}>
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            className="absolute inset-0 bg-background/80 backdrop-blur-sm"
                            onClick={() => setSelectedCert(null)}
                        />
                        <motion.div
                            layoutId={`cert-${selectedCert.title}`}
                            className="relative bg-card border border-border rounded-xl overflow-hidden shadow-2xl w-full max-w-3xl max-h-[90vh] flex flex-col"
                            onClick={(e) => e.stopPropagation()}
                        >
                            <button
                                onClick={() => setSelectedCert(null)}
                                className="absolute top-4 right-4 z-10 p-2 bg-background/50 hover:bg-background rounded-full transition-colors"
                            >
                                <X className="h-5 w-5" />
                            </button>

                            <div className="relative w-full h-[50vh] sm:h-[60vh] bg-muted flex-shrink-0">
                                <motion.div layoutId={`image-${selectedCert.title}`} className="relative h-full w-full">
                                    <Image
                                        src={selectedCert.image}
                                        alt={selectedCert.title}
                                        fill
                                        className="object-contain p-4"
                                    />
                                </motion.div>
                            </div>

                            <div className="p-6 sm:p-8 overflow-y-auto">
                                <div className="flex items-start justify-between mb-4">
                                    <div className="flex items-center gap-2">
                                        <Award className="h-6 w-6 text-primary" />
                                        <span className="text-sm text-muted-foreground bg-muted px-3 py-1 rounded-full border border-border">
                                            {selectedCert.date}
                                        </span>
                                    </div>
                                </div>

                                <motion.h3 layoutId={`title-${selectedCert.title}`} className="text-2xl font-bold mb-2">{selectedCert.title}</motion.h3>
                                <p className="text-lg text-primary font-medium mb-4">{selectedCert.issuer}</p>
                                <p className="text-muted-foreground leading-relaxed">
                                    {selectedCert.description}
                                </p>
                            </div>
                        </motion.div>
                    </div>
                )}
            </AnimatePresence>
        </div>
    );
}
