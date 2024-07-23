

import { FC, useEffect, useState } from 'react'
import { GallerySelector, VideoGallerySelector } from '@components/index';
import { useProfileStore } from '../../../store';

export const MediaPage: FC = () => {

    const [isMounted, setisMounted] = useState(false)

    const {
        state: {
            onLoading_galleryImage,
            onLoading_galleryVideo,
            profile: {
                media
            }
        },
        emit_add_gallery_image,
        emit_add_gallery_video,
        emit_delete_gallery_image,
        emit_delete_gallery_video
    } = useProfileStore();

    const onSelectGalleryImage = (File: File) => {
        emit_add_gallery_image(File);

    }

    const onDeleteGalleryImage = (_id: string) => {
        emit_delete_gallery_image(_id);
        return
    }

    const onSelectGalleryVideo = (File: File) => {
        emit_add_gallery_video(File);
    }

    const onDeleteGalleryDelete = (_id: string) => {
        emit_delete_gallery_video(_id);
        return
    }

    useEffect(() => {
        setisMounted(true);
    }, []);

    return (
        <div className="grow">

            <div className="p-5 space-y-5">
                <section>
                    <h2 className="mb-1 text-xl font-bold leading-snug text-slate-800 dark:text-slate-100">
                        Area multimedia
                    </h2>
                    <div className="text-sm mb-s_25">
                        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sed neque aut et cumque, labo
                    </div>

                    <div className="grid grid-cols-1 space-y-6">
                        <div >
                            <GallerySelector isLoading={onLoading_galleryImage} gallery={media?.image_gallery || []} onSelect={(file) => onSelectGalleryImage(file)} onDelete={(_id) => onDeleteGalleryImage(_id)} />
                        </div>
                        <hr />
                        <div >
                            <VideoGallerySelector isLoading={onLoading_galleryVideo} gallery={media?.video_gallery || []} onSelect={(file) => onSelectGalleryVideo(file)} onDelete={(_id) => { onDeleteGalleryDelete(_id) }} />
                        </div>
                    </div>
                </section>
            </div>

        </div>
    )
}
