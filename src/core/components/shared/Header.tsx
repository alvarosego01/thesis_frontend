


import { HeaderNavBar } from "..";
import { NotificationsView, UserProfileDropdown } from "../../../modules/dashboard/components";
import { useAuthStore } from "../../store";
import { FC } from "react";
import { useNavigationStore } from "../../store/hooks/useNavigationStore";

interface Header_I {
    sidebarOpen: boolean;
    setSidebarOpen: (sidebarOpen: boolean) => void;
}
export const Header: FC<Header_I> = ({
    sidebarOpen,
    setSidebarOpen
}) => {

    const {
        state
    } = useAuthStore();

    const {
        state: navigationState
    } = useNavigationStore()

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

    return (

        <header className="sticky top-0 bg-white dark:bg-[#182235] border-b border-slate-200 dark:border-slate-700 z-30">
            <nav className="px-6 sm:px-8 lg:px-10">
                <div className="flex items-center justify-between h-16 -mb-px">

                    <div className={`flex h-full  ${is_authenticated() ? 'w-10/12' : 'w-full'} `}>

                        {
                            (is_dashboard()) && (
                                <button
                                    className="text-slate-500 hover:text-slate-600 lg:hidden"
                                    aria-controls="sidebar"
                                    aria-expanded={sidebarOpen}
                                    onClick={(e) => { e.stopPropagation(); setSidebarOpen(!sidebarOpen); }}
                                >
                                    <span className="sr-only">Open sidebar</span>
                                    <svg className="w-6 h-6 fill-current" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                        <rect x="4" y="5" width="16" height="2" />
                                        <rect x="4" y="11" width="16" height="2" />
                                        <rect x="4" y="17" width="16" height="2" />
                                    </svg>
                                </button>
                            )
                        }

                        {/*                            <div className="mr-4 shrink-0">
                        <a className="block transition duration-150 ease-in-out" href="{{ home_url }}">
                            <img className="h-16 md:h-s_50 lg:h-s_75 onLazyLoad"  alt="Header navbar logo" />
                        </a>
                    </div>
 */}
                        <HeaderNavBar />

                    </div>

                    {
                        state.status === 'authenticated' && (
                            <>
                                <div className="flex items-center w-2/12 space-x-3">
                                    <NotificationsView align="right" />
                                    <hr className="w-px h-6 border-none bg-slate-200 dark:bg-slate-700" />
                                    <UserProfileDropdown align="right" />
                                </div>
                            </>
                        )
                    }

                </div>
            </nav>
        </header>

    );
}