
import { FC, useEffect, useState } from "react"
import { Form, FormikProvider, useFormik } from "formik";
import { useFormInitData, useUserMeta } from '@hooks/index';

import { LayoutRow_I, SelectValue_I } from "@components/forms/interfaces";
import { Inst_Categories_Type, instrumentistModel } from "@modules/dashboard/models/artistSkills/InstrumentistSkills";
import { FormLayoutBuilder, PrimaryButton } from "@components/index";
import { Inst_electricalCategory_Type, Inst_percusionCategory_Type, Inst_stringCategory_Type, Inst_windMetalCategory_Type, Inst_windWoodCategory_Type, Instrumentist_Model_I, Instrumentist_Position_Type, Instrumentist_Specialty_Type, Meta_Artist_I } from "@tesis-project/dev-globals/dist/modules/profile/interfaces";
import { useUserMetaStore } from "../../../../../store/hooks/user_meta/useUserMetaStore";

const formData: LayoutRow_I[] = [
    {
        fields: [
            {
                typeField: 'select_special',
                props: {
                    label: 'Clasificación',
                    name: 'specialty',
                    parent_class: '',
                    isMulti: true,
                    items: instrumentistModel.specialty.map(item => ({ value: item.value, label: item.label })),
                    value: [],
                    placeholder: 'Selecciona tu clasificación',
                }
            },
            {
                typeField: 'select_special',
                props: {
                    label: 'Posición',
                    name: 'position',
                    parent_class: '',
                    isMulti: true,
                    items: instrumentistModel.position.map(item => ({ value: item.value, label: item.label })),
                    value: [],
                    placeholder: 'Selecciona tu clasificación',
                }
            },
        ],
        grid_columns: 'grid-cols-1 pcTab:grid-cols-2'
    },
    {
        fields: [
            {
                typeField: 'select_special',
                props: {
                    label: 'Categoria',
                    name: 'categories',
                    parent_class: 'w-full',
                    isMulti: true,
                    items: instrumentistModel.categories.map(item => ({ value: item.value, label: item.label })),
                    value: [],
                    placeholder: 'Selecciona una categoria',
                }
            },
        ],
        grid_columns: 'grid-cols-1 pcTab:grid-cols-2'
    },
    {
        fields: [
            {
                typeField: 'select_special',
                props: {
                    label: 'Categoria',
                    name: 'wind_metal',
                    parent_class: '',
                    isMulti: true,
                    items: instrumentistModel.wind_metal.map(item => ({ value: item.value, label: item.label })),
                    value: [],
                    placeholder: 'Selecciona una categoria de viento metal',
                }
            },
            {
                typeField: 'select_special',
                props: {
                    label: 'Categoria',
                    name: 'wind_wood',
                    parent_class: '',
                    isMulti: true,
                    items: instrumentistModel.wind_wood.map(item => ({ value: item.value, label: item.label })),
                    value: [],
                    placeholder: 'Selecciona una categoria de viento madera',
                }
            },
        ],
        grid_columns: 'grid-cols-1 pcTab:grid-cols-2'
    },
    {
        fields: [
            {
                typeField: 'select_special',
                props: {
                    label: 'Categoria',
                    name: 'percussion',
                    parent_class: '',
                    isMulti: true,
                    items: instrumentistModel.percussion.map(item => ({ value: item.value, label: item.label })),
                    value: [],
                    placeholder: 'Selecciona una categoria de percusión',
                }
            },

        ],
        grid_columns: 'grid-cols-1 pcTab:grid-cols-2'
    },
    {
        fields: [
            {
                typeField: 'select_special',
                props: {
                    label: 'Categoria',
                    name: 'electrical',
                    parent_class: '',
                    isMulti: true,
                    items: instrumentistModel.electrical.map(item => ({ value: item.value, label: item.label })),
                    value: [],
                    placeholder: 'Selecciona una categoria de eléctricos',
                }
            },

        ],
        grid_columns: 'grid-cols-1 pcTab:grid-cols-2'
    },
    {
        fields: [
            {
                typeField: 'select_special',
                props: {
                    label: 'Categoria',
                    name: 'string',
                    parent_class: '',
                    isMulti: true,
                    items: instrumentistModel.string.map(item => ({ value: item.value, label: item.label })),
                    value: [],
                    placeholder: 'Selecciona una categoria de cuerda',
                }
            },

        ],
        grid_columns: 'grid-cols-1 pcTab:grid-cols-2'
    },

]

interface Init_valuesData_I {

