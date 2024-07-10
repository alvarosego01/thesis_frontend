

import { FC, useEffect, useState } from "react";
import { Form, FormikProvider, useFormik } from "formik"

import { FormLayoutBuilder, GallerySelector, PrimaryButton, VideoGallerySelector } from "../../../../../core/components";
import { useFormInitData } from "../../../../../core/hooks";

import { LayoutRow_I } from "../../../../../core/components/forms/interfaces";
import { useProfileStore } from "../../../store";

const data_artistName: LayoutRow_I[] = [
    {
        fields: [
            {
                typeField: 'text',
                props: {
                    label: 'Nombre artistico',
                    name: 'artistic_name',
                    type: 'text',
                    parent_class: 'w-full pcTab:w-1/2',
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
                    parent_class: 'w-full lg:w-1/2',
                    validation_rules: [
                        {
                            type: "maxLength",
                            value: 1000,
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
                    parent_class: 'w-full !mb-s_10',
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
                    parent_class: 'w-full !mb-s_10',
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
                    parent_class: 'w-full !mb-s_10',
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
                    parent_class: 'w-full !mb-s_10',
                    placeholder: 'https://...',
                    validation_rules: [
                        {
                            type: "url",
                            message: "La url de linkedin no es valida"
                        }
                    ]
                }
            },
            {
                typeField: 'text',
                props: {
                    label: 'Tiktok',
                    name: 'social_tiktok',
                    type: 'text',
                    icon: 'bx bxl-tiktok',
                    parent_class: 'w-full !mb-s_10',
                    placeholder: 'https://...',
                    validation_rules: [
                        {
                            type: "url",
                            message: "La url de tiktok no es valida"
                        }
                    ]
                }
            },
            {
                typeField: 'text',
                props: {
                    label: 'Youtube',
                    name: 'social_youtube',
                    type: 'text',
                    icon: 'bx bxl-youtube',
                    parent_class: 'w-full !mb-s_10',
                    placeholder: 'https://...',
                    validation_rules: [
                        {
                            type: "url",
                            message: "La url de youtube no es valida"
                        }
                    ]
                }
            }
        ],
        grid_columns: 'grid-cols-1 pcTab:grid-cols-2'
    }
]

interface Init_valuesData_I {
    artistic_name: string;
    biography_review: string;
    social_facebook: string;
    social_instagram: string;
    social_twitter: string;
    social_linkedin: string;
    social_tiktok: string;
    social_youtube: string;
}
export const ProfessionalPage: FC = () => {

    const {
        state: {
            onLoading,
            profile
        },
        emit_update_user_profile,
        emit_get_profile_data
    } = useProfileStore();

    const [initValues, setInitValues] = useState<Init_valuesData_I>({
        artistic_name: '',
        biography_review: '',
        social_facebook: '',
        social_instagram: '',
        social_twitter: '',
        social_linkedin: '',
        social_tiktok: '',
        social_youtube: '',
    });

    useEffect(() => {
        emit_get_profile_data();
    }, []);

    useEffect(() => {
        if (profile) {
            setInitValues({
                artistic_name: profile.artistic_name || '',
                biography_review: profile.bio_short || '',
                social_facebook: profile.socials?.facebook || '',
                social_instagram: profile.socials?.instagram || '',
                social_twitter: profile.socials?.twitter || '',
                social_linkedin: profile.socials?.linkedin || '',
                social_tiktok: profile.socials?.tiktok || '',
                social_youtube: profile.socials?.youtube || '',
            });
        }
    }, [profile]);

    const { initialValues, validation_rules } = useFormInitData<Init_valuesData_I>([
        ...data_artistName,
        ...data_reviewBio,
        ...data_socialNetworks
    ], initValues);

    const formik = useFormik({
        initialValues: initialValues,
        enableReinitialize: true,
        onSubmit: (values) => {
            emit_update_user_profile(profile._id, {
                artistic_name: values.artistic_name,
                bio_short: values.biography_review,
                socials: {
                    facebook: values.social_facebook,
                    instagram: values.social_instagram,
                    twitter: values.social_twitter,
                    tiktok: values.social_tiktok,
                    youtube: values.social_youtube,
                    linkedin: values.social_linkedin
                }
            })
        },
        validationSchema: validation_rules
    });

    const {
        values,
        setValues,
        submitForm
    } = formik;

    return (
        <div className="grow">
            <FormikProvider value={formik}>
                <Form noValidate>
                    <div className="p-5 space-y-5">
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
                                Redes sociales
                            </h2>
                            <div className="text-sm mb-s_25">
                                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sed neque aut et cumque, labo
                            </div>
                            <FormLayoutBuilder rows={data_socialNetworks} />
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
                    </div>

                    <footer>
                        <div className="flex flex-col px-6 py-5 border-t border-slate-200 dark:border-slate-700">
                            <div className="flex self-end">
                                <PrimaryButton onClick={submitForm} isLoading={onLoading} label="Guardar" />
                            </div>
                        </div>
                    </footer>
                </Form>
            </FormikProvider>
        </div>
    );
};