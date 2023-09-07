import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';
import { Project } from '../../../interfaces/Project';

const initialState: any = {
    projects: null
}
export const projectsSlice = createSlice({
    name: 'projects',
    initialState,
    reducers: {
        setProjects: (state, action: PayloadAction<Project[]>) => {
            const projects = [...action.payload];
            state.projects = projects.sort((a, b)=> a.order - b.order);
        },
        setProjectById: (state, action: PayloadAction<Project>) => {
            state.project = action.payload;
        }
    },
})

export const { setProjects, setProjectById } = projectsSlice.actions;