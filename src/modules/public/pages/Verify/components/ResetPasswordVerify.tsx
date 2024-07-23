

import { Requests_I } from '@tesis-project/dev-globals/dist/modules/auth/interfaces/requests'
import { FC, useEffect, useState } from 'react'
import { Form, FormikProvider, useFormik } from 'formik';
import { LayoutRow_I } from '@components/forms/interfaces'
import { useFormInitData } from '@hooks/index';
import { FormLayoutBuilder, PrimaryButton } from '@components/index';
import { useRequestStore } from '@store/index';


const formData: LayoutRow_I[] = [
    {
        fields: [
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

interface Values_I {
    password: string;
    password_repeat: string;
}

interface Props_I {
    request: Requests_I
}


export const ResetPasswordVerify: FC<Props_I> = ({
    request
}) => {

    const [isMounted, setisMounted] = useState(false)

    const {
        emit_passwordChange_acceptRequest
    } = useRequestStore()

    const { initialValues, validation_rules } = useFormInitData<Values_I>(formData);

    const formik = useFormik({
        initialValues: initialValues,
        onSubmit: (values) => {

            emit_passwordChange_acceptRequest(request, values.password);

        },
        validationSchema: validation_rules
    });

    const {
        values,
        errors,
        submitForm
    } = formik;

    useEffect(() => {
        setisMounted(true);
    }, []);

    return (
        <>

            <section>
                <h2 className="mb-1 text-xl font-bold leading-snug text-slate-800 dark:text-slate-100">
                    Cambio de contraseña
                </h2>
                <div className="text-sm mb-s_25">
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sed neque aut et cumque, labo
                </div>

                <div className='w-full'>

                    <FormikProvider value={formik}>
                        <Form noValidate>

                            <FormLayoutBuilder rows={formData} />
                            <div className="flex items-center justify-end mt-6">
                                <PrimaryButton onClick={submitForm} isLoading={false} label="Enviar" />
                            </div>

                        </Form>
                    </FormikProvider>
                </div>

            </section>

        </>

    )
}
