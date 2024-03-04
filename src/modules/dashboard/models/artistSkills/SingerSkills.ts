import { Skill_Model_I } from "./interfaces";


interface SingerSkills_Model_I {
    voiceSpecialty: Skill_Model_I[];
    voiceType: Skill_Model_I[];
    repertoire: SingerRepertoire_Model_I[];
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
            name: 'Ópera',
            code: 'singer_specialty_opera'
        },
        {
            check: false,
            name: 'Zarzuela',
            code: 'singer_specialty_zarzuela'
        },
        {
            check: false,
            name: 'Oratorio',
            code: 'singer_specialty_oratory'
        },
        {
            check: false,
            name: 'Repertorio sinfónico',
            code: 'singer_specialty_sinfonyc_repertoire'
        },
        {
            check: false,
            name: 'Recitales líricos',
            code: 'singer_specialty_lyric_recitals'
        },
        {
            check: false,
            name: 'Galas líricas',
            code: 'singer_specialty_lyric_galas'
        }
    ],
    voiceType: [
        {
            check: false,
            name: 'Soprano de coloratura',
            code: 'singer_voice_type_coloratura_soprano'
        },
        {
            check: false,
            name: 'Soprano lírica',
            code: 'singer_voice_type_lyric_soprano'
        },
        {
            check: false,
            name: 'Soprano ligera',
            code: 'singer_voice_type_light_soprano'
        },
        {
            check: false,
            name: 'Soprano lírica ligera',
            code: 'singer_voice_type_light_lyric_soprano'
        },
        {
            check: false,
            name: 'Soprano lírico spinto',
            code: 'singer_voice_type_lyric_spinto_soprano'
        },
        {
            check: false,
            name: 'Soprano dramática',
            code: 'singer_voice_type_dramatic_soprano'
        },
        {
            check: false,
            name: 'Soprano soubrette',
            code: 'singer_voice_type_soubrette_soprano'
        },
        {
            check: false,
            name: 'Soprano dramática de coloratura',
            code: 'singer_voice_type_dramatic_coloratura_soprano'
        },
        {
            check: false,
            name: 'Soprano dramática',
            code: 'singer_voice_type_dramatic_soprano'
        },
        {
            check: false,
            name: 'Soprano falcón',
            code: 'singer_voice_type_falcon_soprano'
        },
        {
            check: false,
            name: 'Mezzosoprano ligera',
            code: 'singer_voice_type_light_mezzosoprano'
        },
        {
            check: false,
            name: 'Mezzosoprano lírica',
            code: 'singer_voice_type_lyric_mezzosoprano'
        },
        {
            check: false,
            name: 'Mezzosoprano dramática',
            code: 'singer_voice_type_dramatic_mezzosoprano'
        },
        {
            check: false,
            name: 'Contralto dramática',
            code: 'singer_voice_type_dramatic_contralto'
        },
        {
            check: false,
            name: 'Contralto cómica',
            code: 'singer_voice_type_comic_contralto'
        },
        {
            check: false,
            name: 'Contralto de coloratura',
            code: 'singer_voice_type_coloratura_contralto'
        },
        {
            check: false,
            name: 'Tenor ligero',
            code: 'singer_voice_type_light_tenor'
        },
        {
            check: false,
            name: 'Tenor lírico ligero',
            code: 'singer_voice_type_light_lyric_tenor'
        },
        {
            check: false,
            name: 'Tenor lírico',
            code: 'singer_voice_type_lyric_tenor'
        },
        {
            check: false,
            name: 'Tenor lírico spinto',
            code: 'singer_voice_type_lyric_spinto_tenor'
        },
        {
            check: false,
            name: 'Tenor dramático',
            code: 'singer_voice_type_dramatic_tenor'
        },
        {
            check: false,
            name: 'Barítono ligero',
            code: 'singer_voice_type_light_baritone'
        },
        {
            check: false,
            name: 'Barítono lírico',
            code: 'singer_voice_type_lyric_baritone'
        },
        {
            check: false,
            name: 'Barítono buffo',
            code: 'singer_voice_type_buffo_baritone'
        },
        {
            check: false,
            name: 'Barítono dramático',
            code: 'singer_voice_type_dramatic_baritone'
        },
        {
            check: false,
            name: 'Bajo - Barítono',
            code: 'singer_voice_type_bass_baritone'
        },
        {
            check: false,
            name: 'Bajo ligero',
            code: 'singer_voice_type_light_bass'
        },
        {
            check: false,
            name: 'Bajo buffo',
            code: 'singer_voice_type_buffo_bass'
        },
        {
            check: false,
            name: 'Bajo profundo',
            code: 'singer_voice_type_deep_bass'
        }
    ],
    repertoire: [
        // {
        // tone: string,
        // title: string,
        // role: string,
        // composer: string,
        // }
    ],

}