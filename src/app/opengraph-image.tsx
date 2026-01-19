import { ImageResponse } from "next/og";

export const runtime = "edge";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpenGraphImage() {
    return new ImageResponse(
        (
            <div
                style={{
                    width: "1200px",
                    height: "630px",
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "space-between",
                    padding: "64px",
                    background: "rgb(8,8,10)",
                    color: "white",
                    position: "relative",
                    overflow: "hidden",
                    fontFamily:
                        'ui-sans-serif, system-ui, -apple-system, Segoe UI, Roboto, Helvetica, Arial',
                }}
            >
                {/* gradients */}
                <div
                    style={{
                        position: "absolute",
                        inset: 0,
                        display: "flex",
                        background:
                            "radial-gradient(circle at 30% 20%, rgba(167,139,250,0.35), transparent 55%), radial-gradient(circle at 80% 35%, rgba(34,211,238,0.22), transparent 50%)",
                    }}
                />
                {/* dot grid */}
                <div
                    style={{
                        position: "absolute",
                        inset: 0,
                        display: "flex",
                        opacity: 0.12,
                        backgroundImage:
                            "radial-gradient(circle at 1px 1px, rgba(255,255,255,0.35) 1px, transparent 0)",
                        backgroundSize: "22px 22px",
                    }}
                />

                {/* top row */}
                <div
                    style={{
                        position: "relative",
                        display: "flex",
                        flexDirection: "row",
                        gap: "18px",
                        alignItems: "center",
                    }}
                >
                    <div
                        style={{
                            display: "flex",
                            flexDirection: "row",
                            padding: "10px 16px",
                            borderRadius: "999px",
                            background: "rgba(255,255,255,0.08)",
                            border: "1px solid rgba(255,255,255,0.12)",
                            fontSize: 16,
                            color: "rgba(255,255,255,0.75)",
                        }}
                    >
                        Portfolio • 2026
                    </div>
                </div>

                {/* main */}
                <div
                    style={{
                        position: "relative",
                        display: "flex",
                        flexDirection: "column",
                    }}
                >
                    <div style={{ display: "flex", fontSize: 64, fontWeight: 700, letterSpacing: -1 }}>
                        Simon Stancovich
                    </div>
                    <div
                        style={{
                            display: "flex",
                            marginTop: 14,
                            fontSize: 28,
                            color: "rgba(255,255,255,0.75)",
                        }}
                    >
                        Full-stack developer — product UX + engineering execution
                    </div>

                    <div
                        style={{
                            display: "flex",
                            flexDirection: "row",
                            marginTop: 26,
                            gap: "10px",
                            flexWrap: "wrap",
                        }}
                    >
                        {["React", "TypeScript", "Node", "Next.js", "Systems + UX"].map((t) => (
                            <div
                                key={t}
                                style={{
                                    display: "flex",
                                    padding: "10px 14px",
                                    borderRadius: "999px",
                                    background: "rgba(255,255,255,0.06)",
                                    border: "1px solid rgba(255,255,255,0.10)",
                                    fontSize: 16,
                                    color: "rgba(255,255,255,0.78)",
                                }}
                            >
                                {t}
                            </div>
                        ))}
                    </div>
                </div>

                {/* footer row */}
                <div
                    style={{
                        position: "relative",
                        display: "flex",
                        flexDirection: "row",
                        justifyContent: "space-between",
                    }}
                >
                    <div style={{ display: "flex", fontSize: 18, color: "rgba(255,255,255,0.6)" }}>
                        simonstancovich.dev
                    </div>
                    <div style={{ display: "flex", fontSize: 18, color: "rgba(255,255,255,0.6)" }}>
                        Case studies inside
                    </div>
                </div>
            </div>
        ),
        size
    );
}
