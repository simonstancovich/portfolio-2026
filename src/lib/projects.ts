export type CaseStudy = {
  problem: string;
  role: string;
  stack: string[];
  highlights: string[];
  architecture: {
    summary: string;
    bullets: string[];
  };
  tradeoffs: {
    decision: string;
    why: string;
  }[];
  results: string[];
  links?: {
    live?: string;
    repo?: string;
  };
  media?: {
    eyebrow?: string;
    headline?: string;
    sub?: string;
    gradient?: "violet" | "cyan" | "mix";
  };
  keyDecisions: {
    title: string;
    bullets: string[];
  }[];
};

export type Project = {
  slug: string;
  title: string;
  tagline: string;
  tags: string[];
  featured?: boolean;
  caseStudy: CaseStudy;
};

export const projects: Project[] = [
  {
    slug: "dinlya",
    title: "DinLya",
    tagline:
      "AI-driven PropTech platform: valuations, insights, and decision support for buyers.",
    tags: ["Full-stack", "AI/Product", "Data UX", "TypeScript"],
    featured: true,
    caseStudy: {
      keyDecisions: [
        {
          title: "Designed scan-first data UX: confidence, deltas, and explainable outputs",
          bullets: [
            "Designed scan-first data UX: confidence, deltas, and explainable outputs",
          ],
        },
      ],
      problem:
        "Home buyers make expensive decisions with limited clarity: pricing uncertainty, weak comparisons, and insight scattered across sources.",
      role:
        "Full-stack developer — UX structure, API integration, data modeling, and UI system design.",
      stack: ["Next.js", "TypeScript", "Node", "Postgres", "Prisma", "Tailwind"],
      highlights: [
        "Designed scan-first data UX: confidence, deltas, and explainable outputs",
        "Built type-safe boundaries across API ↔ DB ↔ UI",
        "Optimized for performance + maintainability (boring, reliable primitives)",
      ],
      architecture: {
        summary:
          "A thin UI layer on top of stable domain logic, with typed contracts to prevent drift.",
        bullets: [
          "UI: component system + data states (loading/empty/error) treated as first-class",
          "API: typed endpoints + validation at boundaries",
          "DB: normalized model for listings + valuations + user saves",
          "Observability: structured logs and predictable error surfaces",
        ],
      },
      tradeoffs: [
        {
          decision: "Prefer server-driven data fetching for critical pages",
          why: "Fewer client waterfalls, better caching, and consistent loading behavior.",
        },
        {
          decision: "Use a small design system instead of one-off styling",
          why: "Consistency scales—faster iteration without UI entropy.",
        },
      ],
      results: [
        "Clearer decision UX: users see confidence and comparisons immediately",
        "Improved maintainability via typed contracts and repeatable patterns",
        "Reduced UI complexity by standardizing states and components",
      ],
      links: {
        live: "https://dinlya.se",
      },
    },
  },
  {
    slug: "kawaii-map",
    title: "Kawaii Map",
    tagline:
      "Interactive map experience built with React + Google Maps API, optimized for UX and performance.",
    tags: ["Frontend", "Maps", "Performance", "React"],
    featured: true,
    caseStudy: {
      keyDecisions: [
        {
          title: "Designed interaction model: search → hover → select → details",
          bullets: [
            "Designed interaction model: search → hover → select → details",
          ],
        },
      ],
      problem:
        "Map UIs often feel laggy and confusing—users need fast search, clear selection states, and predictable interactions.",
      role:
        "Frontend engineer — interaction design, state modeling, performance, and UI component architecture.",
      stack: ["React", "TypeScript", "Google Maps API", "Vite/Next", "Tailwind"],
      highlights: [
        "Designed interaction model: search → hover → select → details",
        "Built predictable state machine for map selection + panels",
        "Optimized rendering to avoid expensive map re-renders",
      ],
      architecture: {
        summary:
          "Event-driven UI with controlled state updates to keep map performance smooth.",
        bullets: [
          "State: single source of truth for selected/hovered/filtered items",
          "Rendering: memoization to prevent unnecessary marker updates",
          "UX: keyboard navigation and accessible focus management",
        ],
      },
      tradeoffs: [
        {
          decision: "Constrain animation and effects on map layers",
          why: "Maps become janky fast—interaction latency matters more than flair.",
        },
      ],
      results: [
        "Faster interaction feel through fewer re-renders and stable state",
        "More intuitive UX with consistent panel behavior",
        "Cleaner codebase with reusable map primitives",
      ],
      links: {
        repo: "https://github.com/",
      },
    },
  },
  {
    slug: "vault",
    title: "Vault",
    tagline:
      "Private media vault app: secure UX patterns, smooth flows, and clean architecture.",
    tags: ["Mobile", "Security UX", "React Native"],
    featured: true,
    caseStudy: {
      keyDecisions: [
        {
          title: "Designed trust-first UX: clear states, confirmations, and recovery flows",
          bullets: [
            "Designed trust-first UX: clear states, confirmations, and recovery flows",
          ],
        },
      ],
      problem:
        "Privacy apps fail when UX is unclear—users need trust, obvious states, and zero ambiguity around access and storage.",
      role:
        "Mobile developer — UX flows, component structure, and reliability under edge cases.",
      stack: ["React Native", "TypeScript", "Secure Storage", "Expo"],
      highlights: [
        "Trust-first UX: clear states, confirmations, and recovery flows",
        "Reusable components and consistent navigation patterns",
        "Edge-case handling: permissions, interruptions, and failures",
      ],
      architecture: {
        summary:
          "Secure-by-default UX with predictable flows and explicit user confirmation points.",
        bullets: [
          "State: guarded transitions for auth/locked/unlocked modes",
          "Storage: secure primitives with minimal exposure",
          "UX: clear copy and intentional friction where security requires it",
        ],
      },
      tradeoffs: [
        {
          decision: "Add deliberate friction to destructive actions",
          why: "Security UX prioritizes user confidence over speed in high-risk actions.",
        },
      ],
      results: [
        "Higher user trust via predictable flows and clear feedback",
        "Less bug surface with explicit state guards",
        "Consistent UI via a small component system",
      ],
    },
  },
];
