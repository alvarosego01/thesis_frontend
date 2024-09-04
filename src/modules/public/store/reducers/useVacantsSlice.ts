
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

import { Vacant_I } from "@tesis-project/dev-globals/dist/modules/business/vacants/interfaces";

export interface Slice_P_useVacantsSlice {
    onLoading: boolean;
    vacants: Vacant_I[]
}

const initialState: Slice_P_useVacantsSlice = {
    onLoading: false,
    vacants: []
}

export const P_useVacantsSlice = createSlice({
    name: "vacants",
    initialState,
    reducers: {
        onSetLoading_P_useVacantsSlice: (state, { payload }: PayloadAction<boolean>) => {
            state.onLoading = payload;
        },
        onSetVacants_P_useVacantsSlice: (state, { payload }: PayloadAction<Vacant_I[]>) => {
            state.vacants = payload;
        },
        onRestoreDefault_P_useVacantsSlice: (state) => {
            state.onLoading = false;
        },
    }
});

export const {
    onSetLoading_P_useVacantsSlice,
    onSetVacants_P_useVacantsSlice,
    onRestoreDefault_P_useVacantsSlice,
} = P_useVacantsSlice.actions;
