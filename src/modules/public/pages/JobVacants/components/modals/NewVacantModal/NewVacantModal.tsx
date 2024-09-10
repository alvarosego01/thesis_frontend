

import { FC, useEffect, useState } from "react"
import { BlankModal } from "../../../../../../../core/components";
import { useUiStore } from "../../../../../../../core/store";
import { NewVacant_step1 } from "./NewVacant_step1";
import { NewVacant_step2 } from "./NewVacant_step2";
import { StepCounter } from "./StepCounter";
import { NewVacant_step3 } from "./NewVacant_step3";
import { NewVacant_step4 } from "./NewVacant_step4";
import { ServicesIncludes_Enum, Vacant_Values_I, Vacant_Values_Step1_I, Vacant_Values_Step2_I, Vacant_Values_Step3_I, Vacant_Values_Step4_I } from "./interfaces";
import { Currency_Enum } from "@tesis-project/dev-globals/dist/core/interfaces";
import { Vacant_Housing_Enum, Vacant_I, Vacant_Transport_Enum } from "@tesis-project/dev-globals/dist/modules/business/vacants/interfaces";
import { useVacantPageStore } from "../../../../../store";
import { Media_I } from "@tesis-project/dev-globals/dist/modules/media/interfaces";


const vacant_data_default: Partial<Vacant_I> = {
    title: '',
    desc: '',
    operation: {
        end_at: '' as any,
        start_at: '' as any
    },
    role_desc: '',
    role_type: [] as any,
    transport_service: {
        enable: false,
        desc: '',
        type: Vacant_Transport_Enum.LAND
    },
    housing_service: {
        enable: false,
        desc: '',
        type: Vacant_Housing_Enum.HOTEL
    },
    vacant_costs: {
        enable: false,
        desc: '',
        currency: Currency_Enum.USD,
        total: 0
    },
    vacant_payment: {
        currency: Currency_Enum.USD,
        total: 0
    },
    direction: {
        city: '',
        state: '',
        address: ''
    },
    specific_conditions: '',
}

export interface NewVacant_Modal_Props_I {
    status: boolean;
    vacant_id?: string;
    isLoading?: boolean;

    emit_createVacant?: (data: Vacant_I) => void;
}



let VacantData: Partial<Vacant_I> = structuredClone(vacant_data_default);
let valuesModal: Partial<Vacant_Values_I> = {
    vacant_pic: null as any,
    title: '',
    desc: '',
    state: '',
    city: '',
    direction: '',
    role_desc: '',
    role_type: [],

    control_service: [],
    transport_desc: '',
    transport_type: {
        value: Vacant_Transport_Enum.LAND,
        label: 'Terrestre'
    },
    housing_desc: '',
    housing_type: {
        value: Vacant_Housing_Enum.HOTEL,
        label: 'Hotel'
    },
    costs_desc: '',
    costs_currency: {
        value: Currency_Enum.USD,
        label: 'USD'
    },
    costs_mount: 0,

    payment_amount: 0,
    vacant_date: '',
    payment_currency: {
        label: 'USD',
        value: Currency_Enum.USD
    },
    specific_conditions: ''

}

