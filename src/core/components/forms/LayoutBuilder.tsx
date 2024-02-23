import { CheckBoxField } from "./CheckBoxField"
import { SelectField } from "./SelectField"
import { TextInputField } from "./TextInputField"
import { LayoutRow_I, MySelect_Props_I } from "./interfaces"


export const LayoutBuilder = ({ rows }: {
    rows: LayoutRow_I[]
}) => {

    return (
        <>
            <div className="flex flex-col sm:items-center ">
                {
                rows.map((row, i) => {
                    return (
                        <div key={`row-${i}`} className="grid w-full grid-cols-1 m-0 gap-x-5 mb-s_25 lg:grid-cols-3">
                            {row.fields.map((field, j) => {

                                switch (field.type) {
                                    case 'text':
                                        return <div key={j} >
                                            <TextInputField {...field.props} />
                                        </div>
                                    case 'select':
                                        const f: MySelect_Props_I = field.props as MySelect_Props_I;
                                        return <div key={j} >
                                            <SelectField {...f} >
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
                                        </div>
                                    case 'checkbox':
                                        return <div key={j} >
                                            <CheckBoxField {...field.props} />
                                        </div>
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
