import { NavLink } from "react-router-dom"
import { ContentSidebarMenuLink_I } from "../../Interfaces"
import { FC } from "react";

interface ContentSidebarGroup_Props_I {
    item: ContentSidebarMenuLink_I;
    pathname: string;
}

export const ContentSidebarGroup:  FC<ContentSidebarGroup_Props_I> = ({
    item,
    pathname
}) => {

    const {
        titleGroup,
        items
    } = item;

    return (
        <>
                <div className="mb-3 text-xs font-semibold uppercase text-slate-400 dark:text-slate-500">
                    {titleGroup}
                </div>
                <ul className="flex mr-3 flex-nowrap md:block md:mr-0">
                    {
                        (items.length > 0) && items.map(item => (
                            <li key={item.title} className="mr-0.5 md:mr-0 md:mb-0.5">
                                <NavLink end to={item.link} className={`flex items-center px-2.5 py-2 rounded whitespace-nowrap ${pathname.includes(item.link) && 'bg-indigo-50 dark:bg-indigo-500/30'}`}>

                                    {
                                        item.icon?.type === 'icon' ? (
                                            <i className={`${item.icon?.content} text-18p`} ></i>
                                        ) : (
                                            <img src={item.icon?.content} alt="icon" className="w-6 h-6" />
                                        )
                                    }

                                    <span className={`ml-s_10 text-sm font-medium ${pathname.includes(item.link) ? 'text-indigo-500 dark:text-indigo-400' : 'text-slate-600 dark:text-slate-300 hover:text-slate-700 dark:hover:text-slate-200'}`}>
                                        {item.title}
                                    </span>
                                </NavLink>
                            </li>
                        ))
                    }
                </ul>
        </>
    )
}
