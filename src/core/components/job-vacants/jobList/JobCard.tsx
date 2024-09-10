

import React, { FC, useEffect, useState } from 'react'

import { Link } from 'react-router-dom'
import { getAssetPath } from '../../../utils';
import { Vacant_I } from '@tesis-project/dev-globals/dist/modules/business/vacants/interfaces';
import { TextLimit_P, Transform_dateShort, transformType_Artists_P } from '../../../pipes';

const MeetupsThumb01 = getAssetPath('images/meetups-thumb-01.jpg');

const UserImage01 = getAssetPath('images/avatar-01.jpg');

const UserImage04 = getAssetPath('images/avatar-04.jpg');
const UserImage05 = getAssetPath('images/avatar-05.jpg');

interface Props_I {
    vacant: Vacant_I
}

export const JobCard: FC<Props_I> = ({
    vacant
}) => {

    const [isMounted, setisMounted] = useState(false);

    const set_dates = () => {

        const operation = vacant.operation;

        return (
            <>
                {Transform_dateShort(operation.start_at)}
                {
                    (operation.start_at != operation.end_at) && (
                        <>
                            -{Transform_dateShort(operation.end_at)}
                        </>
                    )
                }
            </>
        )

    }

    const set_rolesTags = () => {

        return (
            <>
                {
                    (vacant.role_type && vacant.role_type.length > 0) && (
                        vacant.role_type.map((role, index) => (
                            <>
                                {
                                    (index <= 2) && (
                                        <div key={index} className="text-xs inline-flex items-center font-medium border border-gray-200 dark:border-gray-700/60 text-gray-600 dark:text-gray-400 rounded-full text-center px-2.5 py-1 space-x-2">
                                            <i className='bx bxs-music' ></i>
                                            <span>
                                                {
                                                    transformType_Artists_P(role)
                                                }
                                            </span>
                                        </div>
                                    )
                                }
                                {
                                    (index === 3) && (
                                        <div key={index} className="text-xs inline-flex items-center font-medium border border-gray-200 dark:border-gray-700/60 text-gray-600 dark:text-gray-400 rounded-full text-center px-2.5 py-1 space-x-2">
                                            <i className='bx bxs-music' ></i>
                                            <span>Otros</span>
                                        </div>
                                    )
                                }
                            </>
                        ))
                    )

                }
            </>
        )

    }


    useEffect(() => {

        if (isMounted === false) return;

        console.log('vacant', vacant);

    }, [isMounted])

    useEffect(() => {
        setisMounted(true);
    }, []);


    return (
        <article className="flex overflow-hidden bg-white shadow-sm dark:bg-gray-800 rounded-xl">
            {/* Image */}

            <Link className="relative block w-24 sm:w-56 xl:sidebar-expanded:w-40 2xl:sidebar-expanded:w-56 shrink-0" to={`/vacant/${vacant._id}`}>
                {
                    (vacant.vacant_pic) ? (
                        <img
                            className="absolute object-cover object-center w-full h-full"
                            src={vacant.vacant_pic.src}
                            width="220"
                            height="236"
                            alt="Meetup 01"
                        />
                    ) : (
                        <>
                            <div className="flex items-center justify-center w-full h-full m-auto bg-slate-200">
                                <i className='text-6xl text-indigo-500 bx bx-briefcase-alt'></i>
                            </div>
                        </>

                    )
                }
                {/* Like button */}
                {/* <button className="absolute top-0 right-0 mt-4 mr-4">
                    <div className="text-gray-100 bg-gray-900 rounded-full bg-opacity-60">
                        <span className="sr-only">Like</span>
                        <svg className="w-8 h-8 fill-current" viewBox="0 0 32 32">
                            <path d="M22.682 11.318A4.485 4.485 0 0019.5 10a4.377 4.377 0 00-3.5 1.707A4.383 4.383 0 0012.5 10a4.5 4.5 0 00-3.182 7.682L16 24l6.682-6.318a4.5 4.5 0 000-6.364zm-1.4 4.933L16 21.247l-5.285-5A2.5 2.5 0 0112.5 12c1.437 0 2.312.681 3.5 2.625C17.187 12.681 18.062 12 19.5 12a2.5 2.5 0 011.785 4.251h-.003z" />
                        </svg>
                    </div>
                </button> */}
            </Link>
            {/* Content */}
            <div className="flex flex-col p-5 grow">
                <div className="grow">
                    <div className="mb-2 text-xs font-semibold uppercase text-violet-500">
                        {set_dates()}
                    </div>
                    <Link className="inline-flex mb-2" to={`/vacant/${vacant._id}`} >
                        <h3 className="text-xl font-bold text-gray-800 dark:text-gray-100">
                            {
                                vacant.title
                            }
                        </h3>
                    </Link>
                    <div className="text-sm">
                        {
                            TextLimit_P(vacant.desc, 150)
                        }
                    </div>
                </div>
                {/* Footer */}
                <div className="flex items-center justify-between mt-3">
                    {/* Tag */}
                    <div className="flex flex-wrap gap-1 tags">

                        {/* <div className="text-xs inline-flex items-center font-medium border border-gray-200 dark:border-gray-700/60 text-gray-600 dark:text-gray-400 rounded-full text-center px-2.5 py-1 space-x-2">

                            <i className='bx bxs-music' ></i>
                            <span>Online Event</span>
                        </div> */}

                        {
                            set_rolesTags()
                        }

                    </div>
                    {
                        (vacant.postulations && vacant.postulations.length > 0) && (
                            <div className="flex items-center space-x-1">
                                <div className="flex -space-x-3 -ml-0.5">
                                    <i className='text-2xl bx bx-user-plus' ></i>
                                </div>
                                <div className="text-xs italic font-medium text-gray-400 dark:text-gray-500">+{vacant.postulations.length}</div>
                            </div>
                        )
                    }
                </div>
            </div>
        </article>

    )
}

