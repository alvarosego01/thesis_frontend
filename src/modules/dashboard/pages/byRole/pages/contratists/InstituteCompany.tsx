
import { Meta_Contratist_I } from "@tesis-project/dev-globals/dist/modules/profile/interfaces";
import { FC, useEffect, useState } from "react"
import { useUserMetaStore } from "../../../../store/hooks/user_meta/useUserMetaStore";
import { Form, FormikProvider, useFormik } from "formik";
import { LayoutRow_I } from "@components/forms/interfaces";
import { estadosVenezuela } from "@core/constants/Countries";
import { useFormInitData } from "@hooks/index";
import { FormLayoutBuilder, PrimaryButton } from "@components/index";

const formData: LayoutRow_I[] = [
    {
        fields: [
            {
                typeField: 'text',
                props: {
                    label: 'Instituto o empresa',
                    name: 'name',
                    type: 'text',
                    validation_rules: [
                        {
                            type: "required",
                            message: "El nombre es requerido"
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
                    label: 'RIF o NIF',
                    name: 'rif_nif',
                    type: 'text',
                    validation_rules: [
                        {
                            type: "required",
                            message: "El RIF O NIF es requerido"
                        },
                        {
                            type: "minLength",
                            value: 3,
                            message: "El RIF O NIF debe tener al menos 3 caracteres"
                        }
                    ]
                }
            },
            {
                typeField: 'text',
                props: {
                    label: 'Posición o cargo',
                    name: 'position',
                    type: 'text',
                    validation_rules: [
                        {
                            type: "required",
                            message: "La posición o cargo es requerido"
                        }
                    ]
                }
            },
            {
                typeField: 'text',
                props: {
                    label: 'Teléfono',
                    name: 'phone',
                    required: false,
                    type: 'tel',
                    validation_rules: [
                        {
                            type: "required",
                            message: "El teléfonop es requerido"
                        },
                        {
                            type: "tel",
                            message: "El teléfono no es válido"
                        }
                    ]
                }
            },

        ],
        grid_columns: 'grid-cols-1 pcTab:grid-cols-2 lg:grid-cols-4'
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
                typeField: 'text',
                props: {
                    label: 'Ciudad',
                    name: 'city',
                    type: 'text',
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
                typeField: 'select',
                props: {
                    label: 'Estado',
                    name: 'state',
                    items: estadosVenezuela.map((estado) => ({ value: estado, label: estado })),
                    validation_rules: [
                        {
                            type: "required",
                            message: "El estado es requerido"
                        },
                    ]
                }
            }
        ],
        grid_columns: 'grid-cols-1 pcTab:grid-cols-3 lg:grid-cols-3'
    }

];

interface Init_valuesData_I {
    name: string;
    rif_nif: string;
    position: string;
    phone: string;
    address: string;
    city: string;
    state: string;
}

export const InstituteCompany: FC = () => {

    const {
        state: {
            user_meta: {
                meta_contratist
            },
            onLoading
        },
        emit_save_contratistsMeta
    } = useUserMetaStore();

    const meta = meta_contratist as Meta_Contratist_I;

    const [isMounted, setisMounted] = useState(false);

    let Init_Values: Init_valuesData_I = {
        name: meta?.institutes_companies.name || '',
        rif_nif: meta?.institutes_companies.rif_nif || '',
        position: meta?.institutes_companies.position || '',
        phone: meta?.institutes_companies.phone || '',
        address: meta?.institutes_companies.direction?.address || '',
        city: meta?.institutes_companies.direction?.city || '',
        state: meta?.institutes_companies.direction?.state || '',
    }

    const { initialValues, validation_rules } = useFormInitData<Init_valuesData_I>(formData, Init_Values);

    const formik = useFormik({
        initialValues: initialValues,
        onSubmit: (values) => {

            emit_save_contratistsMeta({
                institutes_companies: {
                    name: values.name,
                    rif_nif: values.rif_nif,
                    position: values.position,
                    phone: values.phone,
                    direction: {
                        address: values.address,
                        city: values.city,
                        state: values.state
                    }
                }
            });

        },
        validationSchema: validation_rules
    });

    const {
        values,
        errors,
        setValues,
        submitForm
    } = formik;

    useEffect(() => {

        if (isMounted === false) return;
        if (meta?.institutes_companies === undefined) return;

        setValues({
            name: meta?.institutes_companies.name || '',
            rif_nif: meta?.institutes_companies.rif_nif || '',
            position: meta?.institutes_companies.position || '',
            phone: meta?.institutes_companies.phone || '',
            address: meta?.institutes_companies.direction?.address || '',
            city: meta?.institutes_companies.direction?.city || '',
            state: meta?.institutes_companies.direction?.state || '',
        });

    }, [meta?.institutes_companies, isMounted])

    useEffect(() => {
        setisMounted(true);
    }, []);

    return (
        <>
            <div className="w-full">

                <FormikProvider value={formik}>
                    <Form noValidate>

                        <div className="space-y-5 SingerSkillSelectors">

                            <section>
                                <h2 className="mb-1 text-xl font-bold leading-snug text-slate-800 dark:text-slate-100">
                                    Representación de instituto y/o empresa
                                </h2>
                                <div className="mb-5 text-sm">
                                    Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sed neque aut et cumque, labo
                                </div>

                                <FormLayoutBuilder rows={formData} />

                            </section>
                            <hr />
                        </div>

                        <footer className="pt-6" >
                            <div className="flex flex-row justify-end">
                                <PrimaryButton isLoading={onLoading} onClick={submitForm} label="Guardar" />
                            </div>
                        </footer>

                    </Form>
                </FormikProvider>

            </div>
        </>
    )
}
