
import { shallowEqual, useDispatch, useSelector } from "react-redux";

import { Reducers_I } from "../store";
import { on_Handler_delete_PaymentInfoModal, on_Handler_Login_LostPasswordModal, on_Handler_PaymentInfoModal, on_Handler_SignatureSelectorModal, uiState_I, on_Handler_vacantsModal, on_Handler_postulationVacantModal } from "../reducers/ui/uiSlice";

import { SignatureModal_Props_I } from "@modules/dashboard/pages/account/components/modals/SignatureModal";
import { PaymentInfoModal_Props_I } from "@modules/dashboard/pages/hireConfig/components/modals/PaymentInfoModal";
import { ConfirmDeleteModal_Props_I } from "../../../modules/dashboard/pages/hireConfig/components";
import { NewVacant_Modal_Props_I } from "../../../modules/public/pages/JobVacants/components/modals/NewVacantModal/NewVacantModal";
import { PostulationVacant_Modal_Props_I } from '../../../modules/public/pages/Vacant/components/NewPostulatrionModal';


interface useHookStore_I {
    state: uiState_I;
    handle_signatureModal: (x: SignatureModal_Props_I) => void;
    emit_handle_delete_bankData_Modal: ({ index, status }: ConfirmDeleteModal_Props_I) => void;
    emit_handle_paymentInfoModal: (x: PaymentInfoModal_Props_I) => void;
    emit_handle_login_lostPassword_Modal: (status: boolean) => void;
    emit_handle_vacantModal: (x: NewVacant_Modal_Props_I) => void;
    emit_handle_postulationVacantModal: (x: PostulationVacant_Modal_Props_I) => void;
}

export const useUiStore = (): useHookStore_I => {

    const dispatch = useDispatch();

    const state = useSelector<Reducers_I, uiState_I>(({ global }) => global.ui, shallowEqual);

    const handle_signatureModal = ({ status, text }: SignatureModal_Props_I) => {
        dispatch(on_Handler_SignatureSelectorModal({ status, text }))
    }

    const emit_handle_paymentInfoModal = ({ status, type, data }: PaymentInfoModal_Props_I) => {
        dispatch(on_Handler_PaymentInfoModal({ status, type, data }))
    }

    const emit_handle_delete_bankData_Modal = ({ index, status }: ConfirmDeleteModal_Props_I) => {

        dispatch(on_Handler_delete_PaymentInfoModal({
            index,
            status
        }));

    }

    const emit_handle_login_lostPassword_Modal = (status: boolean) => {

        dispatch(on_Handler_Login_LostPasswordModal(status));

    }

    const emit_handle_vacantModal = ({ status, vacant_id }: NewVacant_Modal_Props_I)  => {

        dispatch(on_Handler_vacantsModal({ status, vacant_id }));

    }

    const emit_handle_postulationVacantModal = ({ status, vacant_id }: PostulationVacant_Modal_Props_I)  => {

        dispatch(on_Handler_postulationVacantModal({ status, vacant_id }));

    }

    return {
        state,

        // Methods
        emit_handle_paymentInfoModal,
        emit_handle_delete_bankData_Modal,
        emit_handle_login_lostPassword_Modal,
        emit_handle_vacantModal,
        emit_handle_postulationVacantModal,
        handle_signatureModal,
    }

}


