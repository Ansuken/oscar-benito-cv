import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';

interface PayloadProps {
    id: string;
    skills: string[]
}
const initialState: any = {
    skills: null
}
export const skillsSlice = createSlice({
    name: 'skills',
    initialState,
    reducers: {
        setSkills: (state, action: PayloadAction<PayloadProps[]>) => {
            state.skills = action.payload[0].skills;
        }
    },
})

export const { setSkills } = skillsSlice.actions;