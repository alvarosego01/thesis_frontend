

import { FC } from 'react'
import { Form, FormikProvider, useFormik } from 'formik';

import { LayoutRow_I } from '@components/forms/interfaces'
import { useFormInitData } from '@hooks/index';
import { FormLayoutBuilder } from '@components/index';


const formData: LayoutRow_I[] = [
    {
        fields: [
            {
                typeField: 'checkbox',
                props: {
                    label: 'En espera',
                    name: 'status_active_proposal',
                    type: 'checkbox',
                }
            },
            {
                typeField: 'checkbox',
                props: {
                    label: 'Firmado',
                    name: 'status_signed',
                    type: 'checkbox',
                }
            },
            {
                typeField: 'checkbox',
                props: {
                    label: 'En progreso',
                    name: 'status_in_progress',
                    type: 'checkbox',
                }
            },
            {
                typeField: 'checkbox',
                props: {
                    label: 'Cancelado',
                    name: 'status_cancelled',
                    type: 'checkbox',
                }
            },
            {
                typeField: 'checkbox',
                props: {
                    label: 'Rechazado',
                    name: 'status_refused',
                    type: 'checkbox',
                }
            },
            {
                typeField: 'checkbox',
                props: {
                    label: 'Finalizado',
                    name: 'status_finalized',
                    type: 'checkbox',
                }
            },

        ],
        grid_columns: 'grid-cols-1 space-y-1'

    }

];

interface Init_valuesData_I {
    status_active_proposal?: boolean;
    status_signed?: boolean;
    status_in_progress?: boolean;
    status_cancelled?: boolean;
    status_refused?: boolean;
    status_finalized?: boolean;
}

export const SidebarSelector: FC = () => {

    const Init_Values: Init_valuesData_I = {
        status_active_proposal: false,
        status_signed: false,
        status_in_progress: false,
        status_cancelled: false,
        status_refused: false,
        status_finalized: false,
    }

    const { initialValues, validation_rules } = useFormInitData<Init_valuesData_I>(formData, Init_Values);

    const formik = useFormik({
        initialValues: initialValues,
        onSubmit: (values) => {
        },
        validationSchema: validation_rules
    });

    const {
        values,
        errors,
        submitForm,
        setErrors,
        isValid,
    } = formik;


    return (

        <div className="space-y-8">

            <div className="p-5 bg-white border rounded-sm shadow-lg dark:bg-slate-800 border-slate-200 dark:border-slate-700 min-w-60">
                <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-1">
                    {/* Group 1 */}
                    <div>
                        <div className="mb-3 text-sm font-semibold text-slate-800 dark:text-slate-100">
                            Tipos de contrato
                        </div>

                        <FormikProvider value={formik}>
                            <Form noValidate className="w-full">
                                <FormLayoutBuilder rows={formData} />
                            </Form>
                        </FormikProvider>

                    </div>

                </div>
            </div>
        </div>

    )
}
