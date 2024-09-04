


import { FC, useState } from 'react';
import { getAssetPath } from '../../../utils';
import { User_I } from '@tesis-project/dev-globals/dist/modules/user/interfaces';
import { Profile_I, Meta_Artist_I, MetaRole_I } from '@tesis-project/dev-globals/dist/modules/profile/interfaces';
import { TextLimit_P } from '../../../pipes';
import { set_shortSkills } from './UserCard-meta';
import { useNavigate } from 'react-router-dom';

interface Props_I {
    user: User_I
}

export const UserCard: FC<Props_I> = ({
    user
}) => {

    const navigate = useNavigate();

    const [profile, setprofile] = useState<Profile_I>(user.profile as Profile_I);
    const [meta, setmeta] = useState<MetaRole_I>(profile.meta as MetaRole_I);

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

    const getLimitedValues = (array: any[], maxCount?: number): string[] => {
        const result = array.slice(0, maxCount);
        if (maxCount && array.length > maxCount) {
            result.push("Otros");
        }
        return result;
    };

    const set_skillsection = (skills: string[], tagName: string) => {

        const aux_skills = getLimitedValues(skills, 6);

        return (
            <>
                <li className="flex flex-col space-y-1">
                    <div className='space-x-1'>

                        <i className='text-xs bx bx-music'></i>
                        <span className='text-xs font-light text-slate-400' >
                            {tagName}:
                        </span>
                    </div>
                    {
                        (aux_skills.length > 0) && (
                            <ul className='flex flex-row flex-wrap gap-1'>
                                {
                                    aux_skills.map((item, index) => (
                                        <li key={index} className='block p-1 px-2 rounded-full whitespace-nowrap text-10p bg-slate-100 text-slate-500'>
                                            {item}
                                        </li>
                                    ))
                                }
                            </ul>
                        )
                    }
                </li>

            </>
        )
    }

    const set_Skills = () => {

        let skills = set_shortSkills((meta.meta_artist as Meta_Artist_I).skills || {});

        return (
            <>
                <ul className="mb-5 space-y-2 text-sm dark:text-gray-300">

                    {
                        (skills.singer?.enable === true) && (
                            set_skillsection(
                                [
                                    ...getLimitedValues(skills.singer?.voice_specialty.map(r => r.label) || []),
                                    ...getLimitedValues(skills.singer?.voice_type.map(r => r.label) || [])
                                ], 'Cantante')
                        )
                    }
                    {
                        (skills.instrumentist?.enable === true) && (
                            set_skillsection(
                                [
                                    ...getLimitedValues(skills.instrumentist?.position.map(r => r.label) || []),
                                    ...getLimitedValues(skills.instrumentist?.specialty.map(r => r.label) || []),
                                    // ...getLimitedValues(skills.instrumentist?.categories.map(r => r.label) || [])
                                ], 'Instrumentista')
                        )
                    }
                    {
                        (skills.orchest_director?.enable === true) && (
                            set_skillsection(
                                [
                                    ...getLimitedValues(skills.orchest_director?.repertoire.map(r => r.label) || []),
                                    ...getLimitedValues(skills.orchest_director?.specialty.map(r => r.label) || []),
                                ], 'Drc. Orquesta')
                        )
                    }
                    {
                        (skills.orchest_director?.enable === true) && (
                            set_skillsection(
                                [
                                    ...getLimitedValues(skills.scene_director?.repertoire.map(r => r.label) || []),
                                    ...getLimitedValues(skills.scene_director?.specialty.map(r => r.label) || []),
                                ], 'Drc. Escena')
                        )
                    }

                </ul>
            </>
        )

    }

    const go_profile = () => {

        navigate(`/user/${user._id}`)

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

                    <div className="flex flex-col p-5 space-y-5 grow">

                        <div className="space-y-3 grow">

                            <header >
                                <h3 className="text-lg font-semibold text-gray-800 dark:text-gray-100">
                                    {user.name} {user.last_name || ''}
                                </h3>
                            </header>

                            {
                                (profile?.bio_short) && (
                                    <>
                                        <p className='text-sm leading-tight text-slate-400'>
                                            {TextLimit_P(profile.bio_short, 125)}
                                        </p>
                                    </>
                                )
                            }

                            {set_Skills()}

                        </div>

                        <div>
                            <a className="w-full text-gray-100 bg-gray-900 hover:cursor-pointer bttn-sm hover:bg-gray-800 dark:bg-gray-100 dark:text-gray-800 dark:hover:bg-white"
                                onClick={go_profile} >
                                Ver perfil
                            </a>
                        </div>
                    </div>
                </div>
            </div>

        </>

    )
}
