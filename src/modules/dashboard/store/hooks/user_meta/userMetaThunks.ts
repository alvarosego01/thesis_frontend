
import { _Response_I } from "@tesis-project/dev-globals/dist/core/interfaces";
import { handlerError } from "../../../../../core/api";
import Backend_Api from "../../../../../core/api/axiosBase";

import { Update_Meta_Artist_Dto, Update_Meta_Contratist_Dto } from '@tesis-project/dev-globals/dist/modules/profile/dto';

export const start_get_userMetaTH = (): Promise<_Response_I> => {
    return new Promise(async (resolve, reject) => {
        try {

           const resp: _Response_I = await Backend_Api.get(`profile/meta-role/get_meta`).then(r => r);
           resolve(resp);

        } catch (error: any) {

            let r: _Response_I = handlerError(error);
            reject(r);

        }
    })
}

export const start_set_artistMeta_userMetaTH = (meta: Update_Meta_Artist_Dto): Promise<_Response_I> => {
    return new Promise(async (resolve, reject) => {
        try {

           const resp: _Response_I = await Backend_Api.post(`profile/meta-role/meta_a`, meta).then(r => r);
           resolve(resp);

        } catch (error: any) {

            let r: _Response_I = handlerError(error);
            reject(r);

        }
    })
}

export const start_set_contratistMeta_userMetaTH = (meta: Update_Meta_Contratist_Dto): Promise<_Response_I> => {
    return new Promise(async (resolve, reject) => {
        try {

           const resp: _Response_I = await Backend_Api.post(`profile/meta-role/meta_c`, meta).then(r => r);
           resolve(resp);

        } catch (error: any) {

            let r: _Response_I = handlerError(error);
            reject(r);

        }
    })
}