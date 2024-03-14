
import { FC } from "react";

import { BlankModal, InfoModal } from "@components/index";
import { useUiStore } from "@store/index";
import { PaymentInfoSelectors } from "../PaymentInfoSelectors";

export interface PaymentInfoModal_Props_I {
    status: boolean;
}

export const PaymentInfoModal: FC<PaymentInfoModal_Props_I> = ({
    status
}) => {

    const {
        // state
        handle_paymentInfoModal
    } = useUiStore();

    const closeModal = () => {

        handle_paymentInfoModal({
            status: false,
        })

    }

    return (
        <>
            {
                status && (
                    <InfoModal title="Información de pago" onClose={closeModal} status={status}  >
                        <PaymentInfoSelectors  />
                    </InfoModal>
                )
            }
        </>
    )

}
