import { SchemaKey_I } from "../interfaces";
import { File_Model_I } from "./Files";
import { User_I } from "./Users";

export type Role_Type = "ARTIST_ROLE" | "CONTRATIST_ROLE" | "ADMIN_ROLE";

export interface User_Auth_I extends SchemaKey_I {
    role?: Role_Type;
    username?: string
    email?: string;
    name: string;
    last_name: string;
    profile_pic: File_Model_I;
    cover_pic: File_Model_I;
    token: string;
    status?: "none" | "VERIFIED" | "NOT-VERIFIED" | "BLOCKED" | "DELETED" | "SUSPENDED" | "PENDING" | "ACTIVE" | "INACTIVE";

    // password?: string;
    // signature?: {
    //     text: string;
    //     date: string;
    // }
    // user?: User_I | string;
}