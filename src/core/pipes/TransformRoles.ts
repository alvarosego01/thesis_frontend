
import { Artist_Enum } from "@tesis-project/dev-globals/dist/modules/profile/interfaces";
import { Role_Type } from "../models";


export const transformRoles_P = (role: Role_Type): string => {

    switch (role) {
        case "ARTIST_ROLE":
            return "Artista";
        case "CONTRATIST_ROLE":
            return "Contratista";
        case "ADMIN_ROLE":
            return "Administrador";
        default:
            return "Usuario";
    }

}

export const transformType_Artists_P = (type: Artist_Enum ) => {

    switch (type) {
        case Artist_Enum.SINGER:
            return "Cantante";
        case Artist_Enum.INSTRUMENTIST:
            return "Instrumentista";
        case Artist_Enum.ORQUESTA_DIRECTOR:
            return "Director de orquesta";
        case Artist_Enum.SCENE_DIRECTOR:
            return "Director de escena";
        default:
            return "Artista";
    }

}