import { TechnologyBadge } from ".."

export const TechnologiesList = ({technologies}:{technologies: string[]}) => {
    return (
        technologies.map( technology => (
            <TechnologyBadge key={technology} technology={technology} />
        ))
    )
}
