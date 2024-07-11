
import { FC } from "react";

import { InfoModal } from "@components/index";
import { useUiStore } from "@store/index";
import { PaymentInfoSelectors } from "../PaymentInfoSelectors";
import { Payment_Account_I } from "@tesis-project/dev-globals/dist/modules/user/interfaces";

export interface PaymentInfoModal_Props_I {
    status: boolean;
    type: 'none' | 'new' | 'edit';
    data?: Payment_Account_I;
}

export const PaymentInfoModal: FC<PaymentInfoModal_Props_I> = ({
    status
}) => {

    const {
        state: {
            modals: {
                dashboard: {
                    hiring_data: {
                        payment_accounts: {
                            paymentInfo_handler_modal: modal_data
                        }
                    }
                }
            }
        },
        emit_handle_paymentInfoModal
    } = useUiStore();

    const closeModal = () => {

        emit_handle_paymentInfoModal({
            status: false,
            type: 'none',
            data: {} as Payment_Account_I,
        })

    }

    return (
        <>
            {
                status && (
                    <InfoModal title="Información de pago" onClose={closeModal} status={status}  >
                        <PaymentInfoSelectors data={modal_data.data || {} as Payment_Account_I}  />
                    </InfoModal>
                )
            }
        </>
    )

}
