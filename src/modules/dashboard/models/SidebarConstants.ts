import { SidebarMenuLink_I } from "../interfaces";



export const SidebarMenu_Data: SidebarMenuLink_I[] = [
    {
        title: 'Perfil y configuraciones',
        icon: {
            type: 'icon',
            content: "bx bxs-cog"
        },
        link: '/dashboard/account',
        activeCondition: {
            type: 'route',
            content: '/dashboard/account'
        }
    },
    {
        title: 'Notificaciones',
        icon: {
            type: 'icon',
            content: "bx bxs-bell"
        },
        link: '/dashboard/notifications',
        activeCondition: {
            type: 'route',
            content: '/dashboard/notifications'
        }
    },
/*     {
        title: 'Dashboard',
        icon: {
            type: 'icon',
            content: "bx bxs-bell"
        },
        link: '/dashboard/dash',
        activeCondition: {
            type: 'route',
            content: '/dashboard/dash'
        },
        subMenu: [
            {
                title: 'Ejem 1',
                link: '/dashboard/dash/ejem1',
                activeCondition: {
                    type: 'route',
                    content: '/dashboard/dash/ejem1'
                }
            },
            {
                title: 'Ejem 2',
                link: '/dashboard/dash/ejem2',
                activeCondition: {
                    type: 'route',
                    content: '/dashboard/dash/ejem2'
                }
            },
            {
                title: 'Ejem 3',
                link: '/dashboard/dash/ejem3',
                activeCondition: {
                    type: 'route',
                    content: '/dashboard/dash/ejem3'
                }
            }
        ]
    } */


]