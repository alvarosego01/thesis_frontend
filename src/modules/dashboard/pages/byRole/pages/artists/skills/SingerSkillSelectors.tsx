import { FC } from "react"
import { Form, FormikProvider, useFormik } from "formik";

import { useFormInitData } from "@hooks/index";
import { LayoutRow_I, SelectValue_I } from "@components/forms/interfaces";
import { FormLayoutBuilder, PrimaryButton } from "@components/index";
import { singerModel_Data } from "@modules/dashboard/models/artistSkills/SingerSkills";

const formData: LayoutRow_I[] = [
    {
        fields: [
            {
                typeField: 'select_special',
                props: {
                    // label: '',
                    name: 'voiceSpecialty',
                    parent_class: 'lg:w-3/4',
                    isMulti: true,
                    items: singerModel_Data.voiceSpecialty.map(item => ({ value: item.value, label: item.label })),
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
                    name: 'voiceType',
                    parent_class: 'lg:w-3/4',
                    isMulti: true,
                    items: singerModel_Data.voiceType.map(item => ({ value: item.value, label: item.label })),
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


interface SingerSkillSelectors_Props_I {
    // title: string;
}

interface Init_valuesData_I {
    voiceSpecialty: SelectValue_I[];
    voiceType: SelectValue_I[];
    // repertoire
}


export const SingerSkillSelectors: FC<SingerSkillSelectors_Props_I> = () => {


    const Init_Values: Init_valuesData_I = {
        voiceSpecialty: [],
        voiceType: [],
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

    // console.log('values select', values);

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
                                Tipo de voz
                            </h2>
                            <div className="mb-5 text-sm">
                                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sed neque aut et cumque, labo
                            </div>


                            <FormLayoutBuilder rows={[formData[1]]} />

                        </section>

                        {/* <section>
                    <h2 className="mb-1 text-xl font-bold leading-snug text-slate-800 dark:text-slate-100">
                        Repertorio musical
                    </h2>
                    <div className="mb-5 text-sm">
                        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sed neque aut et cumque, labo
                    </div>

                </section> */}
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
