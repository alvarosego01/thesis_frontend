import { FieldValue_I, LayoutRow_I, ValidationRule_I } from "../components/forms/interfaces";

import * as Yup from 'yup';
import { get_Validation } from "../functions";


export const useFormInitData = <T = any>(data: LayoutRow_I[], init_fieldValues?: FieldValue_I) => {

    let aux_initial: { [key: string]: any } = {};
    let validation_rules: { [key: string]: any } = {};

    for (const input of data) {

        for (const field of input.fields) {

            aux_initial[field.props.name] = init_fieldValues?.[field.props.name] || '';
            let schema_fields = Yup.string();
            let schema_files = Yup.mixed();
            const isFileField = field.props.type === 'file';

            if (!field.props.validation_rules) {

                // field.props.validation_rules = [
                //     {
                //         type: 'notRequired',
                //     }
                // ]
                continue;
            };

            for (const r of field.props.validation_rules) {

                const rule: ValidationRule_I = r;

                if (!isFileField) {

                    schema_fields = get_Validation(rule, schema_fields);

                }

                if (isFileField) {

                    schema_files = get_Validation(rule, schema_files);

                }

            }

            validation_rules[field.props.name] = (isFileField) ? schema_files : schema_fields;

        }

    }

    validation_rules = Yup.object({ ...validation_rules })

    const initialValues: T = aux_initial as T;

    return {
        initialValues,
        validation_rules
    }

}


