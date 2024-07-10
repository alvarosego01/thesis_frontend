import type { PayloadAction } from '@reduxjs/toolkit'
import { createSlice } from "@reduxjs/toolkit";
import { User_HiringData_I, User_I } from '@tesis-project/dev-globals/dist/modules/user/interfaces';


export interface Slice_userState_I {
    onLoading: boolean;
    user: User_I;
}

const initialState: Slice_userState_I = {
    onLoading: false,
    user: {

    } as User_I

}

export const userSlice = createSlice({
    name: "user",
    initialState,
    reducers: {
        onSetLoading_userSlice: (state, {payload}: PayloadAction<boolean>) => {
            state.onLoading = payload;
        },
        onSetUser_userSlice: (state, { payload }: PayloadAction<User_I>) => {
            state.user = {...payload};
            state.onLoading = false;
        },
        onRestoreDefault_userSlice: (state) => {
            state.onLoading = false,
            state.user = {...initialState.user}
        },
    }
});

export const {
    onSetLoading_userSlice,
    onSetUser_userSlice,
    onRestoreDefault_userSlice
} = userSlice.actions;
