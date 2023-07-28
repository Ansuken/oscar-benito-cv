import { Project } from "../../interfaces/Project";
import { SectionTitle, ProjectCard } from "..";

interface Props {
    projects: Project[]
}
export const Projects = ( {projects}: Props ) => {
    return (
        <>
            <SectionTitle title="Projects" />
            <div className="row">
                {
                    projects.map( (project) => (
                        <ProjectCard key={project.id} {...project} />
                    ))
                }
            </div>
        </>
    )
}
