

import Flatpickr from 'react-flatpickr';

import { FC } from 'react';
import { DatePicker_Field_Props_I } from './interfaces';

import { ErrorMessage, useField } from "formik";
import { is_required } from './Commons';

export const DatePicker: FC<DatePicker_Field_Props_I> = ({
    label,
    parent_class,
    disabled = false,
    align = '',
    visible = true,
    range = false,
    ...props }) => {

    const mode: string = range ? 'range' : 'single';

    const isRequired = props.validation_rules?.some(rule => (is_required(rule.type))) || false;

    const options: any = {
        mode: mode,
        static: true,
        monthSelectorType: 'static',
        dateFormat: 'M j, Y',
        defaultDate: [new Date().setDate(new Date().getDate() - 6), new Date()],
        prevArrow: '<svg class="fill-current" width="7" height="11" viewBox="0 0 7 11"><path d="M5.4 10.8l1.4-1.4-4-4 4-4L5.4 0 0 5.4z" /></svg>',
        nextArrow: '<svg class="fill-current" width="7" height="11" viewBox="0 0 7 11"><path d="M1.4 10.8L0 9.4l4-4-4-4L1.4 0l5.4 5.4z" /></svg>',
        onReady: (selectedDates: any, dateStr: string, instance: any) => {
            instance.element.value = dateStr.replace('-', '-');
            const customClass = (align) ? align : '';
            instance.calendarContainer.classList.add(`flatpickr-${customClass}`);
        },
        onChange: (selectedDates: any, dateStr: string, instance: any) => {
            instance.element.value = dateStr.replace('-', '-');
        },
    }

    const [field, meta, helpers] = useField(props);

    const fieldState = (): string => {

        return '';
        if (meta.error && meta.touched) return 'border-rose-300';
        if (meta.touched) return 'border-emerald-300';
        return '';

    }

    return (
        <>
            {meta.value}
            <div className={`${parent_class || ''} mb-s_10 lg:mb-0`} >
                {
                    label && (
                        <label className="block mb-1 text-sm font-medium" htmlFor={props.id || props.name}>     {label}
                            {isRequired && <span className="text-rose-500">*</span>}
                        </label>
                    )
                }
                <div className="relative">
                    <Flatpickr
                        className={`pl-9 dark:bg-gray-800 text-gray-600 hover:text-gray-800 dark:text-gray-300 dark:hover:text-gray-100 font-medium
                     w-full form-input ${fieldState()} ${props?.icon && 'pl-s_35'}
                     `}
                        options={options}
                        required={isRequired}
                        {...field}
                        disabled={disabled} {...props}
                    />
                    {/* {...field} required={isRequired} disabled={disabled} {...props} */}
                    <div className="absolute inset-0 right-auto flex items-center pointer-events-none">
                        <svg className="ml-3 text-gray-400 fill-current dark:text-gray-500" width="16" height="16" viewBox="0 0 16 16">
                            <path d="M5 4a1 1 0 0 0 0 2h6a1 1 0 1 0 0-2H5Z" />
                            <path d="M4 0a4 4 0 0 0-4 4v8a4 4 0 0 0 4 4h8a4 4 0 0 0 4-4V4a4 4 0 0 0-4-4H4ZM2 4a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V4Z" />
                        </svg>
                    </div>
                </div>
                <ErrorMessage name={props.name} component='span' className="mt-1 text-xs text-rose-500" />
            </div>
        </>
    );
}
