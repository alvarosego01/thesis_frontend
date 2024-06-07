import { Banks_Type } from "../models";

export const Banks_List: {
    label: string;
    value: Banks_Type;
}[] = [
        {
            label: "Banco de Venezuela",
            value: "bc_venezuela"
        },
        {
            label: "Banco Mercantil",
            value: "bc_mercantil"
        },
        {
            label: "Banco Provincial",
            value: "bc_provincial"
        },
        {
            label: "Banco Bicentenario",
            value: "bc_bicentenario"
        },
        {
            label: "Banco Banesco",
            value: "bc_banesco"
        }
    ]

    export const Payments_Type_List: {
        value: "bank_account" | "mobile_payment";
        label: string;
    }[] = [
        {
            value: "bank_account",
            label: "Cuenta Bancaria"
        },
        {
            value: "mobile_payment",
            label: "Pago Móvil"
        }
    ];
