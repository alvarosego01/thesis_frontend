


export interface TCL_Tabs_I {
    title: string;
    icon?: {
        type: 'img' | 'icon',
        content: string;
    };
    extra_header?: React.ReactNode;
    children: React.ReactNode;
    onClick?: () => void;
}
