import { FC } from "react"
import { useUiStore } from "@store/index";
import { PaymentInfo, PaymentInfoModal } from "../components";
import { PrimaryButton } from "@components/index";
import { NotFoundContent } from "../../../components";
import { Payment_Account_I } from "@models/index";

const aux_data: Payment_Account_I[] = [
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
]

export const PaymentInfoPage: FC = () => {

    const {
        state: {
            modals: {
                dashboard: {
                    paymentInfo_handler_modal
                }
            }
        },
        handle_paymentInfoModal
    } = useUiStore();



    const add_new = () => {

        handle_paymentInfoModal({
            status: true,
            type: 'new',

        })

    }

    return (
        <>
            <div className="grow">

                <div className="p-5 space-y-5">

                    <h2 className="flex flex-row justify-between mb-5 text-2xl font-bold text-slate-800 dark:text-slate-100">
                        Información de pago y cuentas

                        <PrimaryButton onClick={add_new} label="Añadir" icon="bx bx-plus" />
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
                                                <PaymentInfo {...data} />
                                            </div>
                                        )
                                    })
                                }
                            </div>
                        )
                    }

                </div>

            </div>

            <PaymentInfoModal {...paymentInfo_handler_modal} />
        </>
    )
}
