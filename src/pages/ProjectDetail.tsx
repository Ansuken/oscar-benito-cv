import { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../hooks";
import { startLoadingProjectById } from "../store/slices/projects/thunks";
import { useParams } from "react-router-dom";
import { ProjectDescription, SectionBox, SectionTitle, TechnologiesList } from "../components";
import { CardFooter } from "../components/Shared";

export const ProjectDetail = () => {
    const { id } = useParams();
    const { project } = useAppSelector( state => state.project );
    const dispatch = useAppDispatch();

    useEffect(() => {
        if ( id ) {
            dispatch( startLoadingProjectById(id) );
        }
    }, []);
    return (
        <>
            {
                project &&
                <SectionBox style="light-section">
                    <SectionTitle title={project.name} />
                    <div className="card-box p-3 mb-3" key={project.id}>
                        <div className="card-box-header">
                            <div>
                                <TechnologiesList technologies={project.technologies} />
                            </div>
                            
                            {
                                (project.gitUrl || project.liveUrl) &&
                                <>
                                    <hr/>
                                    <CardFooter gitUrl={project.gitUrl} liveUrl={project.liveUrl} />
                                </>
                            }
                        </div>
                        <hr/>
                        <div className="project-info-description">
                            <ProjectDescription description={project.description} />
                        </div>
                        <div className="project-info">
                            <div className="project-info-images">
                                {
                                    project.images && project.images.map((img: string)=>(
                                        <div 
                                            className="project-image mb-3"
                                            key={img}>
                                            <img 
                                                src={`../images/${img}`}
                                                alt={project.name} 
                                                loading="lazy"/>
                                        </div>
                                    ))
                                }
                            </div>
                            
                        </div>
                    </div>
                </SectionBox>
            }
        </>
    )
}
