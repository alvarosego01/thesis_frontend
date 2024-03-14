
import { ErrorMessage, useField } from 'formik';
import { FC, useState } from 'react'
import Select, { components, GroupBase, NoticeProps } from 'react-select'

import { SelectSpecialField_Props_I, SelectValue_I } from './interfaces';
import makeAnimated from 'react-select/animated';



interface SelectOption {
    value: string;
    label: string;
}

const NoOptionsMessage = (
    props: NoticeProps<SelectOption, boolean, GroupBase<SelectOption>>,
) => {

    return (
        <div content="Custom NoOptionsMessage Component">
            <components.NoOptionsMessage {...props} >
                No hay más opciones
            </components.NoOptionsMessage>
        </div>
    );
};

export const SelectSpecialField: FC<SelectSpecialField_Props_I> = ({
    label,
    className,
    items,
    value,
    parent_class,
    notFound,
    ...props
}) => {

    const [field, meta, helpers] = useField(props);
    const options = [...items];

    const isRequired = props.validation_rules?.some(rule => rule.type === "required");

    const fieldState = (): string => {

        if (meta.error && meta.touched) return 'border-rose-300';

        if (meta.touched) return 'border-emerald-300';

        return '';

    }

    const [values, setValues] = useState<SelectValue_I[]>( [...value] || [])


    const onChange = (value_change: SelectValue_I[]) => {

        if (props.isMulti) {
            setValues( value_change );
            helpers.setValue(value_change);
            helpers.setTouched(true);

        } else {
            // const aux: SelectValue_I = value_change;
            setValues(value_change);
            console.log('que es value_change', value_change);
            helpers.setValue(values);
            helpers.setTouched(true);
        }

    }

    const animatedComponents = makeAnimated();

    const customComponents = {
        ...animatedComponents,
        NoOptionsMessage
    };

    return (
        <div className={`${parent_class || ''} mb-s_10 lg:mb-0`} >
            {
                label && (
                    <label className="block mb-1 text-sm font-medium" htmlFor={props.id || props.name}>     {label}
                        {isRequired && <span className="text-rose-500">*</span>}
                    </label>
                )
            }
            <Select
                // isMulti
                options={options}
                components={customComponents}
                className={`SelectMultipleField ${fieldState()}`}
                classNamePrefix="SelectMultipleField_select"
                placeholder={props.placeholder}
                {...field}
                {...props}
                onChange={onChange}
            />
            <ErrorMessage name={props.name} component='span' className="mt-1 text-xs text-rose-500" />
        </div>
    )
}
