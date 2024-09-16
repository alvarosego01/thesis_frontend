import { Form, FormikProvider, useFormik } from "formik";
import { FC, useEffect, useState } from "react";
import { BlankModal, FormLayoutBuilder, PrimaryButton, SecondaryButton } from "../../../../../core/components";
import { useUiStore } from "../../../../../core/store";
import { useVacantPageStore } from "../../../store";
import { LayoutRow_I, SelectValue_I } from "../../../../../core/components/forms/interfaces";
import { useFormInitData } from "../../../../../core/hooks";
import { Vacant_Postulation_Status_Enum } from "@tesis-project/dev-globals/dist/modules/business/vacants/interfaces";


// Vacant_Postulation_Status_Enum

export interface EvaluatePostulation_Modal_Props_I {
    status: boolean;
    vacant_id: string;
    postulation_id: string;
    isLoading?: boolean;
}

const postulationStatus: SelectValue_I<Vacant_Postulation_Status_Enum>[] = [
    {
        label: 'Aceptar',
        value: Vacant_Postulation_Status_Enum.ACCEPTED
    },
    {
        label: 'En espera',
        value: Vacant_Postulation_Status_Enum.ON_HOLD
    },
    {
        label: 'Rechazar',
        value: Vacant_Postulation_Status_Enum.REFUSED
    },
    // {
        // label: 'Rechazar',
        // value: Vacant_Postulation_Status_Enum.
    // },

];


const formData: LayoutRow_I[] = [
    {
        fields: [
            {
                typeField: "textarea",
                props: {
                    label: "Mensaje de respuesta",
                    name: "owner_comment",
                    type: "text",
                    placeholder: "Escribe algo sobre la postulación..."
                }
            },
               {
                typeField: 'select',
                props: {
                    label: 'Decisión',
                    name: 'status',
                    items: postulationStatus.map((item) => ({ value: item.value, label: item.label })),
                    placeholder: 'Selecciona una decisión',
                    validation_rules: [
                        {
                            type: "required",
                            message: "La decision es requerida"
                        },
                    ]
                }
            },

        ],
        grid_columns: "grid-cols-1"
    },

]

interface FormValues_I {
    owner_comment?: string;
    status: Vacant_Postulation_Status_Enum;
}

export const EvaluatePostulationModal: FC<EvaluatePostulation_Modal_Props_I> = ({
        status,
        vacant_id,
        postulation_id,
        isLoading,
    }) => {

    const {
        emit_handle_postulationVacantModal,
        emit_handleEvaluatePostulationModal
    } = useUiStore();

    const {
        emit_createPostulation,
        emit_evaluatePostulation
    } = useVacantPageStore();

    const [isMounted, setisMounted] = useState(false);

        const { initialValues, validation_rules } = useFormInitData<FormValues_I>(formData);

    const formik = useFormik({
        initialValues: initialValues,
        onSubmit: (values) => {

            console.log('values', values);
            emit_evaluatePostulation(vacant_id, postulation_id, values.status, values.owner_comment);

        },
        validationSchema: validation_rules
    });

    const {
        submitForm,
        setValues
    } = formik;

    const closeModal = () => {
        emit_handleEvaluatePostulationModal({
        status: false,
        vacant_id: '',
        postulation_id: ''
        })
    };

    useEffect(() => {

        if (isMounted === false) return;

    }, [status]);

    useEffect(() => {
        setisMounted(true);
    }, []);

    return (
        <>
            {
                status && (
                    <BlankModal onClose={closeModal} status={status}   >

                        <div className="space-y-8">

                            <div className="flex flex-row items-center pb-3 mb-6 space-x-4 border-b border-gray-200 ">
                                <div className="">
                                    <div className="inline-flex items-center justify-center w-10 h-10 mb-0 rounded-full bg-gradient-to-t from-slate-200 to-slate-100 dark:from-slate-700 dark:to-slate-800">
                                        <i className={`bx bx-edit text-25p`}></i>
                                    </div>
                                </div>

                                <div className="text-lg font-semibold text-slate-800 dark:text-slate-100">
                                    Evaluar postulación
                                </div>
                            </div>


                            <FormikProvider value={formik}>
                                <Form noValidate>
                                    <FormLayoutBuilder rows={formData} />
                                </Form>
                            </FormikProvider>


                            <div className="flex flex-col w-full pb-0 mx-auto ">
                                <div className="flex self-end space-x-2">
                                    <SecondaryButton onClick={closeModal} isLoading={isLoading} label="Cancelar" />
                                    <PrimaryButton onClick={submitForm} isLoading={isLoading} label="Enviar" />
                                </div>
                            </div>


                        </div>

                    </BlankModal>
                )
            }
        </>
    )
}