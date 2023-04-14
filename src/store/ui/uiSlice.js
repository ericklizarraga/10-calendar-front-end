
import { createSlice } from '@reduxjs/toolkit';

export const uiSlice = createSlice({
    name: 'ui',
    initialState: {
        isDateModalOpen: false,
    },
    reducers: {
       onOpenDateNodal : ( state ) => {
            state.isDateModalOpen = true;
       },
       onCloseDateNodal : ( state ) => {
            state.isDateModalOpen = false;
       },
    }
});
export const { onOpenDateNodal,  onCloseDateNodal } =  uiSlice.actions;