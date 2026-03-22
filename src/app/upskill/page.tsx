import type { Metadata } from "next"

import { BackendGrowthContent } from "@/components/upskill/backend-growth"

export const metadata: Metadata = {
    title: "Backend Growth | Do The Vinh",
    description:
        "Current backend growth areas in ASP.NET Core Web API, persistence, testing, messaging, and delivery practices that build on ERP/logistics production experience.",
}

export default function UpskillPage() {
    return <BackendGrowthContent />
}
