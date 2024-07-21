import { _Response_I } from "@tesis-project/dev-globals/dist/core/interfaces";
import { Dispatch } from "@reduxjs/toolkit";
import { AxiosError } from "axios";
import Backend_Api from "../../../api/axiosBase";

import { Auth_I, Session_Auth_I, User_Role_Enum } from '@tesis-project/dev-globals/dist/modules/auth/interfaces'
import { handlerError } from "../../../api";


export const start_login_authTH = (email: string, password: string): Promise<_Response_I<Session_Auth_I>> => {
    // return async (dispatch: Dispatch): Promise<_Response_I> => {
    return new Promise(async (resolve, reject) => {

        try {

            const resp: _Response_I<Session_Auth_I> = await Backend_Api.post('auth/login', {
                email,
                password
            }).then(r => r);

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
    // }
}

export const start_register_authTH = (name: string, last_name: string, email: string, role: User_Role_Enum, password: string): Promise<_Response_I<Auth_I>> => {
    return new Promise(async (resolve, reject) => {

        try {

            const resp: _Response_I<Auth_I> = await Backend_Api.post('auth', {
                name,
                last_name,
                email,
                role,
                password
            }).then(r => r);

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

export const start_check_renew_Tk_authTH = (): Promise<_Response_I<Session_Auth_I>> => {

    return new Promise(async (resolve, reject) => {

        try {

            const resp: _Response_I<Session_Auth_I> = await Backend_Api.get('auth/verify').then(r => r);
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

export const start_LostPassword_authTH = (email: string): Promise<_Response_I> => {
    return new Promise(async (resolve, reject) => {
        try {

            const resp: _Response_I = await Backend_Api.post('auth/requests/pass_request', {
                email
            }).then(r => r);
            resolve(resp);

        } catch (error: any) {

            let r: _Response_I = handlerError(error);
            reject(r);

        }
    })
}


