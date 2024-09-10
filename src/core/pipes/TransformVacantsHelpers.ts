import { Currency_Enum } from "@tesis-project/dev-globals/dist/core/interfaces";
import { Vacant_Transport_Enum, Vacant_Housing_Enum } from "@tesis-project/dev-globals/dist/modules/business/vacants/interfaces";
import { SelectValue_I } from "../components/forms/interfaces";

/*
export enum ServicesIncludes_Enum {
    TRANSPORT = "TRANSPORT",
    HOUSING = "HOUSING",
    COSTS = "COSTS",
    MOBILE_PAYMENT = "MOBILE_PAYMENT",
}

export const currency: SelectValue_I<Currency_Enum>[] = [
    {
        label: "USD",
        value: Currency_Enum.USD
    },
    {
        label: "Bs",
        value: Currency_Enum.BS
    },
]

export const control_service: SelectValue_I<ServicesIncludes_Enum>[] = [
    {
        label: "Transporte",
        value: ServicesIncludes_Enum.TRANSPORT
    },
    {
        label: "Hospedaje",
        value: ServicesIncludes_Enum.HOUSING
    },
    {
        label: "Costos viaticos",
        value: ServicesIncludes_Enum.COSTS
    },
]


export const transport_service: SelectValue_I<Vacant_Transport_Enum>[] = [
    {
        label: "Terrestre",
        value: Vacant_Transport_Enum.LAND
    },
    {
        label: "Aereo",
        value: Vacant_Transport_Enum.AIR
    },
]

export const housing_service: SelectValue_I<Vacant_Housing_Enum>[] = [
    {
        label: "Apartamento",
        value: Vacant_Housing_Enum.APARTMENT
    },
    {
        label: "Hotel",
        value: Vacant_Housing_Enum.HOTEL
    },
    {
        label: "Casa",
        value: Vacant_Housing_Enum.HOUSE
    },
    {
        label: "Habitación",
        value: Vacant_Housing_Enum.ROOM
    },
    {
        label: "Compartido",
        value: Vacant_Housing_Enum.SHARED
    },

];
 */

export const TransformVacantsHelpers_P = (text: string): string => {

    // Services
    if(text === Vacant_Transport_Enum.LAND) return "Terrestre";
    if(text === Vacant_Transport_Enum.AIR) return "Aereo";

    if(text === Vacant_Housing_Enum.APARTMENT) return "Apartamento";
    if(text === Vacant_Housing_Enum.HOTEL) return "Hotel";
    if(text === Vacant_Housing_Enum.HOUSE) return "Casa";
    if(text === Vacant_Housing_Enum.ROOM) return "Habitación";
    if(text === Vacant_Housing_Enum.SHARED) return "Compartido";

    if(text === Currency_Enum.USD) return "USD";
    if(text === Currency_Enum.BS) return "Bs";


    return text;


}