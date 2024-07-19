

import { FC, useEffect } from "react";
import { DocumentSelector } from "../../../../../core/components";
import { LayoutRow_I } from '../../../../../core/components/forms/interfaces';
import { useFormInitData } from "../../../../../core/hooks";
import { useSignal, useSignals } from "@preact/signals-react/runtime";
import { useProfileStore } from "../../../store";


const identity_file: LayoutRow_I[] = [
    {
        fields: [
            {
                typeField: 'file',
                props: {
                    label: '',
                    name: 'identity_file',
                    type: 'file',
                    accept: 'document/pdf',
                    validation_rules: [
                        // {
                        //     type: 'required',
                        //     message: 'La foto de perfil es necesaria'
                        // },
                        {
                            type: "fileSize_5m",
                            message: "El archivo debe ser menor a 5MB"
                        },
                        {
                            type: "fileFormat_document",
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
                    label: '',
                    name: 'profesional_file',
                    type: 'file',
                    accept: 'document/pdf',
                    validation_rules: [
                        // {
                        //     type: 'required',
                        //     message: 'La foto de perfil es necesaria'
                        // },
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
            onLoading_profesional_file
        },
        emit_set_identity_file,
        emit_set_profesional_file
    } = useProfileStore();


    // const { initialValues: identity_file_initial, validation_rules: identity_file_validation } = useFormInitData<{ identity_file: File }>(identity_file);

    // const { initialValues: profesional_file_initial, validation_rules: profesional_file_validation } = useFormInitData<{ profesional_file: File }>(profesional_file);


    const onSelect_identity_file = (File: File) => {
        console.log('onSelect_identity_file', File);
        // emit_set_identity_file(File)
    }

    const onSelect_profesional_file = (File: File) => {
        console.log('onSelect_profesional_file', File);
        // emit_set_profesional_file(File)
    }

    useEffect(() => {
        isMounted.value = true;
    }, []);

    return (
        <div className="grow">
            {/* Panel body */}

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
                            name="Doc. Identidad" text=" dolor sit amet consectetur adipisicing elit. Sed neque aut et cumque, labo" />

                        <DocumentSelector
                            onSelect={(file) => onSelect_profesional_file(file)}
                            define_file={profesional_file}
                            isLoading={onLoading_profesional_file}
                            file_name="profesional_file"
                            name="Constancia profesional" text=" dolor sit amet consectetur adipisicing elit. Sed neque aut et cumque, labo" />

                    </div>

                </section>

            </div>

        </div>
    )
}
