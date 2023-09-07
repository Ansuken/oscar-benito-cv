import { Dispatch } from 'redux';
import { loadCollection } from "../../../helpers/loadCollection";
import { setAbout } from ".";

export const startLoadingAbout = () => {
    return async( dispatch: Dispatch ) => {
        const about = await loadCollection('about');
        dispatch( setAbout( about ) );
    }
}