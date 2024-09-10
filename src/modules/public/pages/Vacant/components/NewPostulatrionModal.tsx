
import { FC, useEffect, useState } from "react";
import { Form, FormikProvider, useFormik } from "formik";

import { BlankModal, FormLayoutBuilder, PrimaryButton } from "../../../../../core/components";
import { useUiStore } from "../../../../../core/store";
import { LayoutRow_I } from "../../../../../core/components/forms/interfaces";
import { useFormInitData } from "../../../../../core/hooks";
import { useVacantPageStore } from "../../../store";

const formData: LayoutRow_I[] = [
    {
        fields: [
            {
                typeField: "textarea",
                props: {
                    label: "Mensaje de postulación",
                    name: "comment",
                    type: "text",
                    placeholder: "Escribe algo sobre ti..."
                    // validation_rules: [
                    //     {
                    //         type: "minLength",
                    //         value: 25,
                    //         message: "El mensaje debe tener al menos 50 caracteres"
                    //     }
                    // ]
                }
            },

        ],
        grid_columns: "grid-cols-1"
    },

]

export interface PostulationVacant_Modal_Props_I {
    status: boolean;
    vacant_id: string;
    isLoading?: boolean;
}

interface FormValues_I {
    comment?: string;
}

export const NewPostulatrionModal: FC<PostulationVacant_Modal_Props_I> = ({
    status,
    vacant_id,
    isLoading,
}) => {

    const {
        emit_handle_postulationVacantModal
    } = useUiStore();

    const {
        emit_createPostulation
    } = useVacantPageStore();

    const [isMounted, setisMounted] = useState(false);

    const { initialValues, validation_rules } = useFormInitData<FormValues_I>([
        ...formData,
    ]);

    const formik = useFormik({
        initialValues: initialValues,
        onSubmit: (values) => {
            send_postulation(values.comment);
        },
        validationSchema: validation_rules
    });

    const {
        submitForm,
        setValues
    } = formik;

    const send_postulation = (message?: string) => {

        emit_createPostulation(vacant_id, message);

    }

    const closeModal = () => {
        emit_handle_postulationVacantModal({
            status: false,
            vacant_id: ''
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
                                    Postulación de vacante
                                </div>
                            </div>

                            <FormikProvider value={formik}>
                                <Form noValidate>
                                    <FormLayoutBuilder rows={formData} />
                                </Form>
                            </FormikProvider>

                            <div className="flex flex-col w-full pb-0 mx-auto ">
                                <div className="flex self-end">
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
