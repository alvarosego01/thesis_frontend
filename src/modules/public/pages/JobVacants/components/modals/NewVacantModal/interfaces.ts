import { Artist_Enum } from "@tesis-project/dev-globals/dist/modules/profile/interfaces";
import { SelectValue_I } from "../../../../../../../core/components/forms/interfaces";
import { Currency_Enum } from "@tesis-project/dev-globals/dist/core/interfaces";
import { Vacant_Transport_Enum, Vacant_Housing_Enum, Vacant_Budget_Costs_I, Vacant_Housing_I, Vacant_Transport_I } from "@tesis-project/dev-globals/dist/modules/business/vacants/interfaces";


export interface Vacant_Values_Step1_I {

    title: string;
    desc: string;

    direction?: string;
    city?: string;
    state?: string;


}

export interface Vacant_Values_Step2_I {

    role_desc: string;
    role_type: SelectValue_I<Artist_Enum>[];

}

export interface Vacant_Values_Step3_I {


    control_service: typeof control_service,

    transport_desc?: string;
    transport_type: typeof transport_service;

    housing_desc?: string;
    housing_type: typeof housing_service;

    costs_desc?: string;
    costs_currency: typeof currency;
    costs_mount: number;


}

export interface Vacant_Values_I extends Vacant_Values_Step1_I, Vacant_Values_Step2_I, Vacant_Values_Step3_I {}

// let x: Vacant_Values_I = {
    //
// }


//


export enum ServicesIncludes_Enum {
    TRANSPORT = "TRANSPORT",
    HOUSING = "HOUSING",
    COSTS = "COSTS",
    MOBILE_PAYMENT = "MOBILE_PAYMENT",
}

export const currency: SelectValue_I<Currency_Enum>[] = [
    {
        label: 'USD',
        value: Currency_Enum.USD
    },
    {
        label: 'Bs',
        value: Currency_Enum.BS
    },
]

export const control_service: SelectValue_I<ServicesIncludes_Enum>[] = [
    {
        label: 'Transporte',
        value: ServicesIncludes_Enum.TRANSPORT
    },
    {
        label: 'Hospedaje',
        value: ServicesIncludes_Enum.HOUSING
    },
    {
        label: 'Costos viaticos',
        value: ServicesIncludes_Enum.COSTS
    },
]


export const transport_service: SelectValue_I<Vacant_Transport_Enum>[] = [
    {
        label: 'Terrestre',
        value: Vacant_Transport_Enum.LAND
    },
    {
        label: 'Aereo',
        value: Vacant_Transport_Enum.AIR
    },
]

export const housing_service: SelectValue_I<Vacant_Housing_Enum>[] = [
    {
        label: 'Apartamento',
        value: Vacant_Housing_Enum.APARTMENT
    },
    {
        label: 'Hotel',
        value: Vacant_Housing_Enum.HOTEL
    },
    {
        label: 'Casa',
        value: Vacant_Housing_Enum.HOUSE
    },
    {
        label: 'Habitación',
        value: Vacant_Housing_Enum.ROOM
    },
    {
        label: 'Compartido',
        value: Vacant_Housing_Enum.SHARED
    },

];