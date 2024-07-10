
import { createSlice, type PayloadAction } from '@reduxjs/toolkit'
import { Profile_I } from '@tesis-project/dev-globals/dist/modules/profile/interfaces';


export interface Slice_ProfileState_I {
    onLoading: boolean;
    profile: Profile_I;
}

const initialState: Slice_ProfileState_I = {
    // status: 'not-authenticated',
    onLoading: false,
    profile: {
        // _id: '',
        // artistic_name: '',
        // bio_short: '',
        // profile_pic: {} as File_Model_I,
        // cover_pic: {} as File_Model_I,
        // credentials: {
        //     identity_file: {} as File_Model_I,
        //     profesional_file: {} as File_Model_I
        // },
        // media: {
        //     image_gallery: [],
        //     video_gallery: []
        // },
        // socials: {
        //     facebook: '',
        //     twitter: '',
        //     instagram: '',
        //     youtube: '',
        //     tiktok: '',
        // } as
    } as Profile_I
}

export const profileSlice = createSlice({
    name: "profile",
    initialState,
    reducers: {
        onSetLoading_profileSlice: (state, { payload }: PayloadAction<boolean>) => {
            state.onLoading = payload;
        },
        onSetProfile_profileSlice: (state, { payload }: PayloadAction<Profile_I>) => {
            state.profile = {...payload};
            state.onLoading = false;
        },
        onRestoreDefault_profileSlice: (state) => {
            state.onLoading = false,
            state.profile = {...initialState.profile}
        },
    }
});

export const {
    onSetLoading_profileSlice,
    onRestoreDefault_profileSlice,
    onSetProfile_profileSlice
} = profileSlice.actions;
