


import { DO_Repertoire_Type, DO_Specialty_Type, Instrumentist_Position_Type, Instrumentist_Specialty_Type, Meta_Artist_I, SD_Repertoire_Type, SD_specialty_Type, Singer_voiceSpecialty_Type, Singer_voiceType_Type } from "@tesis-project/dev-globals/dist/modules/profile/interfaces";
import { SelectValue_I } from "../../forms/interfaces";
import { Inst_Categories_Type, instrumentistModel } from "../../../../modules/dashboard/models/artistSkills/InstrumentistSkills";
import { useUserMeta } from "../../../hooks";
import { singerModel_Data } from "../../../../modules/dashboard/models/artistSkills/SingerSkills";
import { sceneDirectorModel } from "../../../../modules/dashboard/models/artistSkills/SceneDirectorSkills";
import { orchestraDirectorModel } from "../../../../modules/dashboard/models/artistSkills/OrquestDirectorSkills";

interface AuxSelectors_I {
    singer?: {
        voice_specialty: SelectValue_I<Singer_voiceSpecialty_Type>[];
        voice_type: SelectValue_I<Singer_voiceType_Type>[];
    },
    instrumentist?: {
        specialty: SelectValue_I<Instrumentist_Specialty_Type>[];
        position: SelectValue_I<Instrumentist_Position_Type>[];
        categories: SelectValue_I<Inst_Categories_Type>[];
    }
    orchest_director?: {
        repertoire: SelectValue_I<DO_Repertoire_Type>[];
        specialty: SelectValue_I<DO_Specialty_Type>[];
    }
    scene_director?: {
        repertoire: SelectValue_I<SD_Repertoire_Type>[];
        specialty: SelectValue_I<SD_specialty_Type>[];
    }
}

export const set_shortSkills = (skills: Meta_Artist_I['skills']): AuxSelectors_I => {

    const {
        meta_to_selectors,
        selector_to_meta
    } = useUserMeta();

    let aux_selectors: AuxSelectors_I = {

    }

    if (skills.singer) {

        const singer = skills.singer;

        aux_selectors.singer = {
            voice_specialty: meta_to_selectors<Singer_voiceSpecialty_Type>(singer?.voice_specialty!, singerModel_Data.voice_specialty) || [],
            voice_type: meta_to_selectors<Singer_voiceType_Type>(singer?.voice_type!, singerModel_Data.voice_type) || [],
        }

    }

    if (skills.instrumentist) {

        const instrumentist = skills.instrumentist;

        aux_selectors.instrumentist = {
            specialty: meta_to_selectors<Instrumentist_Specialty_Type>(instrumentist?.specialty!, []) || [],
            position: meta_to_selectors<Instrumentist_Position_Type>(instrumentist?.position!, []) || [],
            categories: [],
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

    }

    if (skills.scenes_director) {

        const scenes_director = skills.scenes_director;

        aux_selectors.scene_director = {
            repertoire: meta_to_selectors<SD_Repertoire_Type>(scenes_director?.repertoire!, sceneDirectorModel.repertoire) || [],
            specialty: meta_to_selectors<SD_specialty_Type>(scenes_director?.specialty!, sceneDirectorModel.specialty) || [],

        }

    }
    if (skills.orquests_director) {

        const orquest_director = skills.orquests_director;

        aux_selectors.orchest_director = {
            repertoire: meta_to_selectors<DO_Repertoire_Type>(orquest_director?.repertoire!, orchestraDirectorModel.repertoire) || [],
            specialty: meta_to_selectors<DO_Specialty_Type>(orquest_director?.specialty!, orchestraDirectorModel.specialty) || [],
        }

    }

    return aux_selectors;

}