
import { SchemaKey_I } from "../interfaces/data.utils.interfaces";
import { File_Model_I } from "./Files";


/**--------------------------------------------
 *               Interfaces & Types
 *---------------------------------------------**/
const type_array_default = [
    "Banco de Venezuela",
    "Banco Mercantil",
    "Banco Provincial",
    "Banco Bicentenario",
    "Banco del Tesoro",
    "Banco Banesco",
] as const;
export type Banks_Type = typeof type_array_default[number];

const type_array_default_2 = [
    "bank_account",
    "mobile_payment",
] as const;
export type Payment_Type = typeof type_array_default_2[number];

export type Role_Type = "ARTIST_ROLE" | "CONTRATIST_ROLE" | "ADMIN_ROLE";

/*--------------- Interfaces & Types --------------*/


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

export interface Payment_Account_I {
    type: Payment_Type;
    bank_name: Banks_Type;
    number: string;
    titular: string;
    person_id: string;
    phone: string;
    date: string
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

export interface User_Profile_I extends SchemaKey_I {
    artistic_name: string;
    bio_short: string;
    profile_pic: File_Model_I;
    cover_pic: File_Model_I;
    credentials: {
        identity_file?: File_Model_I;
        profesional_file?: File_Model_I;
    };
    media: {
        image_gallery?: File_Model_I[];
        video_gallery?: File_Model_I[];
    };
    socials: {
        facebook?: string;
        twitter?: string;
        instagram?: string;
        youtube?: string;
        tiktok?: string;
    };
    user?: User_I | string;
}

export interface User_Auth_I extends SchemaKey_I {
    role?: Role_Type;
    username?: string
    email?: string;
    password?: string;
    status?: "none" | "VERIFIED" | "NOT-VERIFIED" | "BLOCKED" | "DELETED" | "SUSPENDED" | "PENDING" | "ACTIVE" | "INACTIVE";
    signature?: {
        text: string;
        date: string;
    }
    user?: User_I | string;
}
/*--------------- Models & Schemas --------------*/




