import type { Metadata } from "next"

import { PROFILE } from "@/lib/data"

export const DEFAULT_TITLE = `${PROFILE.name} | ${PROFILE.headline}`
export const SITE_NAME = `${PROFILE.name} Portfolio`

// Per-page metadata: canonical URL plus Open Graph and Twitter tags that match the page instead of the home page.
export function pageMetadata({
    title,
    description,
    path,
}: {
    title?: string
    description: string
    path: string
}): Metadata {
    const fullTitle = title ? `${title} | ${PROFILE.name}` : DEFAULT_TITLE

    return {
        title: title ?? { absolute: DEFAULT_TITLE },
        description,
        alternates: { canonical: path },
        openGraph: {
            type: "website",
            locale: "en_US",
            siteName: SITE_NAME,
            title: fullTitle,
            description,
            url: path,
            // A page-level openGraph object replaces the root one, so the shared image is listed explicitly.
            images: ["/opengraph-image"],
        },
        twitter: {
            card: "summary_large_image",
            title: fullTitle,
            description,
            images: ["/twitter-image"],
        },
    }
}
