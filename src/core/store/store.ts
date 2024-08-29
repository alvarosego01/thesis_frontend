import { combineReducers, configureStore } from "@reduxjs/toolkit";

import { uiSlice, authSlice, notificationsSlice, navigationSlice } from ".";

import { Core_Reducers_I } from "./interfaces";
import { Dashboard_Reducers_I } from "../../modules/dashboard/store/interfaces";
import { dashboardReducer } from "../../modules/dashboard/store/store_dashboard";
import { requestSlice } from "./reducers/session/auth/requestsSlice";
import { Public_Reducers_I } from "../../modules/public/store/interfaces";
import { publicReducer } from "../../modules/public/store/store_public";

export interface Reducers_I extends Core_Reducers_I, Dashboard_Reducers_I, Public_Reducers_I { }

const sessionReducer = combineReducers({
    auth: authSlice.reducer,
    notifications: notificationsSlice.reducer,
    requests: requestSlice.reducer
});

const globalReducer = combineReducers({
    ui: uiSlice.reducer,
    navigation: navigationSlice.reducer,
    session: sessionReducer,
});

export const core_store = configureStore<Reducers_I>({
    reducer: {
        global: globalReducer,
        dashboard: dashboardReducer,
        publc: publicReducer
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware({
        serializableCheck: false
    })
})

