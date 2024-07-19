

import { FC, useEffect } from "react";
import { DocumentSelector } from "@components/index";
import { LayoutRow_I } from '@components/forms/interfaces';
import { useSignal, useSignals } from "@preact/signals-react/runtime";
import { useProfileStore } from "../../../store";

const identity_file: LayoutRow_I[] = [
    {
        fields: [
            {
                typeField: 'file',
                props: {
                    label: 'Documento de identidad',
                    name: 'File',
                    type: 'file',
                    accept: '.pdf, .doc, .docx',
                    validation_rules: [
                        {
                            type: "fileSize_5m",
                            message: "El archivo debe ser menor a 5MB"
                        },
                        {
                            type: "fileFormat_document",
                            // type: "fileFormat_image",
                            message: "El archivo debe ser un documento PDF | DOC | DOCX"
                        }
                    ]
                }
            }
        ],
    }
];

const profesional_file: LayoutRow_I[] = [
    {
        fields: [
            {
                typeField: 'file',
                props: {
                    label: 'Constancia profesional',
                    name: 'File',
                    type: 'file',
                    accept: '.pdf, .doc, .docx',
                    validation_rules: [

                        {
                            type: "fileSize_5m",
                            message: "El archivo debe ser menor a 5MB"
                        },
                        {
                            type: "fileFormat_document",
                            message: "El archivo debe ser un documento PDF"
                        }
                    ]
                }
            }
        ],
    }
];

export const CredentialsPage: FC = () => {

    useSignals();
    const isMounted = useSignal(false);

    const {
        state: {
            onLoading_identity_file,
            onLoading_profesional_file,
            profile: {
                credentials
            }
        },
        emit_set_identity_file,
        emit_set_profesional_file
    } = useProfileStore();

    const onSelect_identity_file = (File: File) => {
        emit_set_identity_file(File)
    }

    const onSelect_profesional_file = (File: File) => {
        // console.log('onSelect_profesional_file', File);
        emit_set_profesional_file(File)
    }

    useEffect(() => {
        isMounted.value = true;
    }, []);

    return (
        <div className="grow">

            <div className="p-5 space-y-5">
                <h2 className="mb-5 text-2xl font-bold text-slate-800 dark:text-slate-100">
                    Credenciales
                </h2>

                <section>

                    <h2 className="mb-1 text-xl font-bold leading-snug text-slate-800 dark:text-slate-100">
                        Documentos
                    </h2>
                    <div className="text-sm mb-s_25">
                        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sed neque aut et cumque, labo
                    </div>
                    <div className="grid w-full grid-cols-1 gap-y-5 lg:grid-cols-2 lg:gap-y-0 gap-x-5">

                        <DocumentSelector
                            onSelect={(file) => onSelect_identity_file(file)}
                            define_file={identity_file}
                            isLoading={onLoading_identity_file}
                            doc_src={credentials?.identity_file?.src || ''}
                            name="Doc. Identidad" text=" dolor sit amet consectetur adipisicing elit. Sed neque aut et cumque, labo" />

                        <DocumentSelector
                            onSelect={(file) => onSelect_profesional_file(file)}
                            define_file={profesional_file}
                            isLoading={onLoading_profesional_file}
                            doc_src={credentials?.profesional_file?.src || ''}
                            name="Constancia profesional" text=" dolor sit amet consectetur adipisicing elit. Sed neque aut et cumque, labo" />

                    </div>

                </section>

            </div>

        </div>
    )
}
