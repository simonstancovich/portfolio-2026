import { PortableText, type PortableTextComponents } from "@portabletext/react";

const components: PortableTextComponents = {
    block: {
        h2: ({ children }) => (
            <h2 className="mt-10 mb-3 text-xl font-semibold tracking-tight text-white">
                {children}
            </h2>
        ),
        h3: ({ children }) => (
            <h3 className="mt-7 mb-2 text-lg font-semibold tracking-tight text-white">
                {children}
            </h3>
        ),
        normal: ({ children }) => (
            <p className="mt-3 text-sm leading-relaxed text-white/75 md:text-base">
                {children}
            </p>
        ),
        blockquote: ({ children }) => (
            <blockquote className="mt-6 border-l border-white/15 pl-4 text-white/70">
                {children}
            </blockquote>
        ),
    },
    list: {
        bullet: ({ children }) => (
            <ul className="mt-4 space-y-2 text-sm text-white/75 md:text-base">{children}</ul>
        ),
        number: ({ children }) => (
            <ol className="mt-4 space-y-2 text-sm text-white/75 md:text-base list-decimal pl-5">
                {children}
            </ol>
        ),
    },
    listItem: {
        bullet: ({ children }) => (
            <li className="flex gap-2">
                <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-white/40" />
                <span>{children}</span>
            </li>
        ),
        number: ({ children }) => <li>{children}</li>,
    },
    marks: {
        link: ({ children, value }) => (
            <a
                href={value?.href}
                target="_blank"
                rel="noreferrer"
                className="text-white underline underline-offset-4 decoration-white/30 hover:decoration-white/70"
            >
                {children}
            </a>
        ),
        strong: ({ children }) => <strong className="text-white">{children}</strong>,
        code: ({ children }) => (
            <code className="rounded-md bg-white/7 px-1.5 py-0.5 text-white">{children}</code>
        ),
    },
};

import type { PortableTextBlock } from '@portabletext/types'

export function CasePortableText({ value }: { value: PortableTextBlock[] }) {
    return <PortableText value={value} components={components} />;
}
