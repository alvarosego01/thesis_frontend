import { SchemaKey_I } from "../interfaces";


export interface File_Model_I extends SchemaKey_I {
    name: string;
    type: string;
    file: string;
    format: string;
    folder: string;
    // details?: string;
    //statusOrder?: any

}