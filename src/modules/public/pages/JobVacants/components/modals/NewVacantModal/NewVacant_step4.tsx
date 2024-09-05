import { Form, FormikProvider, useFormik } from "formik"
import { FC, useEffect, useState } from 'react';
import { LayoutRow_I, SelectValue_I } from "../../../../../../../core/components/forms/interfaces";
import { useFormInitData } from "../../../../../../../core/hooks";
import { FormLayoutBuilder, PrimaryButton, SecondaryButton } from "../../../../../../../core/components";
import { Artist_Enum } from "@tesis-project/dev-globals/dist/modules/profile/interfaces";
import { Currency_Enum } from "@tesis-project/dev-globals/dist/core/interfaces";
import { Vacant_Values_Step4_I } from "./interfaces";

const currency: SelectValue_I<Currency_Enum>[] = [
    {
        label: 'USD',
        value: Currency_Enum.USD
    },
    {
        label: 'Bs',
        value: Currency_Enum.BS
    },
]

const costs_service_form: LayoutRow_I[] = [
    {
        fields: [
            {
                typeField: 'text',
                props: {
                    label: 'Monto',
                    name: 'payment_amount',
                    type: 'number',
                    validation_rules: [
                        {
                            type: "required",
                            message: "Es requerido"
                        }
                    ]
                }
            },

         {
                typeField: 'select',
                props: {
                    label: 'Moneda',
                    name: 'payment_currency',
                   items: currency.map(item => ({ value: item.value, label: item.label })),
                       placeholder: 'Selecciona aquí',
                    validation_rules: [
                        {
                            type: "required",
                     message: "Se requiere especificar"
                        },
                    ]
                }
            },

        ],
        grid_columns: 'grid-cols-2 gap-y-3 w-8/12 mr-auto ml-0'
    },

];



const formData: LayoutRow_I[] = [
    {
        fields: [
            {
                typeField: 'date_picker',
                props: {
                    label: 'Fecha(as) de vacante',
                    name: 'vacant_date',
                    placeholder: 'Selecciona aquí',
                    range: true,
                    validation_rules: [
                        {
                            type: "required",
                            message: "La fecha es requerida"
                        }
                    ]
                }
            },
        ]
    },
    ...costs_service_form,
    {
        fields: [
            {
                typeField: 'textarea',
                props: {
                    label: 'Condiciones especificas adicionales',
                    name: 'specific_conditions',
                    type: 'text',
                          validation_rules: [
                        {
                            type: "minLength",
                            value: 50,
                            message: "La descripción debe tener al menos 50 caracteres"
                        }
                    ]
                }
            },
        ],
        grid_columns: 'grid-cols-1 '
    },

];



interface Props_I {

    emit_next: (x: Vacant_Values_Step4_I) => void;
    emit_back: () => void;
    isLoading?: boolean;

}


export const NewVacant_step4: FC<Props_I> = ({
    emit_next,
    emit_back,
    isLoading = false
}) => {

    const [isMounted, setisMounted] = useState(false);

    const { initialValues, validation_rules } = useFormInitData<Vacant_Values_Step4_I>(formData);

    const formik = useFormik({
        initialValues: initialValues,
        onSubmit: (values) => {
            // console.log('values', values);
            emit_next(values);
        },
        validationSchema: validation_rules
    });




    const {
        submitForm,
        setValues,
        values
    } = formik;

    return (
        <>
            <div className="flex justify-center mb-2 titleSection">
                <h3 className="mb-0 text-2xl font-bold text-gray-800 dark:text-gray-100">
                    Consideraciones finales
                </h3>
            </div>

            <div className="w-full pb-5 mb-5 border-b border-gray-200">

                <FormikProvider value={formik}>
                    <Form noValidate>

                        <FormLayoutBuilder rows={formData} />

                    </Form>

                </FormikProvider>

            </div>

            <div className="flex flex-col w-full pb-0 mx-auto ">
                <div className="flex justify-end space-x-4">

                    {
                        (!isLoading) && (
                            <SecondaryButton onClick={emit_back} isLoading={false} label="Atras" />
                        )
                    }

                    <PrimaryButton onClick={submitForm} isLoading={isLoading} label="Enviar" />
                </div>
            </div>

        </>
    )
}
