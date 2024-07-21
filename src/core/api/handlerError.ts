import { _Response_I } from "@tesis-project/dev-globals/dist/core/interfaces";
import { AxiosError } from "axios";


export const handlerError = (error: any) => {

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

    return r;

}