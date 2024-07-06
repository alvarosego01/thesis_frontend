

import { FC } from 'react'
import { getAssetPath } from '@utils/index';
import { Link, useNavigate } from 'react-router-dom';
import { PrimaryButton, OutlineButton } from '@components/index';

const imagePage = getAssetPath('/images/auth-image.jpg');

const decoration = getAssetPath('/images/auth-decoration.png');


export const CreateContractPage: FC = () => {

    const navigate = useNavigate();


        const _returnButton = () => {

        navigate('/dashboard/contracts');

    }



    return (

        <>
            <div className="relative flex">

                {/* Content */}
                <div className="w-full md:w-1/2">

                    <div className="min-h-[100dvh] h-full flex flex-col after:flex-1">

                        <div className="flex-1">

                            {/* Header */}
                            <div className="flex items-center justify-between h-16 px-4 sm:px-6 lg:px-8">

                                <OutlineButton onClick={_returnButton} label='Retornar a contratos' icon='bx bx-arrow-back' />

                            </div>

                            {/* Progress bar */}
                            <div className="px-4 pt-12 pb-8">
                                <div className="w-full max-w-md mx-auto">
                                    <div className="relative">
                                        <div className="absolute left-0 top-1/2 -mt-px w-full h-0.5 bg-slate-200 dark:bg-slate-700" aria-hidden="true"></div>
                                        <ul className="relative flex justify-between w-full">
                                            <li>
                                                <Link className="flex items-center justify-center w-6 h-6 text-xs font-semibold text-white bg-indigo-500 rounded-full" to="/onboarding-01">1</Link>
                                            </li>
                                            <li>
                                                <Link className="flex items-center justify-center w-6 h-6 text-xs font-semibold rounded-full bg-slate-100 dark:bg-slate-700 text-slate-500 dark:text-slate-400" to="/onboarding-02">2</Link>
                                            </li>
                                            <li>
                                                <Link className="flex items-center justify-center w-6 h-6 text-xs font-semibold rounded-full bg-slate-100 dark:bg-slate-700 text-slate-500 dark:text-slate-400" to="/onboarding-03">3</Link>
                                            </li>
                                            <li>
                                                <Link className="flex items-center justify-center w-6 h-6 text-xs font-semibold rounded-full bg-slate-100 dark:bg-slate-700 text-slate-500 dark:text-slate-400" to="/onboarding-04">4</Link>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="px-4 py-8">
                            <div className="max-w-md mx-auto">

                                <h1 className="mb-6 text-3xl font-bold text-slate-800 dark:text-slate-100">Tell us what’s your situation ✨</h1>
                                {/* Form */}
                                <form>
                                    <div className="mb-8 space-y-3">
                                        <label className="relative block cursor-pointer">
                                            <input type="radio" name="radio-buttons" className="sr-only peer" defaultChecked />
                                            <div className="flex items-center p-4 text-sm font-medium duration-150 ease-in-out bg-white border rounded shadow-sm text-slate-800 dark:text-slate-100 dark:bg-slate-800 border-slate-200 dark:border-slate-700 hover:border-slate-300 dark:hover:border-slate-600">
                                                <svg className="w-6 h-6 mr-4 fill-current shrink-0" viewBox="0 0 24 24">
                                                    <path className="text-indigo-500" d="m12 10.856 9-5-8.514-4.73a1 1 0 0 0-.972 0L3 5.856l9 5Z" />
                                                    <path className="text-indigo-300" d="m11 12.588-9-5V18a1 1 0 0 0 .514.874L11 23.588v-11Z" />
                                                    <path className="text-indigo-200" d="M13 12.588v11l8.486-4.714A1 1 0 0 0 22 18V7.589l-9 4.999Z" />
                                                </svg>
                                                <span>I have a company</span>
                                            </div>
                                            <div className="absolute inset-0 border-2 border-transparent rounded pointer-events-none peer-checked:border-indigo-400 dark:peer-checked:border-indigo-500" aria-hidden="true"></div>
                                        </label>
                                        <label className="relative block cursor-pointer">
                                            <input type="radio" name="radio-buttons" className="sr-only peer" />
                                            <div className="flex items-center p-4 text-sm font-medium duration-150 ease-in-out bg-white border rounded shadow-sm text-slate-800 dark:text-slate-100 dark:bg-slate-800 border-slate-200 dark:border-slate-700 hover:border-slate-300 dark:hover:border-slate-600">
                                                <svg className="w-6 h-6 mr-4 fill-current shrink-0" viewBox="0 0 24 24">
                                                    <path className="text-indigo-500" d="m12 10.856 9-5-8.514-4.73a1 1 0 0 0-.972 0L3 5.856l9 5Z" />
                                                    <path className="text-indigo-300" d="m11 12.588-9-5V18a1 1 0 0 0 .514.874L11 23.588v-11Z" />
                                                </svg>
                                                <span>I’m a freelance / contractor</span>
                                            </div>
                                            <div className="absolute inset-0 border-2 border-transparent rounded pointer-events-none peer-checked:border-indigo-400 dark:peer-checked:border-indigo-500" aria-hidden="true"></div>
                                        </label>
                                        <label className="relative block cursor-pointer">
                                            <input type="radio" name="radio-buttons" className="sr-only peer" />
                                            <div className="flex items-center p-4 text-sm font-medium duration-150 ease-in-out bg-white border rounded shadow-sm text-slate-800 dark:text-slate-100 dark:bg-slate-800 border-slate-200 dark:border-slate-700 hover:border-slate-300 dark:hover:border-slate-600">
                                                <svg className="w-6 h-6 mr-4 fill-current shrink-0" viewBox="0 0 24 24">
                                                    <path className="text-indigo-500" d="m12 10.856 9-5-8.514-4.73a1 1 0 0 0-.972 0L3 5.856l9 5Z" />
                                                </svg>
                                                <span>I’m just getting started</span>
                                            </div>
                                            <div className="absolute inset-0 border-2 border-transparent rounded pointer-events-none peer-checked:border-indigo-400 dark:peer-checked:border-indigo-500" aria-hidden="true"></div>
                                        </label>
                                    </div>
                                    <div className="flex items-center justify-between">

                                        <PrimaryButton className='ml-auto' onClick={() => {}} label='Siguiente' isLoading={false} />

                                    </div>
                                </form>

                            </div>
                        </div>

                    </div>

                </div>

                {/* Image */}
                <div className="absolute top-0 bottom-0 right-0 hidden md:block md:w-1/2" aria-hidden="true">
                    <img className="object-cover object-center w-full h-full" src={imagePage} width="760" height="1024" alt="Onboarding" />
                    <img className="absolute left-0 hidden ml-8 -translate-x-1/2 top-1/4 lg:block" src={decoration} width="218" height="224" alt="Authentication decoration" />
                </div>

            </div>

        </>

    )
}
