import { client } from "@/sanity/lib/client";
import { projectsQuery } from "@/sanity/lib/queries";
import type { Project } from "@/sanity/lib/types";
import { WorkGrid } from "@/components/site/work-grid";

export const revalidate = 60;

export default async function WorkPage() {
  const projects = await client.fetch<Project[]>(projectsQuery) ?? [];

  return (
    <div className="space-y-10">
      <WorkGrid projects={projects} />
    </div>
  );
}
