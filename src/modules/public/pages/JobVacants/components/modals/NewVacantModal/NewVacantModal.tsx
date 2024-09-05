

import { FC, useEffect, useState } from "react"
import { BlankModal } from "../../../../../../../core/components";
import { useUiStore } from "../../../../../../../core/store";
import { NewVacant_step1 } from "./NewVacant_step1";
import { NewVacant_step2 } from "./NewVacant_step2";
import { StepCounter } from "./StepCounter";
import { NewVacant_step3 } from "./NewVacant_step3";
import { NewVacant_step4 } from "./NewVacant_step4";
import { Vacant_Values_I, Vacant_Values_Step1_I, Vacant_Values_Step2_I, Vacant_Values_Step3_I, Vacant_Values_Step4_I } from "./interfaces";
import { Currency_Enum } from "@tesis-project/dev-globals/dist/core/interfaces";
import { Vacant_Housing_Enum, Vacant_I, Vacant_Transport_Enum } from "@tesis-project/dev-globals/dist/modules/business/vacants/interfaces";


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

export interface NewVacantModal_Modal_Props_I {
    status: boolean;
    vacant_id?: string;
}

export const NewVacantModal: FC<NewVacantModal_Modal_Props_I> = ({
    status = false,
    vacant_id = ''
}) => {

    const {
        emit_handle_vacantModal
    } = useUiStore();

    const [stepCounter, setstepCounter] = useState(0);
    const [totalSteps, setTotalSteps] = useState(3);

    const [VacantData, setVacantData] = useState<Partial<Vacant_I>>({
        ...vacant_data_default
    })

    const [isMounted, setisMounted] = useState(false);

    const [valuesModal, setvaluesModal] = useState<Vacant_Values_I>({
        title: '',
        desc: '',
        state: '',
        city: '',
        direction: '',
        role_desc: '',
        role_type: [],

        control_service: [],
        transport_desc: '',
        transport_type: [],
        housing_desc: '',
        housing_type: [],
        costs_desc: '',
        costs_currency: [],
        costs_mount: 0,

        payment_amount: 0,
        vacant_date: '',
        payment_currency: [],
        specific_conditions: ''

    })

    const set_data = () => {
        // return
        const aux_valuesModal = valuesModal;
        const aux_step_1: Vacant_Values_Step1_I = {...aux_valuesModal} as Vacant_Values_Step1_I;
        const aux_step_2: Vacant_Values_Step2_I = {...aux_valuesModal} as Vacant_Values_Step2_I;
        const aux_step_3: Vacant_Values_Step3_I = {...aux_valuesModal} as Vacant_Values_Step3_I;
        const aux_step_4: Vacant_Values_Step4_I = {...aux_valuesModal} as Vacant_Values_Step4_I;

        setVacantData((x) => ({
            ...x,
            title: aux_step_1.title,
            desc: aux_step_1.desc,
            direction: {
                city: aux_step_1.city,
                state: aux_step_1.state,
                address: aux_step_1.direction
            },
            })
        );

        console.log('VacantData', VacantData);


    }

    const set_next = (values: any) => {

        switch (stepCounter) {
            case 0:
                const _values_1: Vacant_Values_Step1_I = values as Vacant_Values_Step1_I;
                setvaluesModal((x) => ({ ...x!, ..._values_1 }));
                break;

            case 1:
                const _values_2: Vacant_Values_Step2_I = values as Vacant_Values_Step2_I;
                setvaluesModal((x) => ({ ...x!, ..._values_2 }));
                break;

            case 2:
                const _values_3: Vacant_Values_Step3_I = values as Vacant_Values_Step3_I;
                setvaluesModal((x) => ({ ...x!, ..._values_3 }));
                break;

            case 3:
                const _values_4: Vacant_Values_Step4_I = values as Vacant_Values_Step4_I;
                setvaluesModal((x) => ({ ...x!, ..._values_4 }));
                break;

        }

        set_data();

        if(stepCounter < totalSteps) return setstepCounter((x) => x = x + 1);



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
                                />
                            </div>

                        </div>
                    </BlankModal>
                )
            }
        </>
    )
}