    specialty: SelectValue_I<Instrumentist_Specialty_Type>[];
    position: SelectValue_I<Instrumentist_Position_Type>[];
    categories: SelectValue_I<Inst_Categories_Type>[];

    wind_metal: SelectValue_I<Inst_windMetalCategory_Type>[];
    wind_wood: SelectValue_I<Inst_windWoodCategory_Type>[];
    percussion: SelectValue_I<Inst_percusionCategory_Type>[];
    electrical: SelectValue_I<Inst_electricalCategory_Type>[];
    string: SelectValue_I<Inst_stringCategory_Type>[];

}

export const InstrumentistSkillSelectors: FC = () => {

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
        specialty: [],
        position: [],
        categories: [],
        wind_metal: [],
        wind_wood: [],
        percussion: [],
        electrical: [],
        string: [],
    }

    const { initialValues, validation_rules } = useFormInitData<Init_valuesData_I>(formData, Init_Values);

    const formik = useFormik({
        initialValues: initialValues,
        onSubmit: (values) => {

            const prev_submit = {
                specialty: selector_to_meta<Instrumentist_Specialty_Type>(values.specialty),
                position: selector_to_meta<Instrumentist_Position_Type>(values.position),
                wind_metal: selector_to_meta<Inst_windMetalCategory_Type>(values.wind_metal),
                wind_wood: selector_to_meta<Inst_windWoodCategory_Type>(values.wind_wood),
                percussion: selector_to_meta<Inst_percusionCategory_Type>(values.percussion),
                electrical: selector_to_meta<Inst_electricalCategory_Type>(values.electrical),
                string: selector_to_meta<Inst_stringCategory_Type>(values.string)
            }

            emit_save_artistsMeta({
                skills: {
                    instrumentist: {
                        position: prev_submit.position,
                        specialty: prev_submit.specialty,
                        categories: [
                            ...prev_submit.wind_metal,
                            ...prev_submit.wind_wood,
                            ...prev_submit.percussion,
                            ...prev_submit.electrical,
                            ...prev_submit.string
                        ]
                    }
                }
            })

        },
        validationSchema: validation_rules
    });

    const {
        values,
        errors,
        submitForm,
        setValues
    } = formik;

    useEffect(() => {

        if (!values.categories.some((item) => item.value === 'instrument_wind')) {
            formik.setFieldValue('wind_metal', []);
            formik.setFieldValue('wind_wood', []);
        }

        if (!values.categories.some((item) => item.value === 'instrument_percussion')) {
            formik.setFieldValue('percussion', []);
        }

        if (!values.categories.some((item) => item.value === 'instrument_electrical')) {
            formik.setFieldValue('electrical', []);
        }

        if (!values.categories.some((item) => item.value === 'instrument_string')) {
            formik.setFieldValue('string', []);
        }

    }, [values.categories])

    const set_enable = (category: | "wind" | "percussion" | "electrical" | "string"): boolean => {

        let enable: boolean = false;
        switch (category) {
            case "wind":
                if (values.categories.some((item) => item.value === 'instrument_wind')) enable = true;

                break;
            case "percussion":
                if (values.categories.some((item) => item.value === 'instrument_percussion')) enable = true;

                break;
            case "electrical":
                if (values.categories.some((item) => item.value === 'instrument_electrical')) enable = true;

                break;
            case "string":
                if (values.categories.some((item) => item.value === 'instrument_string')) enable = true;

                break;
            default:
                break;
        }

        return enable;

    }

    const set_categories_to_selectors = (instrumentist: Instrumentist_Model_I) => {

        Init_Values = {
            specialty: meta_to_selectors<Instrumentist_Specialty_Type>(instrumentist?.specialty!, instrumentistModel.specialty) || [],
            position: meta_to_selectors<Instrumentist_Position_Type>(instrumentist?.position!, instrumentistModel.position) || [],

            categories: [],
            wind_metal: [],
            wind_wood: [],
            percussion: [],
            electrical: [],
            string: [],
        }

        const categories = instrumentist.categories;

        for (const [i, item] of categories.entries()) {

            if(item.includes('instrument_wind')){

                const cat: SelectValue_I<Inst_Categories_Type> =  instrumentistModel.categories.find(item => item.value === 'instrument_wind')!;
                Init_Values.categories.push(cat);

                if(item.includes('_wind_metal')){
                    const aux_p: SelectValue_I<Inst_windMetalCategory_Type> = instrumentistModel.wind_metal.find( c => c.value === item )!
                    Init_Values.wind_metal.push(aux_p);
                }
                if(item.includes('_wind_wood')){
                    const aux_p: SelectValue_I<Inst_windWoodCategory_Type> = instrumentistModel.wind_wood.find( c => c.value === item )!
                    Init_Values.wind_wood.push(aux_p);
                }

            }
            if(item.includes('instrument_percussion')){

                const cat: SelectValue_I<Inst_Categories_Type> =  instrumentistModel.categories.find(item => item.value === 'instrument_percussion')!;
                Init_Values.categories.push(cat);

                const aux_p: SelectValue_I<Inst_percusionCategory_Type> = instrumentistModel.percussion.find( c => c.value === item )!
                Init_Values.percussion.push(aux_p);

            }
            if(item.includes('instrument_electrical')){

                const cat: SelectValue_I<Inst_Categories_Type> =  instrumentistModel.categories.find(item => item.value === 'instrument_electrical')!;
                Init_Values.categories.push(cat);
                const aux_p: SelectValue_I<Inst_electricalCategory_Type> = instrumentistModel.electrical.find( c => c.value === item )!
                Init_Values.electrical.push(aux_p);

            }
            if(item.includes('instrument_string')){

                const cat: SelectValue_I<Inst_Categories_Type> =  instrumentistModel.categories.find(item => item.value === 'instrument_string')!;
                Init_Values.categories.push(cat);
                const aux_p: SelectValue_I<Inst_stringCategory_Type> = instrumentistModel.string.find( c => c.value === item )!
                Init_Values.string.push(aux_p);

            }

        }

        setValues(Init_Values);

    }

    useEffect(() => {

        if (isMounted === false) return;
        if (meta?.skills?.instrumentist === undefined) return;

        const instrumentist = meta.skills.instrumentist;

        set_categories_to_selectors(instrumentist);

    }, [meta?.skills?.instrumentist, isMounted])

      useEffect(() => {
        setisMounted(true);
    }, []);

    return (
        <>
            <FormikProvider value={formik}>
                <Form noValidate>

                    <div className="space-y-5 SingerSkillSelectors">

                        <section>
                            <FormLayoutBuilder rows={[formData[0]]} />
                        </section>

                        <section>
                            <h2 className="mb-1 text-xl font-bold leading-snug text-slate-800 dark:text-slate-100">
                                ¿Qué tipo de instrumento tocas?
                            </h2>
                            <div className="mb-5 text-sm">
                                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sed neque aut et cumque, labo
                            </div>

                            <FormLayoutBuilder rows={[formData[1]]} />

                        </section>
                        {
                            set_enable('wind') && (
                                <section>
                                    <h2 className="mb-1 text-xl font-bold leading-snug text-slate-800 dark:text-slate-100">
                                        Viento - Sub categorias
                                    </h2>
                                    <div className="mb-5 text-sm">
                                        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sed neque aut et cumque, labo
                                    </div>

                                    <FormLayoutBuilder rows={[formData[2]]} />

                                </section>
                            )
                        }
                        {
                            set_enable('percussion') && (
                                <section>
                                    <h2 className="mb-1 text-xl font-bold leading-snug text-slate-800 dark:text-slate-100">
                                        Percusión - Sub categorias
                                    </h2>
                                    <div className="mb-5 text-sm">
                                        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sed neque aut et cumque, labo
                                    </div>

                                    <FormLayoutBuilder rows={[formData[3]]} />

                                </section>

                            )
                        }
                        {
                            set_enable('electrical') && (
                                <section>
                                    <h2 className="mb-1 text-xl font-bold leading-snug text-slate-800 dark:text-slate-100">
                                        Electrico - Sub categorias
                                    </h2>
                                    <div className="mb-5 text-sm">
                                        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sed neque aut et cumque, labo
                                    </div>

                                    <FormLayoutBuilder rows={[formData[4]]} />

                                </section>
                            )
                        }
                        {
                            set_enable('string') && (
                                <section>
                                    <h2 className="mb-1 text-xl font-bold leading-snug text-slate-800 dark:text-slate-100">
                                        Cuerda - Sub categorias
                                    </h2>
                                    <div className="mb-5 text-sm">
                                        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sed neque aut et cumque, labo
                                    </div>

                                    <FormLayoutBuilder rows={[formData[5]]} />

                                </section>
                            )
                        }
                        <hr />
                    </div>
                    <footer className="pt-6" >
                        <div className="flex flex-row justify-end">
                            <PrimaryButton onClick={submitForm} isLoading={onLoading} label="Guardar" />
                        </div>
                    </footer>

                </Form>
            </FormikProvider>
        </>
    )
}