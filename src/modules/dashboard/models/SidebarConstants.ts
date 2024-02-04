import { SidebarMenuLink_I } from "../interfaces";



export const SidebarMenu: SidebarMenuLink_I[] = [
    {
        title: 'Perfil y configuraciones',
        icon: {
            type: 'icon',
            content: "bx bxs-cog"
        },
        link: '/dashboard/account',
    },
    {
        title: 'Notificaciones',
        icon: {
            type: 'icon',
            content: "bx bxs-bell"
        },
        link: '/dashboard/notifications',
    }


]