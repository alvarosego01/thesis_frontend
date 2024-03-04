import { FC, useEffect, useRef } from "react";

import { PrimaryButton } from "../buttons/PrimaryButton";
import { Form, FormikProvider, useFormik } from "formik";

interface DocumentSelector_Props_I {
    name: string;
    text: string;
    file_name: string;
    initialValues: any;
    validation_rules: any;
    [x: string]: any,

}

export const DocumentSelector: FC<DocumentSelector_Props_I> = ({
    name = 'Documento',
    text = 'lorem ipsum dolor sit amet consectetur adipisicing elit. Id similique, minus qui magni adipisci voluptate placeat ullam exercitationem delectus,',
    initialValues,
    validation_rules,
    file_name
    // onChange,
    // onView
}) => {

    const fileInputRef = useRef<HTMLInputElement>(null);

    const formik = useFormik({
        validateOnChange: true,
        initialValues: initialValues,
        onSubmit: (values) => {
            console.log('values', values);
        },
        validationSchema: validation_rules
    });

    const {
        values,
        submitForm,
        errors,
        setValues,
        isValid,
        resetForm,
        validateForm,
        validateField,
    } = formik;

    useEffect(() => {

        if (isValid) {
            // Se emite la acción de subir la imagen
            // console.log('valid');
            // console.log('values', values)
        } else {
            // console.log('invalid')
        }

    }, [values, isValid]);

    const onChangeDocument = ({ target }: any) => {

        if (!target.files[0]) return;

        resetForm();
        setTimeout(() => {

            setValues(values[file_name] = target.files[0]);
            validateField(file_name);
            validateForm();
        }, 100);

    }

    const openSelector = () => {

        resetForm();

        fileInputRef.current?.click();

        return
    }

    const show_errors = () => {

        if (errors) {
            for (const key in errors) {

                return (
                    <span className="block w-full mx-auto mt-1 text-xs text-center text-rose-500">
                        {String(errors[key])}
                    </span>
                )
            }
        } else {
            return null
        }

    }

    return (
        <>
            <div className="w-full bg-white border rounded-sm shadow-lg dark:bg-slate-800 border-slate-200 dark:border-slate-700">
                <div className="flex flex-col h-full">
                    {/* Card top */}
                    <div className="p-5 grow">
                        <div className="flex items-start justify-between">
                            {/* Image + name */}
                            <header>
                                <div className="flex mb-2">
                                    <div className="flex items-center justify-center icon mr-s_10">
                                        <i className='bx bxs-file-doc text-50p'></i>
                                    </div>
                                    <div className="flex items-center">
                                        <h2 className="justify-center text-xl font-semibold leading-normal">
                                            {name}
                                        </h2>
                                    </div>
                                </div>
                            </header>

                        </div>
                        {/* Bio */}
                        <div className="mt-2">
                            <div className="text-sm leading-normal">
                                {text}
                            </div>
                        </div>
                    </div>
                    {/* Card footer */}
                    <div className="flex flex-col px-6 py-5 border-t border-slate-200 dark:border-slate-700">

                        <FormikProvider value={formik}>
                            <Form noValidate className="w-full">

                                <input
                                    onChange={onChangeDocument}
                                    ref={fileInputRef}
                                    type="file"
                                    name={file_name}
                                    // value={values[file_name]}
                                    accept="application/pdf"
                                    // multiple
                                    style={{
                                        display: 'none'
                                    }}
                                />

                                <div className="flex justify-end w-full">
                                    {/* <SecondaryButton onClick={() => {}} label="Ver documento" /> */}
                                    <PrimaryButton onClick={openSelector} label="Cargar archivo" className="ml-3" />
                                </div>
                                {
                                    show_errors()
                                }
                                {/*
                                <ErrorMessage name={file_name} component='span' className="mt-1 text-xs text-rose-500" /> */}


                            </Form>
                        </FormikProvider>


                    </div>
                </div>
            </div>

        </>
    )
}
