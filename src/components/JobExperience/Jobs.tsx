import { useEffect } from 'react';
import { SectionTitle, JobCard } from '..'
import { startLoadingJobExperience } from '../../store/slices/jobExperience/thunks';
import { useAppSelector, useAppDispatch } from '../../hooks'
import { Job } from '../../interfaces/Job';

export const Jobs = () => {
    const { jobExperience } = useAppSelector( state => state.jobExperience );
    const dispatch = useAppDispatch();

    useEffect(() => {
        dispatch( startLoadingJobExperience() );
    }, []);

    const itemsRender = () => {
        return [].concat(jobExperience)
            .sort((a: any, b: any) => a.from < b.from ? 1 : -1 )
            .map( ( element: Job ) => (
                <JobCard 
                    key={element.id}
                    { ...element }
                />
            ));
    }
    return (
        <>
            <SectionTitle title='Job Experience' />
            { jobExperience && itemsRender() }
        </>
    )
}