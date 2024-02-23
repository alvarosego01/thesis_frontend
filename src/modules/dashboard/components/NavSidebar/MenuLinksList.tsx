
import { SidebarMenuLink_I } from "../../interfaces"
import { SidebarLinkGroup } from "./SidebarLinkGroup";

interface MenuLinksList_I {
    menu_list: SidebarMenuLink_I[];
    pathname: string;
}

export const MenuLinksList = ({ menu_list, pathname }: MenuLinksList_I) => {

    return (

        <ul className="mt-3">
            {
                menu_list.map((item, index) => (
                    <SidebarLinkGroup ItemMenu={item} pathname={pathname}  key={index} />
                ))
            }
        </ul>

    )
}
