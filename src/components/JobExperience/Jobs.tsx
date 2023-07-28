import { Job } from "../../interfaces/Job"
import { SectionTitle, JobCard } from ".."

interface Props {
    jobExperiences: Job[]
}
export const Jobs = ({jobExperiences}: Props) => {
    return (
        <>
            <SectionTitle title="Job Experience" />
            {
                jobExperiences.map( experience => (
                    <JobCard key={experience.id} {...experience}/>
                ))
            }
        </>
    )
}
