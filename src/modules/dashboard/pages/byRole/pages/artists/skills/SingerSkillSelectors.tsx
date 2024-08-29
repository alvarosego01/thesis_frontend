import { FC, useEffect, useState } from "react"
import { Form, FormikProvider, useFormik } from "formik";

import { useFormInitData, useUserMeta } from "@hooks/index";
import { LayoutRow_I, SelectValue_I } from "@components/forms/interfaces";
import { FormLayoutBuilder, PrimaryButton } from "@components/index";
import { singerModel_Data } from "@modules/dashboard/models/artistSkills/SingerSkills";
import { Meta_Artist_I, Singer_voiceSpecialty_Type, Singer_voiceType_Type } from "@tesis-project/dev-globals/dist/modules/profile/interfaces";
import { useUserMetaStore } from "../../../../../store/hooks/user_meta/useUserMetaStore";

const formData: LayoutRow_I[] = [
    {
        fields: [
            {
                typeField: 'select_special',
                props: {
                    // label: '',
                    name: 'voice_specialty',
                    parent_class: 'lg:w-3/4',
                    isMulti: true,
                    items: singerModel_Data.voice_specialty.map(item => ({ value: item.value, label: item.label })),
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
                    name: 'voice_type',
                    parent_class: 'lg:w-3/4',
                    isMulti: true,
                    items: singerModel_Data.voice_type.map(item => ({ value: item.value, label: item.label })),
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
    voice_specialty: SelectValue_I<Singer_voiceSpecialty_Type>[];
    voice_type: SelectValue_I<Singer_voiceType_Type>[];
}

export const SingerSkillSelectors: FC = () => {

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
        voice_specialty: [],
        voice_type: []
    }

    const { initialValues, validation_rules } = useFormInitData<Init_valuesData_I>(formData, Init_Values);

    const formik = useFormik({
        initialValues: initialValues,
        onSubmit: (values) => {

            const prev_submit = {
                voice_specialty: selector_to_meta<Singer_voiceSpecialty_Type>(values.voice_specialty),
                voice_type: selector_to_meta<Singer_voiceType_Type>(values.voice_type),
            }

            emit_save_artistsMeta({
                skills: {
                    singer: prev_submit
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
        if(meta?.skills?.singer === undefined) return;

        const singer = meta.skills.singer;

        Init_Values = {
            voice_specialty: meta_to_selectors<Singer_voiceSpecialty_Type>(singer?.voice_specialty!, singerModel_Data.voice_specialty) || [],
            voice_type: meta_to_selectors<Singer_voiceType_Type>(singer?.voice_type!, singerModel_Data.voice_type) || [],
        }

        formik.setValues(Init_Values);

    }, [meta?.skills?.singer, isMounted])

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
                            <PrimaryButton isLoading={onLoading} onClick={submitForm} label="Guardar" />
                        </div>
                    </footer>
                </Form>
            </FormikProvider>
        </>

    )
}
