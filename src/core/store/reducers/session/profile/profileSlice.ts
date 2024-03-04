import { createSlice, type PayloadAction } from '@reduxjs/toolkit'
import { File_Model_I, User_Profile_I } from '../../../../models';


export interface Session_profileState_I {
    onLoading: boolean;
    profile: User_Profile_I;
}

const initialState: Session_profileState_I = {
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
    } as User_Profile_I
}

export const profileSlice = createSlice({
    name: "profile",
    initialState,
    reducers: {
        onSetLoading: (state, { payload }: PayloadAction<boolean>) => {
            state.onLoading = payload;
        },
        onSetProfile: (state, { payload }: PayloadAction<User_Profile_I>) => {
            state.profile = {...payload};
            state.onLoading = false;
        },
        onRestoreDefault: (state) => {
            state = initialState;
        },
    }
});

export const {
    onSetLoading,
    onRestoreDefault,
    onSetProfile
} = profileSlice.actions;
