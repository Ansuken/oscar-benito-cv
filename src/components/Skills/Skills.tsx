import { SectionTitle, TechnologiesList } from ".."

interface Props {
    technologies: string[]
}

export const Skills = ( {technologies}: Props ) => {
    return (
        <>
            <SectionTitle title="Skills" />
            <div className="skills-badges">
                <TechnologiesList technologies={technologies} />
            </div>
        </>
    )
}
