import { CVSection, ExperienceCard, CVLayout, CVCard, CVHero } from "@/components/site";
import { client } from "@/sanity/lib/client";
import { cvQuery } from "@/sanity/lib/queries";
import type { CV } from "@/sanity/lib/types";

export const revalidate = 60;

export const metadata = {
    title: "CV – Simon Stancovich",
    description:
        "Senior full-stack engineer with strong product focus, UI/UX intuition, and leadership experience.",
};

export default async function CVPage() {
    const cv = await client.fetch<CV | null>(cvQuery);

    if (!cv) {
        return (
            <CVLayout>
                <CVCard>
                    <p className="text-white/70">CV data not found. Please add CV content in Sanity Studio.</p>
                </CVCard>
            </CVLayout>
        );
    }

    return (
        <CVLayout>
            <CVHero cv={cv} />

            <header className="space-y-6">
                <h1 className="text-4xl font-semibold tracking-tight text-white">
                    {cv.name}
                </h1>

                {cv.description && (
                    <p className="text-lg leading-relaxed text-white/80">
                        {cv.description}
                    </p>
                )}

                {cv.cvPdf?.asset?.url && (
                    <div className="flex flex-wrap gap-2">
                        <a
                            href={cv.cvPdf.asset.url}
                            download={cv.cvPdf.asset.originalFilename || "CV_Simon_Stancovich.pdf"}
                            className="inline-flex items-center rounded-2xl bg-white px-5 py-3 text-sm font-semibold text-black hover:bg-white/90"
                        >
                            Download full CV (PDF)
                        </a>
                    </div>
                )}
            </header>

            {cv.knownFor && cv.knownFor.length > 0 && (
                <CVSection title="What I'm known for">
                    <CVCard>
                        <ul className="space-y-3 text-sm text-white/80 md:text-base">
                            {cv.knownFor.map((item, i) => (
                                <li key={i}>{item}</li>
                            ))}
                        </ul>
                    </CVCard>
                </CVSection>
            )}

            {cv.experiences && cv.experiences.length > 0 && (
                <CVSection title="Selected experience">
                    <div className="grid gap-5">
                        {cv.experiences.map((exp, i) => (
                            <ExperienceCard
                                key={i}
                                title={exp.title}
                                meta={exp.meta ?? ""}
                                description={exp.description}
                                stack={exp.stack}
                            />
                        ))}
                    </div>
                </CVSection>
            )}

            {cv.skills && (
                <CVSection title="Skills">
                    <CVCard className="space-y-4">
                        {cv.skills.frontend && (
                            <p className="text-sm text-white/80 md:text-base">
                                <span className="font-semibold text-white">Frontend:</span> {cv.skills.frontend}
                            </p>
                        )}
                        {cv.skills.backend && (
                            <p className="text-sm text-white/80 md:text-base">
                                <span className="font-semibold text-white">Backend:</span> {cv.skills.backend}
                            </p>
                        )}
                        {cv.skills.productInfra && (
                            <p className="text-sm text-white/80 md:text-base">
                                <span className="font-semibold text-white">Product & Infra:</span> {cv.skills.productInfra}
                            </p>
                        )}
                    </CVCard>
                </CVSection>
            )}

            {cv.leadership && (
                <CVSection title="Leadership">
                    <CVCard>
                        <p className="text-sm leading-relaxed text-white/80 md:text-base">
                            {cv.leadership}
                        </p>
                    </CVCard>
                </CVSection>
            )}
        </CVLayout>
    );
}

