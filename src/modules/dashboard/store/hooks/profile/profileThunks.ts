import { Profile_I } from "@tesis-project/dev-globals/dist/modules/profile/interfaces";
import Backend_Api from "../../../../../core/api/axiosBase";
import { _Response_I } from "@tesis-project/dev-globals/dist/core/interfaces";
import { AxiosError } from "axios";


export const start_update_profile_pic = (profile_pic: File): Promise<_Response_I<Profile_I>> => {
    return new Promise(async (resolve, reject) => {

        try {

            const formData = new FormData();
            formData.append('file', profile_pic);

            const resp: _Response_I<Profile_I> = await Backend_Api.post(`profile/profile_pic`, formData).then(r => r);
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


export const start_delete_gallery_image = (_id: string): Promise<_Response_I<Profile_I>> => {
    return new Promise(async (resolve, reject) => {

        try {

            const resp: _Response_I<Profile_I> = await Backend_Api.delete(`profile/image_gallery/${_id}`).then(r => r);
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

export const start_delete_gallery_video = (_id: string): Promise<_Response_I<Profile_I>> => {
    return new Promise(async (resolve, reject) => {

        try {

            const resp: _Response_I<Profile_I> = await Backend_Api.delete(`profile/video_gallery/${_id}`).then(r => r);
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

export const start_add_gallery_image = (File: File): Promise<_Response_I<Profile_I>> => {
    return new Promise(async (resolve, reject) => {

        try {

            const formData = new FormData();
            formData.append('file', File);

            const resp: _Response_I<Profile_I> = await Backend_Api.post(`profile/image_gallery`, formData).then(r => r);
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

export const start_add_gallery_video = (File: File): Promise<_Response_I<Profile_I>> => {
    return new Promise(async (resolve, reject) => {

        try {

            const formData = new FormData();
            formData.append('file', File);

            const resp: _Response_I<Profile_I> = await Backend_Api.post(`profile/video_gallery`, formData).then(r => r);
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

export const start_set_credentials_identity_file = (identity_file: File): Promise<_Response_I<Profile_I>> => {
    return new Promise(async (resolve, reject) => {

        try {

            const formData = new FormData();
            formData.append('file', identity_file);

            const resp: _Response_I<Profile_I> = await Backend_Api.post(`profile/credentials_identity_file`, formData).then(r => r);
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

export const start_set_credentials_profesional_file = (profesional_file: File): Promise<_Response_I<Profile_I>> => {
    return new Promise(async (resolve, reject) => {

        try {

            const formData = new FormData();
            formData.append('file', profesional_file);

            const resp: _Response_I<Profile_I> = await Backend_Api.post(`profile/profesional_file`, formData).then(r => r);
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

export const start_get_profile_data = (_id: string): Promise<_Response_I<Profile_I>> => {

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
