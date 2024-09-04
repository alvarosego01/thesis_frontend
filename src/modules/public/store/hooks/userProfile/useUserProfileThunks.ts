
import { _Response_I } from "@tesis-project/dev-globals/dist/core/interfaces";
import { User_I } from "@tesis-project/dev-globals/dist/modules/user/interfaces";
import { handlerError } from "../../../../../core/api";
import Backend_Api from "../../../../../core/api/axiosBase";

export const start_getUser_userProfile = ( _id: string ): Promise<_Response_I<User_I>> => {
    return new Promise(async (resolve, reject) => {
        try {

           const resp: _Response_I = await Backend_Api.get( `user/profile/${_id}` ).then(r => r);
           resolve(resp);

        } catch (error: any) {

            let r: _Response_I = handlerError(error);
            reject(r);

        }
    })
}