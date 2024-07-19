import { FC, useEffect } from "react";
import { FileHideInput, FormLayoutBuilder, PrimaryButton } from "@components/index"
import { LayoutRow_I } from "@components/forms/interfaces"
import { useFormInitData } from "@hooks/index";

import { Form, FormikProvider, useFormik } from "formik"
import { getAssetPath } from "@utils/index";
import { estadosVenezuela } from "@core/constants/Countries";
import { useProfileStore, useUserStore } from "@store/index";
import { Gender_Enum } from "@tesis-project/dev-globals/dist/modules/user/interfaces";
import { signal, useSignal } from "@preact/signals-react";
import { useSignals } from "@preact/signals-react/runtime";


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
                            value: Gender_Enum.MALE
                        },
                        {
                            label: 'Femenino',
                            value: Gender_Enum.FEMALE
                        }
                    ],
                    placeholder: 'Selecciona tu género',
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
    gender: Gender_Enum;
    direction: string;
    city: string;
    state: string;
}

export const PersonalPage: FC = () => {

    useSignals();
    const avatar = useSignal(getAssetPath('/images/user_anon.png'));

    const {
        state: {
            onLoading,
            user
        },
        emit_save_user_data,
    } = useUserStore();

      const isMounted = useSignal(false);

    const {
        state: {
            onLoading: onLoading_profile,
            profile: {
                profile_pic
            }
        },
        emit_set_profile_pic,
    } = useProfileStore();


    let Init_Values = useSignal<Init_valuesData_I>({
        name: user.name || '',
        gender: user.gender as Gender_Enum || Gender_Enum.NONE,
        lastname: user.last_name || '',
        city: user.direction?.city || '',
        state: user.direction?.state || '',
        direction: user.direction?.address || '',
        phone: user.phone || '',
    })

    const { initialValues, validation_rules } = useFormInitData<Init_valuesData_I>(userData, Init_Values.value);

    const { initialValues: initial_image, validation_rules: validation_image } = useFormInitData<{profile_pic: File}>( userImage );

    const formik = useFormik({
        initialValues: initialValues,
        onSubmit: (values) => {
            emit_save_user_data(user._id, {
                name: values.name,
                last_name: values.lastname,
                phone: values.phone,
                gender: values.gender,
                direction: {
                    address: values.direction,
                    city: values.city,
                    state: values.state
                }
            })
        },
        validationSchema: validation_rules
    });

    const formik_image = useFormik({
        initialValues: initial_image,
        onSubmit: (values, helpers) => {
            helpers.validateForm();
            emit_set_profile_pic(values.profile_pic);
        },
        validationSchema: validation_image,
        validateOnChange: true

    });

    const {
        submitForm,
    } = formik;

    const {
        values: values_image,
        submitForm: submitForm_image,
    } = formik_image;

    useEffect( () => {

        if(isMounted.value === false) return;

        if(values_image?.profile_pic?.size > 0){
            submitForm_image();
        }

    }, [values_image]);

    useEffect(() => {

        console.log('profile_pic?.src', profile_pic?.src)

        if(isMounted.value === false) return;

        if(profile_pic?.src) {
            avatar.value = profile_pic?.src;
        }


     }, [profile_pic?.src])

    useEffect(() => {
        isMounted.value = true;
    }, []);

    return (

        <div className="grow">

            <div className="p-5 space-y-5">

                <h2 className="mb-5 text-2xl font-bold text-slate-800 dark:text-slate-100 ">
                    Perfil personal
                </h2>

                <section>
                    <div className="flex items-center">
                        <div className="mr-4">

                            <img className="object-cover object-center w-20 h-20 rounded-full" src={avatar.value} width="80" height="80" alt="User upload" />

                        </div>

                        <FormikProvider value={formik_image}>
                            <Form noValidate>
                                <FileHideInput {...userImage[0].fields[0].props} isLoading={onLoading_profile} />
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
                        <PrimaryButton onClick={submitForm} isLoading={onLoading} label="Guardar" />
                    </div>
                </div>
            </footer>


        </div>

    )
}

