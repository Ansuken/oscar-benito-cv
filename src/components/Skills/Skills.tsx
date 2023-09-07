import { useEffect } from "react";
import { SectionTitle, TechnologiesList } from ".."
import { useAppDispatch, useAppSelector } from "../../hooks";
import { startLoadingSkills } from "../../store/slices/skills/thunks";

export const Skills = () => {
    const { skills } = useAppSelector( state => state.skills );
    const dispatch = useAppDispatch();

    useEffect(() => {
        dispatch( startLoadingSkills() );
    }, []);
    return (
        <>
            <SectionTitle title="Skills" />
            <div className="skills-badges">
                {skills && <TechnologiesList technologies={skills} />}
            </div>
        </>
    )
}
