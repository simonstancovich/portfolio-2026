import { projects } from "@/lib/projects";

export function getProject(slug: string) {
  return projects.find((p) => p.slug === slug) ?? null;
}
