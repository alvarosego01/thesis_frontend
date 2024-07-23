
import { _Response_I } from "@tesis-project/dev-globals/dist/core/interfaces";
import { Notifications_I } from "@tesis-project/dev-globals/dist/modules/notifications/interfaces";
import { handlerError } from "../../../api";
import Backend_Api from "../../../api/axiosBase";



export const start_getNotifications_notificationsTH = (): Promise<_Response_I<Notifications_I[]>> => {
    return new Promise(async (resolve, reject) => {
        try {

           const resp: _Response_I = await Backend_Api.get(`notify`).then(r => r);
           resolve(resp);

        } catch (error: any) {

            let r: _Response_I = handlerError(error);
            reject(r);

        }
    })
}


export const start_deleteNotification_notificationsTH = (_id: string): Promise<_Response_I<Notifications_I[]>> => {
    return new Promise(async (resolve, reject) => {
        try {

           const resp: _Response_I = await Backend_Api.delete(`notify/${_id}`).then(r => r);
           resolve(resp);

        } catch (error: any) {

            let r: _Response_I = handlerError(error);
            reject(r);

        }
    })
}

