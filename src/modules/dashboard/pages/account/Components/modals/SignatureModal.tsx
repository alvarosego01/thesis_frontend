
import { Form, useFormik, FormikProvider } from 'formik';
import { FC } from 'react';

import { BlankModal, FormLayoutBuilder, PrimaryButton } from '@components/index';
import { FieldValue_I, LayoutRow_I } from '@components/forms/interfaces';
import { useFormInitData } from '@hooks/index';
import { useUiStore } from '@store/index';

const formData: LayoutRow_I[] = [
    {
        fields: [
            {
                typeField: 'text',
                props: {
                    label: '',
                    name: 'signature',
                    type: 'text',
                    parent_class: 'w-2/3 mx-auto',
                    validation_rules: [
                        {
                            type: "required",
                            message: "Tu firma es requerida"
                        },
                        {
                            type: "minLength",
                            value: 3,
                            message: "Tu firma debe tener al menos 3 caracteres"
                        }
                    ]
                }
            },

        ],
        grid_columns: 'grid-cols-1'
    }
]

export interface SignatureModal_Props_I {
    status: boolean;
    text: string;
}

export const SignatureModal: FC<SignatureModal_Props_I> = ({
    status,
    text
}) => {

    const init_fieldValues: FieldValue_I = {
        signature: text
    }
    const { initialValues, validation_rules } = useFormInitData(formData, init_fieldValues);

    const formik = useFormik({
        initialValues: initialValues,
        onSubmit: (values) => {
            console.log('values', values);
        },
        validationSchema: validation_rules
    });

    const {
        values,
        submitForm
    } = formik;


    const {
        // state
        handle_signatureModal
    } = useUiStore();

    const closeModal = () => {

            handle_signatureModal({
                status: false,
                text: ''
            })
    }

    return (
        <>
            {
                status && (
                    <BlankModal onClose={closeModal} status={status}  >
                        {/* Modal header */}
                        <div className="mb-2 text-center">
                            {/* Icon */}
                            <div className="mb-3">
                                <div className="inline-flex items-center justify-center w-10 h-10 mb-0 rounded-full bg-gradient-to-t from-slate-200 to-slate-100 dark:from-slate-700 dark:to-slate-800">
                                    <i className={`bx bx-edit text-25p`}></i>
                                </div>
                            </div>
                            <div className="text-lg font-semibold text-slate-800 dark:text-slate-100">
                                Definición de firma
                            </div>
                        </div>
                        {/* Modal content */}
                        <div className="text-center">
                            {
                                values.signature && (
                                    <span className="block text-5xl h-s_50 ml-s_10 my-s_25 font-tuesdaynight">
                                        {values.signature}
                                    </span>
                                )
                            }
                            <FormikProvider value={formik}>
                                <Form noValidate>

                                    <FormLayoutBuilder rows={formData} />

                                    <div className="flex items-center justify-center mt-s_10">
                                        <PrimaryButton onClick={submitForm} label="Guardar" />
                                    </div>
                                </Form>
                            </FormikProvider>

                            <div className="mt-3 text-xs italic text-slate-500">
                                ISemper eget duis at tellus at urna condimentum mattis pellentesque
                            </div>

                        </div>
                    </BlankModal>
                )
            }
        </>
    )
}
