import { useEffect } from 'react';
import { useAppDispatch, useAppSelector } from '../hooks';
import { startLoadingProjects } from '../store/slices/projects/thunks';
import { ProjectCard, ProjectDescription, ProjectTitle, SectionBox, SectionTitle, TechnologiesList } from '../components';
import { Project } from '../interfaces/Project';

export const Projects = () => {
    const { projects } = useAppSelector( state => state.projects );
    const dispatch = useAppDispatch();

    useEffect(() => {
        dispatch( startLoadingProjects() );
    }, []);
    return (
        <>
            {
                projects &&
                <SectionBox style="light-section">
                    <SectionTitle title="Projects" />
                    <div className="row">
                        {
                            projects && projects.map( (project: Project) => (
                                <ProjectCard key={project.id} {...project} />
                            ))
                        }
                    </div>
                </SectionBox>
            }
        </>
    )
}