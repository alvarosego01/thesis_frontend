import { FC, useEffect } from "react"
import { ContentSidebar } from "../../components";
import { ContentPage_Box_LY } from "../../Layouts";
import { Dsh_HireConfig_routes } from "./Dsh_HireConfig.routes";
import { Sidebar_HiringConfig_Items } from "../../models";
import { useHiringDataStore } from "../../store/hooks/hiring_data/useHiringDataStore";
import { useUserStore } from "../../store";
import { User_HiringData_I } from "@tesis-project/dev-globals/dist/modules/user/interfaces";


export const HireConfigPage: FC = () => {

    const {
        state: {
            user
        }
    } = useUserStore();

    const {
        emit_get_user_hiringData
    } = useHiringDataStore();

    useEffect(() => {
        if(user.hiring_data){
        const aux_hiring_data = user.hiring_data as User_HiringData_I;
        emit_get_user_hiringData(aux_hiring_data._id);
        }
    }, [user]);


    const _children = () => {

        return (
            <>
                <ContentSidebar content={Sidebar_HiringConfig_Items} />

                <Dsh_HireConfig_routes />

            </>
        )
    }

    return (
        <ContentPage_Box_LY
            title="Datos de contratación"
            children={_children()} />
    );
}


export default HireConfigPage;