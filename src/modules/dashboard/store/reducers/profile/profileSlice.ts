
import { createSlice, type PayloadAction } from '@reduxjs/toolkit'
import { Profile_I } from '@tesis-project/dev-globals/dist/modules/profile/interfaces';


export interface Slice_ProfileState_I {
    onLoading: boolean;
    onLoading_identity_file: boolean;
    onLoading_profesional_file: boolean;
    profile: Profile_I;
}

const initialState: Slice_ProfileState_I = {
    onLoading: false,
    onLoading_identity_file: false,
    onLoading_profesional_file: false,
    profile: {
    } as Profile_I
}

export const profileSlice = createSlice({
    name: "profile",
    initialState,
    reducers: {
        onSetLoading_profileSlice: (state, { payload }: PayloadAction<boolean>) => {
            state.onLoading = payload;
        },
        onLoading_identity_file: (state, { payload }: PayloadAction<boolean>) => {
            state.onLoading_identity_file = payload;
        },
        onLoading_profesional_file: (state, { payload }: PayloadAction<boolean>) => {
            state.onLoading_profesional_file = payload;
        },
        onSetProfile_profileSlice: (state, { payload }: PayloadAction<Profile_I>) => {
            state.profile = {
                ...state.profile,
                ...payload
            };
            state.onLoading = false;
        },
        onRestoreDefault_profileSlice: (state) => {
            state.onLoading = false;
            state.profile = { ...initialState.profile }
        },
    }
});

export const {
    onSetLoading_profileSlice,
    onLoading_identity_file,
    onLoading_profesional_file,
    onRestoreDefault_profileSlice,
    onSetProfile_profileSlice
} = profileSlice.actions;
