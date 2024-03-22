import { SchemaKey_I } from "../interfaces";
import { User_I } from "./Users";

export type Role_Type = "ARTIST_ROLE" | "CONTRATIST_ROLE" | "ADMIN_ROLE";

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