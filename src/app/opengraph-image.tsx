import { ImageResponse } from "next/og"

import { PROFILE } from "@/lib/data"

export const alt = `${PROFILE.name} — ${PROFILE.title}`
export const size = { width: 1200, height: 630 }
export const contentType = "image/png"

export default function OpengraphImage() {
    return new ImageResponse(
        (
            <div
                style={{
                    width: "100%",
                    height: "100%",
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "center",
                    padding: "80px",
                    background: "#020817",
                    color: "#f8fafc",
                }}
            >
                <div style={{ display: "flex", width: 96, height: 8, borderRadius: 4, background: "#3b82f6" }} />
                <div style={{ display: "flex", marginTop: 40, fontSize: 84, fontWeight: 800, letterSpacing: "-0.02em" }}>
                    {PROFILE.name}
                </div>
                <div style={{ display: "flex", marginTop: 20, fontSize: 44, fontWeight: 600, color: "#3b82f6" }}>
                    {PROFILE.title}
                </div>
                <div style={{ display: "flex", marginTop: 28, fontSize: 34, color: "#94a3b8" }}>
                    {PROFILE.stack.split(", ").join(" · ")}
                </div>
            </div>
        ),
        { ...size }
    )
}
