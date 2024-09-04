import { ErrorMessage, useField } from "formik";
import { CheckBoxField_Props_I } from "./interfaces";
import { is_required } from "./Commons";



export const CheckBoxField = ({ label, className, ...props }: CheckBoxField_Props_I) => {

    const [field] = useField(props);

    // const isRequired = props.validation_rules?.some(rule => rule.type === "required");
     const isRequired = props.validation_rules?.some(rule => (is_required(rule.type))) || false;

    return (
        <div className={`  mb-s_10 lg:mb-0`} >

            <label className="flex items-center hover:cursor-pointer"  >
                <input type="checkbox" className="form-checkbox" {...field} {...props} />
                {
                    label.length > 0 && (
                        <span className="ml-2 text-sm font-medium text-slate-600 ">
                            {label}
                        </span>
                    )
                }
                {isRequired && <span className="text-rose-500">*</span>}
            </label>

            <ErrorMessage name={props.name} component='span' className="mt-1 text-xs text-rose-500" />
        </div>
    )
}

