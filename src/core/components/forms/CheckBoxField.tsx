import { ErrorMessage, useField } from "formik";
import { CheckBoxField_Props_I } from "./interfaces";



export const CheckBoxField = ({ label, className, ...props }: CheckBoxField_Props_I) => {

    const [field] = useField(props);

    const isRequired = props.validation_rules?.some(rule => rule.type === "required");

    return (
        <div className={`  mb-s_10 lg:mb-0`} >
            <label >
                <input type="checkbox" {...field} {...props} />
                {label}
                {isRequired && <span className="text-rose-500">*</span>}
            </label>
            <ErrorMessage name={props.name} component='span' className="mt-1 text-xs text-rose-500" />
        </div>
    )
}

