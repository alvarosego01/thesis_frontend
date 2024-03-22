import { combineReducers, configureStore } from "@reduxjs/toolkit";

import { uiSlice, authSlice, userSlice, profileSlice, notificationsSlice } from ".";

import { uiState_I } from "./reducers/ui/uiSlice";
import { Session_authState_I } from "./reducers/session/auth/authSlice";
import { Session_userState_I } from "./reducers/session/user/userSlice";
import { Session_profileState_I } from "./reducers/session/profile/profileSlice";
import { Session_notificationsState_I } from "./reducers/session/notifications/notificationsSlice";

// Define una interfaz para los reducers asíncronos
interface AsyncReducers {
    [key: string]: any;
}


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

// Añade propiedades para manejar los reducers asíncronos
(core_store as any).asyncReducers = {};

// Método para inyectar reducers
(core_store as any).injectReducer = (key: string, asyncReducer: any) => {
    (core_store as any).asyncReducers[key] = asyncReducer;
    core_store.replaceReducer(combineReducers({
        ...core_store.reducer, // Reducers estáticos
        ...(core_store as any).asyncReducers, // Reducers asíncronos
    }));
};

