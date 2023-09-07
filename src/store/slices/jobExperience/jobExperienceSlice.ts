import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';
import { Job } from '../../../interfaces/Job';

const initialState: any = {
    jobExperience: null
}
export const jobExperienceSlice = createSlice({
    name: 'jobExperience',
    initialState,
    reducers: {
        setJobExperience: (state, action: PayloadAction<Job[]>) => {
            state.jobExperience = action.payload;
        }
    },
})

export const { setJobExperience } = jobExperienceSlice.actions;