
import { _Response_I } from "@tesis-project/dev-globals/dist/core/interfaces";
import { Media_I } from "@tesis-project/dev-globals/dist/modules/media/interfaces";
import { AxiosError } from "axios";
import Backend_Api from "../api/axiosBase";


export const start_getFile = (File: Media_I) => {

    return new Promise(async (resolve, reject) => {

        try {

            const resp = await Backend_Api.get(`http://localhost:3000/api/media/serve/file/${File._id}`, {
                responseType: 'blob',
            } ).then(r => r);
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