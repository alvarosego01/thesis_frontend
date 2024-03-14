import { Skill_Model_I } from "./interfaces";


interface SingerSkills_Model_I {
    voiceSpecialty: Skill_Model_I[];
    voiceType: Skill_Model_I[];
    // repertoire: SingerRepertoire_Model_I[];
}

interface SingerRepertoire_Model_I {
    tone?: string;
    title?: string;
    role?: string;
    composer?: string;
}

export const singerModel_Data: SingerSkills_Model_I = {
    voiceSpecialty: [
        {
            check: false,
            label: 'Ópera',
            value: 'singer_specialty_opera'
        },
        {
            check: false,
            label: 'Zarzuela',
            value: 'singer_specialty_zarzuela'
        },
        {
            check: false,
            label: 'Oratorio',
            value: 'singer_specialty_oratory'
        },
        {
            check: false,
            label: 'Repertorio sinfónico',
            value: 'singer_specialty_sinfonyc_repertoire'
        },
        {
            check: false,
            label: 'Recitales líricos',
            value: 'singer_specialty_lyric_recitals'
        },
        {
            check: false,
            label: 'Galas líricas',
            value: 'singer_specialty_lyric_galas'
        }
    ],
    voiceType: [
        {
            check: false,
            label: 'Soprano de coloratura',
            value: 'singer_voice_type_coloratura_soprano'
        },
        {
            check: false,
            label: 'Soprano lírica',
            value: 'singer_voice_type_lyric_soprano'
        },
        {
            check: false,
            label: 'Soprano ligera',
            value: 'singer_voice_type_light_soprano'
        },
        {
            check: false,
            label: 'Soprano lírica ligera',
            value: 'singer_voice_type_light_lyric_soprano'
        },
        {
            check: false,
            label: 'Soprano lírico spinto',
            value: 'singer_voice_type_lyric_spinto_soprano'
        },
        {
            check: false,
            label: 'Soprano dramática',
            value: 'singer_voice_type_dramatic_soprano'
        },
        {
            check: false,
            label: 'Soprano soubrette',
            value: 'singer_voice_type_soubrette_soprano'
        },
        {
            check: false,
            label: 'Soprano dramática de coloratura',
            value: 'singer_voice_type_dramatic_coloratura_soprano'
        },
        {
            check: false,
            label: 'Soprano dramática',
            value: 'singer_voice_type_dramatic_soprano'
        },
        {
            check: false,
            label: 'Soprano falcón',
            value: 'singer_voice_type_falcon_soprano'
        },
        {
            check: false,
            label: 'Mezzosoprano ligera',
            value: 'singer_voice_type_light_mezzosoprano'
        },
        {
            check: false,
            label: 'Mezzosoprano lírica',
            value: 'singer_voice_type_lyric_mezzosoprano'
        },
        {
            check: false,
            label: 'Mezzosoprano dramática',
            value: 'singer_voice_type_dramatic_mezzosoprano'
        },
        {
            check: false,
            label: 'Contralto dramática',
            value: 'singer_voice_type_dramatic_contralto'
        },
        {
            check: false,
            label: 'Contralto cómica',
            value: 'singer_voice_type_comic_contralto'
        },
        {
            check: false,
            label: 'Contralto de coloratura',
            value: 'singer_voice_type_coloratura_contralto'
        },
        {
            check: false,
            label: 'Tenor ligero',
            value: 'singer_voice_type_light_tenor'
        },
        {
            check: false,
            label: 'Tenor lírico ligero',
            value: 'singer_voice_type_light_lyric_tenor'
        },
        {
            check: false,
            label: 'Tenor lírico',
            value: 'singer_voice_type_lyric_tenor'
        },
        {
            check: false,
            label: 'Tenor lírico spinto',
            value: 'singer_voice_type_lyric_spinto_tenor'
        },
        {
            check: false,
            label: 'Tenor dramático',
            value: 'singer_voice_type_dramatic_tenor'
        },
        {
            check: false,
            label: 'Barítono ligero',
            value: 'singer_voice_type_light_baritone'
        },
        {
            check: false,
            label: 'Barítono lírico',
            value: 'singer_voice_type_lyric_baritone'
        },
        {
            check: false,
            label: 'Barítono buffo',
            value: 'singer_voice_type_buffo_baritone'
        },
        {
            check: false,
            label: 'Barítono dramático',
            value: 'singer_voice_type_dramatic_baritone'
        },
        {
            check: false,
            label: 'Bajo - Barítono',
            value: 'singer_voice_type_bass_baritone'
        },
        {
            check: false,
            label: 'Bajo ligero',
            value: 'singer_voice_type_light_bass'
        },
        {
            check: false,
            label: 'Bajo buffo',
            value: 'singer_voice_type_buffo_bass'
        },
        {
            check: false,
            label: 'Bajo profundo',
            value: 'singer_voice_type_deep_bass'
        }
    ],
    // repertoire: [
    //     // {
    //     // tone: string,
    //     // title: string,
    //     // role: string,
    //     // composer: string,
    //     // }
    // ],

}