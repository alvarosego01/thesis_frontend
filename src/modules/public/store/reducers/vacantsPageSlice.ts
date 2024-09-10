
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

import { Vacant_I } from "@tesis-project/dev-globals/dist/modules/business/vacants/interfaces";

export interface Slice_P_vacantsPageSlice {
    onLoading: boolean;
    vacants: Vacant_I[];
    vacant: Vacant_I
}

const initialState: Slice_P_vacantsPageSlice = {
    onLoading: false,
    vacants: [],
    vacant: {} as Vacant_I
}

export const P_vacantsPageSlice = createSlice({
    name: "vacants",
    initialState,
    reducers: {
        onSetLoading_P_vacantsPageSlice: (state, { payload }: PayloadAction<boolean>) => {
            state.onLoading = payload;
        },
        onSetVacants_P_vacantsPageSlice: (state, { payload }: PayloadAction<Vacant_I[]>) => {
            state.vacants = payload;
        },
        onSetVacant_P_vacantsPageSlice: (state, { payload }: PayloadAction<Vacant_I>) => {
            state.vacant = payload;
        },
        onRestoreDefault_P_vacantsPageSlice: (state) => {
            state.onLoading = false;
            state.vacants = [];
            state.vacant = {} as Vacant_I;

        },
    }
});

export const {
    onSetLoading_P_vacantsPageSlice,
    onSetVacants_P_vacantsPageSlice,
    onRestoreDefault_P_vacantsPageSlice,
    onSetVacant_P_vacantsPageSlice,
} = P_vacantsPageSlice.actions;
