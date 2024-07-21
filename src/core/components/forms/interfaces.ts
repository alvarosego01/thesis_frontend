
export interface ValidationsRule_Separate_I {
    [key: string]: ValidationRule_I[];
}

const type_array_default = [
    "required",
    "select_single_required",
    "select_multi_required",
    "notRequired",
    "conditional_required",
    "minLength",
    "maxLength",
    "email",
    "tel",
    "pattern",
    "min",
    "max",
    "custom",
    "url",
    "same_field",
    "fileFormat_document",
    "fileFormat_image",
    "fileFormat_video",
    "fileSize_5m",
    "fileSize_10m"
] as const;
export type Validations_Type = typeof type_array_default[number];

interface ConditionalRule {
    key: string; // La clave del campo del formulario sobre el que se basa la condición
    is: any; // El valor que activa la condición
    then: ValidationRule_I; // Regla a aplicar si se cumple la condición
    otherwise: ValidationRule_I; // Regla a aplicar si no se cumple la condición
}

export interface ValidationRule_I {
    type: Validations_Type;
    message?: string;
    value?: number | string;
    conditional?: ConditionalRule; // Añadido para soportar condiciones
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

export interface SelectValue_I<T = string> {
    value: T;
    label: string;
}

export interface SelectField_Props_I {
    label: string;
    name: string;
    placeholder?: string;
    items: SelectValue_I[];
    validation_rules?: ValidationRule_I[]
    icon?: string;
    parent_class?: string;
    [x: string]: any,
}

export interface SelectSpecialField_Props_I {
    label?: string;
    name: string;
    isMulti?: boolean;
    placeholder?: string;
    items: SelectValue_I[];
    value: SelectValue_I[];
    notFound?: string;
    validation_rules?: ValidationRule_I[]
    icon?: string;
    parent_class?: string;
    [x: string]: any,
}

export interface TextInputField_Props_I {
    label: string;
    name: string;
    disabled?: boolean;
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
    inlineErrors?: boolean;
    isLoading?: boolean;
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
        typeField: 'checkbox' | 'text' | 'select' | 'select_special' | 'textarea' | 'file';
        props: any;
    }[];
    grid_columns?: string
}


