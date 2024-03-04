import { FieldValue_I, LayoutRow_I } from "../components/forms/interfaces";

import * as Yup from 'yup';

const venezuelaPhoneRegex = /^(?:\+58)?0?(412|414|424|426)\d{7}$/;

export const useFormInitData = <T = any>(data: LayoutRow_I[], init_fieldValues?: FieldValue_I) => {

    let aux_initial: { [key: string]: any } = {};
    let validation_rules: { [key: string]: any } = {};

    for (const input of data) {

        for (const field of input.fields) {

            aux_initial[field.props.name] = init_fieldValues?.[field.props.name] || '';

            if (!field.props.validation_rules) continue;

            const isFileField = field.props.type === 'file'; // Asumiendo que tienes un prop 'type' para identificar campos de archivo

            // let schema = Yup.string();
            //  let schema: any = (isFileField) ? Yup.mixed() : Yup.string();
            let schema_fields = Yup.string();
            let schema_files = Yup.mixed();

            for (const rule of field.props.validation_rules) {

                if (!isFileField) {

                    if (rule.type === 'required') {
                        schema_fields = schema_fields.required(rule.message);
                    }
                    if (rule.type === 'minLength') {
                        schema_fields = schema_fields.min(Number(rule.value) || 1, rule.message);
                    }
                    if (rule.type === 'maxLength') {
                        schema_fields = schema_fields.max(Number(rule.value) || 1, rule.message);
                    }
                    if (rule.type === 'email') {
                        schema_fields = schema_fields.email(rule.message);
                    }
                    if (rule.type === 'tel') {
                        schema_fields = schema_fields.matches(venezuelaPhoneRegex, rule.message);
                    }
                    if (rule.type === 'url') {
                        schema_fields = schema_fields.url(rule.message);
                    }
                    if (rule.type === 'pattern') {
                        schema_fields = schema_fields.matches(new RegExp(String(rule.value), "i"), rule.message);
                    }
                    if (rule.type === 'same_field') {
                        schema_fields = schema_fields.oneOf([Yup.ref(String(rule.value))], rule.message)
                    }
                }
                if (isFileField) {
                    if (rule.type === 'fileFormat_document') {
                        schema_files = schema_files.test('fileFormat', 'Solo se permiten documentos PDF', (value: any) => {
                            if (value) {
                                const supportedFormats = ['pdf'];
                                const aux_name = (value.name.split('.').pop()).toLowerCase();
                                return supportedFormats.includes(aux_name);
                            }
                            return true;
                        })
                    }
                    if (rule.type === 'fileFormat_image') {
                        schema_files = schema_files.test('fileFormat', 'Solo se permiten imágenes png | jpg | jpeg', (value: any) => {
                            if (value) {
                                const supportedFormats = ['png', 'jpg', 'jpeg'];
                                const aux_name = (value.name.split('.').pop()).toLowerCase();
                                return supportedFormats.includes(aux_name);
                            }
                            return true;
                        })
                    }
                    if (rule.type === 'fileSize_5m') {
                        schema_files = schema_files.test('fileSize', 'Solo se permiten archivos no mayores a 5MB',
                            (value: any) => {
                                if (value) {
                                    return value.size <= 5000000;
                                }
                                return true;
                            });
                    }


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


