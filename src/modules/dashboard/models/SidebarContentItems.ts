import { ContentSidebarMenuLink_I } from "../Interfaces";


export const Sidebar_ProfilePersonal_Items: ContentSidebarMenuLink_I[] = [
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
                title: 'Medios',
                link: '/dashboard/account/media',
                icon: {
                    type: 'icon',
                    content: "bx bx-movie-play"
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

export const Sidebar_HiringConfig_Items: ContentSidebarMenuLink_I[] = [
    {
        titleGroup: 'Opciones',
        items: [
            {
                title: 'Condiciones personales',
                link: '/dashboard/hiring-config/personal-conditions',
                icon: {
                    type: 'icon',
                    content: "bx bxs-user-rectangle"
                },
            },
            {
                title: 'Información de pago',
                link: '/dashboard/hiring-config/payment-info',
                icon: {
                    type: 'icon',
                    content: "bx bxs-bank"
                },
            },





        ]
    }


]