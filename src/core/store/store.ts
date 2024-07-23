import { combineReducers, configureStore } from "@reduxjs/toolkit";

import { uiSlice, authSlice, notificationsSlice } from ".";

import { Core_Reducers_I } from "./interfaces";
import { Dashboard_Reducers_I } from "../../modules/dashboard/store/interfaces";
import { dashboardReducer } from "../../modules/dashboard/store/store_dashboard";
import { requestSlice } from "./reducers/session/auth/requestsSlice";

export interface Reducers_I extends Core_Reducers_I, Dashboard_Reducers_I { }

const sessionReducer = combineReducers({
    auth: authSlice.reducer,
    notifications: notificationsSlice.reducer,
    requests: requestSlice.reducer

});

const globalReducer = combineReducers({
    ui: uiSlice.reducer,
    session: sessionReducer,
});

export const core_store = configureStore<Reducers_I>({
    reducer: {
        global: globalReducer,
        dashboard: dashboardReducer
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware({
        serializableCheck: false
    })
})

