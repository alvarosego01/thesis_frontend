import { FC, useEffect } from "react";

import { Form, FormikProvider, useFormik } from "formik";
import { useSignal } from "@preact/signals-react";
import { useSignals } from "@preact/signals-react/runtime";
import { LayoutRow_I } from "../forms/interfaces";
import { useFormInitData } from "../../hooks";
import { FileHideInput, OutlineButton } from "..";
import { Navigate } from "react-router-dom";

interface Props_I {
    onSelect: (file: File) => void;
    name: string;
    text: string;
    isLoading: boolean;
    define_file: LayoutRow_I[];
    doc_src?: string;
    [x: string]: any;

}

export const DocumentSelector: FC<Props_I> = ({
    name = 'Documento',
    text = 'lorem ipsum dolor sit amet consectetur adipisicing elit. Id similique, minus qui magni adipisci voluptate placeat ullam exercitationem delectus,',
    isLoading = false,
    define_file,
    doc_src = '',
    onSelect,
}) => {

    useSignals();
    const isMounted = useSignal(false);

    const { initialValues: file_initial, validation_rules: file_validation } = useFormInitData(define_file);

    const formik = useFormik({
        initialValues: file_initial,
        onSubmit: (values, helpers) => {
            helpers.validateForm();
            // emit_set_profile_pic(values.profile_pic);
            onSelect(values.File);
        },
        validationSchema: file_validation,
        validateOnChange: true
    });

    const {
        values: values_file,
        submitForm,
        errors
    } = formik;

    useEffect(() => {

        if (isMounted.value === false) return;

        if (values_file?.File?.size > 0) {
            submitForm();
        }

    }, [values_file]);

    const show_errors = () => {

        if (errors) {
            for (const key in errors) {
                return (
                    <span className="block w-full mx-auto mt-1 text-xs text-center text-rose-500">
                        {String(errors['File'])}
                    </span>
                )
            }
        } else {
            return null
        }

    }

    const download_doc = () => {

        window.open(doc_src, '_blank');

    }

    useEffect(() => {
        isMounted.value = true;
    }, []);

    return (
        <>
            <div className="w-full bg-white border rounded-sm shadow-lg dark:bg-slate-800 border-slate-200 dark:border-slate-700">
                <div className="flex flex-col h-full">

                    <div className="p-5 grow">
                        <div className="flex items-start justify-between">

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

                        <div className="mt-2">
                            <div className="text-sm leading-normal">
                                {text}
                            </div>
                        </div>
                    </div>

                    <div className="flex flex-col px-6 py-5 border-t border-slate-200 dark:border-slate-700">

                        <FormikProvider value={formik}>
                            <Form noValidate className="w-full">

                                <div className="relative flex justify-end w-full">
                                    {
                                        (doc_src !== '') && (
                                            <div className="absolute top-0 bottom-0 left-0 tooltip" data-tip="Visualizar documento">
                                                <OutlineButton  icon="bx bx-download" onClick={download_doc} />
                                            </div>
                                        )
                                    }
                                    <FileHideInput {...define_file[0].fields[0].props} isLoading={isLoading} inlineErrors={false} />
                                </div>
                                {
                                    show_errors()
                                }

                            </Form>
                        </FormikProvider>

                    </div>
                </div>
            </div>

        </>
    )
}
