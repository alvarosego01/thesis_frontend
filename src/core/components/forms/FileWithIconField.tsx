import { FC, useEffect, useRef, useState } from "react";
import { File_wIconField_Props_I, FileHideInput_Props_I } from "./interfaces";
import { ErrorMessage, useField } from "formik";
import { PrimaryButton } from "../buttons/PrimaryButton";
import { is_required } from "./Commons";


export const FileWithIconField: FC<File_wIconField_Props_I> = ({
    label,
    isLoading = false,
    inlineErrors = true,
    side = 'vertical',
    icon,
    ...props
}) => {

    const fileInputRef = useRef<HTMLInputElement>(null);

    const [field, meta, helpers] = useField(props);

    const isRequired = props.validation_rules?.some(rule => (is_required(rule.type))) || false;

    const handleFileChange = (event: any) => {

        const file = (props.multiple) ? event.target.files : event.target.files[0];

        helpers.setValue(file);

    };

    console.log(meta.value);


    return (
        <>
            <input
                ref={fileInputRef}
                {...field}
                {...props}
                style={{
                    display: 'none'
                }}
                value={undefined}
                onChange={handleFileChange}
            />

            {
                (side === 'vertical') && (
                    <div className="flex flex-col items-center justify-center w-auto gap-2">

                        <div className="text-6xl h-14 icon">
                            {
                                (icon) ? (<i className={icon} ></i>) : (<i className='bx bx-cloud-upload' ></i>)
                            }
                        </div>

                        <label className="mb-1 text-sm font-semibold">
                            {label}
                        </label>

                        <PrimaryButton
                            disabled={isLoading}
                            isLoading={isLoading}
                            onClick={() => {
                                fileInputRef.current?.click()
                            }} label={`Seleccionar`} />
                        {
                            (meta.error && inlineErrors) && (
                                <span className="mt-1 text-xs text-rose-500">
                                    {meta.error}
                                </span>
                            )
                        }
                        {
                            (meta.value?.name) && (
                                <small className="block w-full px-5 mt-2 text-xs text-center break-words">
                                    {meta.value.name}
                                </small>
                            )
                        }

                    </div>
                )
            }


        </>
    )
}
