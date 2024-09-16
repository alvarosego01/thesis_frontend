

import { Vacant_I } from '@tesis-project/dev-globals/dist/modules/business/vacants/interfaces'
import React, { FC } from 'react'
import { TransformVacantsHelpers_P } from '../../../../../core/pipes';

interface Props_I {
    services: {
        transport?: Vacant_I['transport_service'];
        housing?: Vacant_I['housing_service'];
        costs?: Vacant_I['vacant_costs'];
    }
}

export const VacantsServices: FC<Props_I> = ({
    services = {
        transport: null,
        housing: null,
        costs: null,
    }
}) => {

    const {
        transport,
        housing,
        costs,
    } = services;

    const name = () => {
        return
    }

    return (
        <div className="grid grid-cols-1 gap-4">
            {
                (transport?.enable) && (
                    <div className="w-full p-4 bg-white border border-gray-200 rounded-lg shadow-sm pcTab:w-8/12 dark:bg-gray-900 dark:border-gray-700/60">
                        {/* Card header */}
                        <div className="flex items-center mb-2 truncate grow">
                            <div className="flex items-center justify-center w-8 h-8 mr-2 rounded-full bg-slate-100 shrink-0">
                                {/* <img className="ml-1" src={Icon03} width="14" height="14" alt="Icon 03" /> */}
                                <i className='bx bx-taxi'></i>
                            </div>
                            <div className="truncate">
                                <span className="text-sm font-medium text-gray-800 dark:text-gray-100">Servicio de transporte</span>
                            </div>
                        </div>
                        {/* Card content */}
                        <div className="mb-3 text-sm">
                            {transport.desc}
                        </div>
                        {/* Card footer */}
                        <div className="flex items-center justify-between">
                            {/* Avatars group */}
                            <div className="flex -space-x-3 -ml-0.5">
                                <span className='block p-1 px-3 text-xs font-semibold rounded-full whitespace-nowrap bg-slate-100 text-slate-500'>
                                    {TransformVacantsHelpers_P(transport.type)}
                                </span>
                            </div>
                            {/* Link */}
                            {/* <div>
                                <a className="text-sm font-medium text-violet-500 hover:text-violet-600 dark:hover:text-violet-400" href="#0">
                                    View -&gt;
                                </a>
                            </div> */}
                        </div>
                    </div>
                )
            }
            {
                (housing?.enable) && (
                    <div className="w-full p-4 bg-white border border-gray-200 rounded-lg shadow-sm pcTab:w-8/12 dark:bg-gray-900 dark:border-gray-700/60">
                        {/* Card header */}
                        <div className="flex items-center mb-2 truncate grow">
                            <div className="flex items-center justify-center w-8 h-8 mr-2 rounded-full bg-slate-100 shrink-0">
                                <i className='bx bx-hotel'></i>
                            </div>
                            <div className="truncate">
                                <span className="text-sm font-medium text-gray-800 dark:text-gray-100">Servicio de hospedaje</span>
                            </div>
                        </div>
                        {/* Card content */}
                        <div className="mb-3 text-sm">
                            {housing.desc}
                        </div>
                        {/* Card footer */}
                        <div className="flex items-center justify-between">
                            {/* Avatars group */}
                            <div className="flex -space-x-3 -ml-0.5">
                                <span className='block p-1 px-3 text-xs font-semibold rounded-full whitespace-nowrap bg-slate-100 text-slate-500'>
                                    {TransformVacantsHelpers_P(housing.type)}
                                </span>
                            </div>
                            {/* Link */}
                            {/* <div>
                                <a className="text-sm font-medium text-violet-500 hover:text-violet-600 dark:hover:text-violet-400" href="#0">
                                    View -&gt;
                                </a>
                            </div> */}
                        </div>
                    </div>
                )
            }
            {
                (costs?.enable) && (
                    <div className="w-full p-4 bg-white border border-gray-200 rounded-lg shadow-sm pcTab:w-8/12 dark:bg-gray-900 dark:border-gray-700/60">
                        {/* Card header */}
                        <div className="flex items-center mb-2 truncate grow">
                            <div className="flex items-center justify-center w-8 h-8 mr-2 rounded-full bg-slate-100 shrink-0">
                                <i className='bx bx-taxi'></i>
                            </div>
                            <div className="truncate">
                                <span className="text-sm font-medium text-gray-800 dark:text-gray-100">Costos viaticos</span>
                            </div>
                        </div>
                        {/* Card content */}
                        <div className="mb-3 text-sm">
                            {costs.desc}
                        </div>
                        {/* Card footer */}
                        <div className="flex items-center justify-between">
                            {/* Avatars group */}
                            <div className="flex -space-x-3 -ml-0.5">
                                <span className='block p-1 px-3 text-xs font-semibold rounded-full whitespace-nowrap bg-slate-100 text-slate-500'>
                                    {costs.total} {TransformVacantsHelpers_P(costs.currency)}
                                </span>
                            </div>
                            {/* Link */}
                            {/* <div>
                                <a className="text-sm font-medium text-violet-500 hover:text-violet-600 dark:hover:text-violet-400" href="#0">
                                    View -&gt;
                                </a>
                            </div> */}
                        </div>
                    </div>
                )
            }

        </div>
    )
}
