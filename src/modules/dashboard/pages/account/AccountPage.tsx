


import { ContentPage_LY } from "../../Layouts";
import { ContentSidebar } from "../../components";
import { ContentSidebarConstants } from "../../models/ContentSidebarConstants";
import { Dsh_Account_routes } from "./Dsh_Account.routes";

export const AccountPage = () => {

    const _children = () => {

        return (
            <>
                <ContentSidebar content={ContentSidebarConstants} />
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