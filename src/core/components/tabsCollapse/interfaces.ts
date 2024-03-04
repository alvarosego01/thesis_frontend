


export interface TCL_Tabs_I {
    title: string;
    icon?: {
        type: 'img' | 'icon',
        content: string;
    };
    children: React.ReactNode;
    onClick?: () => void;
}
