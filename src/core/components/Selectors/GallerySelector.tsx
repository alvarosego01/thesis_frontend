import { FC, useRef } from 'react';

import { TertiaryButton } from '..';
import { NotFoundContent } from '../../../modules/dashboard/components';

interface GallerySelector_Props_I {
    gallery: string[]
}

export const GallerySelector: FC<GallerySelector_Props_I> = ({ gallery }) => {

    const fileInputRef = useRef<HTMLInputElement>(null);

    const onChangeDocument = (target: any) => {
        if (target.files === 0) return;
        // dispatch()
        // dispatch(startUploadFiles(target.files));

    }

    return (
        <>
               {
                gallery.length === 0 && (
                    <NotFoundContent onClick={() => fileInputRef.current?.click()} label="No hay imágenes cargadas" text="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod" />
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
                                        <img src={item} alt="gallery" className="inset-0 object-cover w-full h-full " />
                                    </div>
                                ))
                            }
                            <TertiaryButton icon='bx bx-plus' onClick={() => fileInputRef.current?.click()} label='Añadir' />
                        </div>
                    </div>
                )
            }
            <input
                onChange={onChangeDocument}
                ref={fileInputRef}
                type="file"
                multiple
                style={{
                    display: 'none'
                }}
            />
        </>
    )
}
