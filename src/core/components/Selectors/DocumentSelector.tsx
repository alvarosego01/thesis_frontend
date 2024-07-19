import { FC, useEffect, useRef } from "react";

import { Form, FormikProvider, useFormik } from "formik";
import { useSignal } from "@preact/signals-react";
import { useSignals } from "@preact/signals-react/runtime";
import { LayoutRow_I } from "../forms/interfaces";
import { useFormInitData } from "../../hooks";
import { PrimaryButton } from "..";

interface Props_I {
    onSelect: (file: File) => void;
    name: string;
    text: string;
    isLoading: boolean;
    define_file: LayoutRow_I[]
    [x: string]: any;

}

export const DocumentSelector: FC<Props_I> = ({
    name = 'Documento',
    text = 'lorem ipsum dolor sit amet consectetur adipisicing elit. Id similique, minus qui magni adipisci voluptate placeat ullam exercitationem delectus,',
    isLoading = false,
    define_file
}) => {

    useSignals();
    const isMounted = useSignal(false);
    const fileInputRef = useRef<HTMLInputElement>(null);

    const { initialValues: file_initial, validation_rules: file_validation } = useFormInitData(define_file);

    const formik = useFormik({
        initialValues: file_initial,
        onSubmit: (values) => {
            console.log('values emit file', values);
        },
        validationSchema: file_validation,
        validateOnChange: true
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

    const onChangeDocument = ({ target }: any) => {

        if (!target.files[0]) return;

        // resetForm();
        // setTimeout( async () => {
        //     setValues(values['File'] = target.files[0]);
        //     validateField('File')
        //     validateForm();
        // }, 100);

    }

    const openSelector = () => {

        resetForm();

        fileInputRef.current?.click();

        return
    }

    const show_errors = () => {

        if (errors) {
            // console.log('errors');
            for (const key in errors) {

                return (
                    <span className="block w-full mx-auto mt-1 text-xs text-center text-rose-500">
                        {String(errors['File'])}
                        {/* errors */}
                    </span>
                )
            }
        } else {
            return null
        }

    }

    useEffect(() => {

        if (isMounted.value === false) return;

        if(values?.File?.size > 0){
            console.log('values', values.File);

            submitForm();

        }

    }, [values]);

    useEffect(() => {
        isMounted.value = true;
    }, []);


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
                                    name="File"
                                    // value={values[file_name]}
                                    accept="application/pdf"
                                    // multiple
                                    style={{
                                        display: 'none'
                                    }}
                                />

                                <div className="flex justify-end w-full">
                                    <PrimaryButton isLoading={isLoading} onClick={openSelector} label="Cargar archivo" className="ml-3" />
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
