
import { Validations_Type } from "./interfaces";


export const is_required = (rule: Validations_Type) => {

    // rule.type === "required" || rule.type === 'select_multi_required' || rule.type === 'select_single_required' || rule.type === 'conditional_select_multi_required'

    return rule === "required" || rule === 'select_multi_required' || rule === 'select_single_required' || rule === 'conditional_select_multi_required';

}