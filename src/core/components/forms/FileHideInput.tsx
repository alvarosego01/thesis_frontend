import { FC, useEffect, useRef, useState } from "react";
import { FileHideInput_Props_I } from "./interfaces";
import { ErrorMessage, useField } from "formik";
import { PrimaryButton } from "../buttons/PrimaryButton";


export const FileHideInput: FC<FileHideInput_Props_I> = ({
    label,
    isLoading = false,
    inlineErrors = true,
    ...props
}) => {

    const fileInputRef = useRef<HTMLInputElement>(null);

    const [field, meta, helpers] = useField(props);

    const isRequired = props.validation_rules?.some(rule => rule.type === "required") || false;

    const handleFileChange = (event: any) => {

        const file = (props.multiple) ? event.target.files : event.target.files[0];

        helpers.setValue(file);

    };

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
            <div className="flex flex-col">
                <PrimaryButton
                    // disabled={isLoading}
                    isLoading={isLoading}
                    onClick={() => {
                        fileInputRef.current?.click()
                    }} label={`${label}`} />
                {
                    (meta.error && inlineErrors) && (
                        <span className="mt-1 text-xs text-rose-500">
                            {meta.error}
                        </span>
                    )
                }
            </div>
            {/* <ErrorMessage name={props.name} component='span' className="mt-1 text-xs text-rose-500" /> */}

        </>
    )
}
