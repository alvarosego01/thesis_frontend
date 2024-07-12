
import { FC } from "react"
import { FeedbackModal } from "@components/index";
import { useUiStore } from "@store/index";

export interface ConfirmDeleteModal_Props_I {
    status: boolean;
    index: number;
}

interface Props_I {
    data_modal: ConfirmDeleteModal_Props_I;
    onClose: () => void;
    onAccept: (index: number) => void;
}

export const ConfirmDeleteModal: FC<Props_I> = ({
    data_modal,
    onAccept,
    onClose
}) => {

    const {
        state: {
            modals: {
                dashboard: {
                    hiring_data: {
                        payment_accounts: {
                            delete_PaymentInfo_modal: delete_bankData_Modal
                        }
                    }
                }
            }
        },
    } = useUiStore();

    return (
        <>
            {
                delete_bankData_Modal.status && (
                    <FeedbackModal
                        labelAccept="Aceptar"
                        type="info"
                        title="Eliminar información de cuenta y pagos"
                        text="¿Estás seguro?"
                        onClose={onClose}
                        onAccept={() => onAccept(delete_bankData_Modal.index)}
                        status={delete_bankData_Modal.status}
                    />
                )
            }
        </>
    )
}
