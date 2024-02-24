
import { CheckBoxField, SelectField, TextAreaField, TextInputField } from "..";
import { LayoutRow_I, SelectField_Props_I } from "./interfaces"


export const FormLayoutBuilder = ({ rows }: {
    rows: LayoutRow_I[]
}) => {



    return (
        <>
            <div className="flex flex-col sm:items-center ">
                {
                rows.map((row, i) => {
                    return (
                        <div key={`row-${i}`} className={`grid w-full grid-cols-1 m-0 gap-x-5 lg:mb-s_15 last:mb-0 ${row.grid_columns} `} >
                            {row.fields.map((field, j) => {

                                switch (field.typeField) {
                                    case 'text':
                                        return <TextInputField key={j} {...field.props} />
                                    case 'select':
                                        const f: SelectField_Props_I = field.props as SelectField_Props_I;
                                        return <SelectField key={j} {...f} >
                                                {
                                                    f.placeholder && <option value="">
                                                        {f.placeholder}
                                                    </option>
                                                }
                                                {
                                                    f.items.map(({ value, label }) => (
                                                        <option key={value} value={label}>
                                                            {label}
                                                        </option>
                                                    ))
                                                }
                                            </SelectField>
                                    case 'checkbox':
                                        return  <CheckBoxField key={j} {...field.props} />
                                    case 'textarea':
                                        return  <TextAreaField key={j} {...field.props} />
                                    default:
                                        return <div key={j}>No field</div>
                                }
                            })}
                        </div>
                    )
                })}
            </div>
        </>

    )

}
