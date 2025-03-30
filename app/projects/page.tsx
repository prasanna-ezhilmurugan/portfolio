import { title } from "@/components/primitives";
import ProjectCard from "@/components/ProjectCard";

export default function ProjectPage() {
  return (
    <div>
      <h1 className={title()}>Projects</h1>
      <ProjectCard />
    </div>
  );
}
