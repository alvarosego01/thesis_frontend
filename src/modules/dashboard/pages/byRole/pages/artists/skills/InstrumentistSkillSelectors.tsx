import { FC, useEffect } from "react"
import { Form, FormikProvider, useFormik } from "formik";
import { useFormInitData } from '@hooks/index';

import { LayoutRow_I, SelectValue_I } from "@components/forms/interfaces";
import { instrumentistModel } from "@modules/dashboard/models/artistSkills/InstrumentistSkills";
import { FormLayoutBuilder, PrimaryButton } from "@components/index";


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

    specialty: SelectValue_I[];
    position: SelectValue_I[];
    categories: SelectValue_I[];
    wind_metal: SelectValue_I[];
    wind_wood: SelectValue_I[];
    percussion: SelectValue_I[];
    electrical: SelectValue_I[];
    string: SelectValue_I[];

}


export const InstrumentistSkillSelectors: FC = () => {

    const Init_Values: Init_valuesData_I = {
        specialty: [],
        position: [],
        categories: [],
        wind_metal: [],
        wind_wood: [],
        percussion: [],
        electrical: [],
        string: [],
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

    useEffect(() => {

        if (!values.categories.some((item: SelectValue_I) => item.value === 'instrument_wind')) {
            formik.setFieldValue('wind_metal', []);
            formik.setFieldValue('wind_wood', []);
        }

        if (!values.categories.some((item: SelectValue_I) => item.value === 'instrument_percussion')) {
            formik.setFieldValue('percussion', []);
        }

        if (!values.categories.some((item: SelectValue_I) => item.value === 'instrument_electrical')) {
            formik.setFieldValue('electrical', []);
        }

        if (!values.categories.some((item: SelectValue_I) => item.value === 'instrument_string')) {
            formik.setFieldValue('string', []);
        }

    }, [values.categories])


    const set_enable = (category: | "wind" | "percussion" | "electrical" | "string"): boolean => {

        let enable: boolean = false;
        switch (category) {
            case "wind":
                if (values.categories.some((item: SelectValue_I) => item.value === 'instrument_wind')) enable = true;

                break;
            case "percussion":
                if (values.categories.some((item: SelectValue_I) => item.value === 'instrument_percussion')) enable = true;

                break;
            case "electrical":
                if (values.categories.some((item: SelectValue_I) => item.value === 'instrument_electrical')) enable = true;

                break;
            case "string":
                if (values.categories.some((item: SelectValue_I) => item.value === 'instrument_string')) enable = true;

                break;
            default:
                break;
        }

        return enable;

    }

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
                            <PrimaryButton onClick={submitForm} label="Guardar" />
                        </div>
                    </footer>

                </Form>
            </FormikProvider>
        </>
    )
}