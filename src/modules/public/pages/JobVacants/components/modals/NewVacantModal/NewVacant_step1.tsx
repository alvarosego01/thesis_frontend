

import { Form, FormikProvider, useFormik } from "formik"
import { FC, useState } from "react";
import { LayoutRow_I } from "../../../../../../../core/components/forms/interfaces";
import { useFormInitData } from "../../../../../../../core/hooks";
import { FormLayoutBuilder, PrimaryButton } from "../../../../../../../core/components";
import { estadosVenezuela } from "../../../../../../../core/constants/Countries";
import { Vacant_Values_Step1_I } from "./interfaces";


const vacant_pic: LayoutRow_I[] = [
    {
        fields: [
            {
                typeField: 'file_wIcon',
                props: {
                    label: 'Seleccionar imágen',
                    name: 'vacant_pic',
                    type: 'file',
                    side: 'vertical',
                    accept: 'image/png, image/jpeg, image/jpg',
                    validation_rules: [
                        {
                            type: "fileSize_5m",
                            message: "El archivo debe ser menor a 5MB"
                        },
                        {
                            type: "fileFormat_image",
                            message: "El archivo debe ser una imagen"
                        }
                    ]
                }
            }
        ],
    }
];
const formData: LayoutRow_I[] = [
    {
        fields: [
            {
                typeField: "text",
                props: {
                    label: "Titulo",
                    name: "title",
                    type: "text",
                    validation_rules: [
                        {
                            type: "required",
                            message: "El Titulo es requerido"
                        },
                        {
                            type: "minLength",
                            value: 3,
                            message: "El Titulo debe tener al menos 3 caracteres"
                        }
                    ]
                }
            },
            {
                typeField: "textarea",
                props: {
                    label: "Descripción",
                    name: "desc",
                    type: "text",
                    validation_rules: [
                        {
                            type: "required",
                            message: "La descripción es requerida"
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
        grid_columns: "grid-cols-1 grid-cols-1 gap-y-3"
    },

    {
        fields: [
            {
                typeField: "text",
                props: {
                    label: "Dirección",
                    name: "direction",
                    type: "text",
                    validation_rules: [
                        {
                            type: "required",
                            message: "La dirección es requerida"
                        },
                        {
                            type: "minLength",
                            value: 5,
                            message: "La dirección debe tener al menos 3 caracteres"
                        }
                    ]

                }
            },
            {
                typeField: "text",
                props: {
                    label: "Ciudad",
                    name: "city",
                    type: "text",
                    validation_rules: [
                        {
                            type: "required",
                            message: "La ciudad es requerida"
                        },
                        {
                            type: "minLength",
                            value: 5,
                            message: "La ciudad debe tener al menos 3 caracteres"
                        }
                    ]
                }
            },
            {
                typeField: "select",
                props: {
                    label: "Estado",
                    name: "state",
                    type: "select",
                    isMulti: false,
                    items: estadosVenezuela.map((estado) => ({ value: estado, label: estado })),
                    placeholder: "Selecciona el estado",
                    validation_rules: [
                        {
                            type: "required",
                            message: "El estado es requerido"
                        },
                    ]
                }
            }
        ],
        grid_columns: "grid-cols-1 pcTab:grid-cols-3 lg:grid-cols-3"
    },

];



interface Props_I {

    emit_next: (x: Vacant_Values_Step1_I) => void;
    // emit_back: () => void;

}

export const NewVacant_step1: FC<Props_I> = ({
    emit_next,
    // emit_back
}) => {

    const [isMounted, setisMounted] = useState(false);

    const { initialValues, validation_rules } = useFormInitData<Vacant_Values_Step1_I>([
        ...formData,
        ...vacant_pic
    ]);

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
                    Definiciones básicas
                </h3>
            </div>


            <FormikProvider value={formik}>
                <Form noValidate>

                    <div className="grid w-full grid-cols-3 gap-4 pb-5 mb-5 border-b border-gray-200">
                        <div className="col-span-2 " >
                            <FormLayoutBuilder rows={formData} />
                        </div>
                        <div className="flex items-center justify-center col-span-1 ml-4 border-l border-gray-200" >
                            <FormLayoutBuilder rows={vacant_pic} />
                        </div>

                    </div>
                </Form>
            </FormikProvider>


            <div className="flex flex-col w-full pb-0 mx-auto ">
                <div className="flex self-end">
                    <PrimaryButton onClick={submitForm} isLoading={false} label="Siguiente" />
                </div>
            </div>

        </>

    )
}
