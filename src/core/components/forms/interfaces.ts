
export interface ValidationRule_I {
    type: "required" | "minLength" | "maxLength" | "email" | "tel" | "pattern" | "min" | "max" | "custom" | "url" | "same_field";
    message: string;
    value?: number | string;
}

export interface CheckBoxField_Props_I {
    label: string;
    name: string;
    validation_rules?: ValidationRule_I[];
    parent_className?: string;
    [x: string]: any,
}

export interface SelectField_Props_I {
    label: string;
    name: string;
    placeholder?: string;
    items: {
        value: string;
        label: string;
    }[];
    validation_rules?: ValidationRule_I[]
    icon?: string;
    parent_className?: string;
    [x: string]: any,
}

export interface TextInputField_Props_I {
    label: string;
    name: string;
    type?: 'text' | 'email' | 'password' | 'tel';
    placeholder?: string;
    icon?: string;
    validation_rules?: ValidationRule_I[];
    parent_className?: string;
    [x: string]: any,
    formik?: any
}

export interface TextAreaField_Props_I {
    label: string;
    name: string;
    placeholder?: string;
    icon?: string;
    validation_rules?: ValidationRule_I[];
    parent_className?: string;
    [x: string]: any,
}

export interface LayoutRow_I {
    fields: {
        typeField: 'checkbox' | 'text' | 'select' | 'textarea';
        props: CheckBoxField_Props_I | SelectField_Props_I | TextInputField_Props_I;
    }[];
    grid_columns: string
}


