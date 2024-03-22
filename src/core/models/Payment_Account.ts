
/**--------------------------------------------
 *               Interfaces & Types
 *---------------------------------------------**/
const type_array_default = [
    "Banco de Venezuela",
    "Banco Mercantil",
    "Banco Provincial",
    "Banco Bicentenario",
    "Banco del Tesoro",
    "Banco Banesco",
] as const;
export type Banks_Type = typeof type_array_default[number];

const type_array_default_2 = [
    "bank_account",
    "mobile_payment",
] as const;
export type Payment_Type = typeof type_array_default_2[number];

/*--------------- Interfaces & Types --------------*/
export interface Payment_Account_I {
    type: Payment_Type;
    bank_name: Banks_Type;
    number: string;
    titular: string;
    person_id: string;
    phone: string;
    date: string
}