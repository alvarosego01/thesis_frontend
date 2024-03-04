import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from '@reduxjs/toolkit'

import { User_Auth_I } from "../../../../models";

type Status_Session_Type = "checking" | "authenticated" | "not-authenticated";

export interface Session_authState_I {
    onLoading: boolean;
    status: Status_Session_Type;
    auth: User_Auth_I;
}

const initialState: Session_authState_I = {
    // status: 'not-authenticated',
    onLoading: false,
    status: 'authenticated',
    auth: {
        // _id: '',
        // role: '',
        // username: '',
        // email: '',
        // password: '',
        // status: "none",
        // signature: {
        //     text: '',
        //     date: ''
        // }
        _id: '12345',
        role: 'ARTIST_ROLE',
        username: 'alvarosego01',
        email: 'alvarosego01@gmail.com',
        password: ':)',
        status: "ACTIVE",
        signature: {
            text: 'Alvaro Sego',
            date: '1709240436'
        }
    }
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
        onLogin: (state, { payload }: PayloadAction<User_Auth_I>) => {
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
