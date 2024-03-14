import { Banks_Type } from "../models";

export const Banks_List: {
    bank: Banks_Type;
    code: string;
}[] = [
        {
            bank: "Banco de Venezuela",
            code: "0102"
        },
        {
            bank: "Banco Mercantil",
            code: "0105"
        },
        {
            bank: "Banco Provincial",
            code: "0108"
        },
        {
            bank: "Banco Bicentenario",
            code: "0163"
        },
        {
            bank: "Banco Banesco",
            code: "0134"
        }
    ]

    export const Payments_Type_List: {
        type: "bank_account" | "mobile_payment";
        label: string;
    }[] = [
        {
            type: "bank_account",
            label: "Cuenta Bancaria"
        },
        {
            type: "mobile_payment",
            label: "Pago Móvil"
        }
    ];
