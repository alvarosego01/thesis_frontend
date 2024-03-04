
import type { PayloadAction } from '@reduxjs/toolkit'
import { createSlice } from "@reduxjs/toolkit";

import { Handle_Signature_Modal_I } from "./uiActions";

export interface uiState_I {
    modals: {
        dashboard: {
            signature_selector_modal: {
                status: boolean;
                text: string;
            }
        }
    }
}

const initialState: uiState_I = {
    modals: {
        dashboard: {
            signature_selector_modal: {
                status: false,
                text: ""
            }
        }
    }
}

export const uiSlice = createSlice({
    name: "ui",
    initialState,
    reducers: {
        on_Handler_SignatureSelectorModal: (state, {payload}: PayloadAction<Handle_Signature_Modal_I>) => {
            state.modals.dashboard.signature_selector_modal = {
                status: payload.status,
                text: payload.text
            }
        },
        on_restoreDefault: (state) => {
            state = initialState;
        },
    }
});

export const {
    on_Handler_SignatureSelectorModal,
    on_restoreDefault
} = uiSlice.actions;
