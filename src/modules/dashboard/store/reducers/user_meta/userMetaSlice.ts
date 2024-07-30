
import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { MetaRole_I } from "@tesis-project/dev-globals/dist/modules/profile/interfaces";


export interface Slice_userMetaState_I {

    onLoading: boolean;
    user_meta: MetaRole_I;

}

const initialState: Slice_userMetaState_I = {

    onLoading: false,
    user_meta: {} as MetaRole_I

}

export const userMetaSlice = createSlice({
    name: "profile/meta",
    initialState,
    reducers: {
        onSetLoading_userMetaSlice: (state, { payload }: PayloadAction<boolean>) => {
            state.onLoading = payload;
        },
        onSet_userMeta: (state, { payload }: PayloadAction<MetaRole_I>) => {
            state.user_meta = {
                ...payload
            }

        },
        onRestoreDefault_userMetaSlice: (state) => {
            state.onLoading = false;
            state.user_meta = { ...initialState.user_meta }
        },
    }
});

export const {
    onSetLoading_userMetaSlice,
    onSet_userMeta,
    onRestoreDefault_userMetaSlice,
} = userMetaSlice.actions;
