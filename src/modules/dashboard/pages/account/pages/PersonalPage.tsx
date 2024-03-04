import { FC, useEffect } from "react";
import { FileHideInput, FormLayoutBuilder, PrimaryButton } from "../../../../../core/components"
import { LayoutRow_I } from "../../../../../core/components/forms/interfaces"
import { useFormInitData } from "../../../../../core/hooks";

import { Form, FormikProvider, useFormik } from "formik"
import { getAssetPath } from "../../../../../core/utils";


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
                typeField: 'text',
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
                typeField: 'text',
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
                typeField: 'text',
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
            },
            {
                typeField: 'select',
                props: {
                    label: 'Género',
                    name: 'gender',
                    items: [
                        {
                            label: 'Mascullino',
                            value: 'masculine'
                        },
                        {
                            label: 'Femenino',
                            value: 'contratist_role'
                        }
                    ],
                    placeholder: 'Selecciona tu género',
                    // validation_rules: [

                    // ]
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

];

const userImage: LayoutRow_I[] = [
    {
        fields: [
            {
                typeField: 'file',
                props: {
                    label: 'Cambiar foto de perfil',
                    name: 'profile_pic',
                    type: 'file',
                    accept: 'image/png, image/jpeg, image/jpg',
                    validation_rules: [
                        // {
                        //     type: 'required',
                        //     message: 'La foto de perfil es necesaria'
                        // },
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
]

interface Init_valuesData_I {
    name: string;
    lastname: string;
    phone: string;
    direction: string;
    city: string;
    state: string;
}

export const PersonalPage: FC = () => {

    const Init_Values: Init_valuesData_I = {
        name: '',
        lastname: '',
        phone: '',
        direction: '',
        city: '',
        state: '',
    }

    // const Init_image: { profile_pic: string } = {
    //     profile_pic: ''
    // }

    const { initialValues, validation_rules } = useFormInitData<Init_valuesData_I>(userData, Init_Values);
    const { initialValues: initial_image, validation_rules: validation_image } = useFormInitData<{ file: string }>(userImage);

    const formik = useFormik({
        initialValues: initialValues,
        onSubmit: (values) => {
            console.log('values', values);
        },
        validationSchema: validation_rules
    });

    const formik_image = useFormik({
        initialValues: initial_image,
        onSubmit: (values) => {
            console.log('values', values);
        },
        validationSchema: validation_image
    });

    const {
        values,
        errors,
        submitForm
    } = formik;

    const {
        values: values_image,
        submitForm: submitForm_image,
        isValid: isValid_image,
        // errors: errors_image
    } = formik_image;

    useEffect(() => {

        if(isValid_image){
            // Se emite la acción de subir la imagen
        }

    }, [values_image, isValid_image])

    return (

        <div className="grow">

            <div className="p-5 space-y-5">

                <h2 className="mb-5 text-2xl font-bold text-slate-800 dark:text-slate-100 ">
                    Perfil personal
                </h2>
                {/* Picture */}
                <section>
                    <div className="flex items-center">
                        <div className="mr-4">
                            <img className="w-20 h-20 rounded-full" src={avatar_default} width="80" height="80" alt="User upload" />
                        </div>

                        <FormikProvider value={formik_image}>
                            <Form noValidate>
                                <FileHideInput {...userImage[0].fields[0].props } />
                            </Form>
                        </FormikProvider>

                    </div>
                </section>
                <section>
                    <h2 className="mb-1 text-xl font-bold leading-snug text-slate-800 dark:text-slate-100">
                        Datos de usuario
                    </h2>
                    <div className="text-sm mb-s_25">
                        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sed neque aut et cumque, labo
                    </div>

                    <FormikProvider value={formik}>
                        <Form noValidate>
                            <FormLayoutBuilder rows={userData} />
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

