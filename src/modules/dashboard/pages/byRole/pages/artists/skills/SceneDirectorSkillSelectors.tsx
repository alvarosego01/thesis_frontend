import { useFormik, FormikProvider, Form } from "formik";
import { FC, useEffect, useState } from "react";

import { FormLayoutBuilder, PrimaryButton } from "@components/index";
import { LayoutRow_I, SelectValue_I } from "@components/forms/interfaces";
import { useFormInitData, useUserMeta } from "@hooks/index";
import { sceneDirectorModel } from "@modules/dashboard/models/artistSkills/SceneDirectorSkills";
import { useUserMetaStore } from "../../../../../store/hooks/user_meta/useUserMetaStore";
import { Meta_Artist_I, SD_Repertoire_Type, SD_specialty_Type } from "@tesis-project/dev-globals/dist/modules/profile/interfaces";

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
                    items: sceneDirectorModel.repertoire.map(item => ({ value: item.value, label: item.label })),
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
                    items: sceneDirectorModel.specialty.map(item => ({ value: item.value, label: item.label })),
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
    repertoire: SelectValue_I<SD_Repertoire_Type>[];
    specialty: SelectValue_I<SD_specialty_Type>[];
}

export const SceneDirectorSkillSelectors: FC = () => {

    const {
        state: {
            user_meta: {
                meta_artist
            },
            onLoading
        },
        emit_save_artistsMeta
    } = useUserMetaStore();

    const meta = meta_artist as Meta_Artist_I;

    const {
        meta_to_selectors,
        selector_to_meta
    } = useUserMeta();

    const [isMounted, setisMounted] = useState(false);

    let Init_Values: Init_valuesData_I = {
        repertoire: [],
        specialty: []
    }

    const { initialValues, validation_rules } = useFormInitData<Init_valuesData_I>(formData, Init_Values);

    const formik = useFormik({
        initialValues: initialValues,
        onSubmit: (values) => {

            const prev_submit = {
                repertoire: selector_to_meta<SD_Repertoire_Type>(values.repertoire),
                specialty: selector_to_meta<SD_specialty_Type>(values.specialty),
            }

            emit_save_artistsMeta({
                skills: {
                    // singer: prev_submit
                    scenes_director: prev_submit
                }
            })

        },
        validationSchema: validation_rules
    });

    const {
        values,
        errors,
        submitForm
    } = formik;

    useEffect(() => {

        if (isMounted === false) return;
        if (meta?.skills?.scenes_director === undefined) return;

        const scenes_director = meta.skills.scenes_director;

        Init_Values = {
            repertoire: meta_to_selectors<SD_Repertoire_Type>(scenes_director?.repertoire!, sceneDirectorModel.repertoire) || [],
            specialty: meta_to_selectors<SD_specialty_Type>(scenes_director?.specialty!, sceneDirectorModel.specialty) || [],
        }

        formik.setValues(Init_Values);

    }, [meta?.skills?.scenes_director, isMounted])

    useEffect(() => {
        setisMounted(true);
    }, []);

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
                            <PrimaryButton isLoading={onLoading} onClick={submitForm} label="Guardar" />
                        </div>
                    </footer>

                </Form>
            </FormikProvider>

        </>

    )
}