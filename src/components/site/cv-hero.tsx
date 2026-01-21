import Link from "next/link";
import { CVCard } from "@/components/site/cv";

export function CVHero() {
    return (
        <CVCard className="space-y-6">
            {/* Name + role */}
            <div className="space-y-2">
                <h1 className="text-4xl font-semibold tracking-tight text-white md:text-5xl">
                    Simon Stancovich
                </h1>
                <p className="text-lg text-white/70">
                    Senior Full-Stack Engineer
                </p>
            </div>

            {/* Positioning statement */}
            <p className="max-w-2xl text-base leading-relaxed text-white/80 md:text-lg">
                I design and build production-grade web and mobile products with strong
                product judgment, clean UI/UX, and scalable backend systems — often
                owning projects end-to-end from idea to launch.
            </p>

            {/* Facts row */}
            <div className="flex flex-wrap gap-x-6 gap-y-2 text-sm text-white/60">
                <span>Stockholm, Sweden</span>
                <span>8+ years experience</span>
                <span>Web & Mobile</span>
                <span>React · Next.js · Node · NestJS</span>
            </div>

            {/* Actions */}
            <div className="flex flex-wrap gap-3 pt-2">
                <a
                    href="/Simon-Stancovich-CV.pdf"
                    target="_blank"
                    className="inline-flex items-center rounded-2xl bg-white px-5 py-3 text-sm font-semibold text-black hover:bg-white/90"
                >
                    Download CV (PDF)
                </a>

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
