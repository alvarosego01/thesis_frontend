
import { SchemaKey_I } from "../interfaces";
import { File_Model_I } from "./Files";
import { User_I } from "./Users";

const typeContracts_default = [
    "ACTIVE_PROPOSAL",
    "SIGNED",
    "IN_PROGRESS",
    "CANCELLED",
    "REFUSED",
    "FINALIZED",
] as const;
export type ContractStatus_Type = typeof typeContracts_default[number];


export interface Contracts_I extends SchemaKey_I {

    contratist_id: User_I | string;
    linked_user_id: User_I | string;
    activity_date: {
        start: string;
        end: string;
    };
    status: ContractStatus_Type;
    created_at: string;
    updated_at: string;
    // TODO - Add details model - remove any
    details: any;

    sign_data: {
        contratist_signature: any;
        linked_user_signature: any;
    }

    image_logo: File_Model_I;
    title: string;


}