

import { Link } from 'react-router-dom';
import { Form, Formik } from 'formik';

import { getAssetPath } from '../../../core/utils';
import { FormLayoutBuilder, PrimaryButton } from '../../../core/components';
import { LayoutRow_I } from '../../../core/components/forms/interfaces';
import { useFormInitData } from '../../../core/hooks';



const AuthImage = getAssetPath('/images/auth-image.jpg');
const AuthDecoration = getAssetPath('/images/auth-decoration.png');

const roles: { value: 'artist_role' | 'contratist_role', label: string }[] = [
    {
        label: 'Artista',
        value: 'artist_role'
    },
    {
        label: 'Contratista',
        value: 'contratist_role'
    }
];


const formData: LayoutRow_I[] = [
    {
        fields: [
            {
                typeField: 'text',
                props: {
                    label: 'Email',
                    name: 'email',
                    type: 'email',
                    parent_class: '!mb-4',
                    validation_rules: [
                        {
                            type: "required",
                            message: "El email es requerido"
                        },
                        {
                            type: "email",
                            message: "El email no es válido"
                        }
                    ]
                }
            },
            {
                typeField: 'select',
                props: {
                    label: 'Rol',
                    name: 'role',
                    items: roles.map((item) => ({ value: item.value, label: item.label })),
                    placeholder: 'Selecciona un rol',
                    validation_rules: [
                        {
                            type: "required",
                            message: "El rol es requerido"
                        },
                    ]
                }
            },
            {
                typeField: 'text',
                props: {
                    label: 'Contraseña',
                    name: 'password',
                    type: 'password',
                    parent_class: '!mb-4',
                    validation_rules: [
                        {
                            type: "required",
                            message: "La contraseña es requerida"
                        },
                        {
                            type: "pattern",
                            value: '^[A-Za-z0-9]{8,}$',
                            message: "La contraseña debe ser alfanumérica y tener al menos 8 caracteres"
                        }
                    ]
                }
            },
            {
                typeField: 'text',
                props: {
                    label: 'Confirmar contraseña',
                    name: 'password_repeat',
                    type: 'password',
                    parent_class: '!mb-4',
                    validation_rules: [
                        {
                            type: "required",
                            message: "La confirmación de contraseña es requerida"
                        },
                        {
                            type: "same_field",
                            value: 'password',
                            message: "Las contraseñas no coinciden"
                        }
                    ]
                }
            },
        ],
        grid_columns: 'grid-cols-1'

    }
]


export const RegisterPage = () => {

    const { initialValues, validation_rules } = useFormInitData(formData);


    return (
        <main className="w-full bg-white dark:bg-slate-900">

            <div className="relative md:flex">

                {/* Content */}
                <div className="md:w-1/2">
                    <div className="min-h-[100dvh] h-full flex flex-col after:flex-1">

                        {/* Header */}
                        <div className="flex-1">
                            <div className="flex items-center justify-between h-16 px-4 sm:px-6 lg:px-8">
                                {/* Logo */}
                                <Link className="block" to="/">
                                    <svg width="32" height="32" viewBox="0 0 32 32">
                                        <defs>
                                            <linearGradient x1="28.538%" y1="20.229%" x2="100%" y2="108.156%" id="logo-a">
                                                <stop stopColor="#A5B4FC" stopOpacity="0" offset="0%" />
                                                <stop stopColor="#A5B4FC" offset="100%" />
                                            </linearGradient>
                                            <linearGradient x1="88.638%" y1="29.267%" x2="22.42%" y2="100%" id="logo-b">
                                                <stop stopColor="#38BDF8" stopOpacity="0" offset="0%" />
                                                <stop stopColor="#38BDF8" offset="100%" />
                                            </linearGradient>
                                        </defs>
                                        <rect fill="#6366F1" width="32" height="32" rx="16" />
                                        <path d="M18.277.16C26.035 1.267 32 7.938 32 16c0 8.837-7.163 16-16 16a15.937 15.937 0 01-10.426-3.863L18.277.161z" fill="#4F46E5" />
                                        <path d="M7.404 2.503l18.339 26.19A15.93 15.93 0 0116 32C7.163 32 0 24.837 0 16 0 10.327 2.952 5.344 7.404 2.503z" fill="url(#logo-a)" />
                                        <path d="M2.223 24.14L29.777 7.86A15.926 15.926 0 0132 16c0 8.837-7.163 16-16 16-5.864 0-10.991-3.154-13.777-7.86z" fill="url(#logo-b)" />
                                    </svg>
                                </Link>
                            </div>
                        </div>

                        <div className="w-full max-w-sm px-4 py-8 mx-auto">
                            <h1 className="mb-6 text-3xl font-bold text-slate-800 dark:text-slate-100">
                                Regístrate ahora ✨
                            </h1>

                            <Formik
                                initialValues={initialValues}
                                onSubmit={(values) => {
                                    console.log('values', values)
                                }}
                                validationSchema={validation_rules}>
                                {
                                    ({
                                        submitForm
                                    }) => (

                                        <Form noValidate
                                        >

                                            <FormLayoutBuilder rows={formData} />

                                            <div className="flex items-center justify-end mt-6">
                                                {/* <div className="mr-1">
                                                    <label className="flex items-center">
                                                        <input type="checkbox" className="form-checkbox" />
                                                        <span className="ml-2 text-sm">
                                                                asdasdadasdasd
                                                        </span>
                                                    </label>
                                                </div> */}
                                                <PrimaryButton onClick={submitForm} label="Enviar" />                                            </div>

                                        </Form>

                                    )}
                            </Formik>

                            {/* Footer */}
                            <div className="pt-5 mt-6 border-t border-slate-200 dark:border-slate-700">
                                <div className="text-sm">
                                    ¿Ya tenias una cuenta? <Link className="font-medium text-indigo-500 hover:text-indigo-600 dark:hover:text-indigo-400" to="/login">Ingresa aquí</Link>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>

                {/* Image */}
                <div className="absolute top-0 bottom-0 right-0 hidden md:block md:w-1/2" aria-hidden="true">
                    <img className="object-cover object-center w-full h-full" src={AuthImage} width="760" height="1024" alt="Authentication" />
                    <img className="absolute left-0 hidden ml-8 -translate-x-1/2 top-1/4 lg:block" src={AuthDecoration} width="218" height="224" alt="Authentication decoration" />
                </div>

            </div>

        </main>
    )
}
