import { FC, useEffect, useState } from "react"
import { useParams } from "react-router-dom";
import { ContentPage_Box_LY } from "../../../dashboard/Layouts";
import { useRequestStore } from "../../../../core/store";
import { RequestType_Enum } from "@tesis-project/dev-globals/dist/modules/auth/interfaces/requests";
import { ChangeEmailVerify, ConfirmAccountVerify, ResetPasswordVerify } from "./components";

export const VerifyPage: FC = () => {

    const [isMounted, setisMounted] = useState(false)

    const {
        state: {
            verifyPage: {
                request
            },
        },
        emit_getRequest
    } = useRequestStore();

    const { key } = useParams();

    useEffect(() => {

        if (isMounted === false) return;
        (key) && emit_getRequest(key);

    }, [isMounted])

    const Page = () => {

        return (
            <>
                {
                    (!request._id) && (
                        <>
                            <div className="flex flex-col items-center justify-center w-full space-y-2">
                                <i className='text-3xl bx bx-loader-alt bx-spin' ></i>
                                <span>
                                    Cargando
                                </span>
                            </div>
                        </>
                    )
                }
                {
                    (request.type === RequestType_Enum.CONFIRM_ACCOUNT) && (
                        <ConfirmAccountVerify request={request} />
                    )
                }
                {
                    (request.type === RequestType_Enum.CHANGE_EMAIL) && (
                        <ChangeEmailVerify request={request} />
                    )
                }
                {
                    (request.type === RequestType_Enum.RESET_PASSWORD) && (
                        <ResetPasswordVerify request={request} />
                    )
                }
            </>
        )

    }

    useEffect(() => {
        setisMounted(true);
    }, []);

    return (
        <div className="flex flex-col mx-auto max-w-fit ">
            <ContentPage_Box_LY
                title=""
                children={Page()} />
        </div>
    )
}
