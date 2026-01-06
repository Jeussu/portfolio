"use client";

import { useState } from "react";
import Link from "next/link";
import { Mail, Send, Github, Linkedin, Loader2, Phone, MapPin } from "lucide-react";
import { PROFILE } from "@/lib/data";

export default function ContactPage() {
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [success, setSuccess] = useState(false);

    async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
        e.preventDefault();
        setIsSubmitting(true);

        // Simulate API call and Rate Limiting
        await new Promise(resolve => setTimeout(resolve, 1500));

        setIsSubmitting(false);
        setSuccess(true);
    }

    return (
        <div className="container mx-auto px-4 py-12">
            <div className="max-w-4xl mx-auto">
                <h1 className="text-4xl font-bold mb-8 text-center">Get In Touch</h1>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
                    <div className="bg-card p-6 rounded-xl border border-border flex flex-col items-center text-center justify-center space-y-4 hover:shadow-md transition-shadow">
                        <div className="h-12 w-12 bg-primary/10 rounded-full flex items-center justify-center text-primary">
                            <Mail className="h-6 w-6" />
                        </div>
                        <h3 className="font-semibold text-lg">Email</h3>
                        <Link href={`mailto:${PROFILE.email}`} className="text-muted-foreground hover:text-primary transition-colors">
                            {PROFILE.email}
                        </Link>
                    </div>

                    <div className="bg-card p-6 rounded-xl border border-border flex flex-col items-center text-center justify-center space-y-4 hover:shadow-md transition-shadow">
                        <div className="h-12 w-12 bg-primary/10 rounded-full flex items-center justify-center text-primary">
                            <Phone className="h-6 w-6" />
                        </div>
                        <h3 className="font-semibold text-lg">Phone</h3>
                        <Link href={`tel:${PROFILE.phone.replace(/\s/g, '')}`} className="text-muted-foreground hover:text-primary transition-colors">
                            {PROFILE.phone}
                        </Link>
                    </div>

                    <div className="bg-card p-6 rounded-xl border border-border flex flex-col items-center text-center justify-center space-y-4 hover:shadow-md transition-shadow">
                        <div className="h-12 w-12 bg-primary/10 rounded-full flex items-center justify-center text-primary">
                            <MapPin className="h-6 w-6" />
                        </div>
                        <h3 className="font-semibold text-lg">Location</h3>
                        <p className="text-muted-foreground">
                            {PROFILE.location}
                        </p>
                    </div>

                    <div className="bg-card p-6 rounded-xl border border-border flex flex-col items-center text-center justify-center space-y-4 hover:shadow-md transition-shadow">
                        <div className="flex gap-4">
                            <Link href={PROFILE.github} target="_blank" className="h-12 w-12 bg-muted rounded-full flex items-center justify-center text-foreground hover:bg-primary hover:text-primary-foreground transition-colors">
                                <Github className="h-6 w-6" />
                            </Link>
                            <Link href={PROFILE.linkedin} target="_blank" className="h-12 w-12 bg-muted rounded-full flex items-center justify-center text-foreground hover:bg-primary hover:text-primary-foreground transition-colors">
                                <Linkedin className="h-6 w-6" />
                            </Link>
                        </div>
                        <h3 className="font-semibold text-lg">Social Profiles</h3>
                        <p className="text-sm text-muted-foreground">Network & Code</p>
                    </div>
                </div>

                <div className="bg-card border border-border rounded-xl p-8 shadow-sm">
                    {success ? (
                        <div className="text-center py-12">
                            <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-green-500/10 text-green-500 mb-6">
                                <CheckIcon className="w-8 h-8" />
                            </div>
                            <h3 className="text-2xl font-bold mb-2">Message Sent!</h3>
                            <p className="text-muted-foreground">Thanks for reaching out. I'll get back to you soon.</p>
                            <button
                                onClick={() => setSuccess(false)}
                                className="mt-8 text-primary hover:underline font-medium"
                            >
                                Send another message
                            </button>
                        </div>
                    ) : (
                        <form onSubmit={handleSubmit} className="space-y-6">
                            <div className="space-y-2">
                                <label htmlFor="name" className="text-sm font-medium">Name</label>
                                <input
                                    id="name"
                                    name="name"
                                    type="text"
                                    required
                                    className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                                    placeholder="John Doe"
                                />
                            </div>
                            <div className="space-y-2">
                                <label htmlFor="email" className="text-sm font-medium">Email</label>
                                <input
                                    id="email"
                                    name="email"
                                    type="email"
                                    required
                                    className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                                    placeholder="john@example.com"
                                />
                            </div>

                            {/* Honeypot */}
                            <input type="text" name="website" className="hidden" tabIndex={-1} autoComplete="off" />

                            <div className="space-y-2">
                                <label htmlFor="message" className="text-sm font-medium">Message</label>
                                <textarea
                                    id="message"
                                    name="message"
                                    required
                                    rows={5}
                                    className="flex min-h-[80px] w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                                    placeholder="Tell me about your project..."
                                />
                            </div>

                            <button
                                type="submit"
                                disabled={isSubmitting}
                                className="inline-flex items-center justify-center rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-primary text-primary-foreground hover:bg-primary/90 h-10 px-4 py-2 w-full"
                            >
                                {isSubmitting ? (
                                    <>
                                        <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                                        Sending...
                                    </>
                                ) : (
                                    <>
                                        Send Message
                                        <Send className="ml-2 h-4 w-4" />
                                    </>
                                )}
                            </button>
                        </form>
                    )}
                </div>
            </div>
        </div>
    );
}

function CheckIcon(props: React.SVGProps<SVGSVGElement>) {
    return (
        <svg
            {...props}
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
        >
            <polyline points="20 6 9 17 4 12" />
        </svg>
    )
}
