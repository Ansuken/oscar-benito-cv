import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';
import { MainInfo } from '../../../interfaces/MainInfo';

const initialState: any = {
    mainInfo: null
}

export const mainInfoSlice = createSlice({
    name: 'mainInfo',
    initialState: {
        mainInfo: initialState
    },
    reducers: {
        setMainInfo: (state, action: PayloadAction<MainInfo[]>) => {
            state.mainInfo = action.payload;
        }
    },
})

export const { setMainInfo } = mainInfoSlice.actions;