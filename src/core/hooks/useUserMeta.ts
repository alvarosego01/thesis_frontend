import { Skill_Model_I } from "../../modules/dashboard/models/artistSkills/interfaces";
import { SelectValue_I } from "../components/forms/interfaces"


interface useHookStore_I {

    selector_to_meta: <T = string>(selects: SelectValue_I<T>[]) => T[];
    meta_to_selectors: <T = string>(meta: T[], model_selectors: Skill_Model_I<T>[]) => Skill_Model_I<T>[];

}

export const useUserMeta = (): useHookStore_I => {

    const meta_to_selectors = <T = string>(meta: T[], model_selectors: Skill_Model_I<T>[]): Skill_Model_I<T>[] => {

        let selectors: Skill_Model_I<T>[] = [];

        for (const [i, item] of model_selectors.entries()) {

            if (meta.includes(item.value)) {
                selectors.push({ ...item });
            }

        }

        return selectors;

    }

/*     const metaInstrumentist_to_selectors = = <T = string>(meta: T[], model_selectors: Skill_Model_I<T>[]): Skill_Model_I<T>[] => {


    } */

    const selector_to_meta = <T = string>(selects: SelectValue_I<T>[]): T[] => {

        const values: T[] = [];
        for (const [i, item] of selects.entries()) {

            if (!values.includes(item.value)) {
                values.push(item.value);
            }

        }

        return values;

    }

    return {

        selector_to_meta,
        meta_to_selectors
    }

}