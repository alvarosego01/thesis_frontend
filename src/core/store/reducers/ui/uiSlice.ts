
import type { PayloadAction } from '@reduxjs/toolkit'
import { createSlice } from "@reduxjs/toolkit";

import { SignatureModal_Props_I } from '@modules/dashboard/pages/account/components/modals/SignatureModal';
import { ConfirmDeleteModal_Props_I, PaymentInfoModal_Props_I } from '@modules/dashboard/pages/hireConfig/components';
import { NewVacantModal_Modal_Props_I } from '../../../../modules/public/pages/JobVacants/components/modals/NewVacantModal/NewVacantModal';


export interface uiState_I {
    modals: {
        dashboard: {
            signature_selector_modal: SignatureModal_Props_I;
            hiring_data: {
                payment_accounts: {
                    paymentInfo_handler_modal: PaymentInfoModal_Props_I;
                    delete_PaymentInfo_modal: ConfirmDeleteModal_Props_I;
                }
            }
        },
        public: {
            login: {
                lostPassword_modal: {
                    status: boolean;
                }
            },
            vacants: {
                vacant_modal: NewVacantModal_Modal_Props_I;
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
            },
            hiring_data: {
                payment_accounts: {
                    paymentInfo_handler_modal: {
                        status: false,
                        type: 'none',
                        data: {} as any
                    },
                    delete_PaymentInfo_modal: {
                        status: false,
                        index: -1
                    }
                }
            }
        },
        public: {
            login: {
                lostPassword_modal: {
                    status: false
                }
            },
            vacants: {
                vacant_modal: {
                    status: true,
                    vacant_id: ''
                }
            }
        }
    }
}

export const uiSlice = createSlice({
    name: "ui",
    initialState,
    reducers: {
        on_Handler_Login_LostPasswordModal: (state, {payload}: PayloadAction<boolean>) => {
            state.modals.public.login.lostPassword_modal.status = payload;
        },
        on_Handler_SignatureSelectorModal: (state, {payload}: PayloadAction<SignatureModal_Props_I>) => {
            const { status, text } = payload;
            state.modals.dashboard.signature_selector_modal = {
                status,
                text
            }
        },
        on_Handler_PaymentInfoModal: (state, {payload}: PayloadAction<PaymentInfoModal_Props_I>) => {
            const { status, data, type } = payload;
            state.modals.dashboard.hiring_data.payment_accounts.paymentInfo_handler_modal = {
                status,
                data,
                type
            }
        },
        on_Handler_delete_PaymentInfoModal: (state, {payload}: PayloadAction<ConfirmDeleteModal_Props_I>) => {
            const { status, index } = payload;
            state.modals.dashboard.hiring_data.payment_accounts.delete_PaymentInfo_modal = {
                status,
                index
            }
        },
         on_Handler_vacantsModal: (state, {payload}: PayloadAction<NewVacantModal_Modal_Props_I>) => {
            const { status, vacant_id } = payload;
            state.modals.public.vacants.vacant_modal = {
                status,
                vacant_id
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
    on_Handler_delete_PaymentInfoModal,
    on_Handler_Login_LostPasswordModal,
    on_Handler_vacantsModal,
    on_restoreDefault

} = uiSlice.actions;
