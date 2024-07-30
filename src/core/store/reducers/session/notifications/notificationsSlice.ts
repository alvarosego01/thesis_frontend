import { PayloadAction, createSlice } from "@reduxjs/toolkit";

 import {Notifications_I} from "@tesis-project/dev-globals/dist/modules/notifications/interfaces";

export interface Session_notificationsState_I {
    notifications: Notifications_I[];
    onLoading: boolean;
}

const initialState: Session_notificationsState_I = {
    // notifications: [],
    notifications: [],
    onLoading: false,
}

export const notificationsSlice = createSlice({
    name: "notifications",
    initialState,
    reducers: {
        onSetLoading: (state, {payload}: PayloadAction<boolean>) => {
            state.onLoading = payload;
        },
        onSet_notifications: (state, {payload}: PayloadAction<Notifications_I[]>) => {
            state.notifications = payload;
        },
        on_DeleteNotification: (state, {payload}: PayloadAction<string>) => {
            state.notifications = state.notifications.filter(item => item._id !== payload);
        },
        on_restoreDefault: (state) => {
            state.notifications = initialState.notifications;
        },
    }
});

export const {
    onSetLoading,
    onSet_notifications,
    on_DeleteNotification,
    on_restoreDefault
} = notificationsSlice.actions;
