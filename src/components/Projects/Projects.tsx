import { useEffect } from 'react';
import { SectionTitle, ProjectCard } from "..";
import { useAppDispatch, useAppSelector } from "../../hooks";
import { startLoadingProjects } from '../../store/slices/projects/thunks';
import { Project } from '../../interfaces/Project';

export const Projects = ( ) => {
    const { projects } = useAppSelector( state => state.projects );
    const dispatch = useAppDispatch();

    useEffect(() => {
        dispatch( startLoadingProjects() );
    }, []);
    return (
        <>
            <SectionTitle title="Projects" />
            <div className="row">
                {
                    projects && projects.map( (project: Project) => (
                        <ProjectCard key={project.id} {...project} />
                    ))
                }
            </div>
        </>
    )
}
