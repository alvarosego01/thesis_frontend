

import { Form, Formik } from "formik"

import { FormLayoutBuilder, GallerySelector, PrimaryButton, VideoGallerySelector } from "../../../../../core/components";
import { useFormInitData } from "../../../../../core/hooks";

import { LayoutRow_I } from "../../../../../core/components/forms/interfaces";

const data_artistName: LayoutRow_I[] = [
    {
        fields: [
            {
                typeField: 'text',
                props: {
                    label: 'Nombre artistico',
                    name: 'artistic_name',
                    type: 'text',
                    parent_className: 'w-1/2 lg:w-1/3',
                    validation_rules: [
                        {
                            type: "required",
                            message: "El nombre artistico es requerido"
                        },
                        {
                            type: "minLength",
                            value: 3,
                            message: "El nombre artistico debe tener al menos 3 caracteres"
                        }
                    ]
                }
            }
        ],
        grid_columns: 'grid-cols-1'
    }
]

const data_reviewBio: LayoutRow_I[] = [
    {
        fields: [
            {
                typeField: 'textarea',
                props: {
                    label: 'Reseña biografica',
                    name: 'biography_review',
                    type: 'text',
                    placeholder: '...',
                    parent_className: 'w-full lg:w-1/2',
                    validation_rules: [
                        {
                            type: "maxLength",
                            value: 20,
                            message: "La reseña biografica debe tener maximo 1000 caracteres"
                        }
                    ]
                }
            }
        ],
        grid_columns: 'grid-cols-1'
    }
]

const data_socialNetworks: LayoutRow_I[] = [
    {
        fields: [
            {
                typeField: 'text',
                props: {
                    label: 'Facebook',
                    name: 'social_facebook',
                    type: 'text',
                    icon: 'bx bxl-facebook',
                    parent_className: 'w-1/2 lg:w-1/3 !mb-s_10',
                    placeholder: 'https://...',
                    validation_rules: [
                        {
                            type: "url",
                            message: "La url de facebook no es valida"
                        }
                    ]
                }
            },
            {
                typeField: 'text',
                props: {
                    label: 'Instagram',
                    name: 'social_instagram',
                    type: 'text',
                    icon: 'bx bxl-instagram',
                    parent_className: 'w-1/2 lg:w-1/3 !mb-s_10',
                    placeholder: 'https://...',
                    validation_rules: [
                        {
                            type: "url",
                            message: "La url de instagram no es valida"
                        }
                    ]
                }
            },
            {
                typeField: 'text',
                props: {
                    label: 'Twitter',
                    name: 'social_twitter',
                    type: 'text',
                    icon: 'bx bxl-twitter',
                    parent_className: 'w-1/2 lg:w-1/3 !mb-s_10',
                    placeholder: 'https://...',
                    validation_rules: [
                        {
                            type: "url",
                            message: "La url de twitter no es valida"
                        }
                    ]
                }
            },
            {
                typeField: 'text',
                props: {
                    label: 'Linkedin',
                    name: 'social_linkedin',
                    type: 'text',
                    icon: 'bx bxl-linkedin',
                    parent_className: 'w-1/2 lg:w-1/3 !mb-s_10',
                    placeholder: 'https://...',
                    validation_rules: [
                        {
                            type: "url",
                            message: "La url de linkedin no es valida"
                        }
                    ]
                }
            }
        ],
        grid_columns: 'grid-cols-1'
    }
]

export const ProfessionalPage = () => {

    const { initialValues, validation_rules } = useFormInitData([
        ...data_artistName,
        ...data_reviewBio,
        ...data_socialNetworks
    ]);

    // const fileInputRef = useRef();
    // let isLoading: boolean = false;


    // const gallery: any[] = []

    return (
        <div className="grow">
            {/* Panel body */}
            <Formik
                initialValues={initialValues}
                onSubmit={(values) => {
                    console.log('values', values)
                }}
                validationSchema={validation_rules}
            >
                {
                    ({
                        submitForm
                    }) => (

                        <Form noValidate
                        >

                            <div className="p-6 space-y-6">

                                <h2 className="mb-5 text-2xl font-bold text-slate-800 dark:text-slate-100 ">
                                    Perfil profesional
                                </h2>

                                <FormLayoutBuilder rows={data_artistName} />

                                <section>
                                    <h2 className="mb-1 text-xl font-bold leading-snug text-slate-800 dark:text-slate-100">
                                        Biografias y reseñas
                                    </h2>
                                    <div className="text-sm mb-s_25">
                                        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sed neque aut et cumque, labo
                                    </div>

                                    <FormLayoutBuilder rows={data_reviewBio} />

                                </section>
                                <hr />
                                <section>
                                    <h2 className="mb-1 text-xl font-bold leading-snug text-slate-800 dark:text-slate-100">
                                        Area multimedia
                                    </h2>
                                    <div className="text-sm mb-s_25">
                                        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sed neque aut et cumque, labo
                                    </div>

                                    <div className="grid grid-cols-1">
                                        <div className="mb-s_25">
                                            <GallerySelector gallery={[
                                                'https://loremflickr.com/800/600',
                                                'https://loremflickr.com/800/600',
                                                'https://loremflickr.com/800/600',
                                                'https://loremflickr.com/800/600',
                                                'https://loremflickr.com/800/600',
                                                'https://loremflickr.com/800/600'
                                            ]} />
                                        </div>
                                        <div className="mb-s_25">

                                            <VideoGallerySelector gallery={[]} />
                                        </div>
                                    </div>


                                </section>
                            <hr />
                                <section>
                                    <h2 className="mb-1 text-xl font-bold leading-snug text-slate-800 dark:text-slate-100">
                                        Redes sociales
                                    </h2>
                                    <div className="text-sm mb-s_25">
                                        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sed neque aut et cumque, labo
                                    </div>
                                    <FormLayoutBuilder rows={data_socialNetworks} />

                                </section>

                            </div>

                            <footer>
                                <div className="flex flex-col px-6 py-5 border-t border-slate-200 dark:border-slate-700">
                                    <div className="flex self-end">
                                        <PrimaryButton onClick={submitForm} label="Guardar" />
                                    </div>
                                </div>
                            </footer>

                        </Form>

                    )
                }
            </Formik>
        </div>


    )
}
