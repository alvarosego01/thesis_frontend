import { Banks_Enum, Payment_Type_Enum } from "@tesis-project/dev-globals/dist/modules/user/interfaces";
import { Banks_Type } from "../models";

export const Banks_List: {
    label: string;
    value: Banks_Enum;
}[] = [
        {
            label: "Banco de Venezuela",
            value: Banks_Enum.BC_VENEZUELA
        },
        {
            label: "Banco Mercantil",
            value: Banks_Enum.BC_MERCANTIL
        },
        {
            label: "Banco Provincial",
            value: Banks_Enum.BC_PROVINCIAL
        },
        {
            label: "Banco Bicentenario",
            value: Banks_Enum.BC_BICENTENARIO
        },
        {
            label: "Banco Banesco",
            value: Banks_Enum.BC_BANESCO
        }
    ]

    export const Payments_Type_List: {
        value: Payment_Type_Enum
        label: string;
    }[] = [
        {
            value: Payment_Type_Enum.BANK_ACCOUNT,
            label: "Cuenta Bancaria"
        },
        {
            value: Payment_Type_Enum.MOBILE_PAYMENT,
            label: "Pago Móvil"
        }
    ];
