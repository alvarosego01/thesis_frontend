import { Role_Type } from "../models";



export const transformRoles = (role: Role_Type): string => {

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

