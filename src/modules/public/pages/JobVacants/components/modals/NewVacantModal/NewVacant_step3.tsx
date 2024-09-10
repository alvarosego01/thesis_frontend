
import { Form, FormikProvider, useFormik } from "formik"
import { FC, useEffect, useState } from "react";
import { LayoutRow_I, SelectValue_I } from "../../../../../../../core/components/forms/interfaces";
import { useFormInitData } from "../../../../../../../core/hooks";
import { FormLayoutBuilder, PrimaryButton, SecondaryButton } from "../../../../../../../core/components";
import { control_service, currency, housing_service, ServicesIncludes_Enum, transport_service, Vacant_Values_Step3_I } from "./interfaces";


const transport_service_form: LayoutRow_I[] = [
    {
        fields: [
            {
                typeField: "select_special",
                props: {
                    label: "Tipo de transporte",
                    name: "transport_type",
                    isMulti: false,
                    type: "select",
                    items: transport_service.map(item => ({ value: item.value, label: item.label })),
                    value: [],
                    placeholder: "Selecciona aquí",
                    validation_rules: [
                        {
                            type: "conditional_select_multi_required",
                            message: "Definir el tipo de transporte es requerido",
                            conditional: {
                                key: "control_service",
                                is: ServicesIncludes_Enum.TRANSPORT,
                            }
                        },
                    ]
                }
            },
            {
                typeField: "textarea",
                props: {
                    label: "Detalles de transporte",
                    name: "transport_desc",
                    type: "text",
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
        grid_columns: "grid-cols-1 gap-y-3"
    }
];

const housing_service_form: LayoutRow_I[] = [
    {
        fields: [
            {
                typeField: "select_special",
                props: {
                    label: "Tipo de hospedaje",
                    name: "housing_type",
                    isMulti: false,
                    type: "select",
                    items: housing_service.map(item => ({ value: item.value, label: item.label })),
                    value: [],
                    placeholder: "Selecciona aquí",
                    validation_rules: [
                        {
                            type: "conditional_select_multi_required",
                            message: "Definir el tipo de transporte es requerido",
                            conditional: {
                                key: "control_service",
                                is: ServicesIncludes_Enum.HOUSING,
                            }
                        },
                    ]
                }
            },
            {
                typeField: "textarea",
                props: {
                    label: "Detalles de hospedaje",
                    name: "housing_desc",
                    type: "text",
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
        grid_columns: "grid-cols-1 gap-y-3"
    }
];

const costs_service_form: LayoutRow_I[] = [
    {
        fields: [
            {
                typeField: "text",
                props: {
                    label: "Monto",
                    name: "costs_mount",
                    type: "number",
                    validation_rules: [
                         {
                            type: "conditional_select_multi_required",
                              message: "Es requerido",
                            conditional: {
                                key: "control_service",
                                is: ServicesIncludes_Enum.COSTS,
                            }
                        },
                    ]
                }
            },
            {
                typeField: "select",
                props: {
                    label: "Moneda",
                    name: "costs_currency",
                    isMulti: false,
                    type: "select",
                    items: currency.map(item => ({ value: item.value, label: item.label })),
                    value: [],
                    placeholder: "Selecciona aquí",
                    validation_rules: [
                          {
                            type: "conditional_select_multi_required",
                              message: "Es requerido",
                            conditional: {
                                key: "control_service",
                                is: ServicesIncludes_Enum.COSTS,
                            }
                        },
                    ]
                }
            },
            {
                typeField: "textarea",
                props: {
                    label: "Detalles de viaticos",
                    name: "costs_desc",
                    type: "text",
                    parent_class: "col-span-2",
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
        grid_columns: "grid-cols-2 gap-y-3"
    },

];

const formData: LayoutRow_I[] = [

    {
        fields: [
            {
                typeField: "select_special",
                props: {
                    label: "Servicios incluidos",
                    name: "control_service",
                    isMulti: true,
                    items: control_service.map(item => ({ value: item.value, label: item.label })),
                    value: [],
                    placeholder: "Selecciona aquí",
                }
            },

        ],
        grid_columns: "grid-cols-1 space-y-4"
    },
    ...transport_service_form,
    ...housing_service_form,
    ...costs_service_form

];



interface Props_I {

    emit_next: (x: Vacant_Values_Step3_I) => void;
    emit_back: () => void;

}

export const NewVacant_step3: FC<Props_I> = ({
    emit_next,
    emit_back
}) => {

    const [serviceSelected, setserviceSelected] = useState<ServicesIncludes_Enum[]>([])

    const [isMounted, setisMounted] = useState(false);

    const { initialValues, validation_rules } = useFormInitData<Vacant_Values_Step3_I>(formData);
    const formik = useFormik({
        initialValues: initialValues,
        onSubmit: (values) => {
            emit_next(values);
        },
        validationSchema: validation_rules
    });
    const {
        submitForm,
        setValues,
        values
    } = formik;

    useEffect(() => {

        if ( Array.isArray(values.control_service) && values.control_service.length > 0) {

            const aux_services = values.control_service.map((item: SelectValue_I<ServicesIncludes_Enum>) => item.value);
            setserviceSelected(aux_services);

        } else {
            setserviceSelected([]);
        }


    }, [values]);


    const emit_submit = () => {

        submitForm();

    }

    return (
        <>
            <div className="flex justify-center mb-2 titleSection">
                <h3 className="mb-0 text-2xl font-bold text-gray-800 dark:text-gray-100">
                    Definición de servicios
                </h3>
            </div>

            <div className="w-full pb-5 mb-5 border-b border-gray-200">

                <div className="w-full mb-4">

                    <FormikProvider value={formik}>
                        <Form noValidate>

                            <FormLayoutBuilder rows={[formData[0]]} />
                            {
                                (serviceSelected.length > 0) && (
                                    <>

                                        <div className={`grid mt-4 gap-4 grid-cols-${(serviceSelected.length > 1) ? "2" : "1"}`}>
                                            {
                                                serviceSelected.includes(ServicesIncludes_Enum.TRANSPORT) && (
                                                    <div className="space-y-2">
                                                        <span className="text-base font-bold">
                                                            Servicio de transporte
                                                        </span>
                                                        <FormLayoutBuilder rows={transport_service_form} />
                                                    </div>
                                                )
                                            }
                                            {
                                                serviceSelected.includes(ServicesIncludes_Enum.HOUSING) && (
                                                 <div className="space-y-2">
                                                        <span className="text-base font-bold">
                                                            Servicio de hospedaje
                                                        </span>
                                                        <FormLayoutBuilder rows={housing_service_form} />
                                                    </div>
                                                )
                                            }
                                            {
                                                serviceSelected.includes(ServicesIncludes_Enum.COSTS) && (
                                                <div className="space-y-2">
                                                        <span className="text-base font-bold">
                                                            Costos viaticos
                                                        </span>
                                                        <FormLayoutBuilder rows={costs_service_form} />
                                                    </div>
                                                )
                                            }

                                        </div>
                                    </>
                                )
                            }

                        </Form>

                    </FormikProvider>

                </div>



            </div>

            <div className="flex flex-col w-full pb-0 mx-auto ">
                <div className="flex justify-end space-x-4">

                    <SecondaryButton onClick={emit_back} isLoading={false} label="Atras" />

                    <PrimaryButton onClick={emit_submit} isLoading={false} label="Siguiente" />

                </div>
            </div>

        </>
    )
}
