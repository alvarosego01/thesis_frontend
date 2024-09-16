import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Contract_I } from "@tesis-project/dev-globals/dist/modules/business/contracts/interfaces";


export interface Slice_ContractsState_I {
    onLoading: boolean;
    contracts: Contract_I[];
    contract: Contract_I;
}

const initialState: Slice_ContractsState_I = {
    onLoading: false,
    contracts: [],
contract: {} as Contract_I,

}

export const contractsSlice = createSlice({
    name: "contracts",
    initialState,
    reducers: {
        onSetLoading_contractsSlice: (state, { payload }: PayloadAction<boolean>) => {
            state.onLoading = payload;
        },
        onSetContracts_contractsSlice: (state, { payload }: PayloadAction<Contract_I[]>) => {
            state.contracts = [...payload];
            state.onLoading = false;
        },
        onSetContract_contractsSlice: (state, { payload }: PayloadAction<Contract_I>) => {

            state.contract = {...payload};
            state.onLoading = false;

        },
        onRestoreDefault_contractsSlice: (state) => {
            state.onLoading = false;
            state.contracts = [];
            state.contract = {} as Contract_I;
        },
    }
});

export const {
onSetLoading_contractsSlice,
onSetContracts_contractsSlice,
onSetContract_contractsSlice,
onRestoreDefault_contractsSlice,
} = contractsSlice.actions;
