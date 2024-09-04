

import { FC, useEffect, useState } from "react"
import { BlankModal } from "../../../../../../../core/components";
import { useUiStore } from "../../../../../../../core/store";
import { NewVacant_step1 } from "./NewVacant_step1";
import { NewVacant_step2 } from "./NewVacant_step2";
import { StepCounter } from "./StepCounter";
import { NewVacant_step3 } from "./NewVacant_step3";
import { NewVacant_step4 } from "./NewVacant_step4";
import { Vacant_Values_I, Vacant_Values_Step1_I, Vacant_Values_Step2_I, Vacant_Values_Step3_I } from "./interfaces";


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

    const [stepCounter, setstepCounter] = useState(3)

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
        costs_mount: 0

    })

    const set_next = (values: any) => {

        console.log('sale', values);

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



        }

        // setstepCounter((x) => x = x + 1);

        console.log('fuera', valuesModal);

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

                            <StepCounter total={4} step={stepCounter} />

                            <div

                                className={`w-10/12 mx-auto ${set_step_visible(0)}`}>
                                <NewVacant_step1
                                    emit_next={(v) => { set_next(v) }}
                                />
                            </div>


                            <div className={`w-10/12 mx-auto ${set_step_visible(1)}`}>
                                <NewVacant_step2
                                    emit_next={(v) => { set_next(v) }}
                                    emit_back={set_back}
                                />
                            </div>

                            <div className={`w-10/12 mx-auto ${set_step_visible(2)}`}>
                                <NewVacant_step3
                                    emit_next={(v) => { set_next(v) }}
                                    emit_back={set_back}
                                />
                            </div>
                            <div className={`w-10/12 mx-auto ${set_step_visible(3)}`}>
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



