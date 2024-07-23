

import { _Response_I } from "@tesis-project/dev-globals/dist/core/interfaces";
import { Create_Request_Key_Dto } from "@tesis-project/dev-globals/dist/modules/auth/dto";
import { handlerError } from "../../../api";
import Backend_Api from "../../../api/axiosBase";
import { Requests_I } from "@tesis-project/dev-globals/dist/modules/auth/interfaces/requests";


export const start_LostPassword_requestsTH = (email: string): Promise<_Response_I> => {
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

export const start_setRequest_requestsTH = ({ detail, type }: Create_Request_Key_Dto): Promise<_Response_I> => {
    return new Promise(async (resolve, reject) => {
        try {

            const resp: _Response_I = await Backend_Api.post('auth/requests/create', {
                detail,
                type
            }).then(r => r);
            resolve(resp);

        } catch (error: any) {

            let r: _Response_I = handlerError(error);
            reject(r);

        }
    })
}

export const start_getRequest_requestTH = (key: string): Promise<_Response_I<Requests_I>> => {
    return new Promise(async (resolve, reject) => {
        try {

            const resp: _Response_I<Requests_I> = await Backend_Api.get(`auth/requests/${key}`).then(r => r);
            resolve(resp);

        } catch (error: any) {

            let r: _Response_I = handlerError(error);
            reject(r);

        }
    })
}

export const start_acceptRequest_requestTH = (key: string): Promise<_Response_I<Requests_I>> => {
    return new Promise(async (resolve, reject) => {
        try {

            const resp: _Response_I = await Backend_Api.put(`auth/requests/verify/${key}`).then(r => r);
            resolve(resp);

        } catch (error: any) {

            let r: _Response_I = handlerError(error);
            reject(r);

        }
    })
}

export const start_passwordChange_acceptRequest_requestTH = (key: string, new_password: string): Promise<_Response_I<Requests_I>> => {
    return new Promise(async (resolve, reject) => {
        try {

            const resp: _Response_I = await Backend_Api.put(`auth/requests/verify_pass/${key}`, {
                password: new_password
            }).then(r => r);
            resolve(resp);

        } catch (error: any) {

            let r: _Response_I = handlerError(error);
            reject(r);

        }
    })
}