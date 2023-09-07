import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';
import { About } from '../../../interfaces/About';

const initialState: any = {
    about: null
}
export const aboutSlice = createSlice({
    name: 'about',
    initialState,
    reducers: {
        setAbout: (state, action: PayloadAction<About[]>) => {
            const about = [...action.payload];
            state.about = about.sort((a, b)=> a.order - b.order);
        }
    },
})

export const { setAbout } = aboutSlice.actions;