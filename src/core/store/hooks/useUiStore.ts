
import { shallowEqual, useDispatch, useSelector } from "react-redux";

import { Core_Reducers_I } from "../store";
import { on_Handler_PaymentInfoModal, on_Handler_SignatureSelectorModal, uiState_I } from "../reducers/ui/uiSlice";

import { SignatureModal_Props_I } from "@modules/dashboard/pages/account/components/modals/SignatureModal";
import { PaymentInfoModal_Props_I } from "@modules/dashboard/pages/hireConfig/components/modals/PaymentInfoModal";

interface useHookStore_I {
    state: uiState_I;
    handle_signatureModal: (x: SignatureModal_Props_I) => void;
    handle_paymentInfoModal: (x: PaymentInfoModal_Props_I) => void;
}

export const useUiStore = (): useHookStore_I => {

    const dispatch = useDispatch();

    const state = useSelector<Core_Reducers_I, uiState_I>(({ ui }) => ui, shallowEqual);

    const handle_signatureModal = ({ status, text }: SignatureModal_Props_I) => {
        dispatch(on_Handler_SignatureSelectorModal({
            status: status,
            text: text
        }))
    }

    const handle_paymentInfoModal = ({ status }: PaymentInfoModal_Props_I ) => {

        dispatch(on_Handler_PaymentInfoModal({
            status: status
        }))

    }

    return {
        state,
        // Methods
        handle_signatureModal,
        handle_paymentInfoModal
    }

}


