
import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { User_I } from "@tesis-project/dev-globals/dist/modules/user/interfaces";

export interface Slice_P_userSearchState_I {
    onLoading: boolean;
    results: User_I[];
    // user: User_I;
}

const initialState: Slice_P_userSearchState_I = {
    onLoading: false,
    results: []
}

export const P_userSearchSlice = createSlice({
    name: "user_search",
    initialState,
    reducers: {
        onSetLoading_P_userSearchSlice: (state, { payload }: PayloadAction<boolean>) => {
            state.onLoading = payload;
        },
        onSetResults_P_userSearchSlice: (state, { payload }: PayloadAction<User_I[]>) => {
            state.results = payload;
        },
        onRestoreDefault_P_userSearchSlice: (state) => {
            state.onLoading = false;
            state.results = [];
        },
    }
});

export const {
    onSetLoading_P_userSearchSlice,
    onRestoreDefault_P_userSearchSlice,
    onSetResults_P_userSearchSlice
} = P_userSearchSlice.actions;
