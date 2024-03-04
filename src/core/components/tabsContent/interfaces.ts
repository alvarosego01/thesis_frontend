


export interface TC_Tabs_I {
    title: string;
    icon?: {
        type: 'img' | 'icon',
        content: string;
    };
    text?: string;
    onClick?: () => void;
}

export interface TC_Content_I {
    title: string;
    content: React.ReactNode;
    // onClick: () => void;
}