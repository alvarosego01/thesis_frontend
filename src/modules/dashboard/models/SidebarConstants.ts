import { User_Role_Enum } from "@tesis-project/dev-globals/dist/modules/auth/interfaces";
import { useAuthStore } from "../../../core/store";
import { SidebarMenuLink_I } from "../Interfaces";



export const get_sidebarMenu = (): SidebarMenuLink_I[] => {

    const {
        state: {
            auth
        }
    } = useAuthStore()

    let SidebarMenu_Data: SidebarMenuLink_I[] = [
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
        {
            title: 'Datos de contratación',
            icon: {
                type: 'icon',
                content: "bx bx-briefcase-alt-2"

            },
            link: '/dashboard/hiring-config',
            activeCondition: {
                type: 'route',
                content: '/dashboard/hiring-config'
            }
        },
        {
            title: 'Contratos',
            icon: {
                type: 'icon',
                content: "bx bx-briefcase-alt-2"

            },
            link: '/dashboard/contracts',
            activeCondition: {
                type: 'route',
                content: '/dashboard/contracts'
            }
        },
        {
            title: 'Control de vacantes',
            icon: {
                type: 'icon',
                content: "bx bx-briefcase-alt-2"

            },
            link: '/dashboard/xxx',
            activeCondition: {
                type: 'route',
                content: '/dashboard/xxx'
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

    ];

    if (auth.role === User_Role_Enum.ARTIST_ROLE) {

        SidebarMenu_Data.splice(1, 0,
            {
                title: 'Capacidades artisticas',
                icon: {
                    type: 'icon',
                    content: "bx bxs-music"
                },
                link: '/dashboard/role/skills',
                activeCondition: {
                    type: 'route',
                    content: '/dashboard/role/skills'
                }
            })

    }

    if(auth.role === User_Role_Enum.CONTRATIST_ROLE){

          SidebarMenu_Data.splice(1, 0,
            {
                title: 'Instituto - Empresa',
                icon: {
                    type: 'icon',
                    content: "bx bxs-music"
                },
                link: '/dashboard/role/company',
                activeCondition: {
                    type: 'route',
                    content: '/dashboard/role/company'
                }
            })


    }


    return SidebarMenu_Data;

}

