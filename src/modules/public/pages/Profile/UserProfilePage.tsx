
import { FC, useEffect, useState } from "react"
import { getAssetPath } from "../../../../core/utils";
import { useUserProfileStore } from "../../store";
import { useParams } from "react-router-dom";
import { Profile_I, MetaRole_I, Meta_Artist_I } from '@tesis-project/dev-globals/dist/modules/profile/interfaces';
import { Auth_I } from "@tesis-project/dev-globals/dist/modules/auth/interfaces";
import { Transform_dateShort } from "../../../../core/pipes";
import { set_shortSkills } from "../../../../core/components/users-profile/userList/UserCard-meta";


export const UserProfilePage: FC = () => {

    const {
        state: {
            user
        },
        emit_getUser_userProfile,
        emit_restore
    } = useUserProfileStore();

    const { id } = useParams();

    const [isMounted, setisMounted] = useState(false);

    const [profile, setprofile] = useState<Profile_I>({} as Profile_I);
    const [auth, setAuth] = useState<Auth_I>({} as Auth_I);
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

    const set_skillsection = (skills: string[], tagName: string) => {

        const aux_skills = getLimitedValues(skills, 6);

        return (
            <>
                <li className="flex flex-col space-y-2">
                    <div className=''>
                        <span className='text-base font-light text-slate-400' >
                            {tagName}:
                        </span>
                    </div>
                    {
                        (aux_skills.length > 0) && (
                            <ul className='flex flex-row flex-wrap gap-2'>
                                {
                                    aux_skills.map((item, index) => (
                                        <li key={index} className='block p-1 px-4 text-sm rounded-full whitespace-nowrap bg-slate-200 text-slate-500'>
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

    const getLimitedValues = (array: any[], maxCount?: number): string[] => {
        const result = array.slice(0, maxCount);
        if (maxCount && array.length > maxCount) {
            result.push("Otros");
        }
        return result;
    };

    const set_Skills = () => {

        let skills = set_shortSkills((meta.meta_artist as Meta_Artist_I).skills || {});

        return (
            <>
                <div>
                    <h2 className="mb-2 font-semibold text-gray-800 dark:text-gray-100">
                        <i className='mr-2 bx bx-music'></i>
                        Habilidades
                    </h2>

                    <ul className="mb-5 space-y-4 text-sm dark:text-gray-300">

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
                </div>
            </>
        )

    }


    const set_typeArtist = () => {

        let skills = set_shortSkills((meta.meta_artist as Meta_Artist_I).skills || {});

        return (
            <>
                <ul className="flex flex-row flex-wrap gap-1">

                    {
                        (skills.singer?.enable === true) && (
                            <li className='block p-1 px-2 rounded-full whitespace-nowrap text-12p bg-slate-200 text-slate-500'>
                                Cantante
                            </li>
                        )
                    }
                    {
                        (skills.instrumentist?.enable === true) && (
                            <li className='block p-1 px-2 rounded-full whitespace-nowrap text-12p bg-slate-200 text-slate-500'>
                                Instrumentista
                            </li>
                        )
                    }
                    {
                        (skills.orchest_director?.enable === true) && (
                            <li className='block p-1 px-2 rounded-full whitespace-nowrap text-12p bg-slate-200 text-slate-500'>
                                Drc. Orquesta
                            </li>
                        )
                    }
                    {
                        (skills.orchest_director?.enable === true) && (
                            <li className='block p-1 px-2 rounded-full whitespace-nowrap text-12p bg-slate-200 text-slate-500'>
                                Drc. Escena
                            </li>
                        )
                    }

                </ul>
            </>
        )

    }


    useEffect(() => {

        if (isMounted === false) return;
        if ((Object.keys(user).length > 0)) {

            setprofile(user.profile as Profile_I);
            setmeta(profile.meta as Meta_Artist_I);
            setAuth(user.auth as Auth_I);

        }

    }, [user, profile]);

    useEffect(() => {

        if (isMounted === false) return;

        (id) && emit_getUser_userProfile(id);


    }, [isMounted]);

    useEffect(() => {

        setisMounted(true);

        return () => {
            emit_restore();
        }

    }, []);


    return (

        (Object.keys(user).length > 0) && (
            <>
                <div
                    className={`grow flex flex-col  transition-transform duration-300 ease-in-out `}
                >
                    {/* Profile background */}
                    <div className="relative h-72 bg-slate-200 dark:bg-gray-900">
                        {
                            (set_coverPic() !== '') && (
                                <img className="object-cover object-center w-full h-full" src={set_coverPic()}  alt="Profile background" />
                            )
                        }

                    </div>

                    {/* Content */}
                    {/* <div className="w-full px-4 py-16 mx-auto sm:px-6 lg:px-8 max-w-9xl"> */}
                    {/* <div className="relative px-4 pb-8 sm:px-6"> */}
                    <div className="relative w-full px-4 py-16 pt-0 mx-auto max-w-7xl sm:px-6 lg:px-8">
                        {/* Pre-header */}
                        <div className="mb-6 -mt-16 sm:mb-3">
                            <div className="flex flex-col items-center sm:flex-row sm:justify-between sm:items-end">
                                {/* Avatar */}
                                <div className="inline-flex mb-4 -mt-1 -ml-1 sm:mb-0">
                                    <img className="border-4 border-white rounded-full dark:border-gray-900" src={set_profilePic()} width="128" height="128" alt="Avatar" />
                                </div>

                                {/* Actions */}
                                <div className="flex space-x-2 sm:mb-2">

                                    {/* <button className="p-1.5 shrink-0 rounded-lg bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700/60 hover:border-gray-300 dark:hover:border-gray-600 shadow-sm">
                <svg className="w-4 h-1 text-gray-400 fill-current" viewBox="0 0 16 4">
                  <circle cx="8" cy="2" r="2" />
                  <circle cx="2" cy="2" r="2" />
                  <circle cx="14" cy="2" r="2" />
                </svg>
              </button> */}

                                    {/*
                                    <button
                                        onClick={emit_like}
                                        className="p-1.5 shrink-0 rounded-lg bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700/60 hover:border-gray-300 dark:hover:border-gray-600 shadow-sm">

                                        <i className='bx bx-heart'></i>
                                    </button>
 */}
                                    {/* <button
                                        onClick={emit_contract}
                                        className="text-gray-100 bg-gray-900 bttn-sm hover:bg-gray-800 dark:bg-gray-100 dark:text-gray-800 dark:hover:bg-white">
                                        <svg className="fill-current shrink-0" width="11" height="8" viewBox="0 0 11 8">
                                            <path d="m.457 4.516.969-.99 2.516 2.481L9.266.702l.985.99-6.309 6.284z" />
                                        </svg>
                                        <span className="ml-2">
                                            Contratar
                                        </span>
                                    </button> */}
                                </div>
                            </div>
                        </div>

                        {/* Header */}
                        <header className="mb-6 text-center sm:text-left">
                            {/* Name */}
                            <div className="inline-flex items-start mb-2">
                                <h1 className="text-2xl font-bold text-gray-800 dark:text-gray-100">
                                    {/* Carolyn McNeail */}
                                    {user.name} {user.last_name || ''}
                                </h1>
                                <svg className="ml-2 text-yellow-500 fill-current shrink-0" width="16" height="16" viewBox="0 0 16 16">
                                    <path d="M13 6a.75.75 0 0 1-.75-.75 1.5 1.5 0 0 0-1.5-1.5.75.75 0 1 1 0-1.5 1.5 1.5 0 0 0 1.5-1.5.75.75 0 1 1 1.5 0 1.5 1.5 0 0 0 1.5 1.5.75.75 0 1 1 0 1.5 1.5 1.5 0 0 0-1.5 1.5A.75.75 0 0 1 13 6ZM6 16a1 1 0 0 1-1-1 4 4 0 0 0-4-4 1 1 0 0 1 0-2 4 4 0 0 0 4-4 1 1 0 1 1 2 0 4 4 0 0 0 4 4 1 1 0 0 1 0 2 4 4 0 0 0-4 4 1 1 0 0 1-1 1Z" />
                                </svg>
                            </div>
                            {/* Bio */}

                            {
                                (profile?.artistic_name != '') && (
                                    <div className="mb-3 text-sm text-slate-400">
                                        Nombre artistico: {profile?.artistic_name}
                                    </div>
                                )
                            }
                            {/* Meta */}
                            <div className="flex flex-wrap justify-center space-x-4 sm:justify-start">
                                {
                                    (user.direction?.city != '' || user.direction.state) && (
                                        <div className="flex items-center">
                                            <svg className="text-gray-400 fill-current shrink-0 dark:text-gray-500" width="16" height="16" viewBox="0 0 16 16">
                                                <path d="M8 8.992a2 2 0 1 1-.002-3.998A2 2 0 0 1 8 8.992Zm-.7 6.694c-.1-.1-4.2-3.696-4.2-3.796C1.7 10.69 1 8.892 1 6.994 1 3.097 4.1 0 8 0s7 3.097 7 6.994c0 1.898-.7 3.697-2.1 4.996-.1.1-4.1 3.696-4.2 3.796-.4.3-1 .3-1.4-.1Zm-2.7-4.995L8 13.688l3.4-2.997c1-1 1.6-2.198 1.6-3.597 0-2.798-2.2-4.996-5-4.996S3 4.196 3 6.994c0 1.399.6 2.698 1.6 3.697 0-.1 0-.1 0 0Z" />
                                            </svg>
                                            <span className="ml-2 text-sm font-medium text-gray-500 whitespace-nowrap dark:text-gray-400">
                                                {user.direction?.city || ''}, {user.direction?.state || ''}
                                            </span>
                                        </div>
                                    )
                                }
                                {
                                    (user.phone != '') && (
                                        <div className="flex items-center">

                                            <i className='text-gray-400 bx bx-mobile-alt ' ></i>
                                            <span className="ml-2 text-sm font-medium whitespace-nowrap text-violet-500 hover:text-violet-600 dark:hover:text-violet-400" >
                                                {/* carolinmcneail.com */}
                                                {user.phone}
                                            </span>
                                        </div>
                                    )
                                }
                            </div>
                        </header>

                        {/* <InfoTabs /> */}

                        {/* Tabs */}
                        <div className="relative mb-6">
                            <div className="absolute bottom-0 w-full h-px bg-gray-200 dark:bg-gray-700/60" aria-hidden="true"></div>
                            <ul className="relative flex -mx-4 overflow-x-scroll text-sm font-medium flex-nowrap sm:-mx-6 lg:-mx-8 no-scrollbar">

                                <li className="mr-6 last:mr-0 first:pl-4 sm:first:pl-6 lg:first:pl-8 last:pr-4 sm:last:pr-6 lg:last:pr-8">
                                    <a className="block pb-3 border-b-2 text-violet-500 whitespace-nowrap border-violet-500" href="#0">
                                        Información
                                    </a>
                                </li>

                                <li className="mr-6 last:mr-0 first:pl-4 sm:first:pl-6 lg:first:pl-8 last:pr-4 sm:last:pr-6 lg:last:pr-8">
                                    <a className="block pb-3 text-gray-500 dark:text-gray-400 hover:text-gray-600 dark:hover:text-gray-300 whitespace-nowrap" href="#0">
                                        Contenido audiovisual
                                    </a>
                                </li>

                                <li className="mr-6 last:mr-0 first:pl-4 sm:first:pl-6 lg:first:pl-8 last:pr-4 sm:last:pr-6 lg:last:pr-8">
                                    <a className="block pb-3 text-gray-500 dark:text-gray-400 hover:text-gray-600 dark:hover:text-gray-300 whitespace-nowrap" href="#0">
                                        Documentación y credenciales
                                    </a>
                                </li>

                            </ul>
                        </div>

                        <div className="flex flex-col xl:flex-row xl:space-x-16">
                            <div className="flex-1 mb-8 space-y-5 xl:mb-0">
                                {
                                    (profile.bio_short && profile.bio_short.length > 0) && (

                                        <div>
                                            <h2 className="mb-2 font-semibold text-gray-800 dark:text-gray-100">
                                                Reseña biografica
                                            </h2>
                                            <div className="space-y-2 text-base">
                                                <p>
                                                    {profile.bio_short}
                                                    {/* {TextLimit_P(profile.bio_short, 500)} */}
                                                </p>
                                            </div>
                                        </div>
                                    )
                                }
                                {/* Departments */}
                                {/* <div>
                                    <h2 className="mb-2 font-semibold text-gray-800 dark:text-gray-100">
                                        Habilidades
                                    </h2>

                                </div> */}

                                {
                                    (meta?.meta_artist) && (

                                        set_Skills()

                                    )}

                            </div>

                            <aside className="space-y-3 xl:min-w-56 xl:w-56">
                                {
                                    (meta?.meta_artist) && (
                                        <div className="space-y-1 text-sm">
                                            <h3 className="font-medium text-gray-800 dark:text-gray-100">Categoría</h3>
                                            <div>
                                                {set_typeArtist()}
                                            </div>
                                        </div>
                                    )
                                }
                                {
                                    (user.direction?.city != '' || user.direction.state) && (
                                        <div className="space-y-1 text-sm">
                                            <h3 className="font-medium text-gray-800 dark:text-gray-100">
                                                Dirección
                                            </h3>
                                            <div>{user.direction?.city || ''}, {user.direction?.state || ''}</div>
                                        </div>

                                    )
                                }
                                <div className="space-y-1 text-sm">
                                    <h3 className="font-medium text-gray-800 dark:text-gray-100">Email</h3>
                                    <div>{auth.email}</div>
                                </div>
                                {
                                    (auth.created_at) && (
                                        <div className="space-y-1 text-sm">
                                            <h3 className="font-medium text-gray-800 dark:text-gray-100">Usuario desde</h3>
                                            <div>
                                                {Transform_dateShort(auth.created_at)}
                                            </div>
                                        </div>
                                    )
                                }
                            </aside>

                        </div>


                    </div>
                </div>

            </>
        )

    )
}


