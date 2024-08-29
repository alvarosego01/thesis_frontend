import { _Response_I } from "@tesis-project/dev-globals/dist/core/interfaces";
import Backend_Api from "../../../../../core/api/axiosBase";
import { handlerError } from "../../../../../core/api";
import { User_I } from "@tesis-project/dev-globals/dist/modules/user/interfaces";
import { SearchUser_Dto } from '@tesis-project/dev-globals/dist/modules/user/dto';

export const start_getUsers_all_userSearch = ( search: SearchUser_Dto ): Promise<_Response_I<User_I[]>> => {
    return new Promise(async (resolve, reject) => {
        try {

           const resp: _Response_I = await Backend_Api.post(`user/search/type`, {

           }).then(r => r);
           resolve(resp);

        } catch (error: any) {

            let r: _Response_I = handlerError(error);
            reject(r);

        }
    })
}