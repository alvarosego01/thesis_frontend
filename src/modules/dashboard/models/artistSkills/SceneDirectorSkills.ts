import { SD_Repertoire_Type, SD_specialty_Type } from "@tesis-project/dev-globals/dist/modules/profile/interfaces";
import { Skill_Model_I } from "./interfaces";

interface Skills_Model_I {
    repertoire: Skill_Model_I<SD_Repertoire_Type>[];
    specialty: Skill_Model_I<SD_specialty_Type>[];
}

export const sceneDirectorModel: Skills_Model_I = {
    repertoire: [
        {
            label: 'Alemán',
            value: 'SD_repertoire_german',

        },
        {
            label: 'Francés',
            value: 'SD_repertoire_french',

        },
        {
            label: 'Italiano',
            value: 'SD_repertoire_italian',

        },
        {
            label: 'Latinoamericano',
            value: 'SD_repertoire_latinamerican',

        },
        {
            label: 'Norteamericano',
            value: 'SD_repertoire_northamerican',

        },
        {
            label: 'Ruso',
            value: 'SD_repertoire_russian',

        },
        {
            label: 'Otros',
            value: 'SD_repertoire_others',

        }

    ],
    specialty: [
        {
            label: 'Broadway',
            value: 'SD_specialty_broadway',

        },
        {
            label: 'Conciertos - Galas',
            value: 'SD_specialty_concerts_galas',
        },
        {
            label: 'Opera',
            value: 'SD_specialty_opera',
        },
        {
            label: 'Opereta',
            value: 'SD_specialty_operetta',
        },
        {
            label: 'Zarzuela',
            value: 'SD_specialty_zarzuela',
        },
        {
            label: 'Otros',
            value: 'SD_specialty_others',
        }
    ],
}