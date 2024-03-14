import { Skill_Model_I } from "./interfaces"



interface Instrumentist_Model_I {

    specialty: Skill_Model_I[];
    position: Skill_Model_I[];
    categories: Skill_Model_I[];

    wind_metal: Skill_Model_I[];
    wind_wood: Skill_Model_I[];

    percussion: Skill_Model_I[];
    electrical: Skill_Model_I[];
    string: Skill_Model_I[];

}


export const instrumentistModel: Instrumentist_Model_I = {

    specialty: [
        {
            label: 'Orquesta Sinfónica',
            value: 'specialty_symphonicOrchestra'
        },
        {
            label: 'Música de Cámara',
            value: 'specialty_chamberMusic'
        }
    ],
    position: [
        {
            label: 'Miembro de orquesta',
            value: 'position_orchestraMember'
        },
        {
            label: 'Solista',
            value: 'position_solist'
        }
    ],
    categories: [
         {
            label: 'Viento',
            value: 'instrument_wind',
        },
         {
            label: 'Percusión',
            value: 'instrument_percussion',
        },
         {
            label: 'Eléctricos',
            value: 'instrument_electrical',
        },
         {
            label: 'Cuerda',
            value: 'instrument_string',
        }
    ],

    wind_metal: [
            {
                label: 'Corno francés',
                value: 'instrument_wind_metal_frenchHorn'
            },
            {
                label: 'Bombardino',
                value: 'instrument_wind_metal_euphonium'
            },
            {
                label: 'Clarín',
                value: 'instrument_wind_metal_clarinet'
            },
            {
                label: 'Trombón',
                value: 'instrument_wind_metal_trombone'
            },
            {
                label: 'Trombón bajo',
                value: 'instrument_wind_metal_bassTrombone'
            },
            {
                label: 'Trompeta',
                value: 'instrument_wind_metal_trumpet'
            },
            {
                label: 'Tuba',
                value: 'instrument_wind_metal_tuba'
            },
            {
                label: 'Otros',
                value: 'instrument_wind_metal_others'
            }
        ],
    wind_wood: [
            {
                label: 'Acordeón​',
                value: 'instrument_wind_wood_accordion'
            },
            {
                label: 'Armonio',
                value: 'instrument_wind_wood_harmonium'
            },
            {
                label: 'Armónica',
                value: 'instrument_wind_wood_harmonica'
            },
            {
                label: 'Bansuri',
                value: 'instrument_wind_wood_bansuri'
            },
            {
                label: 'Bandoneón',
                value: 'instrument_wind_wood_bandoneon'
            },
            {
                label: 'Clarinete',
                value: 'instrument_wind_wood_clarinet'
            },
            {
                label: 'Claron',
                value: 'instrument_wind_wood_claron'
            },
            {
                label: 'Corno inglés',
                value: 'instrument_wind_wood_englishHorn'
            },
            {
                label: 'Contrafagot',
                value: 'instrument_wind_wood_contrafagot'
            },
            {
                label: 'Fagot',
                value: 'instrument_wind_wood_fagot'
            },
            {
                label: 'Flauta de Pan',
                value: 'instrument_wind_wood_pan_flute'
            },
            {
                label: 'Flauta dulce',
                value: 'instrument_wind_wood_sweet_flute'
            },
            {
                label: 'Flauta Irlandesa',
                value: 'instrument_wind_wood_ireland_flute'
            },
            {
                label: 'Flauta traversa',
                value: 'instrument_wind_wood_transverse_flute'
            },
            {
                label: 'Flautín',
                value: 'instrument_wind_wood_'
            },
            {
                label: '​Gaita',
                value: 'instrument_wind_wood_bagpipe'
            },
            {
                label: 'Melódico',
                value: 'instrument_wind_wood_melodic'
                // subElements: [
                //     {
                //         label: 'Accordina',
                //         value:
                //     },
                //     {
                //         label: 'Contrabajo',
                //         value:
                //     },
                //     {
                //         label: 'Otros',
                //         value:
                //     },
                //     {
                //         label: 'Soprano',
                //         value:
                //     },
                //     {
                //         label: 'Tenor',
                //         value:
                //     }
                // ]
            },
            {
                label: 'Oboe',
                value: 'instrument_wind_wood_oboe'
            },
            {
                label: 'Ocarina',
                value: 'instrument_wind_wood_ocarina'
            },
            {
                label: 'Quena',
                value: 'instrument_wind_wood_quena'
            },
            {
                label: 'Saxo',
                value: 'instrument_wind_wood_sax'
                // subElements: [
                //     {
                //         label: 'Alto',
                //         value:
                //     },
                //     {
                //         label: 'Bajo',
                //         value:
                //     },
                //     {
                //         label: 'Barítono',
                //         value:
                //     },
                //     {
                //         label: 'Contrabajo',
                //         value:
                //     },
                //     {
                //         label: 'Sopranino',
                //         value:
                //     },
                //     {
                //         label: 'Soprano',
                //         value:
                //     },
                //     {
                //         label: 'Tenor',
                //         value:
                //     }
                // ]
            },
            {
                label: 'Otros',
                value: 'instrument_wind_wood_others'
            }
        ],

    percussion: [
        {
            label: 'Árabes/varios',
            value: 'instrument_percussion_arab'
        },
        {
            label: 'Brasilera/varios',
            value: 'instrument_percussion_brazilian'
        },
        {
            label: 'Cubana/varios',
            value: 'instrument_percussion_cuban'
        },
        {
            label: 'Folklórica/varios',
            value: 'instrument_percussion_folk'
        },
        {
            label: 'Hindu/varios',
            value: 'instrument_percussion_hindu'
        },
        {
            label: 'Latina/varios',
            value: 'instrument_percussion_latin'
        },
        {
            label: 'Oriental/varios',
            value: 'instrument_percussion_oriental'
        },
        {
            label: 'Sinfónica/varios',
            value: 'instrument_percussion_symphonic'
        },
        {
            label: 'Piano',
            value: 'instrument_percussion_piano'
        },
        {
            label: 'Teclados/Marimba',
            value: 'instrument_percussion_marimba'
        },
        {
            label: 'Teclados/Vibráfono',
            value: 'instrument_percussion_vibraphone'
        },
        {
            label: 'Teclados/Xilófono',
            value: 'instrument_percussion_xylophone'
        },
        {
            label: 'Timbales/Timbaletas/Pailas',
            value: 'instrument_percussion_timpani'
        },
    ],
    electrical: [
        {
            label: 'Bajo',
            value: 'instrument_electrical_bass'
        },
        {
            label: 'Guitarra',
            value: 'instrument_electrical_guitar'
        },
        {
            label: 'Piano',
            value: 'instrument_electrical_piano'
        },
        {
            label: 'Sintetizador',
            value: 'instrument_electrical_synthesizer'
        },
        {
            label: 'Violín',
            value: 'instrument_electrical_violin'
        }
    ],
    string: [
        {
            label: 'Arpa',
            value: 'instrument_string_harp'
        },
        {
            label: 'Guitarra Clásica',
            value: 'instrument_string_classicGuitar'
        },
        {
            label: 'Contrabajo',
            value: 'instrument_string_bass'
        },
        {
            label: 'Viola',
            value: 'instrument_string_viola'
        },
        {
            label: 'Violín',
            value: 'instrument_string_violin'
        },
        {
            label: 'Violoncello',
            value: 'instrument_string_cello'
        },
        {
            label: 'Otros',
            value: 'instrument_string_others'
        }
    ]

};
