import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Requests_I } from "@tesis-project/dev-globals/dist/modules/auth/interfaces/requests";

export interface Slice_requestsState_I {
    onLoading: boolean;
    verifyPage: {
        request: Requests_I;

    }

}

const initialState: Slice_requestsState_I = {

    onLoading: false,
    verifyPage: {
        request: {} as any
    }

}

export const requestSlice = createSlice({
    name: "requests",
    initialState,
    reducers: {
        onSetLoading_requestsSL: (state, { payload }: PayloadAction<boolean>) => {
            state.onLoading = payload;
        },
        onSetRequest_requestSl: (state, { payload }: PayloadAction<Requests_I>) => {
            state.verifyPage.request = payload;
        }
    }

});

export const {
    onSetLoading_requestsSL,
    onSetRequest_requestSl
} = requestSlice.actions;
