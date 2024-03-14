import { FC } from "react"
import { PrimaryButton } from '@components/buttons/PrimaryButton';
import { NotFoundContent } from "@modules/dashboard/components";
import { useUiStore } from "@store/index";
import { PaymentInfoModal } from "../components";

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
            status: true
        })

    }

    return (
        <>
            <div className="grow">
                <div className="p-5 space-y-5">
                    <div className="flex flex-row justify-between">

                        <h2 className="mb-5 text-2xl font-bold text-slate-800 dark:text-slate-100 ">
                            Cuentas y formas de pago
                        </h2>

                        <PrimaryButton onClick={add_new} label="Añadir" icon="bx bx-plus" />

                    </div>
                    <section>

                        <NotFoundContent onClick={add_new} enableButton={true} title="Sin información añadida" />

                    </section>

                </div>

            </div>
            <PaymentInfoModal {...paymentInfo_handler_modal} />
        </>
    )
}
