import { FC, useEffect, useState } from "react"
import { useUiStore } from "@store/index";
import { PaymentInfo, PaymentInfoModal } from "../components";
import { PrimaryButton } from "@components/index";
import { NotFoundContent } from "../../../components";
import { useHiringDataStore } from "../../../store/hooks/hiring_data/useHiringDataStore";
import { Payment_Account_I } from "@tesis-project/dev-globals/dist/modules/user/interfaces";
import { ConfirmDeleteModal } from "../components/modals/ConfirmDeleteModal";

export const PaymentInfoPage: FC = () => {

    const [isMounted, setisMounted] = useState(false)
    const [aux_data, setaux_data] = useState<Payment_Account_I[]>([])

    const {
        state: {
            modals: {
                dashboard
            }
        },
        emit_handle_paymentInfoModal,
        emit_handle_delete_bankData_Modal
    } = useUiStore();

    const payment_accounts_modals = dashboard.hiring_data.payment_accounts;

    const {
        state: {
            onLoading,
            hiring_data: {
                payment_accounts
            },
            hiring_data
        },
        emit_delete_bankData
    } = useHiringDataStore();

    const onClose_deleteModal = () => {

        emit_handle_delete_bankData_Modal({
            index: -1,
            status: false
        })

    }

    const onAccept_deleteModal = (index: number) => {

        emit_delete_bankData(hiring_data._id, index)

    }

    const add_new = () => {

        emit_handle_paymentInfoModal({
            status: true,
            type: 'new',
        });

    }

    useEffect(() => {

        if (isMounted === false) return;

        if (payment_accounts) {
            setaux_data(payment_accounts);
        }

    }, [payment_accounts, isMounted])

    useEffect(() => {
        setisMounted(true);
    }, []);

    return (
        <>
            <div className="grow">

                <div className="p-5 space-y-5">

                    <h2 className="flex flex-row justify-between mb-5 text-2xl font-bold text-slate-800 dark:text-slate-100">
                        Información de pago y cuentas
                        {
                            (aux_data.length > 0) && (
                                <PrimaryButton onClick={add_new} isLoading={onLoading} label="Añadir" icon="bx bx-plus" />
                            )
                        }
                    </h2>

                    {
                        (aux_data.length === 0) ? (
                            <section>
                                <NotFoundContent onClick={add_new} enableButton={true} title="Sin información de pago añadida" />
                            </section>
                        ) : (
                            <div className="grid grid-cols-12 gap-5 paymentInfo">
                                {
                                    aux_data.map((data, index) => {
                                        return (
                                            <div key={index} className="col-span-full sm:col-span-6 xl:col-span-4">
                                                <PaymentInfo props={data} index={index} />
                                            </div>
                                        )
                                    })
                                }
                            </div>
                        )
                    }

                </div>

            </div>

             <PaymentInfoModal {...payment_accounts_modals.paymentInfo_handler_modal} />
             <ConfirmDeleteModal data_modal={payment_accounts_modals.delete_PaymentInfo_modal} onAccept={(index) => onAccept_deleteModal(index)} onClose={onClose_deleteModal} />

        </>
    )
}
