
import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { User_I } from "@tesis-project/dev-globals/dist/modules/user/interfaces";

export interface Slice_P_userProfileState_I {
    onLoading: boolean;
    user: User_I;
}

const initialState: Slice_P_userProfileState_I = {
    onLoading: false,
    user: {} as User_I
}

export const P_userProfileSlice = createSlice({
    name: "user_profile",
    initialState,
    reducers: {
        onSetLoading_P_userProfileSlice: (state, { payload }: PayloadAction<boolean>) => {
            state.onLoading = payload;
        },
        onSetUser_P_userProfileSlice: (state, { payload }: PayloadAction<User_I>) => {
            state.user = payload;
        },
        onRestoreDefault_P_userProfileSlice: (state) => {
            state.onLoading = false;
            state.user = {} as User_I;
        },
    }
});

export const {
    onSetLoading_P_userProfileSlice,
    onRestoreDefault_P_userProfileSlice,
    onSetUser_P_userProfileSlice
} = P_userProfileSlice.actions;
