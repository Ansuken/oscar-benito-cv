import { Project } from "../../interfaces/Project";
import {
    TechnologiesList,
    CardDescription,
    CardImage, 
    CardTitle
} from "..";
import { useNavigate } from "react-router-dom";
import { CardFooter } from "../Shared";

export const ProjectCard = ({id, name, description, technologies, gitUrl, liveUrl, images}: Project) => {

    const navigate = useNavigate();
    const onNavigate = () => {
        navigate(`/projects/${id}`);
    };
    return (
        <>
            <div className="col-xl-4 col-md-6 col-sm-12" key={id}>
                <div 
                    className="card-box p-3 mb-3 project-card"
                    
                >
                    {
                        images && images[0] && <CardImage img={`../images/${images[0]}`} name={name} />
                    }
                    <div role="button"
                    onClick={onNavigate}>
                    <CardTitle title={name} />
                    <hr/>
                    <CardDescription description={description} />
                    <hr/>
                    <TechnologiesList technologies={technologies} />
                    
                    </div>
                    {
                        (gitUrl || liveUrl) &&
                        <>
                            <hr/>
                            <CardFooter gitUrl={gitUrl} liveUrl={liveUrl} />
                        </>
                    }
                </div>
            </div>
        </>
    )
}
