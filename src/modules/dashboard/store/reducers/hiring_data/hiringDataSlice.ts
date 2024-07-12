
import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Payment_Account_I, User_HiringData_I, User_Personal_Data_I } from "@tesis-project/dev-globals/dist/modules/user/interfaces";


export interface Slice_hiringDataState_I {

    onLoading: boolean;
    hiring_data: User_HiringData_I;

}

const initialState: Slice_hiringDataState_I = {

    onLoading: false,
    hiring_data: {} as User_HiringData_I

}

export const hiringDataSlice = createSlice({
    name: "hiring_data",
    initialState,
    reducers: {
        onSetLoading_hiringDataSlice: (state, { payload }: PayloadAction<boolean>) => {
            state.onLoading = payload;
        },
        onSetHiringData_hiringDataSlice: (state, { payload }: PayloadAction<User_HiringData_I>) => {
            state.hiring_data = {
                ...state.hiring_data,
                ...payload
            };
        },
        onSetPersonal_hiringDataSlice: (state, { payload }: PayloadAction<User_Personal_Data_I>) => {
            state.hiring_data.personal = {
                ...state.hiring_data.personal,
                ...payload
            };
        },
        onSetBankData_hiringDataSlice: (state, { payload }: PayloadAction<Payment_Account_I[]>) => {
            state.hiring_data.payment_accounts = []
            state.hiring_data.payment_accounts = [...payload]
        },
        onAddBankData_hiringDataSlice: (state, { payload }: PayloadAction<Payment_Account_I>) => {
            state.hiring_data.payment_accounts?.push(payload);
        },
        onRemoveBankData_hiringDataSlice: (state, { payload }: PayloadAction<{index: number}>) => {
            state.hiring_data.payment_accounts?.splice(payload.index, 1);
        },
        onEditBankData_hiringDataSlice: (state, { payload }: PayloadAction<{data: Payment_Account_I, index: number}>) => {
            state.hiring_data.payment_accounts?.splice(payload.index, 1, payload.data);
        },
        onRestoreDefault_hiringDataSlice: (state) => {
            state.onLoading = false;
                state.hiring_data = { ...initialState.hiring_data }
        },
    }
});

export const {
    onSetLoading_hiringDataSlice,
    onSetHiringData_hiringDataSlice,
    onSetPersonal_hiringDataSlice,
    onSetBankData_hiringDataSlice,
    onRemoveBankData_hiringDataSlice,
    onEditBankData_hiringDataSlice,
    onAddBankData_hiringDataSlice,
    onRestoreDefault_hiringDataSlice,
} = hiringDataSlice.actions;
