import Link from "next/link";
import { projects } from "@/lib/projects";

export function CaseNav({ slug }: { slug: string }) {
  const idx = projects.findIndex((p) => p.slug === slug);
  const prev = idx > 0 ? projects[idx - 1] : null;
  const next = idx >= 0 && idx < projects.length - 1 ? projects[idx + 1] : null;

  return (
    <div className="grid gap-3 md:grid-cols-3">
      <Link
        href="/work"
        className="glass rounded-3xl p-5 text-sm text-white/75 hover:text-white hover:bg-white/7 transition"
      >
        ← Back to Work
      </Link>

      {prev ? (
        <Link
          href={`/work/${prev.slug}`}
          className="glass rounded-3xl p-5 text-sm text-white/75 hover:text-white hover:bg-white/7 transition"
        >
          ← {prev.title}
        </Link>
      ) : (
        <div className="glass rounded-3xl p-5 text-sm text-white/35">← None</div>
      )}

      {next ? (
        <Link
          href={`/work/${next.slug}`}
          className="glass rounded-3xl p-5 text-sm text-white/75 hover:text-white hover:bg-white/7 transition text-right"
        >
          {next.title} →
        </Link>
      ) : (
        <div className="glass rounded-3xl p-5 text-sm text-white/35 text-right">
          None →
        </div>
      )}
    </div>
  );
}
