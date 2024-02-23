import { ErrorMessage, useField } from "formik";
import { MyCheckBox_Props_I } from "./interfaces";



export const CheckBoxField = ({ label, ...props }: MyCheckBox_Props_I) => {

    // extraer context de formik
    const [field] = useField(props);

    const isRequired = props.validation_rules?.some(rule => rule.type === "required");

    return (
        <>
            <label >
                <input type="checkbox" {...field} {...props} />
                {label}
                {isRequired && <span className="text-rose-500">*</span>}
            </label>
            <ErrorMessage name={props.name} component='div' className="mt-1 text-xs text-rose-500" />
        </>
    )
}

