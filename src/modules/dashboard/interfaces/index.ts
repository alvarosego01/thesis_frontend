

export interface SidebarMenuLink_I {
    title: string;
    icon: {
        type: 'img' | 'icon',
        content: string;
    };
    link: string;
    subMenu?: SidebarMenuLink_I[];
}

