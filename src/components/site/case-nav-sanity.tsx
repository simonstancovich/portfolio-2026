import Link from "next/link";
import { cn } from "@/lib/utils";

type NavItem = { slug: string; title: string };

export function CaseNavSanity({
    currentSlug,
    items,
}: {
    currentSlug: string;
    items: NavItem[];
}) {
    const idx = items.findIndex((p) => p.slug === currentSlug);
    const prev = idx > 0 ? items[idx - 1] : null;
    const next = idx >= 0 && idx < items.length - 1 ? items[idx + 1] : null;

    // Layout adapts: 2 cols if only one side exists, 3 cols if both exist
    const cols = prev && next ? "md:grid-cols-3" : "md:grid-cols-2";

    return (
        <div
            className={cn(
                "mt-2 grid gap-6 md:gap-10",
                cols
            )}
        >
            {prev ? (
                <NavLane
                    href={`/work/${prev.slug}`}
                    kicker="Previous"
                    title={prev.title}
                    align="left"
                    arrow="←"
                />
            ) : null}

            <NavLane
                href="/work"
                kicker="Work"
                title="All projects"
                align="center"
                arrow=""
                subtle
            />

            {next ? (
                <NavLane
                    href={`/work/${next.slug}`}
                    kicker="Next"
                    title={next.title}
                    align="right"
                    arrow="→"
                />
            ) : null}
        </div>
    );
}

function NavLane({
    href,
    kicker,
    title,
    align,
    arrow,
    subtle,
}: {
    href: string;
    kicker: string;
    title: string;
    align: "left" | "center" | "right";
    arrow: string;
    subtle?: boolean;
}) {
    return (
        <Link
            href={href}
            className={cn(
                "group block",
                "rounded-2xl p-1",
                "focus:outline-none focus:ring-2 focus:ring-white/20"
            )}
        >
            <div
                className={cn(
                    "border-t border-white/12 pt-5",
                    align === "center" && "md:border-t-0 md:pt-0"
                )}
            >
                <div
                    className={cn(
                        "text-xs font-semibold uppercase tracking-wider",
                        subtle ? "text-white/40" : "text-white/45",
                        align === "left" && "text-left",
                        align === "center" && "text-center",
                        align === "right" && "text-right"
                    )}
                >
                    {kicker}
                </div>

                <div
                    className={cn(
                        "mt-2 text-[20px] leading-tight font-semibold tracking-tight",
                        subtle ? "text-white/70" : "text-white/80",
                        "group-hover:text-white transition",
                        align === "left" && "text-left",
                        align === "center" && "text-center",
                        align === "right" && "text-right"
                    )}
                >
                    {title}
                </div>

                {arrow ? (
                    <div
                        className={cn(
                            "mt-3 text-sm text-white/35 group-hover:text-white/60 transition",
                            align === "left" && "text-left",
                            align === "center" && "text-center",
                            align === "right" && "text-right"
                        )}
                    >
                        {arrow}
                    </div>
                ) : null}
            </div>
        </Link>
    );
}
