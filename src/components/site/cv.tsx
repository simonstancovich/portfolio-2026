import { cn } from "@/lib/utils";

export function CVLayout({ children }: { children: React.ReactNode }) {
    return (
        <main className="py-12 md:py-16">
            <div className="mx-auto max-w-3xl px-4">
                <div className="space-y-14">{children}</div>
            </div>
        </main>
    );
}

export function CVSection({
    title,
    children,
    className,
}: {
    title: string;
    children: React.ReactNode;
    className?: string;
}) {
    return (
        <section
            className={cn(
                "grid gap-4 md:grid-cols-[170px_1fr] md:gap-10",
                className
            )}
        >
            <div className="pt-1">
                <h2 className="text-xs font-semibold uppercase tracking-wider text-white/60">
                    {title}
                </h2>
            </div>

            <div className="min-w-0 space-y-5">{children}</div>
        </section>
    );
}

export function CVCard({
    children,
    className,
}: {
    children: React.ReactNode;
    className?: string;
}) {
    return <div className={cn("glass rounded-3xl px-7 py-6", className)}>{children}</div>;
}

export function ExperienceCard({
    title,
    meta,
    description,
    stack,
}: {
    title: string;
    meta: string;
    description: string;
    stack?: string;
}) {
    return (
        <CVCard className="space-y-4">
            <div>
                <div className="text-lg font-semibold text-white">{title}</div>
                <div className="mt-1 text-sm text-white/45">{meta}</div>
            </div>

            <p className="text-sm leading-relaxed text-white/80 md:text-base">
                {description}
            </p>

            {stack ? (
                <div className="text-sm text-white/60">{stack}</div>
            ) : null}
        </CVCard>
    );
}
