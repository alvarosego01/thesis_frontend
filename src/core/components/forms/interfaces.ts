
export interface ValidationRule_I {
    type: "required" | "minLength" | "maxLength" | "email" | "tel" | "pattern" | "min" | "max" | "custom" | "url" | "same_field" | "fileFormat_document" | "fileFormat_image" | "fileSize_5m";
    message?: string;
    value?: number | string;
}

export interface FieldValue_I {
    // field: string;
    // value: string
     [x: string]: any,
}

export interface CheckBoxField_Props_I {
    label: string;
    name: string;
    validation_rules?: ValidationRule_I[];
    parent_class?: string;
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
    parent_class?: string;
    [x: string]: any,
}

export interface TextInputField_Props_I {
    label: string;
    name: string;
    type?: 'text' | 'email' | 'password' | 'tel';
    placeholder?: string;
    icon?: string;
    value?: string;
    validation_rules?: ValidationRule_I[];
    parent_class?: string;
    [x: string]: any,
}


export interface FileHideInput_Props_I {
    // ref: React.RefObject<HTMLInputElement>;
    multiple: boolean;
    name: string;
    value: any;
    label: string;
    type: 'file';
    accept: string;
    validation_rules?: ValidationRule_I[];
    // parent_class?: string;
    [x: string]: any,
}


export interface TextAreaField_Props_I {
    label: string;
    name: string;
    placeholder?: string;
    icon?: string;
    validation_rules?: ValidationRule_I[];
    parent_class?: string;
    [x: string]: any,
}

export interface LayoutRow_I {
    fields: {
        typeField: 'checkbox' | 'text' | 'select' | 'textarea' | 'file';
        props: any;
    }[];
    grid_columns?: string
}


