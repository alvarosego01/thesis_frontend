


import { FC, useState } from 'react';
import { getAssetPath } from '../../../utils';
import { User_I } from '@tesis-project/dev-globals/dist/modules/user/interfaces';
import { Profile_I, Meta_Artist_I } from '@tesis-project/dev-globals/dist/modules/profile/interfaces';
import { TextLimit_P } from '../../../pipes';

// const AppImage01 = getAssetPath('/images/applications-image-01.jpg');

interface Props_I {
    user: User_I
}

export const UserCard: FC<Props_I> = ({
    user
}) => {

    const [profile, setprofile] = useState<Profile_I>(user.profile as Profile_I);
    const [meta, setmeta] = useState<Meta_Artist_I>(profile.meta as Meta_Artist_I);

    const set_profilePic = (): string => {

        let aux_pic: string = '';
        aux_pic = profile.profile_pic?.src || '';
        if (aux_pic === '') aux_pic = getAssetPath('/images/user_anon.png');
        return aux_pic;

    }

    const set_coverPic = (): string => {

        let aux_pic: string = '';
        aux_pic = profile.cover_pic?.src || '';
        return aux_pic;

    }

    const set_artisticName = (): string => {

        let aux: string = '';
        aux = profile.artistic_name || '';
        return aux;

    }

    const set_shortSkills = () => {

    }

    return (

        <>
            <div className="overflow-hidden bg-white shadow-sm col-span-full sm:col-span-6 xl:col-span-3 dark:bg-gray-800 rounded-xl">
                <div className="flex flex-col h-full">

                    <div className="relative mb-6 headaeCard">

                        {
                            (set_coverPic() !== '') ? (
                                <img className="object-cover w-full h-s_175" src={set_coverPic()} />
                            ) : (
                                <div className='object-cover w-full h-s_175 bg-slate-200'></div>
                            )
                        }
                        <img className="absolute left-0 right-0 object-cover mx-auto rounded-full w-28 h-28 top-24" src={set_profilePic()} alt="user profile pic" />

                    </div>
                    {/* Card Content */}
                    <div className="flex flex-col p-5 space-y-5 grow">
                        {/* Card body */}
                        <div className="space-y-3 grow">

                            {/* Header */}
                            <header >
                                <h3 className="text-lg font-semibold text-gray-800 dark:text-gray-100">
                                    {user.name} {user.last_name || ''}
                                </h3>
                            </header>

                            {/* Description */}
                            {
                                (profile?.bio_short) && (
                                    <>
                                        <p className='text-sm text-slate-400'>
                                            {TextLimit_P(profile.bio_short, 125)}
                                        </p>
                                    </>
                                )
                            }

                            {/* Features list */}
                            <ul className="mb-5 space-y-2 text-sm dark:text-gray-300">
                                <li className="flex items-center">

                                    <div>23 hours on-demand video</div>
                                </li>

                            </ul>
                        </div>
                        {/* Card footer */}
                        <div>
                            <a className="w-full text-gray-100 bg-gray-900 bttn-sm hover:bg-gray-800 dark:bg-gray-100 dark:text-gray-800 dark:hover:bg-white" href="#0">
                                Ver perfil
                            </a>
                        </div>
                    </div>
                </div>
            </div>

        </>

    )
}
