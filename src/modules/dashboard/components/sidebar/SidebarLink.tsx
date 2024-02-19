import { NavLink } from "react-router-dom"
import { SidebarMenuLink_I } from "../../interfaces";
import { useState } from "react";

interface Sidebar_Single_Link_I {
    // children: (handleClick: () => void, open: boolean) => React.ReactNode;
    // activecondition: boolean;
    ItemMenu: SidebarMenuLink_I;
    pathname: string;
}

interface Sidebar_Group_Link_I {
    // children: (handleClick: () => void, open: boolean) => React.ReactNode;
    ItemMenu: SidebarMenuLink_I;
    pathname: string;
}


export const Sidebar_Single_Link = ({
    // children,
    // activecondition,
    ItemMenu,
    pathname
}: Sidebar_Single_Link_I) => {

    const set_icon = () => {

        if (ItemMenu.icon) {
            if (ItemMenu.icon.type === 'icon') {
                return <i className={ItemMenu.icon.content} ></i>
            } else {
                return <img src={ItemMenu.icon.content} alt="icon" className="w-6 h-6" />
            }

        } else {
            return null
        }

    }

    return (
        <>
            <li className={`px-3 py-2 rounded-sm mb-0.5 last:mb-0 ${pathname.includes(ItemMenu.link) && 'bg-slate-900'}`}>
                <NavLink
                    end
                    to={ItemMenu.link}
                    className={`block text-slate-200 truncate transition duration-150 ${pathname.includes(ItemMenu.link) ? 'hover:text-slate-200' : 'hover:text-white'
                        }`}
                >
                    <div className="flex items-center">
                        {
                            // ItemMenu.icon?.type === 'icon' ? (
                            //     <i className={ItemMenu.icon?.content} ></i>
                            // ) : (
                            //     <img src={ItemMenu.icon?.content} alt="icon" className="w-6 h-6" />
                            // )
                            set_icon()
                        }
                        <span className="ml-3 text-sm font-medium duration-200 lg:opacity-0 lg:sidebar-expanded:opacity-100 2xl:opacity-100">
                            {ItemMenu.title}
                        </span>
                    </div>
                </NavLink>
            </li>
        </>
    )
}

export const Sidebar_Group_Link = ({
    // children,
    ItemMenu,
    pathname
}: Sidebar_Group_Link_I) => {

    const activecondition: boolean = false;

    const [open, setOpen] = useState(activecondition);

    const handleClick = () => {
        setOpen(!open);
    }

    return (
        <>
            <li className={`px-3 py-2 rounded-sm mb-0.5 last:mb-0 ${open && 'bg-slate-900'}`}>

                <a
                    href="#0"
                    className={`block text-slate-200 truncate transition duration-150 ${pathname === '/' || pathname.includes('dashboard') ? 'hover:text-slate-200' : 'hover:text-white'
                        }`}
                    onClick={(e) => {
                        e.preventDefault();
                        handleClick();
                        // setSidebarExpanded(true);
                    }}
                >
                    <div className="flex items-center justify-between">
                        <div className="flex items-center">
                            <div className="flex items-center">
                                {
                                    ItemMenu.icon?.type === 'icon' ? (
                                        <i className={ItemMenu.icon?.content} ></i>
                                    ) : (
                                        <img src={ItemMenu.icon?.content} alt="icon" className="w-6 h-6" />
                                    )
                                }
                                <span className="ml-3 text-sm font-medium duration-200 lg:opacity-0 lg:sidebar-expanded:opacity-100 2xl:opacity-100">
                                    {ItemMenu.title}
                                </span>
                            </div>
                        </div>
                        {/* Icon */}
                        <div className="flex ml-2 shrink-0">
                            <svg className={`w-3 h-3 shrink-0 ml-1 fill-current text-slate-400 ${open && 'rotate-180'}`} viewBox="0 0 12 12">
                                <path d="M5.9 11.4L.5 6l1.4-1.4 4 4 4-4L11.3 6z" />
                            </svg>
                        </div>
                    </div>
                </a>

                <div className="lg:hidden lg:sidebar-expanded:block 2xl:block">

                    <ul className={` pl-s_20 mt-1 ${!open && 'hidden'}`}>
                        {
                            ItemMenu.subMenu?.map((item, index) => (
                                <Sidebar_Single_Link ItemMenu={item} pathname={pathname} key={index} />
                            ))
                        }
                    </ul>

                </div>

            </li>
        </>
    )
}
