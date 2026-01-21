import { ImageResponse } from "next/og";
import { getProjectBySlug } from "@/sanity/lib/projects";

export const runtime = "edge";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

function gradientFor(g?: "violet" | "cyan" | "mix") {
    if (g === "violet") {
        return "radial-gradient(circle at 30% 20%, rgba(167,139,250,0.40), transparent 55%), radial-gradient(circle at 80% 45%, rgba(167,139,250,0.18), transparent 55%)";
    }
    if (g === "cyan") {
        return "radial-gradient(circle at 30% 20%, rgba(34,211,238,0.30), transparent 55%), radial-gradient(circle at 80% 45%, rgba(34,211,238,0.18), transparent 55%)";
    }
    return "radial-gradient(circle at 30% 20%, rgba(167,139,250,0.35), transparent 55%), radial-gradient(circle at 80% 45%, rgba(34,211,238,0.22), transparent 55%)";
}

export default async function OpenGraphImage({
    params,
}: {
    params: Promise<{ slug: string }>;
}) {
    const { slug } = await params;
    const project = await getProjectBySlug(slug);

    const title = project?.title ?? "Case study";
    const tagline = project?.tagline ?? "Product-grade build";
    const tags = project?.tags?.slice(0, 5) ?? ["Full-stack", "UX", "TypeScript"];
    const media = project?.caseStudy?.media;

    const bg = gradientFor(media?.gradient);

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
                <div style={{ position: "absolute", inset: 0, display: "flex", background: bg }} />
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
                        justifyContent: "space-between",
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
                        Case study
                    </div>

                    <div style={{ display: "flex", fontSize: 18, color: "rgba(255,255,255,0.65)" }}>
                        simonstancovich.dev
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
                    {media?.eyebrow ? (
                        <div style={{ display: "flex", fontSize: 18, color: "rgba(255,255,255,0.70)" }}>
                            {media.eyebrow}
                        </div>
                    ) : (
                        <div style={{ display: "flex" }} />
                    )}

                    <div
                        style={{
                            display: "flex",
                            marginTop: 10,
                            fontSize: 64,
                            fontWeight: 750,
                            letterSpacing: -1,
                        }}
                    >
                        {title}
                    </div>

                    <div
                        style={{
                            display: "flex",
                            marginTop: 14,
                            fontSize: 28,
                            color: "rgba(255,255,255,0.75)",
                        }}
                    >
                        {media?.headline ?? tagline}
                    </div>

                    {media?.sub ? (
                        <div
                            style={{
                                display: "flex",
                                marginTop: 10,
                                fontSize: 20,
                                color: "rgba(255,255,255,0.62)",
                            }}
                        >
                            {media.sub}
                        </div>
                    ) : (
                        <div style={{ display: "flex" }} />
                    )}

                    <div
                        style={{
                            display: "flex",
                            flexDirection: "row",
                            marginTop: 26,
                            gap: "10px",
                            flexWrap: "wrap",
                        }}
                    >
                        {tags.map((t) => (
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
                        Full-stack • UX • Architecture
                    </div>
                    <div style={{ display: "flex", fontSize: 18, color: "rgba(255,255,255,0.6)" }}>
                        /work/{slug}
                    </div>
                </div>
            </div>
        ),
        size
    );
}
