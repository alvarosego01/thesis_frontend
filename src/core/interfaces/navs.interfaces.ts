


const Type_Link_Default = [

    // "primary",
    // "secondary",
    // "danger",
    // "warning",
    // "success",
    // "info",

    "regular",

    "primary_button",
    "secondary_button",

] as const;
export type Link_Type = typeof Type_Link_Default[number];

export interface NavModel<T = string>{

    title: string;
    parent?: string;
    icon?: {
        type: 'icon' | 'image';
        icon: string;
    },
    action: {
        type: 'link' | 'function';
        action?: T;
    },
    type: Link_Type;
    line?: {
        top?: boolean;
        bottom?: boolean;
    }
    children?: NavModel<T>[]

}

