import { Project } from "../../interfaces/Project";
import {
    ProjectDescription,
    ProjectImage, 
    ProjectTitle,
    TechnologiesList
} from "..";

export const ProjectCard = ({id, img, name, description, technologies}: Project) => {
    return (
        <>
            <div className="col-4" key={id}>
                <div className="card-box p-3 mb-3">
                    <ProjectImage img={img} name={name} />
                    <ProjectTitle name={name} />
                    <hr/>
                    <ProjectDescription description={description} />
                    <hr/>
                    <TechnologiesList technologies={technologies} />
                </div>
            </div>
        </>
    )
}
