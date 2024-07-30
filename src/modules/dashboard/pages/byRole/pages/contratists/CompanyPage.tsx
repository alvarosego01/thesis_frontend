

import { FC, useEffect, useState } from "react"
import { ContentPage_Box_LY } from "../../../../Layouts"
import { InstituteCompany } from "./InstituteCompany"
import { useUserMetaStore } from "../../../../store/hooks/user_meta/useUserMetaStore";


export const CompanyPage: FC = () => {


    const {
        emit_get_userMeta
    } = useUserMetaStore();

    const [isMounted, setisMounted] = useState(false);

    useEffect(() => {

        if (isMounted === false) return;

        emit_get_userMeta();

    }, [isMounted])

    useEffect(() => {
        setisMounted(true);
    }, []);

    return (
        <ContentPage_Box_LY title="Instituto - Empresa" children={
            <InstituteCompany />
        } />
    )
}
