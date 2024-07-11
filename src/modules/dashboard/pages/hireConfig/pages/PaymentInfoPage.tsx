import { FC, useEffect } from "react"
import { useUiStore } from "@store/index";
import { PaymentInfo, PaymentInfoModal } from "../components";
import { FeedbackModal, PrimaryButton } from "@components/index";
import { NotFoundContent } from "../../../components";
import { useHiringDataStore } from "../../../store/hooks/hiring_data/useHiringDataStore";
import { signal } from '@preact/signals-react';
import { Payment_Account_I } from "@tesis-project/dev-globals/dist/modules/user/interfaces";
import { ConfirmDeleteModal } from "../components/modals/ConfirmDeleteModal";

/* const aux_data: Payment_Account_I[] = [
    {
        bank_name: "bc_venezuela",
        date: "2021-09-01",
        number: "123456789",
        person_id: "123456789",
        phone: "",
        titular: "Juan Perez",
        type: "bank_account"
    },
    {
        bank_name: "bc_banesco",
        date: "2021-09-01",
        number: "123456789",
        person_id: "123456789",
        phone: "",
        titular: "Juan Perez",
        type: "bank_account"
    },
    {
        bank_name: "bc_mercantil",
        date: "2021-09-01",
        number: "",
        person_id: "123456789",
        phone: "123456789",
        titular: "Juan Perez",
        type: "mobile_payment"
    }
] */

export const PaymentInfoPage: FC = () => {

    const aux_data = signal<Payment_Account_I[]>([]);

    const {
        state: {
            modals: {
                dashboard
            }
        },
        emit_handle_paymentInfoModal
    } = useUiStore();

    const payment_accounts_modals = dashboard.hiring_data.payment_accounts;

    const {
        state: {
            onLoading,
            hiring_data: {
                payment_accounts
            },
        },
    } = useHiringDataStore();

    const add_new = () => {

        emit_handle_paymentInfoModal({
            status: true,
            type: 'new',
        })

    }

    if (payment_accounts) {
        aux_data.value = payment_accounts;
    }

    return (
        <>
            <div className="grow">

                <div className="p-5 space-y-5">

                    <h2 className="flex flex-row justify-between mb-5 text-2xl font-bold text-slate-800 dark:text-slate-100">
                        Información de pago y cuentas
                        {
                            (aux_data.value.length > 0) && (
                                <PrimaryButton onClick={add_new} isLoading={onLoading} label="Añadir" icon="bx bx-plus" />
                            )
                        }
                    </h2>

                    {
                        (aux_data.value.length === 0) ? (
                            <section>
                                <NotFoundContent onClick={add_new} enableButton={true} title="Sin información de pago añadida" />
                            </section>
                        ) : (
                            <div className="grid grid-cols-12 gap-5 paymentInfo">
                                {
                                    aux_data.value.map((data, index) => {
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

            <PaymentInfoModal {...payment_accounts_modals.paymentInfo_handler_modal } />

            <ConfirmDeleteModal data_modal={ payment_accounts_modals.delete_PaymentInfo_modal } onAccept={(index) => {}} onClose={() => {}} />

        </>
    )
}
