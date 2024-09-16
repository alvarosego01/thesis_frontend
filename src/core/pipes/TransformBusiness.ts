
import { Contract_Status_Enum } from "@tesis-project/dev-globals/dist/modules/business/contracts/interfaces";

export const Transform_ContractStatus_P = (status: Contract_Status_Enum): string => {

    let aux_status = '';
    switch (status) {
        case Contract_Status_Enum.PLANNING:
            aux_status = 'Planificación';
            break;
        case Contract_Status_Enum.IN_PROGRESS:
            aux_status = 'En progreso';
            break;
        case Contract_Status_Enum.SINGS_PENDING:
            aux_status = 'En espera de aceptación';
            break;
        case Contract_Status_Enum.COMPLETED:
            aux_status = 'Completado';
            break;
        case Contract_Status_Enum.CANCELLED:
            aux_status = 'Cancelado';
            break;

        default:
            break;
    }
    return aux_status;

}