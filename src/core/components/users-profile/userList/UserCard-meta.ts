


import { DO_Repertoire_Type, DO_Specialty_Type, Instrumentist_Position_Type, Instrumentist_Specialty_Type, Meta_Artist_I, SD_Repertoire_Type, SD_specialty_Type, Singer_voiceSpecialty_Type, Singer_voiceType_Type } from "@tesis-project/dev-globals/dist/modules/profile/interfaces";
import { SelectValue_I } from "../../forms/interfaces";
import { useUserMeta } from "../../../hooks";
import { singerModel_Data } from "../../../../modules/dashboard/models/artistSkills/SingerSkills";
import { sceneDirectorModel } from "../../../../modules/dashboard/models/artistSkills/SceneDirectorSkills";
import { orchestraDirectorModel } from "../../../../modules/dashboard/models/artistSkills/OrquestDirectorSkills";

import { Inst_Categories_Type, instrumentistModel } from "@modules/dashboard/models/artistSkills/InstrumentistSkills";

interface AuxSelectors_I {
    singer?: {
        enable: boolean;
        voice_specialty: SelectValue_I<Singer_voiceSpecialty_Type>[];
        voice_type: SelectValue_I<Singer_voiceType_Type>[];
    },
    instrumentist?: {
        enable: boolean;
        specialty: SelectValue_I<Instrumentist_Specialty_Type>[];
        position: SelectValue_I<Instrumentist_Position_Type>[];
        categories: SelectValue_I<Inst_Categories_Type>[];
    }
    orchest_director?: {
        enable: boolean;
        repertoire: SelectValue_I<DO_Repertoire_Type>[];
        specialty: SelectValue_I<DO_Specialty_Type>[];
    }
    scene_director?: {
        enable: boolean;
        repertoire: SelectValue_I<SD_Repertoire_Type>[];
        specialty: SelectValue_I<SD_specialty_Type>[];
    }
}

export const set_shortSkills = (skills: Meta_Artist_I['skills']): AuxSelectors_I => {

    const {
        meta_to_selectors,
        // selector_to_meta
    } = useUserMeta();

    let aux_selectors: AuxSelectors_I = {}

    if (skills.singer) {

        const singer = skills.singer;

        aux_selectors.singer = {
            voice_specialty: meta_to_selectors<Singer_voiceSpecialty_Type>(singer?.voice_specialty!, singerModel_Data.voice_specialty) || [],
            voice_type: meta_to_selectors<Singer_voiceType_Type>(singer?.voice_type!, singerModel_Data.voice_type) || [],
            enable: false
        }

        if(
            singer.voice_specialty && singer.voice_specialty.length > 0 ||
            singer.voice_type && singer.voice_type.length > 0
        ){
            aux_selectors.singer.enable = true;
        }

    }

    if (skills.instrumentist) {

        const instrumentist = skills.instrumentist;

        aux_selectors.instrumentist = {
            specialty: meta_to_selectors<Instrumentist_Specialty_Type>(instrumentist?.specialty!, instrumentistModel.specialty) || [],
            position: meta_to_selectors<Instrumentist_Position_Type>(instrumentist?.position!, instrumentistModel.position) || [],
            categories: [],
            enable: false
        }

        if (instrumentist.categories && instrumentist.categories.length > 0) {

            const categories = instrumentist.categories;

            for (const [i, item] of categories.entries()) {

                if (item.includes('instrument_wind')) {

                    const cat: SelectValue_I<Inst_Categories_Type> = instrumentistModel.categories.find(item => item.value === 'instrument_wind')!;
                    aux_selectors.instrumentist.categories.push(cat);

                }
                if (item.includes('instrument_percussion')) {

                    const cat: SelectValue_I<Inst_Categories_Type> = instrumentistModel.categories.find(item => item.value === 'instrument_percussion')!;
                    aux_selectors.instrumentist.categories.push(cat);

                }
                if (item.includes('instrument_electrical')) {

                    const cat: SelectValue_I<Inst_Categories_Type> = instrumentistModel.categories.find(item => item.value === 'instrument_electrical')!;
                    aux_selectors.instrumentist.categories.push(cat);

                }
                if (item.includes('instrument_string')) {

                    const cat: SelectValue_I<Inst_Categories_Type> = instrumentistModel.categories.find(item => item.value === 'instrument_string')!;
                    aux_selectors.instrumentist.categories.push(cat);

                }

            }

        }

        if(
            instrumentist.specialty && instrumentist.specialty.length > 0 ||
            instrumentist.position && instrumentist.position.length > 0 ||
            instrumentist.categories && instrumentist.categories.length > 0
        ){
            aux_selectors.instrumentist.enable = true;
        }

    }

    if (skills.scenes_director) {

        const scenes_director = skills.scenes_director;

        aux_selectors.scene_director = {
            repertoire: meta_to_selectors<SD_Repertoire_Type>(scenes_director?.repertoire!, sceneDirectorModel.repertoire) || [],
            specialty: meta_to_selectors<SD_specialty_Type>(scenes_director?.specialty!, sceneDirectorModel.specialty) || [],
            enable: false
        }

        if(
            scenes_director.repertoire && scenes_director.repertoire.length > 0 ||
            scenes_director.specialty && scenes_director.specialty.length > 0
        ){
            aux_selectors.scene_director.enable = true;
        }

    }
    if (skills.orquests_director) {

        const orquest_director = skills.orquests_director;

        aux_selectors.orchest_director = {
            repertoire: meta_to_selectors<DO_Repertoire_Type>(orquest_director?.repertoire!, orchestraDirectorModel.repertoire) || [],
            specialty: meta_to_selectors<DO_Specialty_Type>(orquest_director?.specialty!, orchestraDirectorModel.specialty) || [],
            enable: false
        }

        if(
            orquest_director.repertoire && orquest_director.repertoire.length > 0 ||
            orquest_director.specialty && orquest_director.specialty.length > 0
        ){
            aux_selectors.orchest_director.enable = true;

        }

    }

    return aux_selectors;

}