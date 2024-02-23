import { ErrorMessage, useField } from "formik";
import { MyTextInput_Props_I } from "./interfaces";


export const TextInputField = ({ label, ...props }: MyTextInput_Props_I) => {

    const [field] = useField(props);

    const isRequired = props.validation_rules?.some(rule => rule.type === "required") || false;

    return (
       <>
            <label className="block mb-1 text-sm font-medium" htmlFor={props.id || props.name}>     {label}
                {isRequired && <span className="text-rose-500">*</span>}
            </label>
            <input type="text" className="w-full form-input" {...field} {...props} />
            <ErrorMessage name={ props.name } component='div' className="mt-1 text-xs text-rose-500" />
            {/* {
                meta.touched && meta.error && (
                    <span className="error">{meta.error}</span>
                )
            } */}
        </>
    )
}
