import { useFormik, FormikProvider, Form } from "formik";

import { FormLayoutBuilder, PrimaryButton } from "@components/index";
import { LayoutRow_I, SelectValue_I } from "@components/forms/interfaces";
import { useFormInitData } from "@hooks/index";
import { orchestraDirectorModel } from "@modules/dashboard/models/artistSkills/OrquestDirectorSkills";
import { FC } from "react";


const formData: LayoutRow_I[] = [
    {
        fields: [
            {
                typeField: 'select_special',
                props: {
                    // label: '',
                    name: 'repertoire',
                    parent_class: 'lg:w-3/4',
                    isMulti: true,
                    items: orchestraDirectorModel.repertoire.map(item => ({ value: item.value, label: item.label })),
                    value: [],
                    placeholder: 'Selecciona tu clasificación de voz',
                    // validation_rules: [

                    // ]
                }
            },
        ],
        grid_columns: 'grid-cols-1'
    },
    {
        fields: [
            {
                typeField: 'select_special',
                props: {
                    // label: '',
                    name: 'specialty',
                    parent_class: 'lg:w-3/4',
                    isMulti: true,
                    items: orchestraDirectorModel.specialty.map(item => ({ value: item.value, label: item.label })),
                    value: [],
                    placeholder: 'Selecciona tu tipo de voz',
                    // validation_rules: [

                    // ]
                }
            },
        ],
        grid_columns: 'grid-cols-1'
    },

]

interface Init_valuesData_I {
    repertoire: SelectValue_I[];
    specialty: SelectValue_I[];
    // repertoire
}

export const OrquestDirectorSkillSelectors: FC = () => {

    const Init_Values: Init_valuesData_I = {
        repertoire: [],
        specialty: [],
    }

    const { initialValues, validation_rules } = useFormInitData<any>(formData, Init_Values);

    const formik = useFormik({
        initialValues: initialValues,
        onSubmit: (values) => {
            console.log('values', values);
        },
        validationSchema: validation_rules
    });

    const {
        values,
        errors,
        submitForm
    } = formik;

    return (
        <>
            <FormikProvider value={formik}>
                <Form noValidate>

                    <div className="space-y-5 SingerSkillSelectors">

                        <section>
                            <h2 className="mb-1 text-xl font-bold leading-snug text-slate-800 dark:text-slate-100">
                                Clasificación
                            </h2>
                            <div className="mb-5 text-sm">
                                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sed neque aut et cumque, labo
                            </div>

                            <FormLayoutBuilder rows={[formData[0]]} />

                        </section>

                        <section>
                            <h2 className="mb-1 text-xl font-bold leading-snug text-slate-800 dark:text-slate-100">
                                Repertorio
                            </h2>
                            <div className="mb-5 text-sm">
                                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sed neque aut et cumque, labo
                            </div>

                            <FormLayoutBuilder rows={[formData[1]]} />

                        </section>

                        <hr />
                    </div>
                    <footer className="pt-6" >
                        <div className="flex flex-row justify-end">
                            <PrimaryButton onClick={submitForm} label="Guardar" />
                        </div>
                    </footer>

                </Form>
            </FormikProvider>

        </>

    )
}