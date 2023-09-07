import { Dispatch } from 'redux';
import { loadCollection } from "../../../helpers/loadCollection";
import { setMainInfo } from ".";

export const startLoadingMainInfo = () => {
    return async( dispatch: Dispatch ) => {
        const mainInfo = await loadCollection('mainInfo');
        dispatch( setMainInfo( mainInfo ) );
    }
}