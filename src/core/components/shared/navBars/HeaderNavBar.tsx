



import { FC } from 'react'
import { NavModel } from '../../../interfaces/navs.interfaces'
import { useAuthStore } from '../../../store'
import { NavBarsItems } from '../..'
import { NavLink, useNavigate } from 'react-router-dom'
import { useNavigationStore } from '../../../store/hooks/useNavigationStore'

const NavLeft: NavModel[] = [
    {
        title: 'Inicio',
        type: 'regular',
        action: {
            type: 'link',
            action: '/'
        }
    },
    {
        title: 'Búsqueda de artistas',
        type: 'regular',
        action: {
            type: 'link',
            action: '/search'
        }
    },
    {
        title: 'Vacantes',
        type: 'regular',
        action: {
            type: 'link',
            action: '/vacancies'
        }
    }
];

const NavRight: NavModel[] = [
    {
        title: 'Iniciar sesión',
        type: 'regular',
        action: {
            type: 'link',
            action: '/login'
        }
    },
    {
        title: 'Registrarse',
        type: 'primary_button',
        action: {
            type: 'link',
            action: '/register'
        }
    },

];

export const HeaderNavBar: FC = () => {

    const {
        state
    } = useAuthStore();

    const {
        state: navigationState
    } = useNavigationStore()

    const navigate = useNavigate();

    const is_authenticated = () => {

        return state.status === 'authenticated';

    }

    const is_dashboard = () => {

        const aux_nav = navigationState.navigation;
        if (aux_nav.includes('dashboard')) {
            return true;
        } else {
            return false;
        }

    }

    const get_action = (action: NavModel['action']) => {

        if (action.type === 'link' && action.action) {

            navigate(action.action);
        } else {

            // if (action.type === 'function' && onClick && action.action) {

            //     onClick(action.action)
            // }

        }

    }

    return (

        <div className="relative block w-full bg-transparent HeaderNavBar">

            <div className="flex items-center h-full dropdown lg:hidden">

                {
                    (!is_dashboard()) && (
                        <>
                            <NavLink end to="/" className="block">
                                <svg width="32" height="32" viewBox="0 0 32 32">
                                    <defs>
                                        <linearGradient x1="28.538%" y1="20.229%" x2="100%" y2="108.156%" id="logo-a">
                                            <stop stopColor="#A5B4FC" stopOpacity="0" offset="0%" />
                                            <stop stopColor="#A5B4FC" offset="100%" />
                                        </linearGradient>
                                        <linearGradient x1="88.638%" y1="29.267%" x2="22.42%" y2="100%" id="logo-b">
                                            <stop stopColor="#38BDF8" stopOpacity="0" offset="0%" />
                                            <stop stopColor="#38BDF8" offset="100%" />
                                        </linearGradient>
                                    </defs>
                                    <rect fill="#6366F1" width="32" height="32" rx="16" />
                                    <path d="M18.277.16C26.035 1.267 32 7.938 32 16c0 8.837-7.163 16-16 16a15.937 15.937 0 01-10.426-3.863L18.277.161z" fill="#4F46E5" />
                                    <path
                                        d="M7.404 2.503l18.339 26.19A15.93 15.93 0 0116 32C7.163 32 0 24.837 0 16 0 10.327 2.952 5.344 7.404 2.503z"
                                        fill="url(#logo-a)"
                                    />
                                    <path
                                        d="M2.223 24.14L29.777 7.86A15.926 15.926 0 0132 16c0 8.837-7.163 16-16 16-5.864 0-10.991-3.154-13.777-7.86z"
                                        fill="url(#logo-b)"
                                    />
                                </svg>
                            </NavLink>

                            <div tabIndex={0} role="button" className="flex btn btn-ghost lg:hidden">

                                <svg className="w-6 h-6 fill-current" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                    <rect x="4" y="5" width="16" height="2" />
                                    <rect x="4" y="11" width="16" height="2" />
                                    <rect x="4" y="17" width="16" height="2" />
                                </svg>
                            </div>
                        </>
                    )
                }
                <ul
                    tabIndex={0}
                    className="menu menu-sm relative top-12 dropdown-content bg-transparent rounded-box z-[1] mt-3 w-52 p-2 shadow bg-white">
                    <li><a>Item 1</a></li>
                    <li>
                        <a>Parent</a>
                        <ul className="p-1">
                            <li><a>Submenu 1</a></li>
                            <li><a>Submenu 2</a></li>
                        </ul>
                    </li>
                    <li><a>Item 3</a></li>
                </ul>
            </div>
            <div className="items-center hidden w-full h-full lg:flex lg:justify-between">
                <NavBarsItems navs={NavLeft} onClick={(action) => get_action(action)} />
                {
                    !is_authenticated() && (
                        <NavBarsItems navs={NavRight} onClick={(action) => get_action(action)} />
                    )
                }
            </div>
        </div>


    )
}
