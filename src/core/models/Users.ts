
import { SchemaKey_I } from "../interfaces";
import { User_Auth_I } from "./Auth";
import { Payment_Account_I } from "./Payment_Account";
import { User_Profile_I } from './Profile';



/**--------------------------------------------
 *               Models & Schemas
 *---------------------------------------------**/
export interface User_I extends SchemaKey_I{
    name: string;
    last_name: string;
    gender?: string;
    phone?: string;
    direction?: {
        adress?: string;
        city?: string;
        state?: string;
    }
    auth?: User_Auth_I | string;
    profile?: User_Profile_I | string;
    hiring_data?: User_HiringData_I | string;
}

export interface User_HiringData_I extends SchemaKey_I {
    personal: {
        address?: string;
        city?: string;
        phone?: string;
        postal_code?: string;
        rif?: string;
        social_reason?: string;
        state?: string;
    };
    payment_accounts?: Payment_Account_I[]
}


/*--------------- Models & Schemas --------------*/




