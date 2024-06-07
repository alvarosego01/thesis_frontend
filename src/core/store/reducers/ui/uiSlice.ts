
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
                status: false,
                type: 'none',
                data: {} as any
            }
        }
    }
}

export const uiSlice = createSlice({
    name: "ui",
    initialState,
    reducers: {
        on_Handler_SignatureSelectorModal: (state, {payload}: PayloadAction<SignatureModal_Props_I>) => {
            const { status, text } = payload;
            state.modals.dashboard.signature_selector_modal = {
                status,
                text
            }
        },
        on_Handler_PaymentInfoModal: (state, {payload}: PayloadAction<PaymentInfoModal_Props_I>) => {
            const { status, data, type } = payload;
            state.modals.dashboard.paymentInfo_handler_modal = {
                status,
                data,
                type
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
