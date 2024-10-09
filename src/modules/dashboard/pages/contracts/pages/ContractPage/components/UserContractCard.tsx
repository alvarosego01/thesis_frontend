

import { User_I } from '@tesis-project/dev-globals/dist/modules/user/interfaces'
import React, { FC, useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { getAssetPath } from '../../../../../../../core/utils';
import { PrimaryButton } from '../../../../../../../core/components/buttons/PrimaryButton';
import { TextLimit_P } from '../../../../../../../core/pipes';

interface Props_I {
    user: User_I;
}

export const UserContractCard: FC<Props_I> = ({
    user
}) => {


    const navigate = useNavigate();
    const _user = user as any;

    const [isMounted, setisMounted] = useState(false);



    const set_profilePic = (): string => {

        let aux_pic: string = '';
        aux_pic = _user.profile.profile_pic?.src || '';
        if (aux_pic === '') aux_pic = getAssetPath('/images/user_anon.png');
        return aux_pic;

    }

    useEffect(() => {
        setisMounted(true);
    }, []);

    return (
        (_user) && (

            <div className="w-full bg-gray-100 shadow-sm col-span-full dark:bg-gray-800 rounded-xl">
                <div className="flex flex-col h-full space-y-4">
                    {/* Card top */}
                    <div className="p-5 pb-0 grow">
                        <div className="flex items-start justify-between">
                            {/* Image + name */}
                            <header>
                                <div className="flex mb-2">
                                    <div className="flex flex-row items-center gap-5 pr-1 mt-1">
                                        <Link className="relative inline-flex items-start" to={`/user/${_user._id}`}>
                                            <img className="rounded-full" src={set_profilePic()} width="64" height="64" />
                                        </Link>
                                        <Link className="inline-flex text-gray-800 dark:text-gray-100 hover:text-gray-900 dark:hover:text-white" to={`/user/${_user._id}`}>
                                            <h2 className="justify-center text-xl font-semibold leading-snug">
                                                {_user.name} {_user.last_name}
                                            </h2>
                                        </Link>
                                        {/* <div className="flex items-center"><span className="text-sm font-medium text-gray-400 dark:text-gray-500 -mt-0.5 mr-1">-&gt;</span> <span>{props.location}</span></div> */}
                                    </div>
                                </div>
                            </header>
                            {/* Menu button */}
                            {/* <EditMenu align="right" className="relative inline-flex shrink-0">
                            <li>
                                <Link className="flex px-3 py-1 text-sm font-medium text-gray-600 dark:text-gray-300 hover:text-gray-800 dark:hover:text-gray-200" to="#0">Option 1</Link>
                            </li>
                            <li>
                                <Link className="flex px-3 py-1 text-sm font-medium text-gray-600 dark:text-gray-300 hover:text-gray-800 dark:hover:text-gray-200" to="#0">Option 2</Link>
                            </li>
                            <li>
                                <Link className="flex px-3 py-1 text-sm font-medium text-red-500 hover:text-red-600" to="#0">Remove</Link>
                            </li>
                        </EditMenu> */}
                        </div>
                        {/* Bio */}
                        <div className="mt-2">
                            {
                                _user.profile.bio_shor && (
                            <div className="text-sm">
                                {
                                    TextLimit_P(_user.profile.bio_short, 125)
                                }
                            </div>

                                )
                            }
                        </div>
                    </div>
                    {/* Card footer */}
                    <div className="p-5 pt-0 border-gray-100 dark:border-gray-700/60">
                        <div className="flex divide-x divide-gray-100 dark:divide-gray-700/60">

                            {/* <Link className="flex-1 block px-3 py-4 text-sm font-medium text-center text-gray-600 hover:text-gray-800 dark:text-gray-300 dark:hover:text-gray-200 group" to="/settings/account">
                            <div className="flex items-center justify-center">
                                <i className='bx bxs-user-badge'></i>
                                <span>Ver perfil</span>
                            </div>
                        </Link> */}

                            <PrimaryButton className='w-full' label='Ver perfil' onClick={() => {
                                navigate(`/user/${_user._id}`)
                            }} />

                        </div>
                    </div>
                </div>
            </div>

        )

    )
}
