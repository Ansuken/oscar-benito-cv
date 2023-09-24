import { Job } from "../../interfaces/Job"
import { TechnologiesList, JobDate, JobDescription, JobTitle } from "..";

export const JobCard = ({id, name, from, to, description, website, technologies}: Job) => {
    const handleClick = () => {
        if ( website ) window.open(website, '_blank');
    }
    return (
        <>
            <div className={`card-box p-3 mb-3 ${website ? 'pointer': ''}`} key={id} onClick={handleClick}>
                <JobTitle title={name} />
                <JobDate from={from} to={to} />
                <JobDescription description={description} />
                <hr/>
                <TechnologiesList technologies={technologies} />
            </div>
        </>
    )
}
