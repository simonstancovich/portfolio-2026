import { WorkGrid } from "@/components/site";
import { getProjects } from "@/sanity/lib/projects";

export const revalidate = 60;

export default async function WorkPage() {
  const projects = await getProjects() ?? [];

  return (
    <div className="space-y-10">
      <WorkGrid projects={projects} />
    </div>
  );
}
