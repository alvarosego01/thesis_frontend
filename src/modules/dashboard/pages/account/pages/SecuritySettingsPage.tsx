import { Form, Formik } from "formik"
import { FormLayoutBuilder, SecondaryButton } from "../../../../../core/components"
import { LayoutRow_I } from "../../../../../core/components/Forms/interfaces"
import { useFormInitData } from "../../../../../core/hooks"
import { SignatureSelector } from "../Components"
import { useState } from "react"
import { SignatureModel_I } from "../../../Interfaces"


const data_email: LayoutRow_I[] = [
    {
        fields: [
            {
                typeField: 'text',
                props: {
                    parent_className: 'w-full mb-0',
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
                    parent_className: 'w-full mb-0',
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

export const SecuritySettingsPage = () => {

    const { initialValues: email_init, validation_rules: email_validations } = useFormInitData(data_email);

    const { initialValues: username_init, validation_rules: username_validations } = useFormInitData(data_userame);

    const [signature] = useState<SignatureModel_I>({
        signature: '',
        updated_at: ''
    })

    return (
        <div className="grow">
            {/* Panel body */}

            <div className="p-6 space-y-6">
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
                        <SecondaryButton onClick={() => { }} label="Solicita nueva contraseña" />
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

                        <SignatureSelector signature={signature.signature} updated_at={signature.updated_at} setSignature={() => { }} />

                    </div>

                </section>


            </div>

        </div>
    )
}
