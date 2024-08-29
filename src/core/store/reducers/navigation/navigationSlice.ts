
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface navigationState_I {
    navigation: string;
}

const initialState: navigationState_I = {
    navigation: 'home'
}

export const navigationSlice = createSlice({
    name: "navigation",
    initialState,
    reducers: {
        on_setPageNavigation: (state, { payload }: PayloadAction<string>) => {
            state.navigation = payload
        },
        on_restoreDefault: (state) => {
            state = initialState;
        },
    }
});

export const {
    on_setPageNavigation,
    on_restoreDefault
} = navigationSlice.actions;
