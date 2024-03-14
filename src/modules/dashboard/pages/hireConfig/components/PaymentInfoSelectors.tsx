
import { FC, useEffect } from "react"
import { Form, FormikProvider, useFormik } from "formik";

import { useFormInitData } from '@hooks/index';
import { FormLayoutBuilder, PrimaryButton, TextInputField } from "@components/index";
import { Banks_List, Payments_Type_List } from "@constants/Banks"

import { LayoutRow_I, SelectValue_I, ValidationsRule_Separate_I } from "@components/forms/interfaces"
import { Payment_Type } from "@models/index";
import { get_Validations } from "../../../../../core/functions";

const formData: LayoutRow_I[] = [
    {
        fields: [
            {
                typeField: 'select_special',
                props: {
                    label: 'Tipo de pago',
                    name: 'type',
                    parent_class: '',
                    isMulti: false,
                    items: Payments_Type_List.map(item => ({ value: item.type, label: item.label })),
                    value: [],
                    placeholder: 'Selecciona tipo de pago',

                }
            },
            {
                typeField: 'select_special',
                props: {
                    label: 'Banco',
                    name: 'bank_name',
                    parent_class: '',
                    isMulti: false,
                    items: Banks_List.map(item => ({ value: item.code, label: item.bank })),
                    value: [],
                    placeholder: 'Selecciona tu banco',

                }
            },
        ],
        grid_columns: 'grid-cols-2'
    },
    {
        fields: [
            {
                typeField: 'text',
                props: {
                    label: 'Titular',
                    name: 'titular',
                    type: 'text',
                    validation_rules: [
                        {
                            type: "required",
                            message: "El nombre de titular es requerido"
                        },
                        {
                            type: "minLength",
                            value: 3,
                            message: "El nombre debe tener al menos 3 caracteres"
                        }
                    ]
                }
            },
            {
                typeField: 'text',
                props: {
                    label: 'Cédula o identificación',
                    name: 'person_id',
                    type: 'text',
                    validation_rules: [
                        {
                            type: "required",
                            message: "El campo es requerido"
                        },
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
                    label: 'Número de cuenta',
                    name: 'number',
                    type: 'number',
                    validation_rules: [
                        {
                            type: "conditional_required",
                            message: "El número de cuenta es requerido",
                            conditional: {
                                key: 'type.value',
                                is: 'bank_account',
                            }
                        },
                    ]
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
                            type: "conditional_required",
                            message: "El teléfono es requerido",
                            conditional: {
                                key: 'type.value',
                                is: 'mobile_payment',
                            }
                        },
                    ]
                }
            },

        ],
        grid_columns: 'grid-cols-1'
    },
];



interface Init_valuesData_I {
    type: SelectValue_I<Payment_Type>;
    bank_name: SelectValue_I;
    titular: string;
    person_id: string;
    phone?: string;
    number?: string;
    // date: string;
}

interface PaymentInfoSelectors_Props_I {
};

export const PaymentInfoSelectors: FC<PaymentInfoSelectors_Props_I> = ({
}) => {

    const Init_Values: Init_valuesData_I = {
        type: {} as any,
        bank_name: {} as any,
        titular: '',
        person_id: '',
        number: '',
        phone: '',
        // date: '',
    }

    const { initialValues, validation_rules } = useFormInitData<Init_valuesData_I>(formData, Init_Values);

    const formik = useFormik({
        initialValues: initialValues,
        onSubmit: (values) => {
            console.log('values emit', values);
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

    useEffect(() => {

        // if (values.type.value === 'bank_account') {


        // }

        // if (values.type.value === 'mobile_payment') {

        // }

        console.log('errors', errors);

    }, [errors, values])


    return (
        <div className="px-5 py-2">
            <FormikProvider value={formik}>
                <Form noValidate>

                    <section className="py-5">

                        <h2 className="mb-1 text-xl font-bold leading-snug text-slate-800 dark:text-slate-100">
                            Datos de cuenta
                        </h2>
                        <div className="mb-5 text-sm">
                            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sed neque aut et cumque, labo
                        </div>

                        <FormLayoutBuilder rows={[formData[0], formData[1]]} />

                        <div className="grid grid-cols-1 pcTab:mt-4">

                            {
                                values.type.value === 'bank_account' && (
                                    <TextInputField
                                        {...formData[2].fields[0].props}
                                    />
                                )
                            }
                            {
                                values.type.value === 'mobile_payment' && (
                                    <TextInputField
                                        {...formData[2].fields[1].props}

                                    />
                                )
                            }

                        </div>

                    </section>

                    <div className="flex flex-row justify-end py-5 space-x-4 border-t border-slate-200">

                                <PrimaryButton label='Guardar' onClick={() => submitForm()} />

                        {/* <PrimaryButton label='Aceptar' onClick={() => submitForm()} /> */}
                    </div>

                </Form>
            </FormikProvider>
        </div>
    )
}
