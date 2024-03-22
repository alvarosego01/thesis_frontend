import { FC } from "react"
import { PrimaryButton } from '@components/buttons/PrimaryButton';
import { NotFoundContent } from "@modules/dashboard/components";
import { useUiStore } from "@store/index";
import { PaymentInfo, PaymentInfoModal } from "../components";

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

                    <h2 className="mb-5 text-2xl font-bold text-slate-800 dark:text-slate-100 ">
                        Información de pago y cuentas
                    </h2>

                    {/* <div className="p-5 space-y-5">
                    <div className="flex flex-row justify-between">

                        <h2 className="mb-5 text-2xl font-bold text-slate-800 dark:text-slate-100 ">
                            Cuentas y formas de pago
                        </h2>

                        <PrimaryButton onClick={add_new} label="Añadir" icon="bx bx-plus" />

                    </div>
                    <section>
                        <NotFoundContent onClick={add_new} enableButton={true} title="Sin información de pago añadida" />
                    </section>

                </div> */}

                    <div className="grid grid-cols-12 gap-5 paymentInfo">

                        <div className="col-span-full sm:col-span-6 xl:col-span-4">
                            {/* <PaymentInfo /> */}
                        </div>

                    </div>

                </div>

            </div>

            <PaymentInfoModal {...paymentInfo_handler_modal} />
        </>
    )
}
