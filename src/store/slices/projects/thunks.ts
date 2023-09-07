import { Dispatch } from 'redux';
import { loadCollection, loadDocById } from "../../../helpers/loadCollection";
import { setProjectById, setProjects } from ".";

export const startLoadingProjects = () => {
    return async( dispatch: Dispatch ) => {
        const projects = await loadCollection('projects');
        dispatch( setProjects( projects ) );
    }
}

export const startLoadingProjectById = (id: string) => {
    return async( dispatch: Dispatch ) => {
        const document = await loadDocById('projects', id);
        dispatch( setProjectById( document ) );
    }
}