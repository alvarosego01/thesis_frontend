

import { Requests_I } from '@tesis-project/dev-globals/dist/modules/auth/interfaces/requests'
import React, { FC, useEffect, useState } from 'react'
import { useRequestStore } from '../../../../../core/store'

interface Props_I {
    request: Requests_I
}


export const ConfirmAccountVerify: FC<Props_I> = ({
    request
}) => {

    const [isMounted, setisMounted] = useState(false)

    const {
        emit_acceptRequest_requestTH
    } = useRequestStore();

    useEffect(() => {

        if (isMounted === false) return;
        emit_acceptRequest_requestTH(request);
    }, [isMounted])

    useEffect(() => {
        setisMounted(true);
    }, []);

    return (
        <>
            <div className='flex flex-col items-center justify-center w-full space-y-2'>
                <i className='text-3xl bx bx-loader-alt bx-spin' ></i>
                <h1 className='w-full text-xl font-bold text-center'>
                    Confirmando cuenta
                </h1>
            </div>
        </>

    )
}
