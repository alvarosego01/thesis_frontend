import { Skill_Model_I } from "./interfaces";

interface Skills_Model_I {
    repertoire: Skill_Model_I[];
    specialty: Skill_Model_I[];
}

export const orchestraDirectorModel: Skills_Model_I = {

    repertoire: [
        {
            label: 'Alemán',
            value: 'DO_repertoire_german',
            // check: false
        },
        {
            label: 'Francés',
            value: 'DO_repertoire_french',
            // check: false
        },
        {
            label: 'Italiano',
            value: 'DO_repertoire_italian',
            // check: false
        },
        {
            label: 'Latinoamericano',
            value: 'DO_repertoire_latinamerican',
            // check: false
        },
        {
            label: 'Norteamericano',
            value: 'DO_repertoire_northamerican',
            // check: false
        },
        {
            label: 'Ruso',
            value: 'DO_repertoire_russian',
            // check: false
        },
        {
            label: 'Otros',
            value: 'DO_repertoire_others',
            // check: false
        }
    ],
    specialty: [
        {
            label: 'Broadway',
            value: 'DO_specialty_broadway',
            // check: false
        },
        {
            label: 'Conciertos sinfónicos',
            value: 'DO_specialty_sinfonic_concerts',
            // check: false
        },
        {
            label: 'Galas líricas',
            value: 'DO_specialty_lyric_galas',
            // check: false
        },
        {
            label: 'Opera',
            value: 'DO_specialty_opera',
            // check: false
        },
        {
            label: 'Opereta',
            value: 'DO_specialty_operetta',
            // check: false
        },
        {
            label: 'Sinfónico - fusiones',
            value: 'DO_specialty_sinfonic_fusions',
            // check: false
        },
        {
            label: 'Zarzuela',
            value: 'DO_specialty_zarzuela',
            // check: false
        },
        {
            label: 'Otros',
            value: 'DO_specialty_others',
            // check: false
        }
    ],
}
