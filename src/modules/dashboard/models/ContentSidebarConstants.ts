import { ContentSidebarMenuLink_I } from "../interfaces";


export const ContentSidebarConstants: ContentSidebarMenuLink_I[] = [
    {
        titleGroup: 'Opciones de cuenta',
        items: [
            {
                title: 'Personal',
                link: '/dashboard/account/personal',
                icon: {
                    type: 'icon',
                    content: "bx bxs-user"
                },
            },
            {
                title: 'Profesional',
                link: '/dashboard/account/professional',
                icon: {
                    type: 'icon',
                    content: "bx bx-briefcase"
                },

            },
            {
                title: 'Credenciales',
                link: '/dashboard/account/credentials',
                icon: {
                    type: 'icon',
                    content: "bx bx-id-card"
                },
            },
            {
                title: 'Capacidades artisticas',
                link: '/dashboard/account/skills',
                icon: {
                    type: 'icon',
                    content: "bx bxs-music"
                },
            },

            {
                title: 'Seguridad de cuenta',
                link: '/dashboard/account/security',
                icon: {
                    type: 'icon',
                    content: "bx bxs-check-shield"
                },
            }

        ]
    }


]