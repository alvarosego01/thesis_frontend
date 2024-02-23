
export interface ValidationRule_I {
    type: "required" | "minLength" | "maxLength" | "email" | "tel" | "pattern" | "min" | "max" | "custom";
    message: string;
    value?: number | string;
}

export interface MyCheckBox_Props_I {
    label: string;
    name: string;
    [x: string]: any,
    validation_rules?: ValidationRule_I[]
}

export interface MySelect_Props_I {
    label: string;
    name: string;
    placeholder?: string;
    items: {
        value: string;
        label: string;
    }[];
    [x: string]: any,
    validation_rules?: ValidationRule_I[]
}

export interface MyTextInput_Props_I {
    label: string;
    name: string;
    type?: 'text' | 'email' | 'password' | 'tel';
    placeholder?: string;
    [x: string]: any,
    validation_rules?: ValidationRule_I[]
}

export interface LayoutRow_I {
    fields: {
        type: 'checkbox' | 'text' | 'select';
        props: MyCheckBox_Props_I | MySelect_Props_I | MyTextInput_Props_I;
    }[]
}


