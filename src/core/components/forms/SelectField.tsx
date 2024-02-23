import { ErrorMessage, useField } from "formik";
import { MySelect_Props_I } from "./interfaces";


export const SelectField = ({label, ...props}: MySelect_Props_I) => {

    // extraer context de formik
    const [field] = useField(props);

    const isRequired = props.validation_rules?.some(rule => rule.type === "required");


    return (
        <>
           <label className="block mb-1 text-sm font-medium" htmlFor={props.id || props.name}>     {label}
                {isRequired && <span className="text-rose-500">*</span>}
            </label>
            <select className="w-full form-select" {...field} {...props} />
               <ErrorMessage name={ props.name } component='div' className="mt-1 text-xs text-rose-500" />

        </>
    )
}
