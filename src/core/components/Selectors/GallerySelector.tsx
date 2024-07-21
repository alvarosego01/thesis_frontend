
import { FC, useEffect, useRef } from 'react';
import { OutlineButton, PrimaryButton, SecondaryButton, TertiaryButton } from '..';
import { NotFoundContent } from '../../../modules/dashboard/components';
import { useSignal, useSignals } from '@preact/signals-react/runtime';
import { Form, FormikProvider, useFormik } from 'formik';
import { useFormInitData } from '../../hooks';
import { LayoutRow_I } from '../forms/interfaces';
import { Media_I } from '@tesis-project/dev-globals/dist/modules/media/interfaces';


const gallery_schema: LayoutRow_I[] = [
    {
        fields: [
            {
                typeField: 'file',
                props: {
                    label: '',
                    name: 'File',
                    type: 'file',
                    accept: 'image/png, image/jpeg, image/jpg',
                    validation_rules: [
                        {
                            type: "fileSize_5m",
                            message: "El archivo debe ser menor a 5MB"
                        },
                        {
                            type: "fileFormat_image",
                            message: "El archivo debe ser una imagen"
                        }
                    ]
                }
            }
        ],
    }
]

interface GallerySelector_Props_I {
    gallery: Media_I[],
    onSelect: (file: File) => void;
    onDelete: (id: string) => void;
    isLoading: boolean;
}

export const GallerySelector: FC<GallerySelector_Props_I> = ({ ...props }) => {

    useSignals();

    const {
        gallery,
        isLoading,
        onSelect,
        onDelete
    } = props;

    const isMounted = useSignal(false);
    const onDeleteLoading = useSignal<string>('');
    const fileInputRef = useRef<HTMLInputElement>(null);

    const { initialValues: initial_image, validation_rules: validation_image } = useFormInitData<{ File: File }>(gallery_schema);

    const formik_image = useFormik({
        initialValues: initial_image,
        onSubmit: (values, helpers) => {
            helpers.validateForm();
            onSelect(values.File);
        },
        validationSchema: validation_image,
        validateOnChange: true
    });

    const {
        values: values_image,
        submitForm,
        errors,
        setFieldValue
    } = formik_image;

    useEffect(() => {

        if (isMounted.value === false) return;

        if (values_image?.File?.size > 0) {
            submitForm();
        }

    }, [values_image]);

    const handleFileChange = (event: any) => {

        const file = event.target.files[0];
        setFieldValue('File', file);

    };

    const show_errors = () => {

        if (errors) {
            for (const key in errors) {
                return (
                    <span className="block w-full mx-auto mt-1 text-xs text-center text-rose-500">
                        {String(errors['File'])}
                    </span>
                )
            }
        } else {
            return null
        }

    }

    const prev_delete = (_id: string) => {

        // onDeleteLoading.value = true;
        onDeleteLoading.value = _id;
        onDelete(_id);

    }

    const is_deleteProcess = (current_delete: string): boolean => {

        return onDeleteLoading.value === current_delete;

    }

    useEffect(() => {
        isMounted.value = true;
    }, []);

    return (
        <>
            {
                gallery.length === 0 && (
                    <NotFoundContent onClick={() => fileInputRef.current?.click()} title="No hay imágenes cargadas" text="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod" />
                )
            }
            {
                gallery.length > 0 && (
                    <div>
                        <h2 className="text-base font-bold leading-snug text-slate-800 dark:text-slate-100 mb-s_10">
                            Imágenes
                        </h2>
                        <div className="grid grid-cols-2 gap-3 lg:grid-cols-4 xl:grid-cols-6">
                            {
                                gallery.map((item, index) => (
                                    <div key={index} className="relative object-cover w-auto overflow-hidden h-s_125 rounded-rd_5">
                                        <div className="absolute top-0 right-0 tooltip" data-tip="Eliminar" >

                                            <TertiaryButton isLoading={is_deleteProcess(item._id)} className='bg-white' onClick={() => {prev_delete(item._id)}} icon='bx bx-trash' />

                                        </div>
                                        <img src={item.src} alt="gallery" className="inset-0 object-cover w-full h-full " />
                                    </div>
                                ))
                            }
                            <TertiaryButton isLoading={isLoading} icon='bx bx-plus' onClick={() => fileInputRef.current?.click()} label='Añadir' />
                        </div>
                    </div>
                )
            }
            {
                show_errors()
            }

            <FormikProvider value={formik_image}>
                <Form noValidate className="w-full">
                    <input
                        ref={fileInputRef}
                        type="file"
                        name='File'
                        accept='image/png, image/jpeg, image/jpg'
                        style={{
                            display: 'none'
                        }}
                        onChange={handleFileChange}
                    />
                </Form>
            </FormikProvider>
        </>
    )
}
