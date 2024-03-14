import { SchemaKey_I } from "../interfaces/data.utils.interfaces";


export interface Notification_I extends SchemaKey_I {

    read: boolean;
    title: string;
    contain: string;
    date: string;

}