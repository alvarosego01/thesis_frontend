import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from '@reduxjs/toolkit'

import { User_Auth_I } from "../../../../models";

import { Auth_I, Session_Auth_I } from '@tesis-project/dev-globals/dist/modules/auth/interfaces'

type Status_Session_Type = "checking" | "authenticated" | "not-authenticated";


export interface Slice_authState_I {
    onLoading: boolean;
    session_isChecked: boolean;
    status: Status_Session_Type;
    auth: Session_Auth_I;
}

const initialState: Slice_authState_I = {
    status: 'not-authenticated',
    session_isChecked: false,
    // status: 'authenticated',
    onLoading: false,
    auth: {
    } as Session_Auth_I
}

export const authSlice = createSlice({
    name: "auth",
    initialState,
    reducers: {
        onSetLoading_authSL: (state, { payload }: PayloadAction<boolean>) => {
            state.onLoading = payload;
        },
        onChecking_authSL: (state) => {
            state.status = 'checking';
            state.onLoading = true;
            state.auth = { ...initialState.auth }
        },
        onLogin_authSL: (state, { payload }: PayloadAction<Session_Auth_I>) => {
            state.status = 'authenticated';
            state.auth = { ...payload };
            state.onLoading = false;
            state.session_isChecked = true;
        },
        onLogout_authSL: (state) => {
            state.status = 'not-authenticated';
            state.auth = { ...initialState.auth };
            state.onLoading = false;
            state.session_isChecked = true;
        },
        onSession_isChecked_authSL: (state) => {
            state.session_isChecked = true
        },
        onRestoreDefault_authSL: (state) => {
            state = initialState;
        },

    }
});

export const {
    onSetLoading_authSL,
    onChecking_authSL,
    onLogin_authSL,
    onLogout_authSL,
    onSession_isChecked_authSL,
    onRestoreDefault_authSL,
} = authSlice.actions;
