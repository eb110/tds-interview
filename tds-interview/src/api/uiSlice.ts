import { createSlice } from "@reduxjs/toolkit";

//this one does not require any api call
export const uiSlice = createSlice({
    name: 'ui',
    initialState: {
        isLoading: false,
    },
    reducers: {
        startLoading: (state) => {
            state.isLoading = true;
        },
        stopLoading: (state) => {
            state.isLoading = false;
        },
    }
});

export const { startLoading, stopLoading } = uiSlice.actions;