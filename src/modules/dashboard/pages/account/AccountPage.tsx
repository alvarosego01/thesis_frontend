


import { FC } from "react";
import { ContentPage_LY } from "../../Layouts";
import { ContentSidebar } from "../../components";
import { Sidebar_ProfilePersonal_Items } from "../../models/SidebarContentItems";
import { Dsh_Account_routes } from "./Dsh_Account.routes";

export const AccountPage: FC = () => {

    const _children = () => {

        return (
            <>
                <ContentSidebar content={Sidebar_ProfilePersonal_Items} />
                <Dsh_Account_routes />
            </>
        )
    }

    return (
        <ContentPage_LY
            title="Perfil y configuraciones ✨"
            children={_children()} />
    );
}

export default AccountPage