


import { FC, useEffect, useState } from 'react'
import { useRequestStore, useUiStore } from '../../../../../core/store';
import { FormLayoutBuilder, InfoModal, PrimaryButton } from '../../../../../core/components';
import { Form, FormikProvider, useFormik } from 'formik';
import { LayoutRow_I } from '../../../../../core/components/forms/interfaces';
import { useFormInitData } from '../../../../../core/hooks';

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
        ],
        grid_columns: 'grid-cols-1'

    }
]


interface LostPasswordModal_Props_I {
    status: boolean;
}

export const LostPasswordModal: FC<LostPasswordModal_Props_I> = ({
    status
}) => {

    const [isMounted, setisMounted] = useState(false)

    const {
        state: {
            onLoading
        },
        emit_LostPassword
    } = useRequestStore()

    const { initialValues, validation_rules } = useFormInitData(formData);

    const formik = useFormik({
        initialValues: initialValues,
        onSubmit: (values) => {
            emit_LostPassword(values.email)
        },
        validationSchema: validation_rules
    });

    const {
        values,
        submitForm
    } = formik;

    const {
        // state
        emit_handle_login_lostPassword_Modal
    } = useUiStore();

    const closeModal = () => {

        emit_handle_login_lostPassword_Modal(false)

    }

    useEffect(() => {

        if (isMounted === false) return;

        if (status) {
            formik.resetForm();
        }

    }, [status])

    useEffect(() => {
        setisMounted(true);
    }, []);

    return (
        <>
            {
                status && (
                    <InfoModal title="Recuperación de contraseña" onClose={closeModal} status={status}  >
                        <div className="p-6 space-y-6">

                            <div className="text-sm">
                                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sed neque aut et cumque, labo
                            </div>

                            <FormikProvider value={formik}>
                                <Form noValidate>
                                    <FormLayoutBuilder rows={formData} />
                                </Form>
                            </FormikProvider>

                            <footer >
                                <div className="flex flex-col py-5 pb-0 border-t border-slate-200 dark:border-slate-700">
                                    <div className="flex self-end">
                                        <PrimaryButton onClick={submitForm} isLoading={onLoading} label="Aceptar" />
                                    </div>
                                </div>
                            </footer>

                        </div>
                    </InfoModal>
                )
            }
        </>
    )

}
