import { CVSection, ExperienceCard, CVLayout, CVCard } from "@/components/site/cv";
import { CVHero } from "@/components/site/cv-hero";

export const metadata = {
    title: "CV – Simon Stancovich",
    description:
        "Senior full-stack engineer with strong product focus, UI/UX intuition, and leadership experience.",
};

export default function CVPage() {
    return (
        <CVLayout>
            <CVHero />

            <header className="space-y-6">
                <h1 className="text-4xl font-semibold tracking-tight text-white">
                    Simon Stancovich
                </h1>

                <p className="text-lg leading-relaxed text-white/80">
                    Senior full-stack engineer building production-grade web and mobile products.
                    Strong product focus, UI/UX judgment, and solid backend architecture.
                </p>

                <div className="flex flex-wrap gap-2">
                    <a
                        href="/Simon-Stancovich-CV.pdf"
                        target="_blank"
                        className="inline-flex items-center rounded-2xl bg-white px-5 py-3 text-sm font-semibold text-black hover:bg-white/90"
                    >
                        Download full CV (PDF)
                    </a>
                </div>
            </header>

            <CVSection title="What I’m known for">
                <CVCard>
                    <ul className="space-y-3 text-sm text-white/80 md:text-base">
                        <li>End-to-end ownership — from idea to production</li>
                        <li>Strong UI/UX intuition combined with solid backend architecture</li>
                        <li>Deep experience across web and mobile (React, React Native)</li>
                        <li>Leadership, mentoring, and client-facing responsibility</li>
                        <li>Comfortable in ambiguous, high-pressure environments</li>
                    </ul>
                </CVCard>
            </CVSection>

            <CVSection title="Selected experience">
                <div className="grid gap-5">
                    <ExperienceCard
                        title="QTE — Senior Full-Stack Developer"
                        meta="2022 – 2025"
                        description="Delivered multiple production-grade web and mobile applications across domains. Frequently headhunted internally by the CTO for complex projects and trusted client deliveries."
                        stack="React · React Native · TypeScript · Node.js · NestJS · PostgreSQL"
                    />
                    <ExperienceCard
                        title="Venuehub — Full-Stack Developer / Technical Lead"
                        meta="Startup project"
                        description="Built an Airbnb-like booking platform for musicians and venues: booking logic, payments, scheduling, and map-based search. Acted as technical lead and product advisor."
                        stack="React · Node.js · Firebase · Stripe · Google Maps"
                    />
                    <ExperienceCard
                        title="Grace & Jane — Lead Full-Stack Developer"
                        meta="Social platform"
                        description="Lead developer for a large-scale social application with complex onboarding, navigation, real-time features, and media handling. Led a remote dev team."
                        stack="React · React Native · Firebase · Node.js"
                    />
                    <ExperienceCard
                        title="Cresnd — Full-Stack Developer / Team Lead"
                        meta="Event booking platform"
                        description="Built and led development of a mobile-first event booking app with payments, maps, and backend APIs. Coordinated frontend delivery."
                        stack="React Native · NestJS · Stripe · Firebase"
                    />
                </div>
            </CVSection>

            <CVSection title="Skills">
                <CVCard className="space-y-4">
                    <p className="text-sm text-white/80 md:text-base">
                        <span className="font-semibold text-white">Frontend:</span> React, Next.js,
                        React Native, TypeScript, Tailwind, Styled Components
                    </p>
                    <p className="text-sm text-white/80 md:text-base">
                        <span className="font-semibold text-white">Backend:</span> Node.js, NestJS,
                        PostgreSQL, Prisma, Firebase, GCP
                    </p>
                    <p className="text-sm text-white/80 md:text-base">
                        <span className="font-semibold text-white">Product & Infra:</span> Payments
                        (Stripe), Maps (Google Maps), Auth, CI/CD
                    </p>
                </CVCard>
            </CVSection>

            <CVSection title="Leadership">
                <CVCard>
                    <p className="text-sm leading-relaxed text-white/80 md:text-base">
                        Prior to software engineering, I held leadership roles managing teams of up to
                        200 people. That background shaped my approach to engineering: clarity,
                        ownership, and responsibility for outcomes — not just code.
                    </p>
                </CVCard>
            </CVSection>
        </CVLayout>
    );
}

