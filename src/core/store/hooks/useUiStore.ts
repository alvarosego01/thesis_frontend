
import { useDispatch, useSelector } from "react-redux";
import { Core_Reducers_I } from "../store";
import { on_Handler_SignatureSelectorModal, uiState_I } from "../reducers/ui/uiSlice";
import { Handle_Signature_Modal_I } from "../reducers/ui/uiActions";

interface useUiStore_I {
    state: uiState_I;
    handle_signatureModal: (x: Handle_Signature_Modal_I) => void;
}

export const useUiStore = (): useUiStore_I => {

    const dispatch = useDispatch();

    const state = useSelector<Core_Reducers_I, uiState_I>(({ ui }) => ui);

    const handle_signatureModal = ({ status, text }: Handle_Signature_Modal_I) => {
        dispatch(on_Handler_SignatureSelectorModal({
            status: status,
            text: text
        }))
    }

    return {
        state,
        // Methods
        handle_signatureModal
    }

}


