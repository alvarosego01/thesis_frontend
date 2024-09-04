import { Form, FormikProvider, useFormik } from "formik"
import { FC, useState } from 'react';
import { LayoutRow_I } from "../../../../../../../core/components/forms/interfaces";
import { useFormInitData } from "../../../../../../../core/hooks";
import { FormLayoutBuilder, PrimaryButton, SecondaryButton } from "../../../../../../../core/components";
import { Artist_Enum } from "@tesis-project/dev-globals/dist/modules/profile/interfaces";
import { Vacant_Values_Step2_I } from "./interfaces";

const role_type: { value: Artist_Enum, label: string }[] = [
    {
        label: 'Cantante',
        value: Artist_Enum.SINGER
    },
    {
        label: 'Instrumentista',
        value: Artist_Enum.INSTRUMENTIST
    },
    {
        label: 'Director de orquesta',
        value: Artist_Enum.ORQUESTA_DIRECTOR
    },
    {
        label: 'Director de escena',
        value: Artist_Enum.SCENE_DIRECTOR
    },
];


const formData: LayoutRow_I[] = [
    {
        fields: [
            {
                typeField: 'select_special',
                props: {
                    label: 'Rol de interés',
                    name: 'role_type',
                    isMulti: true,
                    type: 'select',
                    items: role_type.map(item => ({ value: item.value, label: item.label })),
                    value: [],
                    placeholder: 'Selecciona aquí',
                    validation_rules: [
                        {
                            type: "select_multi_required",
                            message: "El rol es requerido"
                        },
                    ]
                }
            },
            {
                typeField: 'textarea',
                props: {
                    label: 'Descripción de rol',
                    name: 'role_desc',
                    type: 'text',
                    validation_rules: [
                        {
                            type: "required",
                            message: "La descripción de rol es requerido"
                        },
                        {
                            type: "minLength",
                            value: 50,
                            message: "La descripción debe tener al menos 50 caracteres"
                        }
                    ]
                }
            },


        ],
        grid_columns: 'grid-cols-1 gap-y-3'
    },
];


interface Props_I {

    emit_next: (x: Vacant_Values_Step2_I) => void;
    emit_back: () => void;

}

export const NewVacant_step2: FC<Props_I> = ({
    emit_next,
    emit_back
}) => {

    const [isMounted, setisMounted] = useState(false);

    const { initialValues, validation_rules } = useFormInitData<Vacant_Values_Step2_I>(formData);

    const formik = useFormik({
        initialValues: initialValues,
        onSubmit: (values) => {
            emit_next(values);
        },
        validationSchema: validation_rules
    });

    const {
        submitForm,
        setValues
    } = formik;

    return (
        <>
            <div className="flex justify-center mb-2 titleSection ">
                <h3 className="mb-0 text-2xl font-bold text-gray-800 dark:text-gray-100">
                    Definición de roles
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

                    <SecondaryButton onClick={emit_back} isLoading={false} label="Atras" />

                    <PrimaryButton onClick={submitForm} isLoading={false} label="Siguiente" />
                </div>
            </div>
        </>
    )
}
