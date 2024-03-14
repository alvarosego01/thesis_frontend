import { FC } from "react"
import { ContentSidebar } from "../../components";
import { ContentPage_LY } from "../../Layouts";
import { Dsh_HireConfig_routes } from "./Dsh_HireConfig.routes";
import { Sidebar_HiringConfig_Items } from "../../models";


export const HireConfigPage: FC = () => {


    const _children = () => {

        return (
            <>
                <ContentSidebar content={Sidebar_HiringConfig_Items} />

                    <Dsh_HireConfig_routes />

            </>
        )
    }

    return (
        <ContentPage_LY
            title="Datos de contratación"
            children={_children()} />
    );
}


export default HireConfigPage;