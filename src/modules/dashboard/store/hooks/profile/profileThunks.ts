import { Profile_I } from "@tesis-project/dev-globals/dist/modules/profile/interfaces";
import Backend_Api from "../../../../../core/api/axiosBase";
import { _Response_I } from "@tesis-project/dev-globals/dist/core/interfaces";
import { AxiosError } from "axios";



export const start_update_user_profile = (profile_id: string, profile: Partial<Profile_I>): Promise<_Response_I<Profile_I>> => {

    return new Promise(async (resolve, reject) => {

        try {

            const resp: _Response_I<Profile_I> = await Backend_Api.put(`profile/${profile_id}`, profile).then(r => r);
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

export const start_get_profile_data = (_id: string): Promise<_Response_I<Profile_I>>  => {

    return new Promise(async (resolve, reject) => {

        try {

            const resp: _Response_I<Profile_I> = await Backend_Api.get(`profile/${_id}`).then(r => r);
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

