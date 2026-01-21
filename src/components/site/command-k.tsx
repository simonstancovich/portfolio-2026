"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { cn } from "@/lib/utils";
import { projectsSearchQuery } from "@/sanity/lib/queries";
import { clientWithCdn } from "@/sanity/lib/client";


type Item = {
    slug: string;
    title: string;
    tagline: string;
    tags: string[];
};

export function CommandK() {
    const router = useRouter();
    const dialogRef = useRef<HTMLDialogElement | null>(null);
    const inputRef = useRef<HTMLInputElement | null>(null);

    const [open, setOpen] = useState(false);
    const [q, setQ] = useState("");
    const [activeIndex, setActiveIndex] = useState(0);
    const [projects, setProjects] = useState<Item[]>([]);

    // Fetch projects on mount
    useEffect(() => {
        clientWithCdn
            .fetch<Array<{ slug: string; title: string; tagline?: string; tags?: string[] }>>(
                projectsSearchQuery
            )
            .then((data) => {
                if (data) {
                    setProjects(
                        data.map((p) => ({
                            slug: p.slug,
                            title: p.title,
                            tagline: p.tagline ?? "",
                            tags: p.tags ?? [],
                        }))
                    );
                }
            })
            .catch((error) => {
                console.error("Error fetching projects for search:", error);
                setProjects([]);
            });
    }, []);

    const items: Item[] = useMemo(() => projects, [projects]);

    const filtered = useMemo(() => {
        const query = q.trim().toLowerCase();
        if (!query) return items;

        return items.filter((it) => {
            const hay = [
                it.title,
                it.tagline,
                it.tags.join(" "),
                it.slug,
                "work case study project",
            ]
                .join(" ")
                .toLowerCase();

            return hay.includes(query);
        });
    }, [items, q]);

    // open/close helpers
    const openPalette = () => {
        setOpen(true);
        setQ("");
        setActiveIndex(0);

        // open the native dialog
        const d = dialogRef.current;
        if (d && !d.open) d.showModal();

        // focus input next tick
        setTimeout(() => inputRef.current?.focus(), 0);
    };

    const closePalette = () => {
        setOpen(false);
        const d = dialogRef.current;
        if (d?.open) d.close();
    };

    // global keyboard shortcut: Cmd/Ctrl + K
    useEffect(() => {
        const onKeyDown = (e: KeyboardEvent) => {
            const isK = e.key.toLowerCase() === "k";
            const meta = e.metaKey || e.ctrlKey;

            if (meta && isK) {
                e.preventDefault();
                openPalette();
                return;
            }

            if (e.key === "Escape") {
                closePalette();
            }
        };

        window.addEventListener("keydown", onKeyDown);
        return () => window.removeEventListener("keydown", onKeyDown);
    }, []);

    // handle arrow navigation + enter when dialog is open
    const onInputKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
        if (!open) return;

        if (e.key === "ArrowDown") {
            e.preventDefault();
            setActiveIndex((i) => Math.min(i + 1, filtered.length - 1));
        } else if (e.key === "ArrowUp") {
            e.preventDefault();
            setActiveIndex((i) => Math.max(i - 1, 0));
        } else if (e.key === "Enter") {
            e.preventDefault();
            const hit = filtered[activeIndex];
            if (!hit) return;

            closePalette();
            router.push(`/work/${hit.slug}`);
        }
    };

    // close when clicking the backdrop (dialog itself)
    const onDialogMouseDown = (e: React.MouseEvent<HTMLDialogElement>) => {
        if (e.target === dialogRef.current) closePalette();
    };

    return (
        <>
            {/* Optional: a small trigger you can place in nav */}
            <button
                type="button"
                onClick={openPalette}
                className={cn(
                    "inline-flex items-center gap-2 rounded-xl px-3 py-2 text-sm ring-1 transition",
                    "bg-white/5 text-white/70 ring-white/10 hover:bg-white/10 hover:text-white"
                )}
                aria-label="Search projects"
            >
                <span className="text-sm">Search</span>

                {/* show shortcut hint only on desktop */}
                <kbd className="hidden md:inline-flex rounded-md bg-black/30 px-2 py-0.5 text-xs text-white/60 ring-1 ring-white/10">
                    ⌘K
                </kbd>
            </button>

            <dialog
                ref={dialogRef}
                onMouseDown={onDialogMouseDown}
                onClose={() => setOpen(false)}
                className={cn(
                    "w-full max-w-2xl rounded-3xl bg-[rgb(var(--bg))] p-0 text-white",
                    "ring-1 ring-white/15 shadow-2xl backdrop:bg-black/60"
                )}
            >
                <div className="p-4 md:p-5">
                    <div className="glass rounded-2xl p-3">
                        <input
                            ref={inputRef}
                            value={q}
                            onChange={(e) => {
                                setQ(e.target.value);
                                setActiveIndex(0);
                            }}
                            onKeyDown={onInputKeyDown}
                            placeholder="Search projects, tags, case studies…"
                            className="w-full bg-transparent px-2 py-2 text-sm text-white placeholder:text-white/45 outline-none"
                            autoComplete="off"
                            spellCheck={false}
                        />

                        <div className="mt-2 flex items-center justify-between px-2 text-xs text-white/45">
                            <span>
                                {filtered.length} result{filtered.length === 1 ? "" : "s"}
                            </span>
                            <span className="hidden md:inline">
                                ↑↓ navigate • Enter open • Esc close
                            </span>
                        </div>
                    </div>

                    <div className="mt-4 max-h-[52vh] overflow-auto px-1 pb-1">
                        {filtered.length === 0 ? (
                            <div className="rounded-2xl bg-white/5 p-5 text-sm text-white/65 ring-1 ring-white/10">
                                No matches.
                            </div>
                        ) : (
                            <div className="grid gap-2">
                                {filtered.map((it, idx) => (
                                    <Link
                                        key={it.slug}
                                        href={`/work/${it.slug}`}
                                        onClick={() => closePalette()}
                                        onMouseEnter={() => setActiveIndex(idx)}
                                        className={cn(
                                            "rounded-2xl p-4 ring-1 transition",
                                            idx === activeIndex
                                                ? "bg-white text-black ring-white/10"
                                                : "bg-white/5 text-white ring-white/10 hover:bg-white/7 hover:ring-white/20"
                                        )}
                                    >
                                        <div className="flex items-start justify-between gap-4">
                                            <div>
                                                <div
                                                    className={cn(
                                                        "text-sm font-semibold tracking-tight",
                                                        idx === activeIndex ? "text-black" : "text-white"
                                                    )}
                                                >
                                                    {it.title}
                                                </div>
                                                <div
                                                    className={cn(
                                                        "mt-1 text-sm leading-relaxed",
                                                        idx === activeIndex ? "text-black/70" : "text-white/70"
                                                    )}
                                                >
                                                    {it.tagline}
                                                </div>
                                            </div>

                                            <div
                                                className={cn(
                                                    "rounded-full px-3 py-1 text-xs ring-1",
                                                    idx === activeIndex
                                                        ? "bg-black/10 text-black/70 ring-black/10"
                                                        : "bg-black/30 text-white/60 ring-white/10"
                                                )}
                                            >
                                                Case
                                            </div>
                                        </div>

                                        <div className="mt-3 flex flex-wrap gap-2">
                                            {it.tags.slice(0, 5).map((t) => (
                                                <span
                                                    key={t}
                                                    className={cn(
                                                        "rounded-full px-3 py-1 text-xs ring-1",
                                                        idx === activeIndex
                                                            ? "bg-black/10 text-black/70 ring-black/10"
                                                            : "bg-white/7 text-white/65 ring-white/10"
                                                    )}
                                                >
                                                    {t}
                                                </span>
                                            ))}
                                        </div>
                                    </Link>
                                ))}
                            </div>
                        )}
                    </div>

                    <div className="mt-4 flex items-center justify-between px-1 pb-1 text-xs text-white/45">
                        <span>Tip: try “full-stack”, “UX”, “AI”, “mobile”</span>
                        <button
                            type="button"
                            onClick={closePalette}
                            className="rounded-lg bg-white/5 px-3 py-2 text-xs text-white/70 ring-1 ring-white/10 hover:bg-white/10 hover:text-white"
                        >
                            Close
                        </button>
                    </div>
                </div>
            </dialog>
        </>
    );
}
