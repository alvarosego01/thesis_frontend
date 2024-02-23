import { getAssetPath } from "../../../../../core/utils";
import { LayoutBuilder, PrimaryButton } from "../../../../../core/components"
import { LayoutRow_I } from "../../../../../core/components/forms/interfaces"
import { useFormInitData } from "../../../../../core/hooks";

import { useRef } from "react";
import { Form, Formik } from "formik"


const avatar_default = getAssetPath('/images/user-avatar-80.png');

const estadosVenezuela: string[] = [
    "Amazonas",
    "Anzoátegui",
    "Apure",
    "Aragua",
    "Barinas",
    "Bolívar",
    "Carabobo",
    "Cojedes",
    "Delta Amacuro",
    "Dependencias Federales",
    "Distrito Capital",
    "Falcón",
    "Guárico",
    "Lara",
    "Mérida",
    "Miranda",
    "Monagas",
    "Nueva Esparta",
    "Portuguesa",
    "Sucre",
    "Táchira",
    "Trujillo",
    "Vargas",
    "Yaracuy",
    "Zulia",
];

const userData: LayoutRow_I[] = [
    {
        fields: [
            {
                type: 'text',
                props: {
                    label: 'Nombre',
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
                type: 'text',
                props: {
                    label: 'Apellido',
                    name: 'lastname',
                    type: 'text',
                    validation_rules: [
                        {
                            type: "required",
                            message: "El apellido es requerido"
                        },
                        {
                            type: "minLength",
                            value: 3,
                            message: "El apellido debe tener al menos 3 caracteres"
                        }
                    ]
                }
            },
            {
                type: 'text',
                props: {
                    label: 'Teléfono',
                    name: 'phone',
                    required: false,
                    type: 'tel',
                    validation_rules: [
                        {
                            type: "tel",
                            message: "El teléfono no es válido"
                        }
                    ]
                }
            }
        ]
    },
    {
        fields: [
            {
                type: 'text',
                props: {
                    label: 'Dirección',
                    name: 'direction',
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
                type: 'text',
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
                type: 'select',
                props: {
                    label: 'Estado',
                    name: 'state',
                    items: estadosVenezuela.map((estado) => ({ value: estado, label: estado }))
                }
            }
        ]
    }

];

// const initialValues: { [key: string]: any } = {};
// const requiredFields: { [key: string]: any } = {};



export const PersonalPage = () => {

    const { initialValues, validation_rules } = useFormInitData(userData);

    const fileInputRef = useRef();

    let isLoading: boolean = false;

    const onFileInputChange = (target: any) => {
        if (target.files === 0) return;

        // dispatch()
        // dispatch(startUploadFiles(target.files));

    }

    return (

        <div className="grow">
            {/* Panel body */}
            <Formik
                initialValues={initialValues}
                onSubmit={(values) => {
                    console.log('values', values)
                }}
                validationSchema={validation_rules}
                >
                {
                    ({
                        submitForm
                    }) => (

                        <Form noValidate
                        >

                            <div className="p-6 space-y-6">

                                <h2 className="mb-5 text-2xl font-bold text-slate-800 dark:text-slate-100">
                                    Perfil personal
                                </h2>
                                {/* Picture */}
                                <section>
                                    <div className="flex items-center">
                                        <div className="mr-4">
                                            <img className="w-20 h-20 rounded-full" src={avatar_default} width="80" height="80" alt="User upload" />
                                        </div>

                                        <input
                                            onChange={onFileInputChange}
                                            ref={fileInputRef}
                                            type="file"
                                            // multiple
                                            style={{
                                                display: 'none'
                                            }}
                                        />
                                        <PrimaryButton
                                            disabled={isLoading}
                                            onClick={() => { fileInputRef.current.click() }} label="Cambiar" />

                                    </div>
                                </section>
                                {/* Business Profile */}
                                <section>
                                    <h2 className="mb-1 text-xl font-bold leading-snug text-slate-800 dark:text-slate-100">
                                        Datos de usuario
                                    </h2>
                                    <div className="text-sm mb-s_25">
                                        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sed neque aut et cumque, labo
                                    </div>

                                    <LayoutBuilder rows={userData} />

                                </section>

                            </div>

                            <footer>
                                <div className="flex flex-col px-6 py-5 border-t border-slate-200 dark:border-slate-700">
                                    <div className="flex self-end">
                                        <PrimaryButton onClick={ submitForm } label="Guardar" className="ml-3" />
                                    </div>
                                </div>
                            </footer>

                        </Form>

                    )}

            </Formik>
        </div>



    )
}

