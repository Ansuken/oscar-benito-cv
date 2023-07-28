import { Job } from "../../interfaces/Job"
import { TechnologiesList, JobDate, JobDescription, JobTitle } from "..";

export const JobCard = ({id, name, from, to, description, technologies}: Job) => {
    return (
        <>
            <div className="card-box p-3 mb-3" key={id}>
                <JobTitle title={name} />
                <JobDate from={from} to={to} />
                <JobDescription description={description} />
                <hr/>
                <TechnologiesList technologies={technologies} />
            </div>
        </>
    )
}
