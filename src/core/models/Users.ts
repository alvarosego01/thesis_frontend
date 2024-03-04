
import { SchemaKey_I } from "../interfaces/data.utils.interfaces";
import { File_Model_I } from "./Files";

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

export type Role_Type = "ARTIST_ROLE" | "CONTRATIST_ROLE" | "ADMIN_ROLE";

export interface User_Auth_I extends SchemaKey_I {
    role?: Role_Type;
    username?: string
    email?: string;
    password?: string;
    // status?: "none" | "Verified" | "Not-Verified" | "Blocked" | "Deleted" | "Suspended" | "Pending" | "Active" | "Inactive";
    status?: "none" | "VERIFIED" | "NOT-VERIFIED" | "BLOCKED" | "DELETED" | "SUSPENDED" | "PENDING" | "ACTIVE" | "INACTIVE";
    signature?: {
        text: string;
        date: string;
    }
    user?: User_I | string;
}