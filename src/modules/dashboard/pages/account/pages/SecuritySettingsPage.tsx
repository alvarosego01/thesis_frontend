import { Form, Formik } from "formik"
import { FC, useState } from "react"

import { FeedbackModal, FormLayoutBuilder, SecondaryButton } from "../../../../../core/components"
import { LayoutRow_I } from "../../../../../core/components/forms/interfaces"
import { useFormInitData } from "../../../../../core/hooks"
import { SignatureModal, SignatureSelector } from "../components"
import { SignatureModel_I } from "../../../Interfaces"
import { useUiStore } from "../../../../../core/store"

const data_email: LayoutRow_I[] = [
    {
        fields: [
            {
                typeField: 'text',
                props: {
                    parent_class: 'w-full mb-0',
                    label: '',
                    name: 'email',
                    type: 'email',
                    validation_rules: [
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

const data_userame: LayoutRow_I[] = [
    {
        fields: [
            {
                typeField: 'text',
                props: {
                    parent_class: 'w-full mb-0',
                    label: '',
                    name: 'username',
                    type: 'text',
                    validation_rules: [
                        {
                            type: "minLength",
                            value: 3,
                            message: "Debe tener al menos 3 caracteres"
                        }
                    ]
                }
            },

        ],
        grid_columns: 'grid-cols-1'
    }

]

export const SecuritySettingsPage: FC = () => {

    const { initialValues: email_init, validation_rules: email_validations } = useFormInitData(data_email);
    const { initialValues: username_init, validation_rules: username_validations } = useFormInitData(data_userame);

    const [requestPass_Modal, setRequestPass_Modal] = useState(false)

    const [signature] = useState<SignatureModel_I>({
        signature: '',
        updated_at: ''
    })

    const {
        state: {
            modals: {
                dashboard: {
                    signature_selector_modal
                }
            }
        },
        handle_signatureModal
    } = useUiStore();


    const signature_modal = () => {
        // return
        handle_signatureModal({
            status: true,
            text: ''
        })

    }

    return (
        <>
            <div className="grow">
                {/* Panel body */}

                <div className="p-5 space-y-5">
                    <h2 className="mb-5 text-2xl font-bold text-slate-800 dark:text-slate-100">
                        Seguridad de cuenta
                    </h2>

                    <section>
                        <h2 className="mb-1 text-xl font-bold leading-snug text-slate-800 dark:text-slate-100">
                            Nombre de usuario
                        </h2>
                        <div className="text-sm">Excepteur sint occaecat cupidatat non proident sunt in culpa qui officia.</div>

                        <Formik
                            initialValues={username_init}
                            onSubmit={(values) => {
                                console.log('values', values)
                            }}
                            validationSchema={username_validations}
                        >
                            {({ submitForm }) => (
                                <Form noValidate>
                                    <div className="flex flex-row">
                                        <FormLayoutBuilder rows={data_userame} />
                                        <SecondaryButton className="mt-s_2.5 ml-s_10 h-fit" onClick={() => submitForm()} label="Cambiar" />
                                    </div>
                                </Form>
                            )}
                        </Formik>
                    </section>

                    <section>
                        <h2 className="mb-1 text-xl font-bold leading-snug text-slate-800 dark:text-slate-100">
                            Cambio de email
                        </h2>
                        <div className="text-sm">Excepteur sint occaecat cupidatat non proident sunt in culpa qui officia.</div>

                        <Formik
                            initialValues={email_init}
                            onSubmit={(values) => {
                                console.log('values', values)
                            }}
                            validationSchema={email_validations}
                        >
                            {({ submitForm }) => (
                                <Form noValidate>
                                    <div className="flex flex-row">
                                        <FormLayoutBuilder rows={data_email} />
                                        <SecondaryButton className="mt-s_2.5 ml-s_10 h-fit" onClick={() => submitForm()} label="Cambiar" />
                                    </div>
                                </Form>
                            )}
                        </Formik>

                    </section>
                    <hr />
                    <section>
                        <h2 className="mb-1 text-xl font-bold leading-snug text-slate-800 dark:text-slate-100">Contraseña</h2>
                        <div className="text-sm">You can set a permanent password if you don't want to use temporary login codes.</div>
                        <div className="mt-5">
                            <SecondaryButton onClick={() => setRequestPass_Modal(true)} label="Solicita nueva contraseña" />
                        </div>
                    </section>

                    <hr />
                    <section>
                        {
                            signature.signature && (
                                <>
                                    <h2 className="mb-1 text-xl font-bold leading-snug text-slate-800 dark:text-slate-100">
                                        Firma de usuario
                                    </h2>
                                    <div className="text-sm">Excepteur sint occaecat cupidatat non proident sunt in culpa qui officia.</div>
                                </>
                            )
                        }

                        <div className={`w-full mx-auto ${!signature.signature && 'lg:w-1/2'}`}>

                            <SignatureSelector signature={signature.signature} updated_at={signature.updated_at} setSignature={() => signature_modal()} />

                        </div>

                    </section>


                </div>

            </div>

            <SignatureModal {...signature_selector_modal} />

            {
                requestPass_Modal && (
                    <FeedbackModal
                        labelAccept="Enviar"
                        type="info"
                        title="Solicitar nueva contraseña"
                        text="¿Estás seguro de solicitar una nueva contraseña?"
                        onClose={() => setRequestPass_Modal(false)}
                        onAccept={() => { }}
                        status={requestPass_Modal}
                    />
                 )
            }

        </>
    )
}
