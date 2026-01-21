"use client";

import Image from "next/image";
import { useCallback, useEffect, useMemo, useState } from "react";
import { urlFor } from "@/sanity/lib/image";
import { cn } from "@/lib/utils";
import type { ProjectMediaGalleryItem } from "@/sanity/lib/types";
import type { SanityImageSource } from "@sanity/image-url/lib/types/types";

type GalleryItem = {
    image: SanityImageSource;
    imageWithMetadata?: ProjectMediaGalleryItem["image"];
    caption?: string;
};

export function CaseMediaGallery({ items }: { items?: ProjectMediaGalleryItem[] }) {
    // Filter out items without images and map to GalleryItem format
    const validItems = useMemo(() => {
        if (!items) return [];
        return items
            .filter((item): item is ProjectMediaGalleryItem & { image: NonNullable<ProjectMediaGalleryItem["image"]> } =>
                !!item.image && !!item.image.asset
            )
            .map((item): GalleryItem => ({
                image: item.image as SanityImageSource,
                imageWithMetadata: item.image,
                caption: item.caption,
            }));
    }, [items]);

    const [activeIndex, setActiveIndex] = useState<number | null>(null);

    const active = useMemo(
        () => (activeIndex === null ? null : validItems[activeIndex]),
        [activeIndex, validItems]
    );

    const close = useCallback(() => setActiveIndex(null), []);
    const prev = useCallback(
        () => setActiveIndex((i) => (i === null ? null : Math.max(0, i - 1))),
        []
    );
    const next = useCallback(
        () => setActiveIndex((i) => (i === null ? null : Math.min(validItems.length - 1, i + 1))),
        [validItems.length]
    );

    useEffect(() => {
        if (activeIndex === null) return;

        const onKeyDown = (e: KeyboardEvent) => {
            if (e.key === "Escape") close();
            if (e.key === "ArrowLeft") prev();
            if (e.key === "ArrowRight") next();
        };

        window.addEventListener("keydown", onKeyDown);
        return () => window.removeEventListener("keydown", onKeyDown);
    }, [activeIndex, close, prev, next]);

    if (!validItems.length) return null;

    return (
        <>
            <div className="grid gap-6">
                {validItems.map((item, i) => {
                    const src = urlFor(item.image).width(1800).quality(90).url();

                    return (
                        <figure key={i} className="space-y-3">
                            <button
                                type="button"
                                onClick={() => setActiveIndex(i)}
                                className={cn(
                                    "group w-full overflow-hidden rounded-3xl text-left",
                                    "bg-black/35 ring-1 ring-white/10",
                                    "transition hover:ring-white/20 focus:outline-none focus:ring-2 focus:ring-white/20"
                                )}
                                aria-label={item.caption ? `Open image: ${item.caption}` : "Open image"}
                            >
                                <Image
                                    src={src}
                                    alt={item.caption ?? ""}
                                    width={1800}
                                    height={1100}
                                    placeholder={item.imageWithMetadata?.asset?.metadata?.lqip ? "blur" : "empty"}
                                    blurDataURL={item.imageWithMetadata?.asset?.metadata?.lqip as string | undefined}
                                    className="h-auto w-full object-cover transition group-hover:opacity-90"
                                />
                            </button>

                            {item.caption ? (
                                <figcaption className="text-sm text-white/55">{item.caption}</figcaption>
                            ) : null}
                        </figure>
                    );
                })}
            </div>

            {/* Lightbox */}
            {active ? (
                <div
                    className="fixed inset-0 z-50 bg-black/85 backdrop-blur-md"
                    role="dialog"
                    aria-modal="true"
                    onMouseDown={(e) => {
                        // Click outside to close (only if background clicked)
                        if (e.target === e.currentTarget) close();
                    }}
                >
                    <div className="absolute inset-0 p-4 md:p-10">
                        <div className="mx-auto flex h-full max-w-6xl flex-col">
                            <div className="flex items-center justify-between">
                                <div className="text-xs font-semibold uppercase tracking-wider text-white/45">
                                    Media
                                </div>

                                <div className="flex items-center gap-2">
                                    <button
                                        type="button"
                                        onClick={prev}
                                        disabled={activeIndex === 0}
                                        className={cn(
                                            "rounded-xl px-3 py-2 text-sm ring-1 transition",
                                            "ring-white/10 text-white/70 hover:bg-white/10 hover:text-white",
                                            "disabled:opacity-30 disabled:hover:bg-transparent"
                                        )}
                                    >
                                        ←
                                    </button>
                                    <button
                                        type="button"
                                        onClick={next}
                                        disabled={activeIndex === validItems.length - 1}
                                        className={cn(
                                            "rounded-xl px-3 py-2 text-sm ring-1 transition",
                                            "ring-white/10 text-white/70 hover:bg-white/10 hover:text-white",
                                            "disabled:opacity-30 disabled:hover:bg-transparent"
                                        )}
                                    >
                                        →
                                    </button>
                                    <button
                                        type="button"
                                        onClick={close}
                                        className={cn(
                                            "rounded-xl px-3 py-2 text-sm ring-1 transition",
                                            "ring-white/10 text-white/70 hover:bg-white/10 hover:text-white"
                                        )}
                                    >
                                        ESC
                                    </button>
                                </div>
                            </div>

                            <div className="mt-4 flex-1 overflow-hidden rounded-3xl bg-black/30 ring-1 ring-white/10">
                                <div className="relative h-full w-full">
                                    <Image
                                        src={urlFor(active.image).width(2600).quality(95).url()}
                                        alt={active.caption ?? ""}
                                        fill
                                        placeholder={active.imageWithMetadata?.asset?.metadata?.lqip ? "blur" : "empty"}
                                        blurDataURL={active.imageWithMetadata?.asset?.metadata?.lqip as string | undefined}
                                        className="object-contain p-3 md:p-6"
                                    />
                                </div>
                            </div>

                            {active.caption ? (
                                <div className="mt-4 text-sm text-white/60">{active.caption}</div>
                            ) : (
                                <div className="mt-4 text-sm text-white/35">Use ← → to navigate. ESC to close.</div>
                            )}
                        </div>
                    </div>
                </div>
            ) : null}
        </>
    );
}
