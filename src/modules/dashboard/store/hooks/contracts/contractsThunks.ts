
import { _Response_I } from "@tesis-project/dev-globals/dist/core/interfaces";
import Backend_Api from "../../../../../core/api/axiosBase";
import { handlerError } from "../../../../../core/api";
import { Contract_I } from "@tesis-project/dev-globals/dist/modules/business/contracts/interfaces";


 export const start_get_contract = (_id: string): Promise<_Response_I<Contract_I>> => {
     return new Promise(async (resolve, reject) => {
         try {

            const resp: _Response_I = await Backend_Api.get(`/business/vacants/contracts/${_id}`).then(r => r);
            resolve(resp);

         } catch (error: any) {

             let r: _Response_I = handlerError(error);
             reject(r);

         }
     })
 }

 export const start_set_contractDetails = (_id: string, payment_account_id: string): Promise<_Response_I<Contract_I>> => {
     return new Promise(async (resolve, reject) => {
         try {

            const resp: _Response_I = await Backend_Api.put(`/business/vacants/contracts/update/${_id}` , {
                type: "PAYMENT_INFO",
                payment_account: payment_account_id
            }).then(r => r);
            resolve(resp);

         } catch (error: any) {

             let r: _Response_I = handlerError(error);
             reject(r);

         }
     })
 }


 export const start_send_contracProposal = (_id: string): Promise<_Response_I<Contract_I>> => {
     return new Promise(async (resolve, reject) => {
         try {

            const resp: _Response_I = await Backend_Api.post(`/business/vacants/contracts/send_proposal/${_id}` ).then(r => r);
            resolve(resp);

         } catch (error: any) {

             let r: _Response_I = handlerError(error);
             reject(r);

         }
     })
 }


 export const start_get_document = (_id: string): Promise<_Response_I> => {
     return new Promise(async (resolve, reject) => {
         try {

            const resp: _Response_I = await Backend_Api.get(`/business/vacants/contracts/generate_doc/${_id}` ).then(r => r);
            resolve(resp);

         } catch (error: any) {

             let r: _Response_I = handlerError(error);
             reject(r);

         }
     })
 }


 export const start_get_contracts = (): Promise<_Response_I<Contract_I[]>> => {
     return new Promise(async (resolve, reject) => {
         try {

            const resp: _Response_I = await Backend_Api.get(`/business/vacants/contracts/list` ).then(r => r);
            resolve(resp);

         } catch (error: any) {

             let r: _Response_I = handlerError(error);
             reject(r);

         }
     })
 }

 export const start_set_acceptContract = (_id: string): Promise<_Response_I<Contract_I>> => {
     return new Promise(async (resolve, reject) => {
         try {

            const resp: _Response_I = await Backend_Api.put(`/business/vacants/contracts/accept/${_id}` ).then(r => r);
            resolve(resp);

         } catch (error: any) {

             let r: _Response_I = handlerError(error);
             reject(r);

         }
     })
 }


