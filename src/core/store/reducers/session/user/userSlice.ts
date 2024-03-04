import type { PayloadAction } from '@reduxjs/toolkit'
import { createSlice } from "@reduxjs/toolkit";

import { User_I } from "../../../../models";

export interface Session_userState_I {
    onLoading: boolean;
    user: User_I;
}

const initialState: Session_userState_I = {
    // status: 'not-authenticated',
    onLoading: false,
    user: {
        // _id: '',
        // name: '',
        // last_name: '',
        // gender: '',
        // phone: '',
        // direction: {
        //     adress: '',
        //     city: '',
        //     state: '',
        // }
        _id: '12345',
        name: 'Alvaro',
        last_name: 'Segovia',
        gender: 'masculine',
        phone: '1234567890',
        direction: {
            adress: 'La dirección',
            city: 'Ciudad',
            state: 'Bolivar',
        }
    }
}

export const userSlice = createSlice({
    name: "user",
    initialState,
    reducers: {
        onSetLoading: (state, {payload}: PayloadAction<boolean>) => {
            state.onLoading = payload;
        },
        onSetUser: (state, { payload }: PayloadAction<User_I>) => {
            state.user = {...payload};
            state.onLoading = false;
        },
        onRestoreDefault: (state) => {
            state = initialState;
        },
    }
});

export const {
    onSetLoading,
    onSetUser,
    onRestoreDefault
} = userSlice.actions;
