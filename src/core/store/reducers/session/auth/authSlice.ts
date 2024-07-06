import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from '@reduxjs/toolkit'

import { User_Auth_I } from "../../../../models";

import {Auth_I} from '@tesis-project/dev-globals/dist/modules/auth/interfaces'

type Status_Session_Type = "checking" | "authenticated" | "not-authenticated";


export interface Session_authState_I {
    onLoading: boolean;
    status: Status_Session_Type;
    auth: any;
}

const initialState: Session_authState_I = {
    status: 'not-authenticated',
    // status: 'authenticated',
    onLoading: false,
    auth: {
    } as any
}

export const authSlice = createSlice({
    name: "auth",
    initialState,
    reducers: {
        onSetLoading: (state, { payload }: PayloadAction<boolean>) => {
            state.onLoading = payload;
        },
        onChecking: (state) => {
            state.status = 'checking';
            state.onLoading = true;
            state.auth = { ...initialState.auth }
        },
        onLogin: (state, { payload }: PayloadAction<any>) => {
            state.status = 'authenticated';
            state.auth = {...payload};
            state.onLoading = false;
        },
        onLogout: (state) => {
            state.status = 'not-authenticated';
            state.auth = { ...initialState.auth };
            state.onLoading = false;
        },
        onRestoreDefault: (state) => {
            state = initialState;
        },
    }
});

export const {
    onSetLoading,
    onChecking,
    onLogin,
    onLogout,
    onRestoreDefault,
} = authSlice.actions;
