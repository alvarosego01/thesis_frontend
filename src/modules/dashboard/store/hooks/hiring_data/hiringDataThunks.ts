import { _Response_I } from "@tesis-project/dev-globals/dist/core/interfaces";
import { User_HiringData_I, User_Personal_Data_I } from "@tesis-project/dev-globals/dist/modules/user/interfaces";
import Backend_Api from "../../../../../core/api/axiosBase";
import { AxiosError } from "axios";


export const start_get_user_hiringData = (hiring_data_id: string): Promise<_Response_I<User_HiringData_I>>  => {

    return new Promise(async (resolve, reject) => {

        try {

            const resp: _Response_I<User_HiringData_I> = await Backend_Api.get(`user/hiring-data/${hiring_data_id}`).then(r => r);
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

export const start_save_user_hiringData_personal = (hiring_data_id: string, personal: Partial<User_Personal_Data_I>): Promise<_Response_I<User_Personal_Data_I>>  => {

    return new Promise(async (resolve, reject) => {

        try {

            const resp: _Response_I<User_Personal_Data_I> = await Backend_Api.post(`user/hiring-data/personal/${hiring_data_id}`, personal).then(r => r);
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
