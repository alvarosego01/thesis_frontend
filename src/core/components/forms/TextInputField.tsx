import { TextInputField_Props_I } from "./interfaces";
import { ErrorMessage, useField } from "formik";


export const TextInputField = ({ label, parent_className, ...props }: TextInputField_Props_I) => {

    const [field, meta] = useField(props);

    const isRequired = props.validation_rules?.some(rule => rule.type === "required") || false;

    const fieldState = (): string => {

        if (meta.error && meta.touched) return 'border-rose-300';

        if (meta.touched) return 'border-emerald-300';

        return '';
    }

    return (
        <div className={`${parent_className || ''} mb-s_10 lg:mb-0`} >
            <label className="block mb-1 text-sm font-medium" htmlFor={props.id || props.name}>     {label}
                {isRequired && <span className="text-rose-500">*</span>}
            </label>
            <div className="relative">
                <input type="text" className={`w-full form-input ${fieldState()} ${props?.icon && 'pl-s_35'}`} {...field} {...props} />
                {
                    props?.icon && (
                        <div className="absolute inset-0 right-auto flex items-center pointer-events-none pl-s_10">
                            <i className={`${props.icon} text-20p`}></i>
                        </div>
                    )
                }

            </div>
            <ErrorMessage name={props.name} component='div' className="mt-1 text-xs text-rose-500" />
        </div>
    )
}
