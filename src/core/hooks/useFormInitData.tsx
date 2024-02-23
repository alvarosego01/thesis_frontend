import { LayoutRow_I } from "../components/forms/interfaces";

import * as Yup from 'yup';

const venezuelaPhoneRegex = /^(?:\+58)?0?(412|414|424|426)\d{7}$/;

export const useFormInitData = (userData: LayoutRow_I[]) => {

    let initialValues: { [key: string]: any } = {};
    let validation_rules: { [key: string]: any } = {};

    for (const input of userData) {

        for (const field of input.fields) {

            initialValues[field.props.name] = '';

            if (!field.props.validation_rules) continue;

            let schema = Yup.string();

            for (const rule of field.props.validation_rules) {

                if (rule.type === 'required') {
                    schema = schema.required(rule.message);
                }
                if (rule.type === 'minLength') {
                    schema = schema.min(Number(rule.value) || 1, rule.message);
                }
                if (rule.type === 'email') {
                    schema = schema.email(rule.message);
                }
                if (rule.type === 'tel') {
                    schema = schema.matches(venezuelaPhoneRegex, rule.message);
                }

            }

            validation_rules[field.props.name] = schema;

        }

    }

    validation_rules = Yup.object({ ...validation_rules })

    return {
        initialValues,
        validation_rules
    }

}
