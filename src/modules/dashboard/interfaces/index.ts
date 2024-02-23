

export interface SidebarMenuLink_I {
    title: string;
    icon?: {
        type: 'img' | 'icon',
        content: string;
    };
    link: string;
    activeCondition: {
        type: 'route' | 'flag',
        content: string;
    };
    subMenu?: SidebarMenuLink_I[];
}

interface SingleItem_I {
    title: string;
    icon?: {
        type: 'img' | 'icon',
        content: string;
    };
    link: string;
}

export interface ContentSidebarMenuLink_I {
    titleGroup: string;
    items: SingleItem_I[]
}

