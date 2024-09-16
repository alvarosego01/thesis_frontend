
import { Link } from 'react-router-dom';
import { Form, FormikProvider, useFormik } from 'formik';

import { getAssetPath } from '@utils/index';
import { useFormInitData } from '../../../../core/hooks';
import { LayoutRow_I } from '../../../../core/components/forms/interfaces';
import { FormLayoutBuilder, PrimaryButton } from '../../../../core/components';
import { useAuthStore, useUiStore } from '../../../../core/store';
import { FC } from 'react';
import { LostPasswordModal } from './components/LostPasswordModal';

const AuthImage = getAssetPath('/images/register_login.jpg');

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
                            value: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).{8,}$/,
                            message: "Debe tener 1 Mayuscula, 1 Minuscula y al menos 8 caracteres"
                        }
                    ]
                }
            },
        ],
        grid_columns: 'grid-cols-1'

    }
]

interface Init_valuesData_I {
    email: string;
    password: string;
}

export const LoginPage: FC = () => {

    const {
        emit_login,
        state: {
            onLoading
        },
    } = useAuthStore();

    const {
        state: {
            modals
        },
        emit_handle_login_lostPassword_Modal
    } = useUiStore();

    const LostPassword_Modal = modals.public.login.lostPassword_modal;

    const Init_Values: Init_valuesData_I = {
        email: '',
        password: ''
    }

    const { initialValues, validation_rules } = useFormInitData<Init_valuesData_I>(formData, Init_Values);

    const formik = useFormik({
        initialValues: initialValues,
        onSubmit: (values) => {
            emit_login(values.email, values.password)
        },
        validationSchema: validation_rules
    });

    const {
        values,
        errors,
        submitForm
    } = formik;


    return (
        <main className="w-full bg-white dark:bg-slate-900 ">

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
                            <h1 className="mb-6 text-3xl font-bold text-slate-800 dark:text-slate-100">Hola de nuevo! ✨</h1>

                            <FormikProvider value={formik}>

                                <Form noValidate >

                                    <FormLayoutBuilder rows={formData} />

                                    <div className="flex flex-col py-5 pb-0 border-t border-slate-200 dark:border-slate-700">
                                        <div className="flex justify-between">
                                            <div className="flex items-center mr-1">
                                                {/* <Link className="text-sm underline hover:no-underline" to="/reset-password">¿Perdiste tu contraseña?</Link> */}
                                                <a onClick={() => emit_handle_login_lostPassword_Modal(true)} className='text-sm underline hover:cursor-pointer hover:no-underline'>
                                                    ¿Perdiste tu contraseña?
                                                </a>
                                            </div>
                                            <PrimaryButton onClick={submitForm} isLoading={onLoading} label="Ingresar" />
                                        </div>
                                    </div>

                                </Form>

                            </FormikProvider>

                            {/* Footer */}
                            <div className="pt-5 mt-6 border-t border-slate-200 dark:border-slate-700">
                                <div className="text-sm">
                                    ¿No tienes una cuenta? <Link className="font-medium text-indigo-500 hover:text-indigo-600 dark:hover:text-indigo-400" to="/register">
                                        Registrate ahora
                                    </Link>
                                </div>


                            </div>
                        </div>

                    </div>
                </div>

                {/* Image */}
                <div className="absolute top-0 bottom-0 right-0 hidden md:block md:w-1/2" aria-hidden="true">
                    <img className="object-cover object-center w-full h-full" src={AuthImage} width="760" height="1024" alt="Authentication" />

                </div>

            </div>

            <LostPasswordModal status={LostPassword_Modal.status} />

        </main>


    )
}

