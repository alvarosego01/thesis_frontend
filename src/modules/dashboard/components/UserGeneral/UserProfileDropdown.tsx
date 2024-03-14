

import { useState, useRef, useEffect, FC } from 'react';
// import { Link } from 'react-router-dom';
import { Transition } from '../../../../core/utils/Transition';
import { ListDoActions, List_I } from '../../../../core/components';

import { getAssetPath } from '../../../../core/utils';
import { useAuthStore, useUserStore } from '../../../../core/store';
import { transformRoles } from '../../../../core/pipes/TransformRoles';

const UserAvatar = getAssetPath('/images/auth-image.jpg');

interface DropdownProfileProps {
    align: 'right' | 'left'; // Asumiendo que align solo puede ser 'right' o 'left'
}

interface data_props {
    name: string;
    role: string;
}

const ListDoActions_data: List_I[] = [
    {
        title: 'Perfil y configuraciones',
        type: 'secondary',
        action: {
            type: 'link',
            action: '/dashboard/account'
        }
    },
    {
        title: 'Notificaciones',
        type: 'secondary',
        action: {
            type: 'link',
            action: '/dashboard/notifications'
        }
    },
    {
        title: 'Datos de contratación',
        type: 'secondary',
        action: {
            type: 'link',
            action: '/dashboard/hiring-config/'
        }
    },
    {
        title: 'Contratos',
        type: 'secondary',
        action: {
            type: 'link',
            action: '/dashboard/xxx'
        }
    },
    {
        title: 'Control de vacantes',
        type: 'secondary',
        action: {
            type: 'link',
            action: '/dashboard/xxx'
        }
    },
    {
        title: 'Cerrar sesión',
        type: 'danger',
        action: {
            type: 'function',
            action: 'logout'
        },
        line: {
            top: true,
        }
    }

]

export const UserProfileDropdown: FC<DropdownProfileProps> = ({ align }) => {

    const [dropdownOpen, setDropdownOpen] = useState(false);

    // Usando useRef con el tipo correcto para HTMLButtonElement y HTMLDivElement
    const trigger = useRef<HTMLButtonElement>(null);
    const dropdown = useRef<HTMLDivElement>(null);

    const {
        state: {
            user
        },
    } = useUserStore();

    const {
        state: {
            auth
        },
        emit_onLogout
    } = useAuthStore();



    const onClick_ListDoActions = (action: string) => {

        switch (action) {
            case 'logout':
                emit_onLogout();
                break;
        }

        return
    }

    // close on click outside
    useEffect(() => {
        const clickHandler = ({ target }: any) => {
            if (!dropdown.current) return;
            if (!dropdownOpen || dropdown.current.contains(target) || trigger.current!.contains(target)) return;
            setDropdownOpen(false);
        };
        document.addEventListener('click', clickHandler);
        return () => document.removeEventListener('click', clickHandler);
    });

    // close if the esc key is pressed
    useEffect(() => {
        const keyHandler = ({ keyCode }: any) => {
            if (!dropdownOpen || keyCode !== 27) return;
            setDropdownOpen(false);
        };
        document.addEventListener('keydown', keyHandler);
        return () => document.removeEventListener('keydown', keyHandler);
    });

    return (
        <div className="relative inline-flex">
            <button
                ref={trigger}
                className="inline-flex items-center justify-center group"
                aria-haspopup="true"
                onClick={() => setDropdownOpen(!dropdownOpen)}
                aria-expanded={dropdownOpen}
            >
                <img className="w-8 h-8 rounded-full" src={UserAvatar} width="32" height="32" alt="User" />
                <div className="flex items-center truncate">
                    <span className="ml-2 text-sm font-medium truncate dark:text-slate-300 group-hover:text-slate-800 dark:group-hover:text-slate-200">
                        {user.name} {user.last_name}
                    </span>
                    <svg className="w-3 h-3 ml-1 fill-current shrink-0 text-slate-400" viewBox="0 0 12 12">
                        <path d="M5.9 11.4L.5 6l1.4-1.4 4 4 4-4L11.3 6z" />
                    </svg>
                </div>
            </button>

            <Transition
                className={`origin-top-right z-10 absolute top-full min-w-44 bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 py-1.5 rounded shadow-lg overflow-hidden mt-1 ${align === 'right' ? 'right-0' : 'left-0'}`}
                show={dropdownOpen}
                enter="transition ease-out duration-200 transform"
                enterStart="opacity-0 -translate-y-2"
                enterEnd="opacity-100 translate-y-0"
                leave="transition ease-out duration-200"
                leaveStart="opacity-100"
                leaveEnd="opacity-0"
            >
                <div
                    ref={dropdown}
                    onFocus={() => setDropdownOpen(true)}
                    onBlur={() => setDropdownOpen(false)}
                >
                    <div className="pt-0.5 pb-2 px-3 mb-1 border-b border-slate-200 dark:border-slate-700">
                        <div className="font-medium text-slate-800 dark:text-slate-100">
                            {user.name} {user.last_name}
                        </div>
                        {
                            auth.role && (
                                <div className="text-xs italic text-slate-500 dark:text-slate-400">
                                    { transformRoles(auth.role) }
                                </div>
                            )
                        }
                    </div>

                    <ListDoActions onClick={(action) => onClick_ListDoActions(action)} list={ListDoActions_data} />

                </div>
            </Transition>
        </div>
    )
}
