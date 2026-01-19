import { cn } from "@/lib/utils";

export function Prose({
    children,
    className,
}: {
    children: React.ReactNode;
    className?: string;
}) {
    return (
        <div
            className={cn(
                "prose prose-invert max-w-none",
                // headings
                "prose-h2:mt-10 prose-h2:mb-3 prose-h2:text-xl prose-h2:font-semibold prose-h2:tracking-tight",
                "prose-h3:mt-7 prose-h3:mb-2 prose-h3:text-lg prose-h3:font-semibold prose-h3:tracking-tight",
                // paragraphs + list
                "prose-p:text-white/75 prose-p:leading-relaxed",
                "prose-li:text-white/75",
                // links
                "prose-a:text-white prose-a:underline prose-a:underline-offset-4 prose-a:decoration-white/30 hover:prose-a:decoration-white/70",
                // code
                "prose-code:text-white prose-code:bg-white/7 prose-code:px-1.5 prose-code:py-0.5 prose-code:rounded-md prose-code:before:content-[''] prose-code:after:content-['']",
                // blockquote
                "prose-blockquote:border-l-white/20 prose-blockquote:text-white/70",
                // hr
                "prose-hr:border-white/10",
                className
            )}
        >
            {children}
        </div>
    );
}
