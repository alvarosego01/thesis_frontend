import { _Response_I } from "@tesis-project/dev-globals/dist/core/interfaces";
import { handlerError } from "../../../../../core/api";
import Backend_Api from "../../../../../core/api/axiosBase";
import { Vacant_I, Vacant_Postulation_I, Vacant_Postulation_Status_Enum } from "@tesis-project/dev-globals/dist/modules/business/vacants/interfaces";
import { Artist_Enum } from "@tesis-project/dev-globals/dist/modules/profile/interfaces";

import { Search_Vacant_Dto } from "@tesis-project/dev-globals/dist/modules/business/vacants/dto";


export const start_createVacant_vacantPage = (vacant: Vacant_I): Promise<_Response_I<Vacant_I>> => {
    return new Promise(async (resolve, reject) => {
        try {

            const formData = new FormData();

            if (vacant.vacant_pic) {
                formData.append('file', vacant.vacant_pic as any);
                delete vacant.vacant_pic;
            }
            formData.append('body', JSON.stringify(vacant));

            const resp: _Response_I = await Backend_Api.post(`/business/vacants/create`, formData).then(r => r);

            console.log('crea', resp);
            resolve(resp);

        } catch (error: any) {

            let r: _Response_I = handlerError(error);
            reject(r);

        }
    })
}

export const start_getPublicVacants_vacantPage = (type: Artist_Enum): Promise<_Response_I<Vacant_I[]>> => {
    return new Promise(async (resolve, reject) => {
        try {

            const resp: _Response_I = await Backend_Api.post(`/business/vacants/get_all_public`, {
                type: type
            }).then(r => r);
            resolve(resp);

        } catch (error: any) {

            let r: _Response_I = handlerError(error);
            reject(r);

        }
    })
}

export const start_getOwnPublicVacants_vacantPage = (): Promise<_Response_I<Vacant_I[]>> => {
    return new Promise(async (resolve, reject) => {
        try {

            const resp: _Response_I = await Backend_Api.get(`/business/vacants/get_all_own`).then(r => r);
            resolve(resp);

        } catch (error: any) {

            let r: _Response_I = handlerError(error);
            reject(r);

        }
    })
}

export const start_getOnePublication = (_id: string): Promise<_Response_I<Vacant_I>> => {
    return new Promise(async (resolve, reject) => {
        try {

            const resp: _Response_I = await Backend_Api.get(`/business/vacants/${_id}`).then(r => r);

            resolve(resp);

        } catch (error: any) {

            let r: _Response_I = handlerError(error);
            reject(r);

        }
    })
}

export const start_getPostulationsByVacant = (_id: string): Promise<_Response_I<Vacant_Postulation_I[]>> => {
    return new Promise(async (resolve, reject) => {
        try {

            const resp: _Response_I = await Backend_Api.get(`/business/vacants/postulations/${_id}`).then(r => r);

            resolve(resp);

        } catch (error: any) {

            let r: _Response_I = handlerError(error);
            reject(r);

        }
    })
}

export const start_createPostulation = (vacant_id: string, comment?: string): Promise<_Response_I> => {
    return new Promise(async (resolve, reject) => {
        try {

            const resp: _Response_I = await Backend_Api.post(`/business/vacants/postulations/create/${vacant_id}`, {
                comment: comment || ''
            }).then(r => r);
            resolve(resp);

        } catch (error: any) {

            let r: _Response_I = handlerError(error);
            reject(r);

        }
    })
}

export const start_evaluatePostulation = (postulation_id: string, status: Vacant_Postulation_Status_Enum, comment?: string): Promise<_Response_I> => {
    return new Promise(async (resolve, reject) => {
        try {

            const resp: _Response_I = await Backend_Api.post(`/business/vacants/postulations/evaluate/${postulation_id}`, {
                owner_comment: comment,
                status: status
            }).then(r => r);
            resolve(resp);

        } catch (error: any) {

            let r: _Response_I = handlerError(error);
            reject(r);

        }
    })
}

export const start_deletePostulation = (postulation_id: string): Promise<_Response_I> => {
    return new Promise(async (resolve, reject) => {
        try {

            const resp: _Response_I = await Backend_Api.delete(`/business/vacants/postulations/${postulation_id}`).then(r => r);
            resolve(resp);

        } catch (error: any) {

            console.log('error al eliminar');

            let r: _Response_I = handlerError(error);
            reject(r);

        }
    })
}

export const start_createPlanningContract = (postulation_id: string): Promise<_Response_I> => {
    return new Promise(async (resolve, reject) => {
        try {

            const resp: _Response_I = await Backend_Api.post(`/business/vacants/contracts/create`, {
                postulation_id: postulation_id
            }).then(r => r);
            resolve(resp);

        } catch (error: any) {

            console.log('error al eliminar');

            let r: _Response_I = handlerError(error);
            reject(r);

        }
    })
}