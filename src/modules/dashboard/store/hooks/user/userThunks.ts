
import { _Response_I } from "@tesis-project/dev-globals/dist/core/interfaces"
import { User_I } from "@tesis-project/dev-globals/dist/modules/user/interfaces"
import { AxiosError } from "axios";

import Backend_Api from "../../../../../core/api/axiosBase";


export const start_save_user_data = (user_id: string, user: Partial<User_I>): Promise<_Response_I<User_I>> => {

     return new Promise(async (resolve, reject) => {

        try {

            const resp: _Response_I<User_I> = await Backend_Api.put(`user/update/${user_id}`, user).then(r => r);
            resolve(resp);

        } catch (error: any) {

            let r: _Response_I;
            console.error('Axios error:', error.response?.data);

            if (error instanceof AxiosError) {
                r = {
                    ...error.response?.data,
                }
            } else {
                r = {
                    ok: false,
                    statusCode: 500,
                    message: 'Unexpected error',
                    err: error
                }
            }
            reject(r);

        }

    })

}

export const start_get_sessionUser_userTH = (user_id: string): Promise<_Response_I<User_I>> => {

    return new Promise(async (resolve, reject) => {

        try {

            const resp: _Response_I<User_I> = await Backend_Api.get(`user/${user_id}`).then(r => r);
            resolve(resp);

        } catch (error: any) {

            let r: _Response_I;
            console.error('Axios error:', error.response?.data);

            if (error instanceof AxiosError) {
                r = {
                    ...error.response?.data,
                }
            } else {
                r = {
                    ok: false,
                    statusCode: 500,
                    message: 'Unexpected error',
                    err: error
                }
            }
            reject(r);

        }

    })

}