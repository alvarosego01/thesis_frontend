
/**--------------------------------------------
 *               Interfaces & Types
 *---------------------------------------------**/
const type_array_default = [
    "bc_bicentenario",
    "bc_banesco",
    "bc_tesoro",
    "bc_provincial",
    "bc_mercantil",
    "bc_venezuela",
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