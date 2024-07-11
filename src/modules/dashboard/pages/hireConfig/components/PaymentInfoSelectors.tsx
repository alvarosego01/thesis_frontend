
import { FC, useEffect } from "react"
import { Form, FormikProvider, useFormik } from "formik";

import { useFormInitData } from '@hooks/index';
import { FormLayoutBuilder, PrimaryButton, TextInputField } from "@components/index";
import { Banks_List, Payments_Type_List } from "@constants/Banks"
import { LayoutRow_I, SelectValue_I } from "@components/forms/interfaces"
import { Banks_Enum, Payment_Account_I, Payment_Type_Enum } from "@tesis-project/dev-globals/dist/modules/user/interfaces";
import { signal } from '@preact/signals-react';

const formData: LayoutRow_I[] = [
    {
        fields: [
            {
                typeField: 'select_special',
                props: {
                    label: 'Tipo de pago',
                    name: 'type',
                    type: 'select',
                    parent_class: '',
                    isMulti: false,
                    items: Payments_Type_List.map(item => ({ value: item.value, label: item.label })),
                    value: [],
                    placeholder: 'Selecciona tipo de pago',
                    validation_rules: [
                        {
                            type: "select_single_required",
                            message: "El tipo de pago es requerido"
                        },
                    ]

                }
            },
            {
                typeField: 'select_special',
                props: {
                    label: 'Banco',
                    name: 'bank_name',
                    parent_class: '',
                    type: 'select',
                    isMulti: false,
                    items: Banks_List.map(item => ({ value: item.value, label: item.label })),
                    value: [],
                    placeholder: 'Selecciona tu banco',
                    validation_rules: [
                        {
                            type: "select_single_required",
                            message: "El banco es requerido"
                        },
                    ]
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
                            type: "required",
                            message: "El número de cuenta es requerido"
                        },
                        {
                            type: "conditional_required",
                            message: "El número de cuenta es requerido",
                            conditional: {
                                key: 'type.value',
                                is: Payment_Type_Enum.BANK_ACCOUNT,
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
                                is: Payment_Type_Enum.MOBILE_PAYMENT,
                            }
                        },
                        {
                            type: "tel",
                            message: "El teléfono no es válido, debe iniciar con +58"
                        }
                    ]
                }
            },

        ],
        grid_columns: 'grid-cols-1'
    },
];

interface Init_valuesData_I {
    type: SelectValue_I<Payment_Type_Enum>;
    bank_name: SelectValue_I<Banks_Enum>;
    titular: string;
    person_id: string;
    phone?: string;
    number?: string;
    // date: string;
}

interface PaymentInfoSelectors_Props_I {
    data?: Payment_Account_I
};

export const PaymentInfoSelectors: FC<PaymentInfoSelectors_Props_I> = ({
    data
}) => {

    let Init_Values = signal<Init_valuesData_I>({
        type: {} as SelectValue_I<Payment_Type_Enum>,
        bank_name: {} as SelectValue_I<Banks_Enum>,
        titular: '',
        person_id: '',
        number: '',
        phone: '',
        // date: '',
    })

    if (data) {
        Init_Values.value = {
            ...Init_Values.value,
            titular: data.titular,
            person_id: data.person_id,
            number: data.number,
            phone: data.phone,
        }
        Init_Values.value.type = Payments_Type_List.find(r => r.value === data.type) as SelectValue_I<Payment_Type_Enum> || {};
        Init_Values.value.bank_name = Banks_List.find(r => r.value === data.bank_name) as SelectValue_I<Banks_Enum> || {};
    }

    const { initialValues, validation_rules } = useFormInitData<Init_valuesData_I>(formData, Init_Values.value);

    const formik = useFormik({
        initialValues: initialValues,
        onSubmit: (values) => {
        },
        validationSchema: validation_rules
    });

    const {
        values,
        submitForm,
        isValid,
        errors
    } = formik;

    useEffect(() => {

        console.log('values', { ...values });
        console.log('errors', { ...errors });

    }, [values]);


    return (
        <div className="px-5 py-2">
            <FormikProvider value={formik}>
                <Form noValidate>

                    <section className="py-5">

                        <h3 className="mb-1 font-bold leading-snug text-md text-slate-800 dark:text-slate-100">
                            Datos de cuenta
                        </h3>
                        <div className="mb-5 text-xs">
                            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sed neque aut et cumque, labo
                        </div>

                        <FormLayoutBuilder rows={[
                            formData[0],
                            formData[1]
                        ]} />
                        {
                            values.type.value && (
                                <div className="grid grid-cols-1 pcTab:mt-4">
                                    {
                                        values.type.value === Payment_Type_Enum.BANK_ACCOUNT && (
                                            <TextInputField {...formData[2].fields[0].props} />
                                        )
                                    }
                                    {
                                        values.type.value === Payment_Type_Enum.MOBILE_PAYMENT && (
                                            <TextInputField {...formData[2].fields[1].props} />
                                        )
                                    }
                                </div>
                            )
                        }

                    </section>

                    <div className="flex flex-row justify-end py-5 space-x-4 border-t border-slate-200">
                        <PrimaryButton disabled={!isValid} label='Guardar' onClick={() => submitForm()} />
                    </div>

                </Form>
            </FormikProvider>
        </div>
    )
}
