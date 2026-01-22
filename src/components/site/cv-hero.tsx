import Link from "next/link";
import { CVCard } from "@/components/site/cv";
import type { CV } from "@/sanity/lib/types";

export function CVHero({ cv }: { cv: CV }) {
    return (
        <CVCard className="space-y-6">
            {/* Name + role */}
            <div className="space-y-2">
                <h1 className="text-4xl font-semibold tracking-tight text-white md:text-5xl">
                    {cv.name}
                </h1>
                <p className="text-lg text-white/70">
                    {cv.role}
                </p>
            </div>

            {/* Positioning statement */}
            {cv.positioningStatement && (
                <p className="max-w-2xl text-base leading-relaxed text-white/80 md:text-lg">
                    {cv.positioningStatement}
                </p>
            )}

            {/* Facts row */}
            <div className="flex flex-wrap gap-x-6 gap-y-2 text-sm text-white/60">
                {cv.location && <span>{cv.location}</span>}
                {cv.experienceYears && <span>{cv.experienceYears}</span>}
                {cv.focus && <span>{cv.focus}</span>}
                {cv.techStack && <span>{cv.techStack}</span>}
            </div>

            {/* Actions */}
            <div className="flex flex-wrap gap-3 pt-2">
                {cv.cvPdf?.asset?.url && (
                    <a
                        href={cv.cvPdf.asset.url}
                        download={cv.cvPdf.asset.originalFilename || "CV_Simon_Stancovich.pdf"}
                        className="inline-flex items-center rounded-2xl bg-white px-5 py-3 text-sm font-semibold text-black hover:bg-white/90"
                    >
                        Download CV (PDF)
                    </a>
                )}

                <Link
                    href="/work"
                    className="inline-flex items-center rounded-2xl bg-white/10 px-5 py-3 text-sm font-semibold text-white ring-1 ring-white/10 hover:bg-white/15"
                >
                    View case studies
                </Link>
            </div>
        </CVCard>
    );
}
