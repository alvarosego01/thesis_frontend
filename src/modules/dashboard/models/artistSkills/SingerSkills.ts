import { Skill_Model_I } from "./interfaces";

import { Singer_voiceSpecialty_Type, Singer_voiceType_Type } from "@tesis-project/dev-globals/dist/modules/profile/interfaces"


interface SingerSkills_Model_I {
    voice_specialty: Skill_Model_I<Singer_voiceSpecialty_Type>[];
    voice_type: Skill_Model_I<Singer_voiceType_Type>[];
    // repertoire: SingerRepertoire_Model_I[];
}

export const singerModel_Data: SingerSkills_Model_I = {
    voice_specialty: [
        {
            label: 'Ópera',
            value: 'singer_specialty_opera'
        },
        {
            label: 'Zarzuela',
            value: 'singer_specialty_zarzuela'
        },
        {
            label: 'Oratorio',
            value: 'singer_specialty_oratory'
        },
        {
            label: 'Repertorio sinfónico',
            value: 'singer_specialty_sinfonyc_repertoire'
        },
        {
            label: 'Recitales líricos',
            value: 'singer_specialty_lyric_recitals'
        },
        {
            label: 'Galas líricas',
            value: 'singer_specialty_lyric_galas'
        }
    ],
    voice_type: [
        {
            label: 'Soprano de coloratura',
            value: 'singer_voice_type_coloratura_soprano'
        },
        {
            label: 'Soprano lírica',
            value: 'singer_voice_type_lyric_soprano'
        },
        {
            label: 'Soprano ligera',
            value: 'singer_voice_type_light_soprano'
        },
        {
            label: 'Soprano lírica ligera',
            value: 'singer_voice_type_light_lyric_soprano'
        },
        {
            label: 'Soprano lírico spinto',
            value: 'singer_voice_type_lyric_spinto_soprano'
        },
        {
            label: 'Soprano dramática',
            value: 'singer_voice_type_dramatic_soprano'
        },
        {
            label: 'Soprano soubrette',
            value: 'singer_voice_type_soubrette_soprano'
        },
        {
            label: 'Soprano dramática de coloratura',
            value: 'singer_voice_type_dramatic_coloratura_soprano'
        },
        {
            label: 'Soprano dramática',
            value: 'singer_voice_type_dramatic_soprano'
        },
        {
            label: 'Soprano falcón',
            value: 'singer_voice_type_falcon_soprano'
        },
        {
            label: 'Mezzosoprano ligera',
            value: 'singer_voice_type_light_mezzosoprano'
        },
        {
            label: 'Mezzosoprano lírica',
            value: 'singer_voice_type_lyric_mezzosoprano'
        },
        {
            label: 'Mezzosoprano dramática',
            value: 'singer_voice_type_dramatic_mezzosoprano'
        },
        {
            label: 'Contralto dramática',
            value: 'singer_voice_type_dramatic_contralto'
        },
        {
            label: 'Contralto cómica',
            value: 'singer_voice_type_comic_contralto'
        },
        {
            label: 'Contralto de coloratura',
            value: 'singer_voice_type_coloratura_contralto'
        },
        {
            label: 'Tenor ligero',
            value: 'singer_voice_type_light_tenor'
        },
        {
            label: 'Tenor lírico ligero',
            value: 'singer_voice_type_light_lyric_tenor'
        },
        {
            label: 'Tenor lírico',
            value: 'singer_voice_type_lyric_tenor'
        },
        {
            label: 'Tenor lírico spinto',
            value: 'singer_voice_type_lyric_spinto_tenor'
        },
        {
            label: 'Tenor dramático',
            value: 'singer_voice_type_dramatic_tenor'
        },
        {
            label: 'Barítono ligero',
            value: 'singer_voice_type_light_baritone'
        },
        {
            label: 'Barítono lírico',
            value: 'singer_voice_type_lyric_baritone'
        },
        {
            label: 'Barítono buffo',
            value: 'singer_voice_type_buffo_baritone'
        },
        {
            label: 'Barítono dramático',
            value: 'singer_voice_type_dramatic_baritone'
        },
        {
            label: 'Bajo - Barítono',
            value: 'singer_voice_type_bass_baritone'
        },
        {
            label: 'Bajo ligero',
            value: 'singer_voice_type_light_bass'
        },
        {
            label: 'Bajo buffo',
            value: 'singer_voice_type_buffo_bass'
        },
        {
            label: 'Bajo profundo',
            value: 'singer_voice_type_deep_bass'
        }
    ],

}