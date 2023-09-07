import { Dispatch } from 'redux';
import { loadCollection } from "../../../helpers/loadCollection";
import { setJobExperience } from ".";

export const startLoadingJobExperience = () => {
    return async( dispatch: Dispatch ) => {
        const jobExperience = await loadCollection('jobExperience');
        dispatch( setJobExperience( jobExperience ) );
    }
}