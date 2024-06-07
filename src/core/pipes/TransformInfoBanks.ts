import { Banks_Type, Payment_Type } from "../models";

export const transformTypePay_P = (type: Payment_Type): string => {

    switch (type) {
        case "bank_account":
            return "Cuenta Bancaria";
        case "mobile_payment":
            return "Pago Móvil";
        default:
            return "No definido";
    }

}

export const transformBankName_P = (type: Banks_Type): string => {

    switch (type) {
        case 'bc_bicentenario':
            return "Banco Bicentenario";
        case 'bc_banesco':
            return "Banco Banesco";
        case 'bc_tesoro':
            return "Banco Tesoro";
        case 'bc_provincial':
            return "Banco Provincial";
        case 'bc_mercantil':
            return "Banco Mercantil";
        case 'bc_venezuela':
            return "Banco de Venezuela";
        default:
            return '';
    }

}


