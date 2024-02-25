
import { Form, Formik, useFormik } from 'formik';
import { BlankModal, FormLayoutBuilder } from '../../../../../../core/components';
import { LayoutRow_I } from '../../../../../../core/components/forms/interfaces';
import { useFormInitData } from '../../../../../../core/hooks';
import { Handle_Signature_Modal_I } from '../../../../../../core/store/reducers/ui/uiActions';

const formData: LayoutRow_I[] = [
    {
        fields: [
            {
                typeField: 'text',
                props: {
                    label: '',
                    name: 'name',
                    type: 'text',
                    validation_rules: [

                        {
                            type: "minLength",
                            value: 3,
                            message: "El nombre debe tener al menos 3 caracteres"
                        }
                    ]
                }
            },

        ],
        grid_columns: 'grid-cols-1'
    }
]

export const SignatureModal = ({
    status,
    text
}: Handle_Signature_Modal_I) => {

    const { initialValues, validation_rules } = useFormInitData(formData);

    return (
        <>
            {
                status && (
                    <BlankModal status={status}  >
                        {/* Modal header */}
                        <div className="mb-2 text-center">
                            {/* Icon */}
                            <div className="mb-3">
                                <div className="inline-flex items-center justify-center w-10 h-10 rounded-full mb-s_10 bg-gradient-to-t from-slate-200 to-slate-100 dark:from-slate-700 dark:to-slate-800">
                                    <i className={`bx bx-edit text-25p`}></i>
                                </div>
                            </div>
                            <div className="text-lg font-semibold text-slate-800 dark:text-slate-100">
                                Definición de firma
                            </div>
                        </div>
                        {/* Modal content */}
                        <div className="text-center">

                            <div className="mb-6 text-sm">
                                Semper eget duis at tellus at urna condimentum mattis pellentesque
                            </div>

                             <Formik
                                initialValues={initialValues}
                                onSubmit={(values) => {
                                    console.log('values', values)
                                }}
                                validationSchema={validation_rules}>
                                {
                                    ({
                                        submitForm,
                                        values,
                                    }) => (
                                        <Form noValidate>
                                            <pre>
                                                {JSON.stringify(values, null, 2)}
                                            </pre>
                                            <FormLayoutBuilder rows={formData} />
                                        </Form>
                                    )
                                }
                            </Formik>

                            <div className="mt-3 text-xs italic text-slate-500">
                                ISemper eget duis at tellus at urna condimentum mattis pellentesque
                            </div>

                        </div>
                    </BlankModal>
                )
            }
        </>
    )
}
