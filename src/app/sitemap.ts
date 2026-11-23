import { MetadataRoute } from "next";

import { SITE_URL } from "@/lib/data";

export default function sitemap(): MetadataRoute.Sitemap {
    return [
        { url: SITE_URL, changeFrequency: "monthly", priority: 1 },
        { url: `${SITE_URL}/projects`, changeFrequency: "monthly", priority: 0.8 },
        { url: `${SITE_URL}/experience`, changeFrequency: "monthly", priority: 0.8 },
        { url: `${SITE_URL}/contact`, changeFrequency: "yearly", priority: 0.5 },
        { url: `${SITE_URL}/case-studies`, changeFrequency: "monthly", priority: 0.8 },
        { url: `${SITE_URL}/case-studies/h2all-fastlink`, changeFrequency: "monthly", priority: 0.9 },
        { url: `${SITE_URL}/case-studies/thuy-nga-wedding`, changeFrequency: "monthly", priority: 0.9 },
    ];
}
