import { FC } from 'react';
import { SidebarMenuLink_I } from '../../Interfaces';
import { Sidebar_Group_Link, Sidebar_Single_Link } from './SidebarLink';

interface SidebarLinkGroup_I {
    // children: (handleClick: () => void, open: boolean) => React.ReactNode;
    // activecondition: boolean;
    ItemMenu: SidebarMenuLink_I;
    pathname: string;
}

export const SidebarLinkGroup: FC<SidebarLinkGroup_I> = ({
    // children,
    // activecondition,
    ItemMenu,
    pathname
}) => {

    const ShowLists = () => {

        if (ItemMenu?.subMenu?.length! > 0) {
            return (
                <Sidebar_Group_Link ItemMenu={ItemMenu} pathname={''} />
            )
        } else {
            return (
                <Sidebar_Single_Link ItemMenu={ItemMenu} pathname={pathname} />
            )
        }

    }

    return (
        <>
            { ShowLists() }
        </>
    );
}



