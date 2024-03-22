
import type { PayloadAction } from '@reduxjs/toolkit'
import { createSlice } from "@reduxjs/toolkit";

import { SignatureModal_Props_I } from '@modules/dashboard/pages/account/components/modals/SignatureModal';
import { PaymentInfoModal_Props_I } from '@modules/dashboard/pages/hireConfig/components/modals/PaymentInfoModal';


export interface uiState_I {
    modals: {
        dashboard: {
            signature_selector_modal: SignatureModal_Props_I;
            paymentInfo_handler_modal: PaymentInfoModal_Props_I
        }
    }
}

const initialState: uiState_I = {
    modals: {
        dashboard: {
            signature_selector_modal: {
                status: false,
                text: ""
            },
            paymentInfo_handler_modal: {
                status: false
            }
        }
    }
}

export const uiSlice = createSlice({
    name: "ui",
    initialState,
    reducers: {
        on_Handler_SignatureSelectorModal: (state, {payload}: PayloadAction<SignatureModal_Props_I>) => {
            state.modals.dashboard.signature_selector_modal = {
                status: payload.status,
                text: payload.text
            }
        },
        on_Handler_PaymentInfoModal: (state, {payload}: PayloadAction<PaymentInfoModal_Props_I>) => {
            state.modals.dashboard.paymentInfo_handler_modal = {
                status: payload.status
            }
        },
        on_restoreDefault: (state) => {
            state = initialState;
        },
    }
});

export const {
    on_Handler_SignatureSelectorModal,
    on_Handler_PaymentInfoModal,
    on_restoreDefault

} = uiSlice.actions;
