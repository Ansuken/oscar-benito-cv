import { Dispatch } from 'redux';
import { loadCollection } from "../../../helpers/loadCollection";
import { setSkills } from ".";

export const startLoadingSkills = () => {
    return async( dispatch: Dispatch ) => {
        const skills = await loadCollection('skills');
        dispatch( setSkills( skills ) );
    }
}