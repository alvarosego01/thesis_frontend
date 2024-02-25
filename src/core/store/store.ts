import { configureStore } from "@reduxjs/toolkit";

import { uiSlice } from ".";
import { uiState_I } from "./reducers/ui/uiSlice";


export interface Core_Reducers_I {
    ui: uiState_I
}

export const core_store = configureStore<Core_Reducers_I>({
    reducer: {
        ui: uiSlice.reducer,
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware({
        serializableCheck: false
    })
})