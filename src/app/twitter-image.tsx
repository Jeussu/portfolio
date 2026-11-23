import OpengraphImage from "./opengraph-image"

import { PROFILE } from "@/lib/data"

export const alt = `${PROFILE.name} — ${PROFILE.title}`
export const size = { width: 1200, height: 630 }
export const contentType = "image/png"

export default OpengraphImage
