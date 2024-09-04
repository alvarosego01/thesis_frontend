

import React, { FC } from 'react'

import { Link } from 'react-router-dom'
import { getAssetPath } from '../../../utils';

const MeetupsThumb01 = getAssetPath('images/meetups-thumb-01.jpg');

const UserImage01 = getAssetPath('images/avatar-01.jpg');

const UserImage04 = getAssetPath('images/avatar-04.jpg');
const UserImage05 = getAssetPath('images/avatar-05.jpg');

export const JobCard: FC = () => {


    return (
        <article className="flex overflow-hidden bg-white shadow-sm dark:bg-gray-800 rounded-xl">
            {/* Image */}
            <Link className="relative block w-24 sm:w-56 xl:sidebar-expanded:w-40 2xl:sidebar-expanded:w-56 shrink-0" to="/community/meetups-post">
                <img
                    className="absolute object-cover object-center w-full h-full"
                    src={MeetupsThumb01}
                    width="220"
                    height="236"
                    alt="Meetup 01"
                />
                {/* Like button */}
                <button className="absolute top-0 right-0 mt-4 mr-4">
                    <div className="text-gray-100 bg-gray-900 rounded-full bg-opacity-60">
                        <span className="sr-only">Like</span>
                        <svg className="w-8 h-8 fill-current" viewBox="0 0 32 32">
                            <path d="M22.682 11.318A4.485 4.485 0 0019.5 10a4.377 4.377 0 00-3.5 1.707A4.383 4.383 0 0012.5 10a4.5 4.5 0 00-3.182 7.682L16 24l6.682-6.318a4.5 4.5 0 000-6.364zm-1.4 4.933L16 21.247l-5.285-5A2.5 2.5 0 0112.5 12c1.437 0 2.312.681 3.5 2.625C17.187 12.681 18.062 12 19.5 12a2.5 2.5 0 011.785 4.251h-.003z" />
                        </svg>
                    </div>
                </button>
            </Link>
            {/* Content */}
            <div className="flex flex-col p-5 grow">
                <div className="grow">
                    <div className="mb-2 text-sm font-semibold uppercase text-violet-500">Mon 27 Dec, 2024</div>
                    <Link className="inline-flex mb-2" to="/community/meetups-post">
                        <h3 className="text-lg font-bold text-gray-800 dark:text-gray-100">Silicon Valley Bootstrapper Breakfast Online for 2024</h3>
                    </Link>
                    <div className="text-sm">
                        Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries for previewing layouts.
                    </div>
                </div>
                {/* Footer */}
                <div className="flex items-center justify-between mt-3">
                    {/* Tag */}
                    <div className="text-xs inline-flex items-center font-medium border border-gray-200 dark:border-gray-700/60 text-gray-600 dark:text-gray-400 rounded-full text-center px-2.5 py-1">
                        <svg className="w-4 h-3 mr-2 fill-gray-400 dark:fill-gray-500" viewBox="0 0 16 12">
                            <path d="m16 2-4 2.4V2a2 2 0 0 0-2-2H2a2 2 0 0 0-2 2v8a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2V7.6l4 2.4V2ZM2 10V2h8v8H2Z" />
                        </svg>
                        <span>Online Event</span>
                    </div>
                    {/* Avatars */}
                    <div className="flex items-center space-x-2">
                        <div className="flex -space-x-3 -ml-0.5">
                            <img
                                className="box-content border-2 border-white rounded-full dark:border-gray-800"
                                src={UserImage01}
                                width="28"
                                height="28"
                                alt="User 01"
                            />
                            <img
                                className="box-content border-2 border-white rounded-full dark:border-gray-800"
                                src={UserImage04}
                                width="28"
                                height="28"
                                alt="User 04"
                            />
                            <img
                                className="box-content border-2 border-white rounded-full dark:border-gray-800"
                                src={UserImage05}
                                width="28"
                                height="28"
                                alt="User 05"
                            />
                        </div>
                        <div className="text-xs italic font-medium text-gray-400 dark:text-gray-500">+22</div>
                    </div>
                </div>
            </div>
        </article>

    )
}
