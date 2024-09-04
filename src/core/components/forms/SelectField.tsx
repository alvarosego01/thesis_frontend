import { ErrorMessage, useField } from "formik";
import { SelectField_Props_I } from "./interfaces";
import { is_required } from "./Commons";


export const SelectField = ({ label, className, ...props }: SelectField_Props_I) => {

    // extraer context de formik
    const [field, meta, helpers] = useField(props);

    // const isRequired = props.validation_rules?.some(rule => rule.type === "required");
            const isRequired = props.validation_rules?.some(rule => (is_required(rule.type))) || false;

    const fieldState = (): string => {

        if (meta.error && meta.touched) return 'border-rose-300';
        if (meta.touched) return 'border-emerald-300';

        return '';

    }

    return (
        <div className={`  mb-s_10 lg:mb-0`} >
            <label className="block mb-1 text-sm font-medium" htmlFor={props.id || props.name}>     {label}
                {isRequired && <span className="text-rose-500">*</span>}
            </label>
            <select className={`w-full form-select ${fieldState()}`} {...field} {...props} />
            <ErrorMessage name={props.name} component='span' className="mt-1 text-xs text-rose-500" />
        </div>
    )
}
