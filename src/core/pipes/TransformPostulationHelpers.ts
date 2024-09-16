
import { Vacant_Postulation_Status_Enum } from "@tesis-project/dev-globals/dist/modules/business/vacants/interfaces";

export const TransformPostulationHelpers_P = (text: string): string => {

    // Services
    if(text === Vacant_Postulation_Status_Enum.ACCEPTED) return "Terrestre";


    return text;


}