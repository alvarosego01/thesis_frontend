import { combineReducers, configureStore } from "@reduxjs/toolkit";

import { uiSlice, authSlice, userSlice, profileSlice, notificationsSlice } from ".";

import { uiState_I } from "./reducers/ui/uiSlice";
import { Session_authState_I } from "./reducers/session/auth/authSlice";
import { Session_userState_I } from "./reducers/session/user/userSlice";
import { Session_profileState_I } from "./reducers/session/profile/profileSlice";
import { Session_notificationsState_I } from "./reducers/session/notifications/notificationsSlice";


export interface Core_Reducers_I {
    ui: uiState_I,
    session: {
        auth: Session_authState_I;
        user: Session_userState_I;
        profile: Session_profileState_I;
        notifications: Session_notificationsState_I;
    }
}

const sessionReducer = combineReducers({
    auth: authSlice.reducer,
    profile: profileSlice.reducer,
    user: userSlice.reducer,
    notifications: notificationsSlice.reducer
});


export const core_store = configureStore<Core_Reducers_I>({
    reducer: {
        ui: uiSlice.reducer,
        session: sessionReducer
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware({
        serializableCheck: false
    })
})