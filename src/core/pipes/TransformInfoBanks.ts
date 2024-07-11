import { Banks_Enum, Payment_Type_Enum } from "@tesis-project/dev-globals/dist/modules/user/interfaces";

export const transformTypePay_P = (type: Payment_Type_Enum): string => {

    switch (type) {
        case Payment_Type_Enum.BANK_ACCOUNT:
            return "Cuenta Bancaria";
        case Payment_Type_Enum.MOBILE_PAYMENT:
            return "Pago Móvil";
        default:
            return "No definido";
    }

}

export const transformBankName_P = (type: Banks_Enum): string => {

    switch (type) {
        case Banks_Enum.BC_BICENTENARIO:
            return "Banco Bicentenario";
        case Banks_Enum.BC_BANESCO:
            return "Banco Banesco";
        case Banks_Enum.BC_TESORO:
            return "Banco Tesoro";
        case Banks_Enum.BC_PROVINCIAL:
            return "Banco Provincial";
        case Banks_Enum.BC_MERCANTIL:
            return "Banco Mercantil";
        case Banks_Enum.BC_VENEZUELA:
            return "Banco de Venezuela";
        default:
            return '';
    }

}


