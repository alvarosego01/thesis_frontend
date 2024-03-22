import { useFormInitData } from '@hooks/index';
import { LayoutRow_I } from '../../../../../core/components/forms/interfaces';
import { Form, FormikProvider, useFormik } from 'formik';
import { FormLayoutBuilder, PrimaryButton } from '../../../../../core/components';
import { estadosVenezuela } from '../../../../../core/constants/Countries';
import { FC } from 'react';

const formData: LayoutRow_I[] = [
    {
        fields: [
            {
                typeField: 'text',
                props: {
                    label: 'Nombre o razón social',
                    name: 'social_reason',
                    type: 'text',
                    parent_class: 'pcTab:!mb-s_15   '
                    // validation_rules: [
                    //     {
                    //         type: "required",
                    //         message: "El nombre es requerido"
                    //     },
                    //     {
                    //         type: "minLength",
                    //         value: 3,
                    //         message: "El nombre debe tener al menos 3 caracteres"
                    //     }
                    // ]
                }
            },
            {
                typeField: 'text',
                props: {
                    label: 'RIF',
                    name: 'rif',
                    type: 'text',
                    parent_class: 'pcTab:!mb-s_15   '
                }
            },
            {
                typeField: 'text',
                props: {
                    label: 'Código postal',
                    name: 'postal_code',
                    type: 'text',
                }
            },
            {
                typeField: 'text',
                props: {
                    label: 'Teléfono',
                    name: 'phone',
                    type: 'tel',
                    validation_rules: [
                        {
                            type: "tel",
                            message: "El teléfono no es válido"
                        }
                    ]
                }
            },

        ],
        grid_columns: 'grid-cols-1 pcTab:grid-cols-2'
    },
     {
        fields: [
            {
                typeField: 'text',
                props: {
                    label: 'Dirección',
                    name: 'address',
                    type: 'text',
                    validation_rules: [
                        {
                            type: "minLength",
                            value: 5,
                            message: "La dirección debe tener al menos 3 caracteres"
                        }
                    ]

                }
            },
            {
                typeField: 'text',
                props: {
                    label: 'Ciudad',
                    name: 'city',
                    type: 'text',
                    validation_rules: [
                        {
                            type: "minLength",
                            value: 5,
                            message: "La ciudad debe tener al menos 3 caracteres"
                        }
                    ]
                }
            },
            {
                typeField: 'select',
                props: {
                    label: 'Estado',
                    name: 'state',
                    items: estadosVenezuela.map((estado) => ({ value: estado, label: estado }))
                }
            }
        ],
        grid_columns: 'grid-cols-1 pcTab:grid-cols-3 lg:grid-cols-3'
    }
]

interface Init_valuesData_I {
    address?: string;
    city?: string;
    phone?: string;
    postal_code?: string;
    rif?: string;
    social_reason?: string;
    state?: string;
}

export const PersonalConditionsPage: FC = () => {

    const Init_Values: Init_valuesData_I = {
        address: '',
        city: '',
        phone: '',
        postal_code: '',
        rif: '',
        social_reason: '',
        state: '',
    }

    const { initialValues, validation_rules } = useFormInitData<Init_valuesData_I>(formData, Init_Values);

    const formik = useFormik({
        initialValues: initialValues,
        onSubmit: (values) => {
            console.log('values', values);
        },
        validationSchema: validation_rules
    });

    const {
        values,
        errors,
        submitForm
    } = formik;

    return (

        <div className="grow">

            <div className="p-5 space-y-5">

                <h2 className="mb-5 text-2xl font-bold text-slate-800 dark:text-slate-100 ">
                    Información de condiciones personales
                </h2>

                <section>
                    {/* <h2 className="mb-1 text-xl font-bold leading-snug text-slate-800 dark:text-slate-100">
                        Datos de usuario
                    </h2>
                    <div className="text-sm mb-s_25">
                        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sed neque aut et cumque, labo
                    </div> */}

                    <FormikProvider value={formik}>
                        <Form noValidate>
                            <FormLayoutBuilder rows={formData} />
                        </Form>
                    </FormikProvider>


                </section>

            </div>

            <footer>
                <div className="flex flex-col px-6 py-5 border-t border-slate-200 dark:border-slate-700">
                    <div className="flex self-end">
                        <PrimaryButton onClick={submitForm} label="Guardar" />
                    </div>
                </div>
            </footer>

        </div>

    )
}