export const NewVacantModal: FC<NewVacant_Modal_Props_I> = ({
    status = false,
    vacant_id = '',
    isLoading = false,
    emit_createVacant
}) => {

    const {
        emit_handle_vacantModal
    } = useUiStore();

    const [isMounted, setisMounted] = useState(false);

    const [stepCounter, setstepCounter] = useState(0);
    const [totalSteps, setTotalSteps] = useState(3);



    const set_data = () => {

        const aux_valuesModal = structuredClone(valuesModal);
        const aux_step_1: Vacant_Values_Step1_I = { ...aux_valuesModal } as Vacant_Values_Step1_I;
        const aux_step_2: Vacant_Values_Step2_I = { ...aux_valuesModal } as Vacant_Values_Step2_I;
        const aux_step_3: Vacant_Values_Step3_I = { ...aux_valuesModal } as Vacant_Values_Step3_I;
        const aux_step_4: Vacant_Values_Step4_I = { ...aux_valuesModal } as Vacant_Values_Step4_I;

        let aux_services: ServicesIncludes_Enum[] = [];
        if (aux_step_3.control_service.length > 0) aux_services = aux_step_3.control_service.map(r => r.value);

        let operation_date: Vacant_I['operation'] = {
            start_at: new Date(),
            end_at: new Date(),
        }

        if(aux_step_4.vacant_date) {

            if(aux_step_4.vacant_date.includes(',')) {
                const aux_dates = aux_step_4.vacant_date.split(',');
                operation_date = {
                    start_at: new Date(aux_dates[0]),
                    end_at: new Date(aux_dates[1])
                }
            } else {
                operation_date = {
                    start_at: new Date(aux_step_4.vacant_date),
                    end_at: new Date(aux_step_4.vacant_date)
                }
            }

        }

        VacantData = {
            vacant_pic: aux_step_1?.vacant_pic || null as any,
            title: aux_step_1.title,
            desc: aux_step_1.desc,
            direction: {
                city: aux_step_1.city,
                state: aux_step_1.state,
                address: aux_step_1.direction
            },

            role_desc: aux_step_2.role_desc,
            role_type: aux_step_2.role_type.map(r => r.value),

            transport_service: {
                enable: aux_services.includes(ServicesIncludes_Enum.TRANSPORT),
                desc: aux_step_3.transport_desc,
                type: aux_step_3.transport_type.value || Vacant_Transport_Enum.LAND
            },
            housing_service: {
                enable: aux_services.includes(ServicesIncludes_Enum.HOUSING),
                desc: aux_step_3.housing_desc,
                type: aux_step_3.housing_type.value || Vacant_Housing_Enum.HOTEL
            },
            vacant_costs: {
                enable: aux_services.includes(ServicesIncludes_Enum.COSTS),
                desc: aux_step_3.costs_desc,
                currency: aux_step_3.costs_currency.value || Currency_Enum.USD,
                total: aux_step_3.costs_mount || 0
            },

            vacant_payment: {
                currency: aux_step_4.payment_currency.value || Currency_Enum.USD,
                total: aux_step_4.payment_amount
            },
            specific_conditions: aux_step_4.specific_conditions,
            operation: operation_date

        }

    }

    const set_next = (values: any) => {

        switch (stepCounter)
         {
            case 0:
                valuesModal.title = values.title;
                    valuesModal.desc = values.desc;
                    valuesModal.city = values.city;
                    valuesModal.state = values.state;
                    valuesModal.direction = values.direction;
                    valuesModal.vacant_pic = values.vacant_pic;
                break;
            case 1:
                valuesModal.role_desc = values.role_desc,
                    valuesModal.role_type = [...values.role_type]
                break;
            case 2:
                valuesModal.control_service = [...values.control_service],
                    valuesModal.transport_desc = values.transport_desc,
                    valuesModal.transport_type = values.transport_type,
                    valuesModal.housing_desc = values.housing_desc,
                    valuesModal.housing_type = values.housing_type,
                    valuesModal.costs_desc = values.costs_desc,
                    valuesModal.costs_currency = values.costs_currency,
                    valuesModal.costs_mount = values.costs_mount
                break;
            case 3:
                    valuesModal.payment_amount = values.payment_amount;
                    valuesModal.vacant_date = values.vacant_date;
                    valuesModal.payment_currency = values.payment_currency;
                    valuesModal.specific_conditions = values.specific_conditions;
                break;

        }

        set_data();

        if (stepCounter < totalSteps) return setstepCounter((x) => x = x + 1);

        emit_data();

    }

    const emit_data = () => {

        emit_createVacant && emit_createVacant(VacantData as Vacant_I);

    }

    const set_back = () => {

        setstepCounter((x) => x = x - 1);

    }

    const set_step_visible = (step: number): string => {

        if (stepCounter === step) return '';

        return 'hidden';

    }

    const closeModal = () => {
        emit_handle_vacantModal({
            status: false,
            vacant_id: ''
        })
    };

    useEffect(() => {

        if (isMounted === false) return;

        status && setstepCounter(0);

    }, [status]);

    useEffect(() => {
        setisMounted(true);
    }, []);

    return (
        <>
            {
                status && (
                    <BlankModal onClose={closeModal} status={status} size="big"  >

                        <div className="space-y-8">

                            <div className="flex flex-row items-center pb-3 mb-6 space-x-4 border-b border-gray-200 ">

                                <div className="">
                                    <div className="inline-flex items-center justify-center w-10 h-10 mb-0 rounded-full bg-gradient-to-t from-slate-200 to-slate-100 dark:from-slate-700 dark:to-slate-800">
                                        <i className={`bx bx-edit text-25p`}></i>
                                    </div>
                                </div>

                                <div className="text-lg font-semibold text-slate-800 dark:text-slate-100">
                                    Creación de vacante
                                </div>

                            </div>

                            <StepCounter total={totalSteps + 1} step={stepCounter} />

                            <div

                                className={`w-11/12 mx-auto ${set_step_visible(0)}`}>
                                <NewVacant_step1
                                    emit_next={(v) => { set_next(v) }}
                                />
                            </div>


                            <div className={`w-11/12 mx-auto ${set_step_visible(1)}`}>
                                <NewVacant_step2
                                    emit_next={(v) => { set_next(v) }}
                                    emit_back={set_back}
                                />
                            </div>

                            <div className={`w-11/12 mx-auto ${set_step_visible(2)}`}>
                                <NewVacant_step3
                                    emit_next={(v) => { set_next(v) }}
                                    emit_back={set_back}
                                />
                            </div>
                            <div className={`w-11/12 mx-auto ${set_step_visible(3)}`}>
                                <NewVacant_step4
                                    emit_next={(v) => { set_next(v) }}
                                    emit_back={set_back}
                                    isLoading={isLoading}
                                />
                            </div>

                        </div>
                    </BlankModal>
                )
            }
        </>
    )
}



