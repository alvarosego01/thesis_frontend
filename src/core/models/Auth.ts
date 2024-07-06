import { SchemaKey_I } from "../interfaces";
import { File_Model_I } from "./Files";
import { User_I } from "./Users";


const UserRole_TypeDefault = [
    "ARTIST_ROLE",
    "CONTRATIST_ROLE",
    "ADMIN_ROLE"
] as const;
export type Role_Type = typeof UserRole_TypeDefault[number];

const UserStatus_TypeDefault = [
    "NONE",
    "VERIFIED",
    "NOT-VERIFIED",
    "BLOCKED",
    "DELETED",
    "SUSPENDED",
    "PENDING",
    "ACTIVE",
    "INACTIVE"
] as const;
export type UserStatus_Type = typeof UserStatus_TypeDefault[number];

export interface User_Auth_I extends SchemaKey_I {
    role?: Role_Type;
    username?: string
    email?: string;
    name: string;
    last_name: string;
    profile_pic: File_Model_I;
    cover_pic: File_Model_I;
    token: string;
    status?: UserStatus_Type;

    // password?: string;
    // signature?: {
    //     text: string;
    //     date: string;
    // }
    // user?: User_I | string;
}