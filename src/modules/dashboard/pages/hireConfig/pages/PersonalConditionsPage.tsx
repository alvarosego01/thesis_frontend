import { useFormInitData } from '@hooks/index';
import { LayoutRow_I } from '../../../../../core/components/forms/interfaces';
import { Form, FormikProvider, useFormik } from 'formik';
import { FormLayoutBuilder, PrimaryButton } from '../../../../../core/components';
import { estadosVenezuela } from '../../../../../core/constants/Countries';
import { FC, useEffect, useState } from 'react';
import { useHiringDataStore } from '../../../store/hooks/hiring_data/useHiringDataStore';


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
                            message: "El teléfono no es válido, debe iniciar con +58"
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
                    // validation_rules: [
                    //     {
                    //         type: "minLength",
                    //         value: 5,
                    //         message: "La dirección debe tener al menos 3 caracteres"
                    //     }
                    // ]

                }
            },
            {
                typeField: 'text',
                props: {
                    label: 'Ciudad',
                    name: 'city',
                    type: 'text',
                    // validation_rules: [
                    //     {
                    //         type: "minLength",
                    //         value: 5,
                    //         message: "La ciudad debe tener al menos 3 caracteres"
                    //     }
                    // ]
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

    const {
        state: {
            onLoading,
            hiring_data: {
                personal
            },
            hiring_data
        },
        emit_save_user_hiringData_personal
    } = useHiringDataStore();

    const [isMounted, setisMounted] = useState(false)

    let initValues: Init_valuesData_I = {
        address: personal?.address || '',
        city: personal?.city || '',
        phone: personal?.phone || '',
        postal_code: personal?.postal_code || '',
        rif: personal?.rif || '',
        social_reason: personal?.social_reason || '',
        state: personal?.state || '',
    };

    useEffect(() => {

        if(isMounted === false) return;

        if (personal) {

            initValues = {
                address: personal?.address || '',
                city: personal?.city || '',
                phone: personal?.phone || '',
                postal_code: personal?.postal_code || '',
                rif: personal?.rif || '',
                social_reason: personal?.social_reason || '',
                state: personal?.state || '',
            };
            setValues({
                ...initValues
            });
        }
    }, [personal]);

    const { initialValues, validation_rules } = useFormInitData<Init_valuesData_I>(formData, initValues);

    const formik = useFormik({
        initialValues: initialValues,
        onSubmit: (values) => {

            emit_save_user_hiringData_personal(hiring_data._id, {
                ...values
            })

        },
        validationSchema: validation_rules
    });

    const {
        values,
        errors,
        submitForm,
        setValues
    } = formik;

    useEffect(() => {
        setisMounted(true);
    }, []);

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
                        <PrimaryButton onClick={submitForm} isLoading={onLoading} label="Guardar" />
                    </div>
                </div>
            </footer>

        </div>

    )
}
