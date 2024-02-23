import { SidebarMenuLink_I } from '../../interfaces';
import { Sidebar_Group_Link, Sidebar_Single_Link } from './SidebarLink';

interface SidebarLinkGroup_I {
    // children: (handleClick: () => void, open: boolean) => React.ReactNode;
    // activecondition: boolean;
    ItemMenu: SidebarMenuLink_I;
    pathname: string;
}

export const SidebarLinkGroup = ({
    // children,
    // activecondition,
    ItemMenu,
    pathname
}: SidebarLinkGroup_I) => {

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



