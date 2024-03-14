import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { Notification_I } from "@models/Notifications";

export interface Session_notificationsState_I {
    notifications: Notification_I[];
    onLoading: boolean;
}

const initialState: Session_notificationsState_I = {
    // notifications: [],
    notifications: [
        {
            _id: "1",
            contain: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam. Sed nisi. Nulla quis sem at nibh elementum imperdiet.",
            date: "2021-05-01",
            read: false,
            title: "Notificación 1"
        },
        {
            _id: "2",
            contain: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam. Sed nisi. Nulla quis sem at nibh elementum imperdiet.",
            date: "2021-05-01",
            read: false,
            title: "Notificación 2"
        }
    ],
    onLoading: false,
}

export const notificationsSlice = createSlice({
    name: "notifications",
    initialState,
    reducers: {
        onSetLoading: (state, {payload}: PayloadAction<boolean>) => {
            state.onLoading = payload;
        },
        on_DeleteNotification: (state, {payload}: PayloadAction<string>) => {
            state.notifications = state.notifications.filter(item => item._id !== payload);
        },
        on_restoreDefault: (state) => {
            state = initialState;
        },
    }
});

export const {
    // on_Handler_SignatureSelectorModal,
    onSetLoading,
    on_DeleteNotification,
    on_restoreDefault
} = notificationsSlice.actions;
