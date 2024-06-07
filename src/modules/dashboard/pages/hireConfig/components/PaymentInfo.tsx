import { FC } from "react"
import { Payment_Account_I } from "@models/index"
import { transformBankName_P, transformTypePay_P } from "@pipes/index"
import { Button_ListDoActions, InfoList, InfoList_Props_I, List_I } from "@components/index";
import { useUiStore } from "../../../../../core/store";

type optionAction_Type =
    | 'edit'
    | 'delete'

const Button_ListDoActions_items: List_I<optionAction_Type>[] = [
    {
        title: 'Editar',
        type: 'secondary',
        action: {
            type: 'function',
            action: 'edit'
        }
    },
    {
        title: 'Eliminar',
        type: 'danger',
        action: {
            type: 'function',
            action: 'delete'
        },
        line: {
            top: true,
        }
    }
]

export const PaymentInfo: FC<Payment_Account_I> = ({
    ...props
}) => {

      const {
        // state: {
        //     modals: {
        //         dashboard: {
        //             paymentInfo_handler_modal
        //         }
        //     }
        // },
        handle_paymentInfoModal
    } = useUiStore();

     const items_content: InfoList_Props_I[] = [
            {
                label: "Titular",
                contain: props.titular,
                line: {
                    bottom: true
                }
            },
            {
                label: "Cédula",
                contain: props.person_id,
                line: {
                    bottom: true
                }
            },
        ];
        if (props.type === 'bank_account') {
            items_content.push({
                label: "Número de cuenta",
                contain: props.number,
            })
        }
        if (props.type === 'mobile_payment') {
            items_content.push({
                label: "Número de teléfono",
                contain: props.phone,
            })
        }

    const get_optionsAction = (action: optionAction_Type) => {

        switch (action) {
            case 'edit':
                handle_paymentInfoModal({
                    status: true,
                    type: 'new',
                    data: props
                });
                break;
            case 'delete':
                console.log('delete')
                break;
            default:
                break;

        }

    }

    return (
        <div className="w-full bg-white border rounded-sm shadow-lg dark:bg-slate-800 border-slate-200 dark:border-slate-700">
            <div className="flex flex-col h-full">
                <div className="p-5 space-y-5 grow">
                    <div className="flex items-start justify-between">
                        <header>
                            <div className="flex space-x-3">

                                <div
                                    className="flex items-center justify-center p-3 text-indigo-400 bg-gray-100 icon rounded-rd_5 trans ">
                                    {
                                        (props.type === 'bank_account') && (
                                            <i className='text-2xl bx bxs-bank'></i>
                                        )
                                    }
                                    {
                                        (props.type === 'mobile_payment') && (
                                            <i className='text-2xl bx bx-mobile-alt' ></i>
                                        )
                                    }
                                </div>

                                <div className="flex flex-col justify-center space-y-1">
                                    <div className="inline-flex text-slate-800 dark:text-slate-100 hover:text-slate-900 dark:hover:text-white" >
                                        <h2 className="justify-center text-lg font-semibold leading-normal ">
                                            {transformBankName_P(props.bank_name)}
                                        </h2>
                                    </div>
                                    <div className="flex items-center">
                                        <span className="text-xs leading-normal">
                                            {transformTypePay_P(props.type)} - {props.date}
                                        </span>
                                    </div>
                                </div>
                            </div>
                        </header>
                        <Button_ListDoActions onClick={(action) =>  get_optionsAction(action) } options={Button_ListDoActions_items} />

                    </div>
                    <div className=" content">
                        {
                            items_content.map((item, index) => {
                                return (
                                    <InfoList key={`payment_info_${index}`} {...item} />
                                )
                            })
                        }
                    </div>
                </div>

            </div>
        </div>
    )
}
